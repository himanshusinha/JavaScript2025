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


// Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas";
const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
console.log(jonas);

// function expression
const calcAge1 = function (birthYear) {
  return 2037 - birthYear;
};
const years = [1991, 1984, 2008, 2020, 2018];

const age1 = calcAge1(years[0]);
const age2 = calcAge1(years[1]);
const age3 = calcAge1(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = calcAge1(
  years[0],
  calcAge1(years[1], calcAge1(years[years.length - 1])),
);

console.log(ages);

// Arrays Methods

const friends = ["Steven", "Michael", "Peter"];

friends.push("Bob");
console.log(friends);

// remove element from last
friends.pop();
console.log(friends);
//remove element from first position
friends.shift();
console.log(friends);

//unshift add elements to first position in array
friends.unshift("Tom");
console.log(friends);

// index of
console.log(friends.indexOf("Peter"));
console.log(friends.indexOf("Tom"));

friends.push(23);
console.log(friends);

console.log(friends.includes(23));
console.log(friends.includes("Bob"));
console.log(friends.includes("Tom"));

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
// The toString() method returns the elements of an array as a comma separated string.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Get the  element of fruits from particular index using at():
console.log(fruits.at(2));

// The join() method also joins all array elements into a string.
console.log(fruits.join(" * "));

//Array.isArray check that whether element inside array is true or false
console.log(Array.isArray(fruits));

// The concat() method creates a new array by merging (concatenating) existing arrays:
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

console.log(myGirls.concat(myBoys));

// copyWithin() method copies array element to another position in array
const names = ["Himanshu", "Pooja", "Dakshit"];
console.log(names.copyWithin(2, 0));
console.log(names);

const a = [1, 2, 3, 4];
console.log(a.copyWithin(0, 2));

//The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(myArr.flat());

//The slice() method slices out a piece of an array into a new array:
const newFruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// isme 3 and 4 position wale ka new array bana diya sahi hai kya
console.log(newFruits.slice(3));
console.log(newFruits);

//splice change original array add/remove/replace
// isne 1 and 2 position ko remove kar diya 
const removed = newFruits.splice(1, 2);

console.log(removed);
console.log(newFruits);

// Array Objects
// Array is an ordered list accessed by index,
// whereas object stores data in key-value pairs.
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
];

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

// Objects
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
};

console.log(jonas.firstName);
console.log(jonas["lastName"]);

const nameKey = "Name";

console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Jonas?Choose between firstName,lastName,age,job and friends.",
);

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log("Jonas interestedIn");
} else {
  console.log(
    "Wrong request! Choose between firstName,lastName,age,job and friends",
  );
}
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";

console.log(jonas);

console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${
    jonas.friends[jonas.friends.length - 1]
  }`,
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job},and he has a ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
};

console.log(jonas.calcAge()); // 46
console.log(jonas.age); // 46
console.log(jonas.getSummary());

const person = {
  firstName: "Himanshu",
  mobileNumber: "9343663473",

  getInfo: function () {
    return this.mobileNumber;
  },
};

console.log(person.getInfo());

const calc = {
  x: 20,
  y: 30,

  sum: function () {
    // this.result=>calc.result = calc.x+calc.y
    // agar me sahi hu to calc.result = 20+30
    // result property banakar usme = 50 add kar dega
    this.result = this.x + this.y;
    return this.result;
  },
};

console.log("Calc sum function", calc.sum());
console.log(calc);

const myFamily = {
  myName: "Himanshu",
  myWife: "Pooja",
  myChild: "Dakshit",
  myGeneration: function () {
    this.mySonName = this.myChild;
    return this.mySonName;
  },
};
console.log(myFamily.myGeneration());
console.log(myFamily);

const car = {
  brand: "BMW",
  getBrand: function () {
    // this === car
    // this.brandName = this.brand
    // means:
    // car.brandName = car.brand
    // car.brandName = "BMW"

    this.brandName = this.brand;
    return this.brandName;
  },
};

console.log(car.getBrand());
console.log(car);

/*
Final object (after calling getBrand):

const car = {
  brand: "BMW",
  brandName: "BMW",
  getBrand: function () { ... }
}

// for loop

// console.log("Lifting weight repitition 1 🏋️‍♀️");
// console.log("Lifting weight repitition 2 🏋️‍♀️");
// console.log("Lifting weight repitition 3 🏋️‍♀️");
// console.log("Lifting weight repitition 4 🏋️‍♀️");
// console.log("Lifting weight repitition 5 🏋️‍♀️");
// console.log("Lifting weight repitition 6 🏋️‍♀️");
// console.log("Lifting weight repitition 7 🏋️‍♀️");
// console.log("Lifting weight repitition 8 🏋️‍♀️");
// console.log("Lifting weight repitition 9 🏋️‍♀️");
// console.log("Lifting weight repitition 10 🏋️‍♀️");

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weight repitition ${i}🏋️‍♀️`);
}

// Looping Array Breaking and Continuing
//continue and break
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];
for (let i = 0; i < jonasArray.length; i++) {
  console.log(jonasArray[i]);
  types.push(jonasArray[i]);
  console.log(typeof types[i]);
  if (typeof types[i] !== "string") continue;
  console.log("...........its not string");
}
const ages = [];
const years = [1991, 1984, 2008, 2020, 2018];
for (let i = 0; i < years.length; i++) {
  ages.push(years[i]);

  if (typeof ages[i] !== "number") break;
  console.log(typeof ages[i]);
  // number !== "number" // true
  console.log("...........its number");
}
// Looping backwards and Loop in Loop
const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];

for (let i = jonasArray.length - 1; i >= 0; i--) {
  console.log(jonasArray[i]);
}

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`-----------starting execercise ${excercise}`);

  for (let i = 1; i <= 4; i++) {
    console.log(`Lifting weight repitition ${i}🏋️‍♀️`);
  }
}
*/
// while loop
let i = 1;
while (i <= 10) {
  // console.log(`Lifting weight repitition ${i}🏋️‍♀️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a dice ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end ...");
}
