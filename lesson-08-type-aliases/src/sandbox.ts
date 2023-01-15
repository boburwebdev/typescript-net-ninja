type strOrNum = string | number;
type objUser = { name: string; uuid: strOrNum };

const logDetails = (uid: string | number, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const logDetailsAgain = (uid: strOrNum, item: string) => {
  console.log(`${item} has uid of ${uid}`);
};

const greet = (user: { name: string; uid: string | number }): string => {
  return `${user.name} says hi to you.`;
};

const greetAgain = (user: objUser): string => {
  return `${user.name} says hi to you again.`;
};
