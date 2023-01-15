"use strict";
let sayHello = (name) => {
    console.log(`hello ${name}`);
};
sayHello("mario");
sayHello = (name) => {
    return "hello " + name;
};
let message = sayHello("luigi");
console.log(message);
// sayHello = "hello yoshi"; results in error;
let greet;
// greet = "Good morning"; results in error;
greet = () => "good morning";
console.log(greet());
const add = (a, b, c) => {
    console.log(a + b);
    console.log("c: ", c);
};
console.log("add results: ");
add(3, 4);
add(5, 6, 7);
add(8, 9, "hello");
const subtract = (a = 10, b = 5, c) => {
    console.log(a - b);
    console.log("c: ", c);
};
console.log("subtract results: ");
subtract();
subtract(100, 50, 35);
subtract(100, 50, "Hello");
// optional parameters has to be at the end of parameter list
// optional values can be passed by either "?" or "=" (only one can be used at a time)
const sum = (a, b) => {
    return a + b;
};
let sumResult = sum(2, 4);
console.log(sumResult);
sumResult = 9;
console.log(sumResult);
// sumResult = "six"; results in error;
