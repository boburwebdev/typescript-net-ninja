let character = "mario";
let age = 20;
let isBlackBelt = false;

// character = 20; results in error;
character = "luigi";

// age = "yoshi"; results in error;
age = 21;

// isBlackBelt = "no"; results in error;
isBlackBelt = true;

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(5));

const sum = (a: number, b: number) => {
  return a + b;
};

console.log(sum(10, 20));

const multiply = (a: number, b: number) => {
  return a * b;
};

console.log(multiply(3, 4));

function sayHi(name: string) {
  console.log(`Hi ${name}`);
}

sayHi("Luigi");
