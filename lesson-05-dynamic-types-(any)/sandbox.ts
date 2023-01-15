let age: any = 24;
console.log("age is a number: ", age);
age = "twenty four";
console.log("age is a string: ", age);
age = true;
console.log("age is a boolean: ", age);
age = { value: 24 };
console.log("age is an object: ", age);

let mixedArr: any[] = [];
mixedArr.push("mario");
console.log(mixedArr);
mixedArr.push(23);
console.log(mixedArr);
mixedArr.push(true);
console.log(mixedArr);
mixedArr.push({ name: "luigi", hasBlackBelt: false });
console.log(mixedArr);

let ninja: { name: any; hasBlackBelt: any; age: any };
ninja = {
  name: "yoshi",
  hasBlackBelt: true,
  age: 24,
};
console.log(ninja);
ninja = {
  name: 300,
  hasBlackBelt: "false",
  age: "thirty",
};
console.log(ninja);
