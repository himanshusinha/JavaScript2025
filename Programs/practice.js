/* Date 15.1.2026 */

// // 1 JavaScript Program To Print Hello World
// console.log("Hello World");

// // 2 JavaScript Program to Add Two Numbers
// const a = 20;
// b = 10;
// c = a + b;
// console.log("Addition of a and b is : " + c);

// // 3 JavaScript Program to Find the Square Root
// const num = 25;
// console.log("Square root of num is : " + Math.sqrt(num));

// // 4 JavaScript Program to Calculate the Area of a Triangle
// const d = 20;
// const e = 30;
// const f = (1 / 2) * d * e;
// console.log("Area of triangle is : " + f);

/* Date 16.1.2026 

// 5 JavaScript Program to Swap Three Variables

let a = 10;
let b = 20;
let temp;

temp = a;
a = b;
b = temp;

console.log("Value of a after swapping :", a);
console.log("Value of b after swapping :", b);

// 6 Javascript Program to Generate a Random Number 1 to 6
console.log(Math.trunc(Math.random() * 6) + 1);

// 7 Javascript Program to Check if a number is Positive, Negative, or Zero

const num = "asdsad";

if (num > 0) {
  console.log("Number is positive");
} else if (num < 0) {
  console.log("Number is negative");
} else if (num === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is nor positive , negative and zero");
}

// 8 Javascript Program to Check if a Number is Odd or Even

const number = 3;

if (number % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 9 JavaScript program for multiplication of two numbers
const l = 10;
const m = 20;
const n = l * m;

console.log("Multiplication of two numbers l and m : " + n);

// 10 JavaScript progam for addition of two float numbers
const i = 10.5;
const j = 11.5;
const k = i + j;

console.log("Additon of two float numbers i and j :" + k);

// 11 JavaScript program for print natural numbers

let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;

  console.log(`Addition of first 10 natural numbers ${i} ` + sum);
}
*/
/* Date 17.1.2026 
// 12 Find the greatest of two numbers
const a = 10;
const b = 20;

if (a > b) {
  console.log("A is greater than B");
} else {
}
console.log("B is greater than A");

// 13 Check character is Vowel or consonant
let char = "a";
if (
  char === "a" ||
  char === "e" ||
  char === "i" ||
  char === "o" ||
  char === "u"
) {
  console.log("Character is vowel");
} else {
  console.log("Character is consonant");
}

// 14 Check student is pass or fail
let num = 35;
if (num > 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 15 Check number is divisile by 55 && 11
let n = 55;
if (n % 55 === 0 && n % 11 === 0) {
  console.log("Number is divisible by 55 && 11");
} else {
  console.log("Number is not divisble by 55 && 11");
}

// 16 factorial of number
let numb = 5;
let fact = 1;

for (let i = 1; i <= numb; i++) {
  fact *= i;
  console.log(fact);
}

// 17 Multiplication of table
let mult = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication of ${mult}* ${i} = ${mult * i}`);
}
  */

// Date 18.1.2026
// Sort Words in Alphabetical Order
function sortOrder(str) {
  const str2 = str.split(" ");
  str2.sort();
  // const str3 = str 2.

  for (let i of str2) {
    console.log(i);
  }
}
const str4 = "I want to learn javascript programming";
sortOrder(str4);

// Date 19.1.2026
// Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Value of i :", i);
}
// Print numbers from 5 to 1
for (let j = 5; j >= 1; j--) {
  console.log("Reverse value of j", j);
}
// Number is greater than 100 or not
const num = "-1";
if (num > 100) {
  console.log("Number is greater than 100");
} else {
  console.log("Number is less than 100");
}

// Print even numbers between 1 to 10
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log("Even numbers ", i);
  }
}

// Date 20.1.2026
//Check number is multiple of 5
const numm = 25;
if (numm % 5 === 0) {
  console.log("Number is multiple of 5");
} else {
  console.log("Number is not multiple of 5");
}

// reverse a number
function reverse(num) {
  let sum = "";
  let str = String(num);
  for (let i = str.length - 1; i >= 0; i--) {
    sum += str[i];
  }
  return Number(sum);
}
const numm11 = 12345678;
const resultt = reverse(numm11);
console.log(resultt);

// const numArr = [1, 2, [3, 4], [5, 6]];
const numArr = [1, 2, [3, 4], [5, 6]];
const x = numArr.toString();
const y = x.split(",");
let finalArr = [];
y.map((item) => finalArr.push(parseInt(item)));
console.log(finalArr);
