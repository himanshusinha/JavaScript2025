// ====================== ARRAY BASICS ======================

// Simple array declaration
const cars = ["Saab", "Volvo", "BMW"];

// Access first element (index 0)
let car = cars[0];
console.log(car); // Saab

// ====================== BASIC ARRAY METHODS ======================

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Convert array to string (comma separated)
console.log(fruits.toString());

// Get length of array
console.log(fruits.length);

// Get element at specific index
console.log(fruits.at(2)); // Apple

// Join with custom separator
console.log(fruits.join("*"));

// Add element at end (returns new length)
console.log(fruits.push("Pineapple"));
console.log(fruits);

// Remove last element
fruits.pop();
console.log(fruits);

// Remove first element (returns removed value)
console.log(fruits.shift());

// Add element at beginning (returns new length)
console.log(fruits.unshift("Lemon"));
console.log(fruits);

// Replace element using index
fruits[0] = "Strawberry";
console.log(fruits);

// Check if value is array
console.log(Array.isArray(fruits));

// ====================== CONCAT & FLAT ======================

const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

// Merge two arrays
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// Flatten nested array
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

console.log(myArr.flat());

// ====================== SEARCH & SORT ======================

const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

// Check if element exists
console.log(fruits2.includes("Apple"));

// Sort alphabetically (mutates original array)
console.log(fruits2.sort());

// Reverse array
console.log(fruits2.reverse());

// ====================== ITERATION METHODS ======================

const arr = [1, 2, 3];

// forEach → iterate only (no return)
arr.forEach((num) => {
  console.log(num * 2);
});

// map → creates new array (yaha tum sirf console kar rahe ho)
arr.map((num) => console.log(num * 3));

// ====================== FILTER ======================

const arr2 = [10, 20, 30, 40];

// Filter values greater than 20
const result = arr2.filter((num) => num > 20);
console.log(result);

// ====================== FIND ======================

const users = [
  { id: 1, name: "Ram" },
  { id: 2, name: "Shyam" },
];

// Find first matching object
const user = users.find((u) => u.id === 2);
console.log(user);

// ====================== SOME & EVERY ======================

const arr3 = [1, 2, 3, 4];

// Check if at least one element is even
const isEven = arr3.some((num) => num % 2 === 0);
console.log(isEven);

// Check if all elements are even
const isAllEven = arr3.every((num) => num % 2 === 0);
console.log(isAllEven);

// ====================== REDUCE ======================

// Sum of array elements
const sum = arr3.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

// curr = current element
// acc = accumulated result so far

// ====================== SETS ======================

const letters = new Set(["a", "b", "c", "d"]);
console.log(letters);

// create Set
const mySet = new Set();
mySet.add("Himanshu");
mySet.add("Dakshit");
mySet.add("Pooja");
mySet.add("Dakshit");
console.log(mySet);

mySet.delete("Himanshu");
console.log(mySet);
mySet.clear();
console.log(mySet);
const s = new Set([1, 2, 3]);
console.log(s);

s.forEach((num) => console.log(num));

for (let i of s) {
  console.log(i);
}

const arr4 = [1, 2, 2, 3, 4, 4];
const removeDuplicates = [...new Set(arr4)];
console.log(removeDuplicates);

// ====================== MAP ======================

const myMap = new Map();
myMap.set("Himanshu", 35);
myMap.set("Pooja", 32);
myMap.set("Dakshit", 6);

console.log(myMap);
console.log(myMap.get("Himanshu"));
console.log(myMap.has("Himanshu"));
console.log(myMap.delete("Himanshu"));
console.log(myMap);

for (let [key] of myMap) {
  console.log(myMap.get(key));
}

myMap.forEach((value, key) => {
  console.log(key, value);
});

/* 

🔹 Set
Values store karta hai
Duplicate allow nahi karta
Unique values maintain karta hai
Index based access nahi hota
has() se fast existence check

🔹 Map

Key–value pairs store karta hai
Keys duplicate nahi ho sakti
Agar same key dubara set kare → value update ho jaati hai
Keys kisi bhi type ke ho sakte hain (string, number, object…)
get() se value access hoti hai



const map = new Map();

map.set("a", 10);
map.set("a", 20);

console.log(map.get("a")); // 20

// ====================== JS DESTRUCTING ======================
const arr5 = [10, 20, 30];

const [a, b, c] = arr5;
console.log(arr5);

const [first, , third] = arr5;
console.log(third);

const [fourth, fifth = 20] = arr5;
console.log(fifth);

let a1 = 5;
let b1 = 10;

[a1, b1] = [b1, a1];

console.log(a1);
console.log(b1);

const numbers = [10, 20, 30, 40, 50, 60, 70];
const [x, y, ...rest] = numbers;
console.log(rest);
const user1 = {
  name: "Himanshu",
  age: 35,
};

const name = user1.name;
const { name: firstName, age } = user;
console.log(firstName);

const { city = "Indore" } = user;
console.log(city);

const user3 = {
  name: "Himanshu",
  address: {
    city2: "Indore",
    pincode: 452001,
  },
};

const {
  address: { city2 },
} = user3;

console.log(user3);
*/

// ===================== PRIMITIVE TYPES =====================

// Number
let length = 16;
let weight = 7.5;

// BigInt
let bigInt1 = 1234567890123456789012345n;
let bigInt2 = BigInt("1234567890123456789012345");

// String
let color = "Yellow";
let lastName = "Johnson";

// Boolean
let isActive = true;
let isCompleted = false;

// Undefined
let notDefined;
console.log(notDefined); // undefined

// Null
let emptyValue = null;

// Symbol
const symbol1 = Symbol();
const symbol2 = Symbol();

// ===================== NON-PRIMITIVE TYPES =====================

// Object
const person = { firstName: "John", lastName: "Doe" };

// Array (Array is also an object)
const carss = ["Saab", "Volvo", "BMW"];

// Date Object
const date = new Date("2022-03-25");

// ===================== NON-PRIMITIVE TYPES =====================

try {
  let num;
  console.log(num);
} catch (err) {
  let text = err.name;
  console.log(text);
}

// try {
//   console.log(x);
// } catch (error) {
//   console.log(firstName);
//   console.log(error.message);
//   console.log(error.firstName);
// }

function checkAge(age) {
  if (age < 18) {
    throw new Error("Not eligible");
  }
  return "Access Granted";
}
try {
  // try if possiblity of error then try handle it
  checkAge(15);
} catch (error) {
  // catch if error occurred catch handle it
  console.log(error.message);
}

function divide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Calculation attempt finished");
  }
}

divide(10, 0);

function checkNumber(num) {
  try {
    if (num < 0) {
      throw new Error("Negative number not allowed");
    }
    const result = num * num;
    return result;
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Operation completed");
  }
}
console.log(checkNumber(6));
console.log(checkNumber(-1));

function parseJSONData(data) {
  try {
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.log("Invalid JSON", error);
  } finally {
    console.log("Parsing attempt finished");
  }
}
parseJSONData('{"name":"Himanshu"}'); // valid
parseJSONData("invalid json"); // invalid
