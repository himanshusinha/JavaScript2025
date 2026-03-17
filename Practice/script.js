// -------------------- CONDITIONAL STATEMENTS --------------------

// Check if a person is eligible for voting
let age = 14;

if (age > 18) {
  console.log("You are eligible for voting");
} else {
  console.log("You are too young");
}

// if - else if - else example
// Used when multiple conditions need to be checked
let day = "Monday";

if (day === "Monday") {
  console.log("Start of the week! Back to work.");
} else if (day === "Tuesday" || day === "Wednesday") {
  console.log("Midweek days. Keep going!");
} else if (day === "Thursday" || day === "Friday") {
  console.log("Almost weekend!");
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Weekend! Time to relax.");
} else {
  console.log("Invalid day.");
}

// -------------------- TERNARY OPERATOR --------------------

// Ternary operator is a short form of if-else
let username = "himanshusinha";
let password = "123456";

let result =
  username === "himanshusinha" && password === "123456"
    ? "User Logged in successfully"
    : "Invalid login";

console.log(result);

// -------------------- SWITCH STATEMENT --------------------

// Switch is used to check multiple possible values of a variable
let month = "October";

switch (month) {
  case "January":
    console.log("Month is January");
    break;

  case "February":
    console.log("Month is February");
    break;

  case "March":
    console.log("Month is March");
    break;

  case "April":
    console.log("Month is April");
    break;

  case "May":
    console.log("Month is May");
    break;

  case "June":
    console.log("Month is June");
    break;

  case "July":
    console.log("Month is July");
    break;

  case "August":
    console.log("Month is August");
    break;

  case "September":
    console.log("Month is September");
    break;

  case "October":
    console.log("Month is October");
    break;

  case "November":
    console.log("Month is November");
    break;

  case "December":
    console.log("Month is December");
    break;

  default:
    console.log("Invalid Month");
}

// -------------------- LOGICAL OPERATORS --------------------

let x = 10;
let y = 20;
let z = 30;
let isLogin = true;

// AND (&&) → Returns true only if both conditions are true
console.log(x < y && z > x);

// OR (||) → Returns true if at least one condition is true
console.log(x < y || z > y);

// NOT (!) → Returns the opposite boolean value
console.log(!isLogin);

// -------------------- LOOPS --------------------

// For loop → Used when the number of iterations is known
for (let i = 0; i < 10; i++) {
  console.log(`Value of i is ${i}`);
}

// While loop → Runs as long as the condition is true
let k = 1;
while (k < 10) {
  console.log(`Value of k is ${k}`);
  k++;
}

// Do while loop → Executes at least once even if the condition is false
let m = 0;
do {
  console.log(`Value of m is ${m}`);
  m++;
} while (m < 10);

// Break → stops the loop immediately when the condition is met
for (let j = 1; j < 10; j++) {
  if (j === 3) {
    console.log("Value of j is", j);
    break; // loop stops when j becomes 3
  }
}

// Continue → skips the current iteration and moves to the next one
for (let p = 0; p < 7; p++) {
  if (p === 4) {
    continue; // skip when p is 4
  }
  console.log("Value of p is", p);
}

// Function flow

// Parameters → placeholders defined in the function
// Arguments → actual values passed when calling the function

function myFunction(p1, p2) {
  return p1 * p2;
}

let result1 = myFunction(2, 3);
console.log("Result is", result1);
