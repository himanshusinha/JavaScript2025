/* 

// Date 29.3.2026

// 1 JavaScript Program to Add Two Numbers

const x = 10;
const y = 20;
const z = x + y;

console.log("Addition of x and y :", z);

// 2 JavaScript Program for Multiplication of Two Numbers

const a = 10;
const b = 20;
const c = a * b;

console.log("Multiplication of a and b :", c);

// 3 JavaScript Program to Add Float Numbers

const h = 10.3;
const p = 20.5;
const d = h + p;

console.log("Addition of h and p :", d);

// 4 JavaScript Program to Check if a Number is Odd or Even

const num = 5;

if (num % 2 === 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// 5 JavaScript Program to Check if a Number is Positive, Negative, or Zero

const checkNum = 5;

if (checkNum > 0) {
  console.log("Number is Positive");
} else if (checkNum < 0) {
  console.log("Number is Negative");
} else if (checkNum === 0) {
  console.log("Number is Zero");
} else {
  console.log("Invalid Number");
}

*/

// Date 30.3.2026

// 1  JavaScript Program to Swap Two Variables

let a = 40;
let b = 30;

console.log(`before swap a= ${a}`);
console.log(`before swap b= ${b}`);

[b, a] = [a, b];

console.log(`after swap a= ${a}`);
console.log(`after swap b= ${b}`);

// 2 JavaScript Program to Find the Square Root

const x = 25;
console.log(`Sqaure root of ${x} :`, Math.sqrt(x));

// 3 JavaScript Program To Print Hello World

console.log("Hello World");

// 4 JavaScript Program to Calculate the Area of a Triangle

let p = 10;
let q = 20;
let r = (1 / 2) * p * q;
console.log(r);

// 5 Javascript Program to Generate a Random Number from 1 to 5

console.log(Math.floor(Math.random() * 5) + 1);
