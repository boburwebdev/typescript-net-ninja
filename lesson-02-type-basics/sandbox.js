var character = "mario";
var age = 20;
var isBlackBelt = false;
// character = 20; results in error;
character = "luigi";
// age = "yoshi"; results in error;
age = 21;
// isBlackBelt = "no"; results in error;
isBlackBelt = true;
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(5));
var sum = function (a, b) {
    return a + b;
};
console.log(sum(10, 20));
var multiply = function (a, b) {
    return a * b;
};
console.log(multiply(3, 4));
function sayHi(name) {
    console.log("Hi ".concat(name));
}
sayHi("Luigi");
