const name = 'Max';
let age = 29;
const hasHobbies = true;

// age = 30;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//     return ( 'Name is ' + userName +
//     ', age is ' + userAge +
//     ' and the user has hobbies: ' + userHasHobby
//     );
// }

// const add = (a, b) => a + b;

// const addOne = a => a + 1;

// const addRandom = () => 1 + 2;

// console.log(addOne(1));

// console.log(addRandom());

// console.log(summarieUser(name, age, hasHobbies));

const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name);
    }
};

person.greet();