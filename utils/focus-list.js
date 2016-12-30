var list = require("../list.json");
const fs = require("fs");

var focus = [];

var addtoArr = (i)=>focus.indexOf(i) > -1 ? false : focus.push(i);

list.map(e=>e.focus.forEach((i)=>addtoArr(i)));

fs.writeFile("focuses.json", JSON.stringify(focus), (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log("Focuses written to focuses.json");
});