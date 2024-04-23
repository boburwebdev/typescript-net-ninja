import Invoice from "./classes/Invoice.js";

interface IPerson {
  name: string;
  age: number;
  speak: (a: string) => void;
  spend: (a: number) => number;
}

const mario: IPerson = {
  name: "mario",
  age: 20,
  speak(word) {
    console.log(`Hello, my name is ${this.name}. I'm thinking of a ${word}.`);
    return `Hello, my name is ${this.name}`;
  },
  spend(money) {
    return money * 20
  }
}

mario.speak("car");

const greetPerson = (person: IPerson): void => {
  console.log("hello ", person.name);
}

greetPerson(mario);