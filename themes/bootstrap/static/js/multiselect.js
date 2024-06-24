/**
 * Multiselect component adapted from WebDevTrick.
 * https://webdevtrick.com/html-combobox-with-javascript/
 */

"use strict";

const Keys = {
  Backspace: 'Backspace',
  Clear: 'Clear',
  Down: 'ArrowDown',
  End: 'End',
  Enter: 'Enter',
  Escape: 'Escape',
  Home: 'Home',
  Left: 'ArrowLeft',
  PageDown: 'PageDown',
  PageUp: 'PageUp',
  Right: 'ArrowRight',
  Space: ' ',
  Tab: 'Tab',
  Up: 'ArrowUp' };


const MenuActions = {
  Close: 0,
  CloseSelect: 1,
  First: 2,
  Last: 3,
  Next: 4,
  Open: 5,
  Previous: 6,
  Select: 7,
  Space: 8,
  Type: 9 };


/**
 * Filter an array of options against an input string.
 * Returns an array of options that begin with the filter string, case-independent.
 */
function filterOptions(options = [], filter, exclude = []) {
  return options.filter(option => {
    const matches = option.toLowerCase().indexOf(filter.toLowerCase()) === 0;
    return matches && exclude.indexOf(option) < 0;
  });
}


/** Return an array of exact option name matches from a comma-separated string. */
function findMatches(options, search) {
  const names = search.split(',');
  return names.map(name => {
    const match = options.filter(option => name.trim().toLowerCase() === option.toLowerCase());
    return match.length > 0 ? match[0] : null;
  }).
  filter(option => option !== null);
}


/** Return combobox action from key press. */
function getActionFromKey(event, menuOpen) {
  const { key, altKey, ctrlKey, metaKey } = event;
  // Handle opening when closed.
  if (!menuOpen && (key === Keys.Down || key === Keys.Enter || key === Keys.Space)) {
    return MenuActions.Open;
  }

  // Handle keys when open.
  if (key === Keys.Down) {
    return MenuActions.Next;
  } else
  if (key === Keys.Up) {
    return MenuActions.Previous;
  } else
  if (key === Keys.Home) {
    return MenuActions.First;
  } else
  if (key === Keys.End) {
    return MenuActions.Last;
  } else
  if (key === Keys.Escape) {
    return MenuActions.Close;
  } else
  if (key === Keys.Enter) {
    return MenuActions.CloseSelect;
  } else
  if (key === Keys.Space) {
    return MenuActions.Space;
  } else
  if (key === Keys.Backspace || key === Keys.Clear || key.length === 1 && !altKey && !ctrlKey && !metaKey) {
    return MenuActions.Type;
  }
}


/** Get index of option that matches a string. */
function getIndexByLetter(options, filter) {
  const firstMatch = filterOptions(options, filter)[0];
  return firstMatch ? options.indexOf(firstMatch) : -1;
}


/** Get updated option index. */
function getUpdatedIndex(current, max, action) {
  switch (action) {
    case MenuActions.First:
      return 0;
    case MenuActions.Last:
      return max;
    case MenuActions.Previous:
      return Math.max(0, current - 1);
    case MenuActions.Next:
      return Math.min(max, current + 1);
    default:
      return current;}
}


/** Check if an element is currently scrollable. */
function isScrollable(element) {
  return element && element.clientHeight < element.scrollHeight;
}


/** Ensure given child element is within the parent's visible scroll area. */
function maintainScrollVisibility(activeElement, scrollParent) {
  const { offsetHeight, offsetTop } = activeElement;
  const { offsetHeight: parentOffsetHeight, scrollTop } = scrollParent;

  const isAbove = offsetTop < scrollTop;
  const isBelow = offsetTop + offsetHeight > scrollTop + parentOffsetHeight;

  if (isAbove) {
    scrollParent.scrollTo(0, offsetTop);
  } else
  if (isBelow) {
    scrollParent.scrollTo(0, offsetTop - parentOffsetHeight + offsetHeight);
  }
}


/**
 * Represents a multiselect component.
 *
 * Manages a list of options with filtering and selection capabilities.
 * Supports keyboard navigation and interaction.
 */
class Multiselect {
  constructor(el, options, descriptor) {
    // Element refs
    this.el = el;
    this.inputEl = el.querySelector('input');
    this.listboxEl = el.querySelector('[role=listbox]');

    this.idBase = this.inputEl.id;
    this.selectedEl = document.getElementById(`${this.idBase}-selected`);

    // Data
    this.options = options;
    this.descriptor = descriptor;

    // State
    this.activeIndex = 0;
    this.open = false;
  }

