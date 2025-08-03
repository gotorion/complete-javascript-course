'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('this is a log entry')
}
// logger();
// logger();
// logger();
for (let i = 0; i < 3; ++i) {
    logger();
}
function printMsg(message) {
    console.log(message);
}
const printMsg2 = function (message) {
    console.log(message);
}
const printMsg3 = (message) => {
    console.log(message);
}
printMsg('Hello World');
printMsg2('Hello World');
printMsg3('Hello World');

function add(a, b) {
    return a + b;
}
const handle = function(f, a, b) {
    return f(a, b);
}
console.log(handle(add, 2, 3));

// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
const years = new Array(1991, 1984, 2008, 2020);
console.log(years[years.length - 1]);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

friends.push('Jay');
console.log(friends);
friends.unshift('John');
console.log(friends);
friends.pop(); // remove last element
console.log(friends);
friends.shift(); // remove first element
console.log(friends);
console.log(friends.indexOf('Steven'));
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonass = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],

  printFriends: function() {
    console.log(`My friends are: ${this.friends.join(', ')}`);
  }
};

console.log(jonass.lastName);
console.log(jonass['lastName']);
jonass.printFriends();


