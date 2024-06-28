"use strict";

let excludeDormant = false;
let excludeArchived = true;
let searchTerms = [];
const taskwarrior2Checkbox = document.getElementById('include-taskwarrior2')
const taskwarrior3Checkbox = document.getElementById('include-taskwarrior3')
const taskserverCheckbox = document.getElementById('include-taskserver')
const excludeDormantCheckbox = document.getElementById('exclude-dormant');
const includeArchivedCheckbox = document.getElementById('include-archived');
const searchResultMessage = document.getElementById('search-result-message');
const SEARCH_WAIT_TIME = 400;
const CHECKB0X_WAIT_TIME = 200;
const LOADING_MESSAGE = "Loading...";
let sortedTools = [];
let owners = new Set();  // owners, languages, categories become arrays.
let languages = new Set();
let categories = new Set();
const selectedLanguages = new Set();
const selectedOwners = new Set();
let selectedCategories = new Set();
let useCategories;


/** Load the tools that are not archived. */
$.getJSON('../tools-data.json', function(toolsData) {
  sortedTools = sortTools(toolsData);
  languages = populateLanguages(sortedTools);
  owners = populateOwners(sortedTools);

  useCategories = sortedTools[0].category !== undefined;
  if (useCategories) {
    categories = populateCategories(sortedTools)
    selectedCategories = new Set(categories);
  }

  populateToolsKeywords(sortedTools);
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
  initFormProcessors();
});


/** Given the tools data, return it sorted by rating and name. */
function sortTools(toolsData) {
  const sortedTools = toolsData.sort((a, b) => {
      if (b.rating === a.rating) {
          return a.name.localeCompare(b.name);
      }
      return b.rating - a.rating;
  });
  return sortedTools;
}


/** Given the tools data, return a sorted array of the languages. */
function populateLanguages(sortedTools) {
  const languages = new Set();
  for (const tool of sortedTools) {
    for (const toolLanguage of tool.language) languages.add(toolLanguage);
  }
  return [...languages].sort((a, b) => a.localeCompare(b));
}


/** Given the tools data, return a sorted array of the owners. */
function populateOwners(sortedTools) {
  const owners = new Set();
  for (const tool of sortedTools) {
    for (const toolOwner of tool.owner) owners.add(toolOwner);
  }
  return [...owners].sort((a, b) => a.localeCompare(b));
}


/** Given the tools data, return a sorted array of the categories. */
function populateCategories(sortedTools) {
  if (!useCategories) return;
  const categories = new Set();
  for (const tool of sortedTools) {
    for (const toolCategory of tool.category) categories.add(toolCategory);
  }
  return [...categories].sort((a, b) => a.localeCompare(b));
}


/**
 * Populate all of the tools in the given sortedTools with keywords.
 * sortedTools[i].keywords is an array of each of the strings in the tool's:
 * - description
 * - license
 * - name
 * - languages
 * - owners
 * - categories
 */
function populateToolsKeywords(tools) {
  for (let i = 0; i < tools.length; i++) {
    let keywords = new Set();
    const pattern = /[\s\-_.,!?]/;
    const descriptionArr = tools[i].description ? tools[i].description.split(pattern) : [];
    const licenseArr = tools[i].license ? tools[i].license.split(pattern) : [];
    const nameArr = tools[i].name ? tools[i].name.split(pattern) : [];

    descriptionArr.map(w => keywords.add(w.toLowerCase()));
    licenseArr.map(w => keywords.add(w.toLowerCase()));
    nameArr.map(w => keywords.add(w.toLowerCase()));

    // Note that owner, language and category are already arrays -- no processing needed.
    tools[i].owner.map(w => keywords.add(w.toLowerCase()));
    tools[i].language.map(w => keywords.add(w.toLowerCase()));
    if (useCategories) tools[i].category.map(w => keywords.add(w.toLowerCase()));

    tools[i]['keywords'] = keywords;
  }
}


/**
 * Given toolsData and sets of languages and owners, populate the DOM's tools table.
 * If languages is empty, use all languages.
 * If owners is empty, use all owners.
 */
function fillToolsTable(tools, selectedLanguages, selectedOwners) {
    $('#tools-table').empty();
    let numMatchingTools = 0;
    for (let tool of tools) {
        const languageMatch = tool.language.some(lang => selectedLanguages.has(lang));
        const ownerMatch = tool.owner.some(o => selectedOwners.has(o));
        let categoryMatch;
        if (useCategories) {
          categoryMatch = tool.category.some(c => selectedCategories.has(c));
        } else {
          categoryMatch = true;
        }

        if (
          (selectedLanguages.size === 0 || languageMatch)
          && (selectedOwners.size === 0 || ownerMatch)
          && categoryMatch
          && (!excludeDormant || !tool.dormant)
          && (!excludeArchived || !tool.archived)
          && (searchMatch(searchTerms, tool.keywords))
        ) {
            numMatchingTools++;
            $('#tools-table').append(makeTableRow(tool));
        }
    }
    updateSearchResultMessage(numMatchingTools)
}


/** If searchTerm is in keywords (even as a partial match), return true. */
function searchMatch(searchTerm, keywords) {
  return searchTerm.every(t => keywords.has(t));
}


