/*
 * We use KnockOutJS to filter the tools and extensions table.
 */

function Tool(data) {
    this.description = data.description;
    this.language = data.language;
    this.license = data.license;
    this.name = data.name;
    this.obsolete = data.obsolete;
    this.owner = data.owner;
    this.rating = data.rating === undefined ? 1 : data.rating;
    this.updated = data.updated;
    this.url = data.url;
}

function compare(left, right) {
    if (left === right) {
        return 0;
    }
    return left < right ? -1 : 1;
}

function has_intersection(array, test) {
    return (array.length === 0)
        || array.some(function (elem) {
            return test.includes(elem)
        });
}

function unique() {
    return (value, index, array) => array.indexOf(value) === index;
}

// Overall view model for this screen, along with initial state
function ToolsViewModel() {
    let self = this;

    self.tools = ko.observableArray();
    self.languages = ko.observableArray();
    self.owners = ko.observableArray();

    // Load tools from server, convert to Tools instances, then populate the data for templates
    // This data is static.
    $.getJSON("/tools-data.json", function(allData) {
        let mappedTools = allData.map(item => new Tool(item));

        self.languages(mappedTools.flatMap(item => item.language).filter(unique()).sort())
        self.owners(mappedTools.flatMap(item => item.owner).filter(unique()).sort())

        self.tools(mappedTools);
        self.tools.sort((left, right) => compare(left.name, right.name));
    });

    self.ObsoleteSelected = ko.observable(false);

    // The Language selector
    self.LanguagesSelected = ko.observableArray();
    self.selectedAllLanguages = ko.pureComputed({
        read: function () {
            console.log("Read ... Filter: " + self.LanguagesSelected.slice(0));
            return self.LanguagesSelected().length === self.languages().length;
        },
        write: function (value) {
            self.LanguagesSelected(value ? self.languages.slice(0) : []);
        }
    });

    // The Owner selector (huge list...)
    self.OwnersSelected = ko.observableArray();
    self.selectedAllOwners = ko.pureComputed({
        read: function () {
            console.log("Read ... Filter: " + self.OwnersSelected.slice(0));
            return self.OwnersSelected().length === self.owners().length;
        },
        write: function (value) {
            self.OwnersSelected(value ? self.owners.slice(0) : []);
        }
    });

    // The search field
    self.query = ko.observable('');

    // The printed tool list
    self.filteredTools = ko.computed(
        function() {
            const sort_by_rating_and_name = function (left, right) { return compare(right.rating, left.rating) || compare(left.name.toLowerCase(), right.name.toLowerCase()) };
            return self.tools().filter(
                function (tool) {
                    const isLanguageIn = has_intersection(self.LanguagesSelected(), tool.language);
                    const isOwnerIn = has_intersection(self.OwnersSelected(), tool.owner);
                    const isQuery = (self.query().length === 0)
                            || (tool.name && tool.name.toLowerCase().indexOf(self.query().toLowerCase()) > -1)
                            || (tool.description && tool.description.toLowerCase().indexOf(self.query().toLowerCase()) > -1)
                            || (tool.license && tool.license.toLowerCase().indexOf( self.query().toLowerCase() ) > -1)
                            || (tool.owner && tool.owner.join().toLowerCase().indexOf( self.query().toLowerCase() ) > -1);
                    return (!tool.obsolete || self.ObsoleteSelected()) && isLanguageIn && isOwnerIn && isQuery;
                } ).sort(sort_by_rating_and_name);
        }
    );
}

ko.options.deferUpdates = true;
ko.applyBindings(new ToolsViewModel());
