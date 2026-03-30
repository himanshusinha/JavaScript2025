"use strict";

/* ************************** OBJECTS ************************** */

// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person.firstName, person.lastName, person.age, person.eyeColor);

// Empty object + adding properties
const person1 = {};
person1.firstName = "John";
person1.lastName = "Doe";
person1.age = 15;
person1.eyeColor = "Brown";
console.log(person1.firstName, person1.lastName, person1.age, person1.eyeColor);

// Using new Object()
const person2 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});
console.log(person2.firstName, person2.lastName, person2.age, person2.eyeColor);
console.log(`${person2.firstName} ${person2.lastName} ${person2.age}`);
console.log((person2.age = 23));
console.log(person2);

// Object methods
const person3 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person3.fullName()); // using "this" refers to current object

// Another object example
const myInfo = {
  myName: "Himanshu",
  myWife: "Pooja",
  mySon: "Dakshit",
  getInfo: function () {
    return this.myName + " " + this.myWife + " " + this.mySon;
  },
};
console.log(myInfo.getInfo()); // Call the method with parentheses

// Object iteration
// for...in iterates over object keys
// for...of iterates over iterable values like arrays or strings
for (let key in myInfo) {
  if (typeof myInfo[key] !== "function") {
    console.log(myInfo[key]);
  }
}

// Constructor function
// A constructor is a special function used to create and initialize objects
function Person(firstName, lastName, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
}

const myPerson = new Person("John", "Doe", "johndoe@gmail.com");
console.log(myPerson.firstName);
console.log(myPerson.lastName);
console.log(myPerson.email);

/* ************************** SCOPES ************************** */

// Global Scope
// Variables declared outside any function/block are accessible anywhere
let globalVar = "I am global";
function showGlobal() {
  console.log(globalVar);
}
showGlobal();

// Function Scope
// Variables declared inside a function are accessible only within that function
function myFunc() {
  let funcVar = "I am local to function";
  console.log(funcVar);
}
myFunc();
// console.log(funcVar); // ReferenceError

// Block Scope
// Variables declared with let or const inside {} are block scoped
{
  let blockVar = "I am block scoped";
  console.log(blockVar);
}
// console.log(blockVar); // ReferenceError

/* ************************** HOISTING ************************** */

// var hoisting
console.log(a); // undefined (hoisted but not initialized)
var a = 10;
console.log(a); // 10

// let and const hoisting
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b);
const c = 30;
console.log(c);

// Function declarations hoisting
console.log(sum(2, 3)); // works even before declaration
function sum(x, y) {
  return x + y;
}

// Function expressions hoisting
// console.log(multiply(2, 3)); // TypeError
var multiply = function (x, y) {
  return x * y;
};
console.log(multiply(2, 3));

// Arrow functions hoisting
// console.log(divide(6, 2)); // ReferenceError
const divide = (x, y) => x / y;
console.log(divide(6, 2));

/*
1. var hoisted → undefined until assigned
2. function declarations fully hoisted → callable before or after
3. let & const hoisted → TDZ until declared, else ReferenceError
*/

/* ************************** STRICT MODE ************************** */
// "use strict": helps catch errors during development
// e.g., undeclared variables or invalid assignments
// x = 10; // ReferenceError in strict mode

/* ************************** DATES ************************** */

const today = new Date();
console.log(today.getFullYear()); // year
console.log(today.getMonth()); // month (0-11)
console.log(today.getDate()); // day of month
console.log(today.getDay()); // day of week (0=Sunday)
console.log(today.getHours()); // hours
console.log(today.getMinutes()); // minutes
console.log(today.getSeconds()); // seconds

const d = new Date();
d.setFullYear(2026);
d.setMonth(3); // April (0-based)
d.setDate(30);
console.log(d);

const now = new Date();
console.log(now.getTime()); // milliseconds
console.log(Date.now()); // current timestamp

const nowTime = new Date();
console.log(nowTime.toDateString()); // "Mon Mar 30 2026"
console.log(nowTime.toTimeString()); // "12:34:56 GMT+0530"
console.log(nowTime.toISOString()); // "2026-03-30T07:04:56.789Z"

/* ************************** END ************************** */
