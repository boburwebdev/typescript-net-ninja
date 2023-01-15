// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

character = "mario";
age = 20;
isLoggedIn = true;

// character = true; results in error;
console.log(character, age, isLoggedIn);

// arrays;
let ninjas: string[] = [];
ninjas.push("mario");
ninjas.push("yoshi");
// ninjas.push(20); results in error;
console.log(ninjas);

// union types;
let mixed: (string | number | boolean)[] = [];
mixed.push("luigi");
mixed.push(20);
mixed.push(true);
console.log(mixed);

let userId: string | number;
userId = "1234";
console.log("user id: ", userId);
userId = 1234;
console.log("user id: ", userId);
// userId = true; results in error;

// objects
let ninjaOne: object;
ninjaOne = { name: "mario", beltColour: "black", age: 30 };
console.log("ninja one: ", ninjaOne);
ninjaOne = ["mario", "black belt", 30];
console.log("ninja one: ", ninjaOne);

let ninjaTwo: {
  name: string;
  beltColour: string;
  age: number;
};

ninjaTwo = { name: "luigi", beltColour: "brown", age: 21 };
console.log("ninja two: ", ninjaTwo);

// ninjaTwo = ["luigi", "brown belt", 21]; results in error;

// ninjaTwo = {
//   name: "luigi",
//   beltColour: "brown",
//   age: 21,
//   skills: ["fighting", stealth],
// }; results in error;
