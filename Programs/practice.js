/* 
//Array.forEach()
const fruits = ["apple", "oranges", "cherry"];
console.log(fruits);

fruits.forEach((fruit) => console.log(fruit));

const nums = [1, 2, 3];
nums.forEach((num) => console.log(num));

// for...of
const names = ["Dakshit", "Pooja", "Himanshu"];
for (const name of names) {
  console.log(name);
}

// for ...in
const personInfo = {
  firstName: "John",
  age: 30,
  email: "johndoe@gmail.com",
};

for (const person in personInfo) {
  console.log(person, personInfo[person]);
}

// break
for (let i = 1; i <= 5; i++) {
  if (i === 3) break;
  console.log(i);
}

//continue
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i); // output 1 2 4 5
}
//map
const fruits = ["apples", "oranges", "pineapple"];
fruits.map((item) => console.log(item));

const myInfo = ["Himanshu", 35, "himanshusinha011@gmail.com"];
myInfo.map((item) => console.log(item));

// reduce
const nums = [1, 2, 3];
const sum = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

// max
const max = [10, 5, 25, 8];
const maxValue = max.reduce((curr, accu) => {
  return curr > accu ? curr : accu;
}, 0);
console.log(maxValue);

// even count
let evenCountArr = [];
const evenNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCount = evenNo.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    evenCountArr.push(curr);
    acc++;
  }
  return acc;
}, 0);
console.log("Even count", evenCountArr);

// odd count
let oddCountArr = [];
const oddNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddCount = oddNo.reduce((acc, curr) => {
  if (curr % 2 !== 0) {
    oddCountArr.push(curr);
    acc++;
  }
  return acc;
}, 0);
console.log("Odd Count", oddCountArr);

// filter even
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenCheck = num.filter((num) => num % 2 === 0);
console.log("filter even check", evenCheck);

const odd = [1, 2, 3, 4, 5, 6, 7];
const oddCheck = odd.filter((odd) => odd % 2 !== 0);
console.log("filter odd check", oddCheck);

//maps
const numss = [1, 2, 3, 4];
const doubled = numss.map((double) => double * 2);
console.log(doubled);

//square of numbers
const square = [2, 3, 4, 5, 6];
const squareNo = square.map((num) => num * num);
console.log(squareNo);

//upperCase
const names = ["ram", "shyam", "mohan"];
console.log(names.map((name) => name.toUpperCase()));

// extract property from object
const users = [
  { name: "Amit", age: 20 },
  { name: "Rahul", age: 30 },
];

const namesArr = users.map((user) => user.name);

console.log(namesArr);
// ["Amit", "Rahul"]
const updatedUsers = users.map((user) => {
  return {
    ...user,
    isAdult: user.age >= 18,
  };
});

console.log(updatedUsers);

users.forEach((user) => {
  console.log(user.age >= 18 ? "Eligible" : "Not Eligible");
});
users.map((user) => {
  console.log(user.age >= 18 ? "Eligible" : "Not Eligible");
});

// for of
const familyInfo = ["Dakshit", "Pooja", "Himanshu"];
for (const family of familyInfo) {
  console.log(family);
}

// for in
const employeeInfo = {
  empName: "JohnDoe",
  empId: 321,
};

for (const emp in employeeInfo) {
  console.log(emp, employeeInfo[emp]);
}
// break
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    break; // after 1 loop completely terminated
  }
  console.log("break", i);
}

// continue
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // even condition skip and continue next step
  }
  console.log("continue", i);
}

const userInfo = { name: "John", age: "33" };

console.log(JSON.stringify(userInfo));

// {"name":"John","age":"33"}
const userString = JSON.stringify(userInfo);

//{"name":"John","age":"33"} -> //{ name: "John", age: "33" }
const userObject = JSON.parse(userString);
console.log(userObject.age);

//for...of

const personalInfo = ["Himanshu", 34];

for (const personal of personalInfo) {
  console.log(personal);
}

//reduce
const num = [1, 2, 3, 4];

const isEven = num.reduce((acc, curr) => {
  return curr % 2 === 0 ? "Even" : "Odd";
}, "");

console.log(isEven);
 */