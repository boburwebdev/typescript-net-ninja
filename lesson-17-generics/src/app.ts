// const addUID = <T>(obj: T) => {
//   const uid = Math.floor(Math.random() * 100);
//   return { ...obj, uid };
// };

// const docOne = addUID({ userName: "mario", age: 20 });
// console.log(docOne);
// console.log(docOne.userName);

const addUID = <T extends { userName: string }>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

const docOne = addUID({ userName: "mario", age: 20 });
console.log(docOne);
console.log(docOne.userName);

interface Resource<T> {
  uid: number;
  username: string;
  data: T;
}

const userOne: Resource<object> = {
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

const userThree: Resource<string> = {
  uid: 102,
  username: "Yoshi",
  data: "admin",
};
console.log(userThree);

const userFour: Resource<string[]> = {
  uid: 103,
  username: "Mario",
  data: ["admin", "subscribed"],
};

console.log(userFour);
