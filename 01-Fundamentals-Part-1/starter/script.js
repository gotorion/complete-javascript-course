// console.log("Hello World");
// alert("Hello friend");
let person = "John";
console.log(person);
console.log(typeof person);
let _function = 28;
let num = 10.000;
console.log(_function);
console.log(typeof $function);
console.log(typeof num); // no float ?
// console.log(typeof function);
let active = true;
console.log(active);
console.log(typeof active);

// var const let
var age = 30;
age = 31;
let year = 2023;
year = 2024;
const day = 10;
// day = 20; error

console.log("hello " + person + ", you are " + age + " years old.");
console.log(`hello ${person}, you are ${age} years old.`);

let x = -3;
if (x >= 5) {
    console.log("x is greater than or equal to 5");
} else {
    console.log("x is less than 5");
}

// type conversion
let inputYear = '2023';
console.log(Number(inputYear));
console.log(typeof Number(inputYear));
console.log(typeof NaN)
let num1 = 10.003;
let num2 = 10;
console.log(`sum = ${num1 + num2}`);

let n = '1' + 1;
console.log(typeof n);
// boolean
console.log(Boolean(9))
console.log(Boolean(undefined))
console.log(Boolean({}))
console.log(Boolean(''))
console.log(Boolean(' '))
let height = 0
if (height) {
    console.log("Height is defined")
} else {
    console.log("Height not defined")
}

