// let greet: Function;

let greet: (paramOne: string, paramTwo: string) => void;
greet = (name, message) => {
  console.log(`${name} says ${message} to you.`);
};
greet("mario", "good morning");

greet = (username: string, usermessage: string): void => {
  console.log(`${username} says ${usermessage}.`);
};
greet("yoshi", "good day everyone");

// greet = (isHappy: boolean, age: number): void => { console.log(isHappy, age) }; results in error;

greet = (name: string, message: string) => {
  return `${name} says ${message}`;
};
let message = greet("shaun", "good time of a day.");
console.log(message);

let calc: (a: number, b: number, c: string) => number;
calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else if (action === "subtract") {
    return numOne - numTwo;
  }
  return NaN;
};

const resultOne = calc(10, 5, "add");
const resultTwo = calc(10, 5, "subtract");
const resultThree = calc(10, 5, "divide");
console.log(resultOne, resultTwo, resultThree);

let logDetails: (obj: { name: string; age: number }) => void;
type person = { name: string; age: number };
logDetails = (user: person) => {
  console.log(`${user.name} is ${user.age} years old.`);
};
logDetails({ name: "mario", age: 24 });
logDetails({ name: "yoshi", age: 18 });
