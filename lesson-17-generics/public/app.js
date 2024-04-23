"use strict";
// const addUID = <T>(obj: T) => {
//   const uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };
// const docOne = addUID({ userName: "mario", age: 20 });
// console.log(docOne);
// console.log(docOne.userName);
const addUID = (obj) => {
    const uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ userName: "mario", age: 20 });
console.log(docOne);
console.log(docOne.userName);
const userOne = {
    uid: 100,
    username: "Mario",
    data: {
        isAdmin: false,
        isSubscribed: true,
    },
};
console.log(userOne);
// error - data must be an object
// const userTwo: Resource<object> = {
//   uid: 101,
//   username: "Luigi",
//   data: "admin",
// };
// console.log(userTwo);
const userThree = {
    uid: 102,
    username: "Yoshi",
    data: "admin",
};
console.log(userThree);
const userFour = {
    uid: 103,
    username: "Mario",
    data: ["admin", "subscribed"],
};
console.log(userFour);
