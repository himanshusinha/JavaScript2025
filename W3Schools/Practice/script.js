// let const var

var a = 20;
var a = 30;
console.log(a);

let b = 10; // declaration
// let b = 20; // redeclaration not allowed
b = 20; // reassignment
console.log(b);

const s = 10; // declaration
console.log(s);
// a = 20;      reassignment not allowed
// const a = 30; redeclaration not allowed

// Arithmetic Operators
let x = 10;
let y = 20;
let z = 30;
let result;

console.log(`Addition of ${x} and ${y} is ${(result = x + y)}`);
console.log(`Substraction of ${x} and ${y} is ${(result = x - y)}`);
console.log(`Multiplication of ${x} and ${y} is ${(result = x * y)}`);
console.log(`Division of ${x} and ${y} is ${(result = x / y)}`);
console.log(`Modulous of ${x} and ${y} is ${(result = x % y)}`);
console.log(`Exponentiation of ${x}**2 is ${x ** 2}`);
console.log(`Increment of ${x} is ${x++}`);
console.log(`Decrement of ${x} is ${x--}`);

// Assignment Operators
x += 5;
x -= 3;
x *= 4;
x /= 2;
console.log(x);

// Logical Operators
console.log(y > x && y < z); // 20 > 24 -> false && 20 < 30 -> true  => false
console.log(x > y || y < z); // 24 > 20 -> true  || 20 < 30 -> true  => true

// Comparison Operators

console.log(x == y); // equal to
console.log(x === y); // strict equal (value + type)
console.log(x != y); // not equal
console.log(x !== y); // strict not equal
console.log(x > y); // greater than
console.log(x < y); // less than
console.log(x >= y); // greater than or equal
console.log(x <= y); // less than or equal

// Statements
let greeting = "";
const hour = new Date().getHours();
if (hour < 18) {
  greeting = "Good Day";
} else {
  greeting = "Good Evening";
}
console.log(greeting);

// Ternary Opeartor
const day = hour < 18 ? "Good Day" : "Good Evening";
console.log(day);

// Switch
const weekDay = "Tuesday";
switch (weekDay) {
  case "Monday":
    console.log("Day is monday");
    break;
  case "Tuesday":
    console.log("Day is Tuesday");
  case "Wednesday":
    console.log("Day is Wednesday");
    break;
  case "Thursday":
    console.log("Day is Thursday");
    break;
  case "Friday":
    console.log("Day is Friday");
    break;
  case "Saturday":
    console.log("Day is Satuday");
    break;
  case "Sunday":
    console.log("Day is Sunday");
    break;
  default:
    console.log("Invalid day");
}

//Boolean
const isLoggedIn = true;
console.log(!isLoggedIn);

/* 
For Loop Used when number of iterations is known.
While Loop runs while the condition is true.
Do...While Loop runs at least one time, even if the condition is false.
*/

// Loops
for (let i = 0; i < 10; i++) {
  console.log(`Value of i ${i}`);
}

// Reverse loop
for (let i = 10; i >= 0; i--) {
  console.log(`Value of i ${i}`);
}

// While Loop
let j = 0;
while (j < 10) {
  console.log("Value of j in while", j);
  j++;
}

// Do While
// Do While
let k = 1;

do {
  console.log("Value of k in do while", k);
  k++;
} while (k < 10);

// Break → terminates the loop when condition matches
for (let m = 0; m < 10; m++) {
  if (m === 3) {
    break;
  }
  console.log("Value of m", m);
}

// Continue → skips the current iteration and moves to the next one
for (let n = 0; n < 10; n++) {
  if (n === 3) {
    continue;
  }
  console.log("Value of n", n);
}
