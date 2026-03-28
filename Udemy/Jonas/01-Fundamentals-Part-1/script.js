/* 


// Value: A value is the actual data stored inside a variable.

// Variable: A variable is a container used to store data in a program.

let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matlida = "JM";
let $function = 27;
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

// Data types
let javascriptIsFun = false;
console.log(typeof javascriptIsFun);

javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(typeof year);
console.log(typeof null);


// let const var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;


//Arithmetic operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2 ** 3);
const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x+10 x = 25
x *= 4; // x = x*4 x = 100
x--; // x = x-1 // 99
console.log(x);
x++; // x = x+1 //100
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah);
console.log(ageJonas >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991, now - 2020);


// Operators Precedenes
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = ageJonas + ageSarah / 2;
console.log(ageJonas, ageSarah, averageAge);


// Template string

const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas =
  " I'm " +
  firstName +
  " a " +
  (year - birthYear) +
  " years old " +
  job +
  " ! ";

console.log(jonas);

const newJonas = `I'm ${firstName} a ${year - birthYear} years old ${job} ! 
`;
console.log(newJonas);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
line",
);

console.log(`String with
multiple
line`);
 */

const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
