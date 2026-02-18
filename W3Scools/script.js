//"use strict" is a directive in JavaScript that enables strict mode, which enforces stricter parsing and error handling to prevent unsafe coding practices.

"use strict";
// x = 3.14;

// sayCalc();

// function sayCalc(y) {
//   y = 3.15;
// }
/*  
// Statements
const age = 15;

if (age > 18) {
  console.log("You are eligible for voting");
} else {
  console.log("You are not eligible");
}

let score = 75;

if (score >= 90) {
  console.log("Grade A+");
} else if (score >= 80) {
  console.log("Grade A");
} else if (score >= 80) {
  console.log("Grade B");
} else if (score >= 70) {
  console.log("Grade C");
} else {
  console.log("");
}

const num = 10;

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else if (num === 0) {
  console.log("Number is zero");
}

const a = 10;
const b = 20;

if (a > b) {
  console.log("A is greater");
} else {
  console.log("B is greater");
}

const c = 20;
const d = 30;
const e = 40;

if (c >= d && c >= e) {
  console.log("Greater number is c", c);
} else if (d >= c && d >= e) {
  console.log("Greater number is d", d);
} else {
  console.log("Greater number is e", e);
}

const salary = Number(prompt("Please enter your salary"));

if (salary < 500000) {
  console.log("Low income");
} else if (salary >= 500000 && salary <= 1000000) {
  console.log("Middle income");
} else if (salary > 1000000) {
  console.log("High income");
} else {
  console.log("Salary is not valid");
}


// switch statement
const day = "Monday";

switch (day) {
  case "Sunday":
    console.log("Sunday");
    break;
  case "Monday":
    console.log("Monday");
    break;
  case "Tuesday":
    console.log("Tuesday");
    break;
  case "Wednesday":
    console.log("Wednesday");
    break;
  case "Thursday":
    console.log("Thursday");
    break;
  case "Friday":
    console.log("Friday");
    break;
  case "Saturday":
    console.log("Saturday");
    break;
  default:
    console.log("Invalid input");
}

const age = 15;
console.log(age > 18 ? "eligible for vote" : "not eligible");

const username = "Himanshu";
const password = "123456";

if (username && password) {
  console.log("Login successfull");
} else {
  console.log("Invalid login");
}

let day2 = "Sunday";

if (day2 === "Saturday" || day2 === "Sunday") {
  console.log("Weekend");
} else {
  console.log("Weekday");
}

let isStudent = true;
let isSeniorCitizen = false;

if (isStudent || isSeniorCitizen) {
  console.log("Discount Available");
} else {
  console.log("Discount not available");
}

// Nullish Collession if left hand side value is undefined or null it will return right side value

let firstName = null;
console.log(firstName ?? "Himanshu");

let myVal = null;
let myText = "HEllo";
console.log(myVal ?? myText);

const driversAge = 20;
const hasDriversLicense = true;

if (driversAge > 18 && !hasDriversLicense) console.log("Eligible for driving"); // both true return true
if (driversAge > 18 || !hasDriversLicense) console.log("Eligible for driving"); // if one is false then return true

// Loops
// for loop Used when the number of iterations is known.
// while loop execute a block of code as long as a specified condition is true
// do while Executes the code at least once, then repeats while the condition is true.
// for of Used to iterate over values of iterable objects like arrays and strings.
// for in Used to iterate over the keys (properties) of an object.
// break Stops the loop immediately and exits it.
// continue  Skips the current iteration and moves to the next one.
const num = 10;
for (let i = 0; i <= num; i++) {
  console.log("Value of i ", i);
}

let i = 1;
while (i <= 10) {
  console.log("Value of i in while loop", i);
  i++;
}
let j = 1;
do {
  console.log("Value of j", j);
  j++;
} while (j <= 10);

// for of
const values = [10, 20, 30, 40, 50];
for (let v of values) {
  console.log(v);
}
// for of
const str = "Himanshu";
for (let i of str) {
  console.log(i);
}

// for in
const valuess = {
  firstName: "Himanshu",
  lastName: "Sinha",
  age: 35,
};
for (let i in valuess) {
  console.log(i, valuess[i]);
}

const myInfo = {
  myName: "Himanshu",
  mySon: "Dakshit",
  myWife: "Pooja",
  age: 35,
};

for (let i in myInfo) {
  console.log(i, myInfo[i]);
}

// break
for (let i = 0; i <= 10; i++) {
  if (i === 3) {
    break;
  }
  console.log("break", i);
}
// break
for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log("continue", i);
}

// Strings
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
console.log(answer1 + " " + answer2);

console.log(answer1.length);

let text = 'We are the so-called "Vikings" from the north.';
console.log(text);

// Strings Templates
let text2 = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text2);

const myFirstName = "Himanshu";
const myAge = 35;
console.log(`My name is ${myFirstName} my age is ${myAge}`);

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);


// get length of string
let str = "Himanshu";
console.log(str.length);
// Returns total number of characters (8)

// convert to upper case
console.log(str.toUpperCase());
// Converts all characters to uppercase

// convert to lower case
console.log(str.toLocaleLowerCase());
// Converts all characters to lowercase (locale-aware version)

// trim remove spaces from start and end
let str2 = "  hello  ";
console.log(str2.trim());
// Removes extra spaces from beginning and end

// extract part of string using slice(start, end)
// end index is NOT included
let str3 = "JavaScript";
console.log(str3.slice(0, 4));
// Extracts from index 0 to 3 → "Java"

// substring(start, end)
// similar to slice but does not support negative index
let str4 = "Developer";
console.log(str4.substring(0, 4));
// Extracts from index 0 to 3 → "Deve"

// replace old value with new value (replaces first match)
let str5 = "I love Java";
console.log(str5.replace("Java", "React"));
// Replaces "Java" with "React"

// split string into array based on separator
let str6 = "a,b,c";
console.log(str6.split(","));
// Splits string at comma → ["a", "b", "c"]

// check if substring exists (returns true/false)
let str7 = "React Native";
console.log(str7.includes("React"));
// Checks if "React" is present

// find index position of character
// returns -1 if not found
let str8 = "Himanshu";
console.log(str8.indexOf("m"));
// Returns index of first "m"

// check starting and ending characters
let str9 = "JavaScript";
console.log(str9.startsWith("Java"));
// Returns true if string starts with "Java"

console.log(str9.endsWith("Script"));
// Returns true if string ends with "Script"

// get character at specific index
let str10 = "Hello";
console.log(str10.charAt(4));
// Returns character at index 4 → "o"

// concatenate (join) two strings
let str11 = "hello";
let str12 = "himanshu";

console.log(str11.concat(" ", str12));
// Combines both strings with space → "hello himanshu"

// Numbers
// Convert string to number using Number()
const num = "123";
console.log(typeof Number(num));
// Converts string to number → output type: "number"

// Convert string to integer using parseInt()
const num2 = "122";
console.log(typeof parseInt(num2));
// Converts string to integer → output type: "number"

// Convert string with decimal to float using parseFloat()
console.log(typeof parseFloat("123.45"));
// Converts string to decimal number → output type: "number"

// toFixed(n) rounds number to n decimal places
// IMPORTANT: returns a STRING
let price = 10.456;
console.log(typeof price.toFixed(2));
// Output: "string" (value would be "10.46")

// isNaN() checks if value is NOT a number
// It first converts the value before checking
const num3 = "123";
if (isNaN(num3)) {
  console.log("Not a number");
} else {
  console.log("Number");
}
// "123" gets converted to number → so result: "Number"

// Check if number is integer
console.log(Number.isInteger(10));
// true (whole number)

console.log(Number.isInteger(10.5));
// false (decimal number)

// Math.round() rounds to nearest integer
console.log(Math.round(4.6));
// 5

// Math.floor() rounds DOWN
console.log(Math.floor(4.9));
// 4

// Math.ceil() rounds UP
console.log(Math.ceil(4.1));
// 5

// Math.random() generates random number between 0 and 1
console.log(Math.random());

// Generate random number between 1 to 10
console.log(Math.trunc(Math.random() * 10) + 1);
// Math.random() * 10 → 0 to 9.999
// Math.trunc removes decimal part
// +1 shifts range to 1–10

// Find maximum value
console.log(Math.max(10, 20, 30));
// 30

// Find minimum value
console.log(Math.min(10, 20, 30));
// 10


// Functions

function sayHello() {
  console.log("JavaScript");
}
sayHello();

// return value
function hello() {
  return "Say Hello";
}

let getValue = hello();
console.log(getValue);

// function as parameter
// parameters actual value
// arguements are place holder

function add(a, b) {
  return a + b;
}
const result = add(2, 4);
console.log(result);

// placeholder parameters
function myFunc(name) {
  return name;
}
myFunc("Himanshu"); // actual value arguements

/* 
Function call hone par arguments (2, 3) 
parameters (a, b) me assign ho jaate hain.
Phir a*b calculate hota hai.
return us result ko function ke bahar bhej deta hai.
Wo value res variable me store ho jaati hai.


// function declaration
function multiply(a, b) {
  return a * b;
}
const res = multiply(2, 3);
console.log(res);

// function expression
const show = function (name) {
  return name;
};

const r = show("Himanshu");
console.log(r);

const age1 = function (birthYear) {
  return 2037 - birthYear;
};

const r2 = age1(1991);
console.log(r2);

// Arrow function introduced in es6 short hand version of function expression
const add2 = (a, b) => a + b;
console.log(add2(2, 3));

// Objects
// Create an Object
const person = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});

console.log(
  person.firstName +
    " " +
    person.lastName +
    " " +
    person.age +
    " " +
    person.eyeColor,
);

console.log(person["eyeColor"]);

const person2 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person2.fullName());

// this is a keyword in JavaScript that refers to the object that is currently executing the function. It allows a function to access the properties and methods of the object that calls it.
const myUser = {
  myName: "Himanshu",
  sonName: "Dakshit",
  wifeName: "Pooja",

  getInfo: function () {
    return this.myName + " " + this.sonName + " " + this.wifeName;
  },
};

console.log(myUser.getInfo());
console.log(myUser["myName"]);
for (let i in myUser) {
  if (typeof myUser[i] !== "function") {
    console.log(i, myUser[i]);
  }
}

// Create an Object
const personInfo = {
  name: "John",
  age: 30,
  city: "New York",
};

// Object.values()
// Returns an array of only the values of the object
console.log(Object.values(personInfo));
// Output: ["John", 30, "New York"]

// Object.entries()
// Converts the object into an array of key-value pairs
// Each pair is stored as a two-element array
console.log(Object.entries(personInfo));


Output:
[
  ["name", "John"],
  ["age", 30],
  ["city", "New York"]
]


// JSON.stringify()
// Converts a JavaScript object into a JSON string
const converted = JSON.stringify(personInfo);
console.log(converted);
// Output: '{"name":"John","age":30,"city":"New York"}'

// JSON.parse()
// Converts a JSON string back into a JavaScript object
console.log(JSON.parse(converted));
// Output: { name: "John", age: 30, city: "New York" }

// Object as constructor
// Object as a constructor is a special function that is used to create and initialise object with the same structure
function User(name, age) {
  this.name = name;
  this.age = age;
}

const user1 = new User("John", 30);
const user2 = new User("Mike", 25);

console.log(user1);
console.log(user2);

function PersonInfo2(name, age, mobile) {
  this.name = name;
  this.age = age;
  this.mobile = mobile;
}

const personInfo2 = new PersonInfo2("John", 35, 9343663473);
console.log(personInfo2.name);
console.log(personInfo2.age);
console.log(personInfo2.mobile);

function developerInfo(name, tackstack) {
  this.name = name;
  this.tackstack = tackstack;
}
const devInfo1 = new developerInfo("John", "ReactNative");
const devInfo2 = new developerInfo("Mark", "ReactJs");
const devInfo3 = new developerInfo("Peter", "NextJS");

console.log(devInfo1.name);
console.log(devInfo2.name);
console.log(devInfo3.name);
 
// Scopes

// global scopes
const x = 10;

const y = 20;

// Global Scope
const globalVar = "I am global";

function test() {
  console.log(globalVar);
}

test();

function greetName() {
  const firstName = "John";
  console.log(firstName);
}
greetName();
// console.log(firstName);

if (true) {
  const blockVar = "Inside Block";
  console.log(blockVar);
}
// console.log(blockVar);


// Hoisting
// Hoisting means JavaScript moves declarations to the top of their scope before execution. Only declarations are hoisted, not initialization.
var a;
console.log(a);
a = 10;

// console.log(b);
// let b = 20;

// declaration
sayHello();

//initialization
function sayHello() {
  console.log("Hello");
}
*/
// Dates

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());

// let myCreatedDate = new Date(2026, 0, 12);
// console.log(myCreatedDate.toDateString());
