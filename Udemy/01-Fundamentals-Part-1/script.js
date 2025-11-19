/* let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
// let 3years=3
// let jonas&matild = "JM"
let jonas_matilda = "JM";
// let new = 27
// let function = 27
let _function = 26;
let $function = 39;
// let Person = "Jonas";
let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);


// Data Types
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log("Jonas");

javaScriptIsFun = "YES";
console.log(typeof javaScriptIsFun);

let year;
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


//let const and var

// mutateable means value can be change after declaration in future
let age = 30;
age = 31;

// immutatable means value can be change after declaration in future
// const birthYear = 1991;
// birthYear = 1990;

// best practice always use const
// use let only when value of variable change throught the code
// const job

var job = "programmer";
job = "teacher";
 */

// Operators
//Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2019;
console.log(ageJonas * 2, ageSarah / 2, 2 ** 3);
//2**3 means 2*2*2 = 8

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + "" + lastName);

//Arithmetic Operators
let x = 10 + 5;
x += 10; // x = 15 , x = x+10, x = 15+10 ,x = 25
x *= 4; // x = 25 ,x = x*4 , x = 25*4 , x = 100
x++; // x=100, x = x+1,x = 100+1, x = 101
x--; // x=x-1,x=101-1,x=100
x--; // x=x-1,x=100-1,x=99
console.log(x);

// Comparison Operators > , < , > = ,< =
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991, now - 2019);
