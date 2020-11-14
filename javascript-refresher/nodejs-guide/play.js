const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

function summarieUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName +
    ', age is ' + userAge +
    ' and the user has hobbies: ' + userHasHobby;
}

console.log(summarieUser(name, age, hasHobbies));