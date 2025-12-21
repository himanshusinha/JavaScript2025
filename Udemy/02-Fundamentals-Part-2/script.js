"use strict";
/* 
let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 534;


function logger() {
  console.log("My name is Jonas");
}

// calling running or invoking a function
logger();
logger();
logger();

function foodProcessor(apple, orange) {
  console.log(apple, orange);
  const juice = `Juice with ${apple} apples and ${orange} oranges`;
  return juice;
}

const appleJuice = foodProcessor(5, 0);
console.log(appleJuice);

const orangeJuice = foodProcessor(2, 4);
console.log(orangeJuice);


// Function Declaration vs Expressions

// function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1991);

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthYear) => 2037 - birthYear;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1990, "Bob"));


// Calling Function inside Another Function
function cutFruitPieces(fruits) {
  return fruits * 4;
}

function fruitProcessor(apples, oranges) {
  const applesJuice = cutFruitPieces(apples);
  const orangeJuice = cutFruitPieces(oranges);

  const juice = `juice with ${applesJuice} apples and ${orangeJuice} oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    return -1;
  }
};
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1990, "Bob"));

// Arrays
const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[friends.length - 1], "last element in array");

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, friends];
console.log(jonas);

const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

const ages = [age1, age2, age3];
console.log(ages);


const friends = ["Michael", "Peter", "Steven"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// add elements at 1st position
friends.unshift("John");
console.log(friends);

// remove element from 1st position
friends.shift();
console.log(friends);
friends.push(23);
console.log(friends.indexOf("Jay"));
console.log(friends.includes("Peter"));
console.log(friends);
console.log(friends.includes("23"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}

// order matters  karta hai arrays me
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1990,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

// order matters nahi karta hai object me
const jonasObject = {
  firstName: "Jonas",
  lastName: "Schmetmann",
  age: 2037 - 1990,
  job: "Teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(
  jonasObject.firstName,
  jonasObject.lastName,
  jonasObject.age,
  jonasObject.job,
  jonasObject.friends
);

console.log(jonasObject.firstName);
console.log(jonasObject["Jonas"]);

const nameKey = "Name";
console.log(jonasObject["first" + nameKey]);
console.log(jonasObject["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas ? Choose between firstName, lastName, age, job and friends"
// );

// if (jonasObject[interestedIn]) {
//   console.log(jonasObject[interestedIn]);
// } else {
//   console.log(
//     "Wrong request!  Choose between firstName, lastName, age, job and friends"
//   );
// }
jonasObject.location = "India";
jonasObject["@Jonas"] = "twitter";
console.log(jonasObject);

console.log(
  `Jonas has ${jonasObject.friends} friends and his best friend is ${jonasObject.friends[2]}`
);
*/

// Objects Methods
// const jonas = {
//   firstName: "jonas",
//   lastName: "schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} years old ${
//       this.job
//     } and he has a ${this.hasDriversLicense ? "a" : "no"}`;
//   },
// };

// console.log(jonas.calcAge(1991));
// console.log(jonas["calcAge"](1991));
// console.log(jonas.age);
// console.log(jonas.getSummary());

// for loop
// console.log("Lifting weight repetition 1🏋️‍♂️");
// console.log("Lifting weight repetition 2🏋️‍♂️");
// console.log("Lifting weight repetition 3🏋️‍♂️");
// console.log("Lifting weight repetition 4🏋️‍♂️");
// console.log("Lifting weight repetition 5🏋️‍♂️");
// console.log("Lifting weight repetition 6🏋️‍♂️");
// console.log("Lifting weight repetition 7🏋️‍♂️");
// console.log("Lifting weight repetition 8🏋️‍♂️");
// console.log("Lifting weight repetition 9🏋️‍♂️");
// console.log("Lifting weight repetition 10🏋️‍♂️");

// const count = 10;
// for (let rept = 1; rept <= count; rept++) {
//   console.log(`Lifting weight repetition ${rept}🏋️‍♂️`);
// }

// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Smith"],
//   true,
// ];
// let types = [];
// for (let i = 0; i < jonasArray.length; i++) {
//   console.log(jonasArray[i], typeof jonasArray[i]);
//   types.push(typeof jonasArray[i]);
// }
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// continue and break
// console.log("------ ONLY STRINGS ------");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] !== "string") continue;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }
// console.log("------ ONLY NUMBER ------");
// for (let i = 0; i < jonasArray.length; i++) {
//   if (typeof jonasArray[i] === "number") break;
//   console.log(jonasArray[i], typeof jonasArray[i]);
// }

// looping backwards and Forward in loop in loops
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Smith"],
//   true,
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) {
//   console.log(i, jonasArray[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`---- Starting exercise ${exercise} ----`);

//   for (let rep = 1; rep < 5; rep++) {
//     console.log(`Exercise ${exercise} : Lifting weight repetition ${rep}🏋️‍♂️`);
//   }
// }

// while loop
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weight repetition ${rep}🏋️‍♂️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end");
}
