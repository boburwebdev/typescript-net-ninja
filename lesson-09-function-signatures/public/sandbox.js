"use strict";
// let greet: Function;
let greet;
greet = (name, message) => {
    console.log(`${name} says ${message} to you.`);
};
greet("mario", "good morning");
greet = (username, usermessage) => {
    console.log(`${username} says ${usermessage}.`);
};
greet("yoshi", "good day everyone");
// greet = (isHappy: boolean, age: number): void => { console.log(isHappy, age) }; results in error;
greet = (name, message) => {
    return `${name} says ${message}`;
};
let message = greet("shaun", "good time of a day.");
console.log(message);
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else if (action === "subtract") {
        return numOne - numTwo;
    }
    return NaN;
};
const resultOne = calc(10, 5, "add");
const resultTwo = calc(10, 5, "subtract");
const resultThree = calc(10, 5, "divide");
console.log(resultOne, resultTwo, resultThree);
let logDetails;
logDetails = (user) => {
    console.log(`${user.name} is ${user.age} years old.`);
};
logDetails({ name: "mario", age: 24 });
logDetails({ name: "yoshi", age: 18 });
