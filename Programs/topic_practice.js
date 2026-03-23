"use strict";
function greet() {
  console.log("Welcome in JavaScript");
}
greet();

// {} -> Code Block

// let a = 10; // global scope

// function test() {
//   console.log(a);
// }

// functional scope
// test(); // 10
// console.log(a); // 10

function testNew() {
  let a = 20; // function scope
  console.log(a);
}

testNew(); // 20
// console.log(a); // Error

// block scope
{
  let a = 20;
  let b = 30;
  console.log(a);
  console.log(b);
}
// console.log(a);

// Hoisting is the default behavior of JavaScript where variable and function
// declarations are moved to the top of their scope during the compilation phase.
// let and const are also hoisted but they remain in the TDZ (Temporal Dead Zone).

hello();

function hello() {
  console.log("Hello");
}
// console.log(a);
// let a = 5;

// Strict mode is a feature in JavaScript that enables a stricter parsing and error handling environment, helping to catch common coding mistakes.

// const age = 20;
// const hasDriversLicense = false;
// if (age > 18) {
//   hasDriverLicense = true;
// }

//Array (Definition):
const num = ["a", 1, 2, 3, true];
console.log(num);

const num2 = [];
num[0] = 10;
num2[1] = 20;
console.log(num2);

const num3 = new Array("Hello", "John", "Doe");
console.log(num3);
num[3] = "Bob";
console.log(num);
console.log(num.toString());

const userInfo = { firstName: "John", lastName: "Doe" };
console.log(userInfo.firstName);
console.log(num3[num3.length - 1]);

for (let i = 0; i > num.length; i++) {
  console.log(num3[i]);
  num3.push(5);
}
console.log(num3);

const fruits = ["Banana", "Orange", "Apple"];
fruits[fruits.length - 1] = "Lemon";
console.log(fruits);

const person = [];

person["firstName"] = "Himanshu";
person["lastName"] = "Sinha";

console.log(person);

// Array vs Object (1-line difference):
// An array stores multiple values using indexed positions, while an object stores data as key–value pairs.
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

for (let x of myObj.cars) {
  console.log(x.name);
}

// Arrays methods
// Array Methods Example

// fruits array maan lo pehle se defined hai
// const fruits = ["Apple", "Banana", "Mango", "Orange"];

// length → array me total elements kitne hain
console.log(fruits.length);

// toString() → array ko string me convert karta hai
console.log(fruits.toString());

// at(index) → given index ka element return karta hai
console.log(fruits.at(2));

const x = [2, 3, 4, 5];

// join() → array elements ko string me convert karta hai aur given separator lagata hai
console.log(x.join("*")); // 2*3*4*5

// push() → array ke end me new element add karta hai
x.push(10);
console.log(x); // [2,3,4,5,10]

// pop() → array ke last element ko remove karta hai
x.pop();
console.log(x); // [2,3,4,5]

// shift() → array ke first element ko remove karta hai
x.shift();
console.log(x); // [3,4,5]

//unshift() → array ke last element ko remove karta hai
x.unshift(1);
console.log(x);
