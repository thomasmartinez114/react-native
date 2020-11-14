var name = 'Max';
var age = 29;
var hasHobbies = true;

function summarieUser(userName, userAge, userHasHobby) {
    return 'Name is ' + userName +
    ', age is ' + userAge +
    ' and the user has hobbies: ' + userHasHobby;
}

console.log(summarieUser(name, age, hasHobbies));