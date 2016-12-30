// Clean up the list of conferences by reordering by start date and removing those with a
// end date in the past

var list = require("../list.json");
var clean = [];
const fs = require("fs");

list = list.sort(function(a,b) {
    var dateA = (new Date());
    dateA.setDate(a.dates.from.day);
    dateA.setMonth(a.dates.from.month);
    dateA.setFullYear(a.dates.from.year);
    dateA = dateA.getTime();
    var dateB = (new Date());
    dateB.setDate(b.dates.from.day);
    dateB.setMonth(b.dates.from.month);
    dateB.setFullYear(b.dates.from.year);
    dateB = dateB.getTime();

    return (dateA > dateB) ? 1 : -1;
});

var now = (new Date()).getTime();

list.map(function(e) {
    var confEnd = new Date();
    confEnd.setDate(e.dates.to.day);
    confEnd.setMonth(e.dates.to.month);
    confEnd.setFullYear(e.dates.to.year);
    confEnd = confEnd.getTime();

    if (confEnd < now) {
        return;
    }

    clean.push(e);
});

fs.writeFileSync("list-clean.json", JSON.stringify(clean));

console.log("New list has " + clean.length + " conferences");