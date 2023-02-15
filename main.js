/**const amount = 9;

if (amount < 10) {
  console.log("small number");
} else {
  console.log("large number");
}
console.log("first node app");





console.log(__dirname);
setInterval(() => {
  console.log("hello");
}, 1000);




const deepa = "deepa";
const sayHi = (name) => {
  console.log(`Hello ${name}`);
};
sayHi(deepa);

const names = require("./4-names");
console.log(names);**/

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./alternative");
require("./mind-grenade");
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
