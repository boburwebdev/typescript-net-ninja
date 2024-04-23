enum ResourceType {
  BOOK,
  AUIDOBOOK,
  EBOOK,
  MOVIE,
  SONG,
  MUSIC,
}

interface Resource<T> {
  uid: number;
  username: string;
  userResource: ResourceType;
  data: T;
}

const userOne: Resource<object> = {
  uid: 100,
  username: "Mario",
  userResource: ResourceType.AUIDOBOOK,
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
//   userResource: ResourceType.AUIDOBOOK,
//   data: "admin",
// };
// console.log(userTwo);

const userThree: Resource<string> = {
  uid: 102,
  username: "Yoshi",
  userResource: ResourceType.MOVIE,
  data: "admin",
};
console.log(userThree);

const userFour: Resource<string[]> = {
  uid: 103,
  username: "Mario",
  userResource: ResourceType.EBOOK,
  data: ["admin", "subscribed"],
};

console.log(userFour);
