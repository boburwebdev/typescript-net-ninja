// explicit types
var character;
var age;
var isLoggedIn;
character = "mario";
age = 20;
isLoggedIn = true;
// character = true; results in error;
console.log(character, age, isLoggedIn);
// arrays;
var ninjas = [];
ninjas.push("mario");
ninjas.push("yoshi");
// ninjas.push(20); results in error;
console.log(ninjas);
// union types;
var mixed = [];
mixed.push("luigi");
mixed.push(20);
mixed.push(true);
console.log(mixed);
var userId;
userId = "1234";
console.log("user id: ", userId);
userId = 1234;
console.log("user id: ", userId);
// userId = true; results in error;
// objects
var ninjaOne;
ninjaOne = { name: "mario", beltColour: "black", age: 30 };
console.log("ninja one: ", ninjaOne);
ninjaOne = ["mario", "black belt", 30];
console.log("ninja one: ", ninjaOne);
var ninjaTwo;
ninjaTwo = { name: "luigi", beltColour: "brown", age: 21 };
console.log("ninja two: ", ninjaTwo);
// ninjaTwo = ["luigi", "brown belt", 21]; results in error;
// ninjaTwo = {
//   name: "luigi",
//   beltColour: "brown",
//   age: 21,
//   skills: ["fighting", stealth],
// }; results in error;
