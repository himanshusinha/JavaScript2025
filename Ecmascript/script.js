// ES2015 (ES6) Features
/////////////////////////////////////////////////////////////////////////////////

// Arrow Function - Short syntax for writing functions
const sum = (a, b) => {
  return a + b;
};

// Arrow Function (Shorthand) - Implicit return
const add = (a, b) => a + b;

// Template Literals - Allows string interpolation using backticks
const firstName = "Himanshu";
console.log(`Hello ${firstName}`);

// Multiline Strings using Template Literals
const str = `
Hello
How are you ?
`;
console.log(str);

// Object Destructuring - Extract values from an object
const user = {
  name: "Himanshu",
  age: 35,
};

const { name, age } = user;
console.log(name);
console.log(age);

// Array Destructuring - Extract values from an array
const arr = [1, 2, 3];
const [a, b] = arr;
console.log(a);
console.log(b);

// Spread Operator (...) - Expands array or object elements
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4];
console.log(arr2);

const userInfo = { name: "Himanshu" };
const updatedUserInfo = { ...userInfo, age: 35 };
console.log(updatedUserInfo);

// Rest Operator (...) - Collects multiple arguments into an array
function restEx(...numbers) {
  return numbers.reduce((a, b) => a + b);
}
const result = restEx(10, 20, 30, 40);
console.log(result);

// Default Parameters - Assign default value to function parameters
function greet(name = "Himanshu") {
  console.log(name);
}
greet();

// Promise - Handles asynchronous operations
const myPromise = new Promise((resolve, reject) => {
  let status = true;

  if (status) {
    resolve("Data fetched successfully");
  } else {
    reject("Something went wrong");
  }
});
myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

const addition = (...num) => {
  return num.reduce((a, b) => a + b);
};
const result1 = addition(10, 20, 20, 30);
console.log(result1);

const arr11 = [1, 2, 3, 4, 5];
const arr12 = [...arr11, 6, 7, 8, 9];
console.log(arr12);

class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}
const person = new Person("Himanshu");
person.greeting();

// ES2016 (ES6) Features
/////////////////////////////////////////////////////////////////////////////////

const arrNum = [1, 2, 3];
console.log(arrNum.includes(5));

console.log(3 ** 2);

const myNewPromise = new Promise((resolve) => {
  setTimeout(() => resolve("Data"), 1000);
});
async function getData() {
  const result = await myNewPromise;
  console.log(result);
}

getData();

async function myLogin() {
  new Promise((resolve) => {
    setTimeout(() => {
      console.log("print my data");
      resolve();
    }, 1000);
  });
}
console.log("A");
await myLogin();
console.log("B");

// Promise Example
const myNewPromise2 = new Promise((resolve, reject) => {
  const status = true;

  if (status) {
    resolve("Data get"); // pass value to then
  } else {
    reject("Error"); // pass value to catch
  }
});

// Use the promise
myNewPromise2
  .then((res) => console.log(res)) // success
  .catch((err) => console.log(err)); // error
