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


const birthYear = 1990;
let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// Type Conversion(explicit)->manually by developer and Type Coersion (implicit) automatically by javascript
// Type Conversion(explicit)
const inputYear = "1991";
console.log(typeof inputYear, inputYear);
console.log(Number(inputYear) + 10);

console.log(Number("Jonas"));
console.log(typeof NaN);
console.log(String(23), 23);

// Type Coersion (implicit)
console.log("I'am '+ 23 + years old'");
console.log("23" - "10" - 3);
console.log("23" + 2);

let n = "1" + 1; // 11
n = n - 1; // 11 - 1 = 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 95
console.log("10" - "4" - "3" - 2 + "5"); // 15

// Truthy Falsy Values

// 5 Falsy value 0 null undefined '' NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spent it all :)");
} else {
  console.log("You should get a job");
}

let height = 0;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("Height is UNDEFINED");
}

// Equality Operators == vs ===

const age = "18";
// === check both type and value
if (age === 18) console.log("You just became an adult :D (strict)");

// == check only value and convert type automatically
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number"));

console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not in 7 ,9 and 23");
}

if (favourite !== 23) console.log("Why not 23!");

// != only check value not type
// !== check both value and type
// 23 !== 23        // false (value same, type same)
// "23" !== 23      // true (type different)
// 10 !== 20        // true (value different)


// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // both true then true
console.log(hasDriversLicense || hasGoodVision); // if one is false then false // if all true then true
console.log(!hasDriversLicense); // reverse condition

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive");
// } else {
//   console.log("Someone else should drive");
// }
const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired); // if one is false then false

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive");
}

// switch statement
const day = "monday";
switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😄");
    break;

  default:
    console.log("Not a valid day!");
}

// if else
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😄");
} else {
  console.log("Not a valid day!");
}


// statement vs expression

// expression Expressions An expression is any unit of code that can be evaluated to a single value.
3 + 4;
1991;
true && false && !false;

// statement Statements A statement is an instruction to the JavaScript engine to perform a specific action
if (23 > 10) {
  const str = "23 is bigger";
}
const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);
 */

// Ternary operators
const age = 15;
const drink = age > 18 ? "wine 🍷" : "water 💧";

let drink2;
if (age > 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
