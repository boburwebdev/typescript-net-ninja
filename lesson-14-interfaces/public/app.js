const mario = {
    name: "mario",
    age: 20,
    speak(word) {
        console.log(`Hello, my name is ${this.name}. I'm thinking of a ${word}.`);
        return `Hello, my name is ${this.name}`;
    },
    spend(money) {
        return money * 20;
    }
};
mario.speak("car");
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(mario);
export {};
