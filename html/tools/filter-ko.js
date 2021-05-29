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

// Overall view model for this screen, along with initial state
function ToolsViewModel() {
    let self = this;

    self.tools = ko.observableArray([]);
    self.languages = ko.observableArray([]);
    self.owners = ko.observableArray([]);

    // Load tools from server, convert to Tools instances, then populate the data for templates
    // This data is static.
    $.getJSON("tools-data.json", function(allData) {
        let mappedTools = $.map(allData, function(item) { return new Tool(item) });

        let uniqueLanguage = {};
        let uniqueOwner = {};

        for(let i in mappedTools ){
            for (let j in mappedTools[i].language) {
                if (typeof(uniqueLanguage[mappedTools[i].language[j]]) == "undefined") {
                    self.languages.push(mappedTools[i].language[j]);
                }
                uniqueLanguage[mappedTools[i].language[j]] = 0;
            }
            for (let j in mappedTools[i].owner) {
                if (typeof(uniqueOwner[mappedTools[i].owner[j]]) == "undefined") {
                    self.owners.push(mappedTools[i].owner[j]);
                }
                uniqueOwner[mappedTools[i].owner[j]] = 0;
            }
        }

        self.tools(mappedTools);
        self.tools.sort(function (left, right) { return left.name === right.name ? 0 : (left.name < right.name ? -1 : 1) });
        self.owners.sort();
    });

    self.ObsoleteSelected = ko.observable(false);

    // The Language selector
    self.LanguagesSelected = ko.observableArray([]);
    self.selectedAllLanguages = ko.pureComputed({
        read: function () {
            console.log("Read ... Filter: " + self.LanguagesSelected.slice(0));
            return self.LanguagesSelected().length === self.languages().length;
        },
        write: function (value) {
            self.LanguagesSelected(value ? self.languages.slice(0) : []);
        }
    });

    // The Owner selector  (huge list...)
    self.OwnersSelected = ko.observableArray([]);
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

    // The printed tool list:
    self.filteredTools = ko.computed(
        function() {
            const sort_by_name = function (left, right) { return left.name === right.name ? 0 : (left.name.toLowerCase() < right.name.toLowerCase() ? -1 : 1) };
            const sort_by_rating = function (left, right) { return left.rating === right.rating  ? sort_by_name(left,right) : (left.rating > right.rating ? -1 : 1) };
            return self.tools().filter(
                function (tool) {
                    const isLanguageIn = (self.LanguagesSelected().length === 0) ||  self.LanguagesSelected().some(function (elem) { return tool.language.includes(elem)} );
                    const isOwnerIn = (self.OwnersSelected().length === 0) ||  self.OwnersSelected().some(function (elem) { return tool.owner.includes(elem)} );
                    const isQuery = (self.query().length === 0)
                            || (tool.name && tool.name.toLowerCase().indexOf(self.query().toLowerCase()) > -1)
                            || (tool.description && tool.description.toLowerCase().indexOf(self.query().toLowerCase()) > -1)
                            || (tool.license && tool.license.toLowerCase().indexOf( self.query().toLowerCase() ) > -1)
                            || (tool.owner && tool.owner.join().toLowerCase().indexOf( self.query().toLowerCase() ) > -1);
                    return (!tool.obsolete || self.ObsoleteSelected()) && isLanguageIn && isOwnerIn && isQuery;
                } ).sort(sort_by_rating);
        }
    );
}

ko.options.deferUpdates = true;
ko.applyBindings(new ToolsViewModel());
