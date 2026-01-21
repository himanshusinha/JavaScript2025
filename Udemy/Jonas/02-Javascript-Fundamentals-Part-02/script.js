"use strict";
/* 
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 555; 
// functions
function log() {
  console.log("My name is Himanshu");
}
// calling running invoking function
log();
log();
log();

// apples and oranges are parameters (placeholders)
// 2,3 are actual arguements
function foodProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}
const applesJuice = foodProcessor(6, 0);
console.log(applesJuice);

const orangeJuice = foodProcessor(3, 6);
console.log(orangeJuice);


// Function Declaration and Function Expression

// Function Declaration:
// A function declaration is a function that is defined using the `function` keyword with a name.
// It can be used before it is declared because it is hoisted in JavaScript.

function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1990);

// Function Expression:
// A function expression is a function assigned to a variable.
// It can be used only after it is defined.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);

// Arrow function
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// calcAge2(1990);

const calcAge2 = (birthYear) => 2037 - birthYear;

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement}`;
};
yearsUntilRetirement(1990, "Bob");
yearsUntilRetirement(1991, "John");

// function calling other functions
function cutFruitsPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitsPieces(apples);
  const orangePieces = cutFruitsPieces(oranges);

  return `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
}
const fruitsPieces = fruitProcessor(5, 10);
console.log(fruitsPieces);
*/

// review functions
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return `${firstName} has already retired 🎉`;
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1992, "Bob"));
