let sayHello = (name: string) => {
  console.log(`hello ${name}`);
};
sayHello("mario");
sayHello = (name: string) => {
  return "hello " + name;
};
let message = sayHello("luigi");
console.log(message);
// sayHello = "hello yoshi"; results in error;

let greet: Function;

// greet = "Good morning"; results in error;

greet = () => "good morning";
console.log(greet());

const add = (a: number, b: number, c?: number | string): void => {
  console.log(a + b);
  console.log("c: ", c);
};

console.log("add results: ");
add(3, 4);
add(5, 6, 7);
add(8, 9, "hello");

const subtract = (a: number = 10, b: number = 5, c?: string | number) => {
  console.log(a - b);
  console.log("c: ", c);
};

console.log("subtract results: ");
subtract();
subtract(100, 50, 35);
subtract(100, 50, "Hello");

// optional parameters has to be at the end of parameter list
// optional values can be passed by either "?" or "=" (only one can be used at a time)

const sum = (a: number, b: number): number => {
  return a + b;
};

let sumResult = sum(2, 4);
console.log(sumResult);
sumResult = 9;
console.log(sumResult);
// sumResult = "six"; results in error;
