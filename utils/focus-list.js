var list = require("../list.json");

var focus = [];

var addtoArr = (i)=>focus.indexOf(i) > -1 ? false : focus.push(i);

list.map(e=>e.focus.forEach((i)=>addtoArr(i)));

console.log(focus);
