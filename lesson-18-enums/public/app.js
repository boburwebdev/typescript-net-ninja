"use strict";
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUIDOBOOK"] = 1] = "AUIDOBOOK";
    ResourceType[ResourceType["EBOOK"] = 2] = "EBOOK";
    ResourceType[ResourceType["MOVIE"] = 3] = "MOVIE";
    ResourceType[ResourceType["SONG"] = 4] = "SONG";
    ResourceType[ResourceType["MUSIC"] = 5] = "MUSIC";
})(ResourceType || (ResourceType = {}));
const userOne = {
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
const userThree = {
    uid: 102,
    username: "Yoshi",
    userResource: ResourceType.MOVIE,
    data: "admin",
};
console.log(userThree);
const userFour = {
    uid: 103,
    username: "Mario",
    userResource: ResourceType.EBOOK,
    data: ["admin", "subscribed"],
};
console.log(userFour);
