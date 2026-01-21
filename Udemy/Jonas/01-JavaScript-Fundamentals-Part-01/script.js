/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN !!!!");
js = "boring";
if (js === "amazing") alert("JavaScript is FUN !!!!");
40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

// Values
console.log("Jonas");
console.log(23);

// Variables
let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

let person = "Jonas";
let PI = 3.1415;


// Data Types
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof true);
console.log(typeof "Jonas");
console.log(typeof 23);

javaScriptIsFun = "YES!";
console.log(typeof javaScriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(typeof null);

// var let and const
// var example functional or global scope
var x = 10;
var x = 20; // Redeclaration allowed
x = 30; // Update allowed
console.log(x); // Output : 30

// let example block scope
let y = 10;
// ley y = 20 // Redeclaration not allowed
y = 25; // Update allowed
console.log(y); //  Output : 25

// const example block scope
const z = 10;
// z = 20 // Reassignment not allowed
console.log(z); // Output : 10

if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // works for a functional/global scope
// console.log(b); // Error (let is blocked scope)
// console.log(c); // Error (const is blocked scope)

// Mutable ka matlab: original value ko directly change karna
// Immutable ka matlab: original value ko change na karna, balki naya copy banana

// Mutable example
let age = 30;
age = 31;

let year;
year = 1991;

// Immutable example
let obj = { x: 10 };

// new copy bana rahe hain
let newObj = { ...obj, y: 20 };

console.log(newObj.x); // 10 (original value preserved)
console.log(newObj.y); // 20 (new value)

const birthYear = 1991;
// birthYear = 1990;

// const job;
var job = "Programmer";
bod = "Teacher";


// Operators
const now = 2037;
let ageJonas = now - 1991;
let ageSarah = now - 2018;
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2**3 = 2*2*2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5; // x = 15
x += 10; // x = 10+15 x = 25
x *= 4; // x = 25*4 x = 100
x++; //x = x+1 // 101
x--; // 101 -1 = 100
x--; // 100-1
console.log(x);

// Comparison Operators > < >= <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
console.log((x = y = 25 - 10 - 5));

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


// Strings and template literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1990;
const year = 2037;

const jonas =
  "I" + " am " + firstName + " a " + (year - birthYear) + " old " + job;
console.log(jonas);

const newJonas = `I am ${firstName} a ${year - birthYear} old ${job}`;
console.log(newJonas);

console.log(`Just a regula string ....`);

console.log(
  "String with \n\
multiples \n\
lines",
);

console.log(`String with
multiples
lines`);



const age = 15;
if (age >= 18) {
  console.log("Sarah can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young.Wait another ${yearsLeft} years`);
}

const birthYear = 2011;
let century;
if (birthYear >= 2000) {
  century = 20;
} else {
  century = 19;
}
console.log("Century is :", century);


// Type Conversion and Type Coersion
// Type Conversion explicit manually conversion
let s = "123";
let n = Number(s);
console.log(typeof n);

// Type Coersion implicit by javascript automatically

let t = 5;
let u = "5";
let r = t + u;
console.log(r);
console.log(typeof r);

const inputYear = "1991";
console.log(typeof Number(inputYear), typeof inputYear);
console.log(Number(inputYear) + 18);

// type coersion
console.log(`I'm a ${23} year old `);
console.log("23" - "10" - 3);
console.log("24" * "3");


let n = "1" + 1; // 11
n = n - 1; // 11 -1
console.log(n); // n = 10

// Truthy and falsy values
// 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;

if (money) {
  console.log("Don't spend it all");
} else {
  console.log("You should get a job");
}

let height = 0;

if (height) {
  console.log("height is defined");
} else {
  console.log("height is undefined");
}

// Equality Opeartors
const age = 19;

if (age === 18) {
  console.log("You just became an adult :D (strict)");
}

if (age == 18) {
  console.log("You just became an adult :D (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));

if (favourite === 23) {
  console.log("23 is favourite number");
} else if (favourite === 7) {
  console.log("7 is another cool number");
} else if (favourite === 9) {
  console.log("9 is also cool number");
} else {
  console.log("Number is not in 23,7 and 9");
}

if (favourite !== 23) console.log("Why not 23!");

if (23 !== 23) {
  console.log("false");
} else if ("23" !== 23) {
  console.log("true");
}


// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision); // true && false = false
console.log(hasDriversLicense || hasGoodVision); // true && false = false
console.log(!hasDriversLicense);

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive");
} else {
  console.log("Someone else should drive ...");
}
console.log(hasDriversLicense && hasGoodVision && isTired); // true && false && true = false


// Switch statement
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursay") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day");
}


// Statement and Expressions
// Expressions produces values
3 + 5;
a > b;
true && false;
("Hello");
5 * 2;
// we use variables to store expressions value
const a = 3 * 5;
console.log(a);

// Statement performs actions
let age = 19;
if (age >= 18) {
  console.log("You are eligible for voting");
} else {
  console.log("You are not eligible for vote");
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);


// Ternary Operators
const drink = age >= 18 ? "Wine 🍷" : "Drink 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "Wine 🍷";
} else {
  drink2 = "Drink 💧";
}
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
 */