/** Given a tool, return the HTML string to represent it in the tools table. */
function makeTableRow(tool) {
  let includesTW2, includesTW3, includesTS;
  if (useCategories) {
    includesTW2 = tool.category.includes('taskwarrior2');
    includesTW3 = tool.category.includes('taskwarrior3');
    includesTS = tool.category.includes('taskserver');
  }
  return (
    `<tr>
      <td>
        <p>
          <strong>
            <a title="Project" href="${tool.url}">${tool.name}</a></strong>&ensp;` +
          `<span style="display: ${includesTW2 ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-2-circle-fill">&thinsp;</em>
            <span class="tooltip-text">Project is intended for Taskwarrior 2</span>
          </span>` +
          `<span style="display: ${includesTW3 ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-3-circle-fill">&thinsp;</em>
            <span class="tooltip-text">Project is intended for Taskwarrior 3</span>
          </span>` +
          `<span style="display: ${includesTS ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-database-fill">&thinsp;</em>
            <span class="tooltip-text">Project is intended for Taskserver</span>
          </span>` +
          `<span style="display: ${tool.dormant ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-moon-stars">&thinsp;</em>
            <span class="tooltip-text">Project is dormant</span>
          </span>
          <span style="display: ${tool.archived ? 'visible' : 'none'};" class="tooltip">
            <em class="bi bi-archive">&thinsp;</em>
            <span class="tooltip-text">project has been archived</span>
          </span><br>
          <span style="display: ${tool.owner.length > 0 ? 'visible' : 'none'};">
            <small>
              by <em title="Owners">${tool.owner.join(', ')}</em>
            </small>
          </span>
        </p>
        <p>
          <span>Rating:
            <span title="Rating">${tool.rating}</span>&ensp;<em class="bi bi-star"></em>
          </span>
        </p>
      </td>
      <td>
        <p title="Description">${tool.description ? tool.description : ''}</p>
        <p>
        <small>
          <span style="display: ${tool.language.length > 0 ? 'visible' : 'none'};">
            Language${tool.language.length > 1 ? 's' : ''}:
            <span title="Language">${tool.language.join(', ')}</span>
          </span><br>
          Last update: <span title="Last update">${tool.updated}</span>
        </small>
        </p>
      </td>
      <td>
        <p title="License">${tool.license ? tool.license : ''}</p>
      </td>
    </tr>`
  )
}


/** Debounce helper function to filter at the right moment, improving UX. */
function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}


/** Update the search result message on the DOM. */
function updateSearchResultMessage(numTools) {
  let message;
  if (numTools === 1) {
    message = `There is 1 tool/extension matching your search:`;
    searchResultMessage.innerHTML = message;
  } else {
    message = `There are ${numTools} tools/extensions matching your search:`;
    searchResultMessage.innerHTML = message;
  }
}


/** Initialize the form processors. */
function initFormProcessors() {
  // Form handlers
  search.addEventListener('keyup', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleSearch(e);
  });
  excludeDormantCheckbox.addEventListener('click', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleDormantCheckbox(e);
  });
  includeArchivedCheckbox.addEventListener('click', (e) => {
    searchResultMessage.innerHTML = LOADING_MESSAGE;
    debouncedHandleArchivedCheckbox(e);
  });
  if (useCategories) {
    const categoryFilters = document.getElementsByClassName('search-filter');
    Array.from(categoryFilters).forEach(f => f.style.display = 'block');
    taskwarrior2Checkbox.addEventListener('click', (e) => {
      searchResultMessage.innerHTML = LOADING_MESSAGE;
      debouncedHandleCategoryCheckbox(e);
    });
    taskwarrior3Checkbox.addEventListener('click', (e) => {
      searchResultMessage.innerHTML = LOADING_MESSAGE;
      debouncedHandleCategoryCheckbox(e);
    });
    taskserverCheckbox.addEventListener('click', (e) => {
      searchResultMessage.innerHTML = LOADING_MESSAGE;
      debouncedHandleCategoryCheckbox(e);
    });
  }

  // Init multiselect components
  const multiselectElLanguages = document.getElementById('js-multiselect-languages');
  const multiselectComponentLanguages =
    new Multiselect(multiselectElLanguages, languages, 'languages');
  multiselectComponentLanguages.init();

  const multiselectElOwners = document.getElementById('js-multiselect-owners');
  const multiselectComponentOwners =
    new Multiselect(multiselectElOwners, owners, 'owners');
  multiselectComponentOwners.init();
}


/** When the archived checkbox is clicked, refill the tools table. */
function handleArchivedCheckbox() {
  excludeArchived = !excludeArchived;
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}
const debouncedHandleArchivedCheckbox = debounce((e) => {
  handleArchivedCheckbox(e);
}, CHECKB0X_WAIT_TIME);


/** When the dormant checkbox is clicked, refill the tools table. */
function handleDormantCheckbox() {
  excludeDormant = !excludeDormant;
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}
const debouncedHandleDormantCheckbox = debounce((e) => {
  handleDormantCheckbox(e);
}, CHECKB0X_WAIT_TIME);

/** When a category checkbox is clicked, toggle that category. */
function handleCategoryCheckbox(e) {
  const categoryStrIdx = e.target.id.indexOf('-');
  const category = e.target.id.slice(categoryStrIdx + 1);
  if (selectedCategories.has(category)) {
    selectedCategories.delete(category);
  } else {
    selectedCategories.add(category);
  }
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners)
}
const debouncedHandleCategoryCheckbox = debounce((e) => {
  handleCategoryCheckbox(e);
}, CHECKB0X_WAIT_TIME);


/** On search, refill the tools table. */
function handleSearch(e) {
  searchTerms = e.target.value.toLowerCase().trim().split(' ');
  if (searchTerms.length === 1 && searchTerms[0] === '') searchTerms = [];
  fillToolsTable(sortedTools, selectedLanguages, selectedOwners);
}
const debouncedHandleSearch = debounce((e) => {
  handleSearch(e);
}, SEARCH_WAIT_TIME);
