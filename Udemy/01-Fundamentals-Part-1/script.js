/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Jonas";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

 let age = 30;
age = 31;

const birthYear = 1991;
birthYear = 1990;
console.log(birthYear);
 const job;
 var job = "programmer";
job = "teacher";
console.log(job);

Arithmetic Operators
const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
console.log(x);

let now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah / 10, 2 ** 3);

// Comparison oprators >,<,>=.<=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);

let x, y;
console.log((x = y = 25 - 10 - 5));

// String Literal

const firstName = "Jonas";
const job = "teacher!";
const year = 2037;
const birthYear = 1991;

const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year's old " + job;
console.log(jonas);

const jonasNew = `I'm ${firstName} a ${year - birthYear} year's old ${job}`;
console.log(jonasNew);

console.log(`Just a regular string .....`);
console.log(
  "String with \n\
 Multiple lines \n\
lines"
);

console.log(`String with 
multiple 
lines`);


// If else Statement
const age = 15;

if (age >= 18) {
  console.log("Sarah can start driving license 🚗 ");
}
const yearsLeft = 18 - age;
console.log(`Sarah is too young . Wait for another ${yearsLeft} years :D`);

let century;
const birthYear = 2010;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

// Type Conversion (explicit-manually) and Type Coersion (implicit-automatically)
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number("Jonas"));
console.log(String(23));

// type coersion
console.log("I am" + 23 + "years old");
console.log("23" - "10" - 3);

let n = "1" + 1;
n = n - 1;
console.log(n);

// Truthy Falsy Values
// 5 falsy value 0 '' null undefined NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({}));
console.log(Boolean("Jonas"));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all :D");
} else {
  console.log("You should get job");
}

let height;
if (height) {
  console.log("YAY! height is defined");
} else {
  console.log("height is UNDEFINED");
}


// Equality Operators == vs ===
const age = 18;
if (age == 18) console.log("You just became an adult :D loose");
if (age === 18) console.log("You just became an adult :D strict");

const favourite = Number(prompt("What's your favourite number?"));

if (favourite == 23) {
  console.log("Cool 23 is an amazing number");
} else if (favourite == 7) {
  console.log("7 is another cool number");
} else if (favourite == 9) {
  console.log("9 is another cool number");
} else {
  console.log("Number is not 23 ,7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

// Logical Operators
const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision); // true &&  false = false
console.log(hasDriversLicense || hasGoodVision); // true | false = true
console.log(!hasDriversLicense); // !true = false

if (hasDriversLicense || hasDriversLicense || !isTired) {
  console.log("Sarah is able to drive ....");
} else {
  console.log("Someone else should drive ....");
}

const isTired = false;
console.log(hasDriversLicense || hasDriversLicense || !isTired); // true || true || true


// Switch Statement
// const day = "Sunday";
// switch (day) {
//   case "Monday":
//     console.log("Monday");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//     console.log("Tuesday and Wednesday");
//     break;
//   case "Thursday":
//     console.log("Thursday");
//     break;
//   case "Friday":
//     console.log("Friday");
//     break;
//   case "Saturday":
//     console.log("Thursday");
//     break;
//   case "Sunday":
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Not in 7 days");
// }

// if else if else
const day = "Sunday";
if (day === "Monday") {
  console.log("Monday");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("Tuesday");
  console.log("Wednesday");
} else if (day === "Thursday") {
  console.log("Thursday");
} else if (day === "Friday") {
  console.log("Friday");
} else if (day === "Saturday") {
  console.log("Saturday");
} else if (day === "Sunday") {
  console.log("Sunday");
} else {
  console.log("Not in 7 days");
}

// Statement && Expressions
// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = `23 is greater`;
// }

// console.log(`I'm ${2037 - 1991} years old teacher`);
*/
const age = 15;
console.log(age >= 18 ? "drink 🍷" : "drink 💧");

console.log(age >= 18 ? "i like to drink 🍷" : "i like to drink 💧");

let drink2;
if (age >= 18) {
  drink2 = "🍷";
} else {
  drink2 = "💧";
}
console.log(drink2);