  /** Initializes event listeners and renders options in the listbox. */
  init() {
    this.inputEl.addEventListener('input', this.onInput.bind(this));
    this.inputEl.addEventListener('blur', this.onInputBlur.bind(this));
    this.inputEl.addEventListener('click', () => this.updateMenuState(true));
    this.inputEl.addEventListener('keydown', this.onInputKeyDown.bind(this));
    this.listboxEl.addEventListener('blur', this.onInputBlur.bind(this));

    this.options.map((option, index) => {
      const optionEl = document.createElement('div');
      optionEl.setAttribute('role', 'option');
      optionEl.id = `${this.idBase}-${index}`;
      optionEl.className = index === 0 ? 'combo-option option-current' : 'combo-option';
      optionEl.setAttribute('aria-selected', 'false');
      optionEl.innerText = option;

      optionEl.addEventListener('click', () => { this.onOptionClick(index); });
      optionEl.addEventListener('mousedown', this.onOptionMouseDown.bind(this));

      this.listboxEl.appendChild(optionEl);
    });
  }

  onInput() {
    const curValue = this.inputEl.value;
    const matches = filterOptions(this.options, curValue);

    // Set activeIndex to first matching option.
    // (Or leave it alone, if the active option is already in the matching set.)
    const filterCurrentOption = matches.filter(option => option === this.options[this.activeIndex]);
    if (matches.length > 0 && !filterCurrentOption.length) {
      this.onOptionChange(this.options.indexOf(matches[0]));
    }

    const menuState = this.options.length > 0;
    if (this.open !== menuState) {
      this.updateMenuState(menuState, false);
    }
  }

  onInputKeyDown(event) {
    const max = this.options.length - 1;

    const action = getActionFromKey(event, this.open);

    switch (action) {
      case MenuActions.Next:
      case MenuActions.Last:
      case MenuActions.First:
      case MenuActions.Previous:
        event.preventDefault();
        return this.onOptionChange(getUpdatedIndex(this.activeIndex, max, action));
      case MenuActions.CloseSelect:
        event.preventDefault();
        return this.updateOption(this.activeIndex);
      case MenuActions.Close:
        event.preventDefault();
        return this.updateMenuState(false);
      case MenuActions.Open:
        return this.updateMenuState(true);
    }
  }

  onInputBlur() {
    if (this.ignoreBlur) {
      this.ignoreBlur = false;
      return;
    }

    if (this.open) {
      this.updateMenuState(false, false);
    }
  }

  onOptionChange(index) {
    this.activeIndex = index;
    this.inputEl.setAttribute('aria-activedescendant', `${this.idBase}-${index}`);

    // Update active style.
    const options = this.el.querySelectorAll('[role=option]');
    [...options].forEach(optionEl => {
      optionEl.classList.remove('option-current');
    });
    options[index].classList.add('option-current');

    if (this.open && isScrollable(this.listboxEl)) {
      maintainScrollVisibility(options[index], this.listboxEl);
    }
  }

  onOptionClick(index) {
    this.onOptionChange(index);
    this.updateOption(index);
    this.inputEl.focus();
  }

  onOptionMouseDown() {
    this.ignoreBlur = true;
  }

  removeOption(index) {
    const option = this.options[index];

    // Update aria-selected.
    const options = this.el.querySelectorAll('[role=option]');
    options[index].setAttribute('aria-selected', 'false');
    options[index].classList.remove('option-selected');
    if (this.descriptor === 'languages') {
      selectedLanguages.delete(this.options[index]);
    }
    if (this.descriptor === 'owners') {
      selectedOwners.delete(this.options[index]);
    }
    fillToolsTable(sortedTools, selectedLanguages, selectedOwners);

    // Remove button.
    const buttonEl = document.getElementById(`${this.idBase}-remove-${index}`);
    this.selectedEl.removeChild(buttonEl.parentElement);
  }

  selectOption(index) {
    const selected = this.options[index];
    this.activeIndex = index;

    // Update aria-selected.
    const options = this.el.querySelectorAll('[role=option]');
    options[index].setAttribute('aria-selected', 'true');
    options[index].classList.add('option-selected');
    if (this.descriptor === 'languages') {
      selectedLanguages.add(this.options[index]);
    }
    if (this.descriptor === 'owners') {
      selectedOwners.add(this.options[index]);
    }
    fillToolsTable(sortedTools, selectedLanguages, selectedOwners);

    // Add `remove option` button.
    const buttonEl = document.createElement('button');
    const listItem = document.createElement('li');
    buttonEl.className = 'remove-option';
    buttonEl.type = 'button';
    buttonEl.id = `${this.idBase}-remove-${index}`;
    buttonEl.setAttribute('aria-describedby', `${this.idBase}-remove`);
    buttonEl.addEventListener('click', () => { this.removeOption(index); });
    buttonEl.innerHTML = selected + ' ';

    listItem.appendChild(buttonEl);
    this.selectedEl.appendChild(listItem);
  }

  updateOption(index) {
    const option = this.options[index];
    const optionEl = this.el.querySelectorAll('[role=option]')[index];
    const isSelected = optionEl.getAttribute('aria-selected') === 'true';

    if (isSelected) {
      this.removeOption(index);
    }

    else {
      this.selectOption(index);
    }

    this.inputEl.value = '';
  }

  updateMenuState(open, callFocus = true) {
    this.open = open;

    this.inputEl.setAttribute('aria-expanded', `${open}`);
    open ? this.el.classList.add('open') : this.el.classList.remove('open');
    callFocus && this.inputEl.focus();
  }
}
