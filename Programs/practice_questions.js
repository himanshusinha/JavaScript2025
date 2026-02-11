// 10.2.2026

// 1 print hello world
console.log("Hello World");

// 2 Add two numbers
const a = 10;
const b = 20;
const result = a + b;
console.log("Sum of a and b is :", result);

// 3 Check number is even or odd
const num = 5;

if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// 4 Find largest of two numbers
const x = 20;
const y = 30;

if (x > y) {
  console.log("x is greater");
} else {
  console.log("y is greater");
}

// 5 print number from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 11.2.2026

// 1 Square root of number

const number = 25;
console.log(Math.sqrt(number));

// 2 Swap two number
let num1 = 10;
let num2 = 20;
let temp;

// temp = num1;
// num1 = num2;
// num2 = temp;

[num1, num2] = [num2, num1];
console.log(`The value of num1 after swapping: ${num1}`);
console.log(`The value of num2 after swapping: ${num2}`);

// 3 Generate random number
console.log(Math.trunc(Math.random() * 5) + 1);

// 4 Check the number is positive negative or zero
let numb = 5;

if (numb > 0) {
  console.log("Number is positive");
} else if (numb < 0) {
  console.log("Number is negative");
} else if (numb === 0) {
  console.log("Number is zero");
} else {
  console.log("Number is not valid ");
}

//5 Area of triangle

const aa = 10;
const bb = 20;

console.log((1 / 2) * aa * bb);
