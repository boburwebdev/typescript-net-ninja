const namesArr = ["mario", "luigi"];

namesArr.push("yoshi");
namesArr[2] = "kyoshi";
console.log(namesArr);
// namesArr.push(20); results in error: namesArr array must consist of the same data type ("string" in this example);
// namesArr[0] = 30; results in error: namesArr array must consist of the same data type ("string" in this example);

const numbersArr = [10, 20, 30, 40];
numbersArr.push(50);
numbersArr[0] = 15;
console.log(numbersArr);
// numbersArr.push("shaun"); results in error;
// numbersArr[0] = "shaun"; results in error;

const mixedArr = [10, "mario", 20, "shaun", "yoshi", 30, 40, 50, "luigi"];
mixedArr.push("kyoshi");
mixedArr[0] = "linda";
mixedArr[1] = 14;
console.log(mixedArr);
// it is possible to mix values if the initial array consists of different data types;
// new values must have one of the data types that the initial array already has;
// adding "boolean", "null", "undefined" to mixedArr results in error;

let ninja = {
  name: "mario",
  beltColour: "black",
  age: 32,
};
console.log(ninja);

ninja.name = "luigi";
ninja.beltColour = "brown";
ninja.age = 28;
console.log(ninja);

// ninja.age = "30"; results in error; has the be the same type as the initial value (in this case "number" instead of "string");
// ninja.skills = ["fighting", "sneaking"]; results in error; can't add new property to existing objects;

ninja = {
  name: "yoshi",
  beltColour: "white",
  age: 14,
};
console.log(ninja);

// ninja = {
//   name: "linda",
//   beltColour: "brown",
// }; resuts in error: modified object must have the exact number of properties as the initial one (property types also have to match);
