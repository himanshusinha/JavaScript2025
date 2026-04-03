const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

const newCars = new Array("Audi", "BMW", "Jaguar");
console.log(newCars);

console.log(newCars[1]);

const obj = {
  firstName: "Himanshu",
  lastName: "Sinha",
};

console.log(obj.firstName);

console.log(newCars.length);
console.log(newCars[newCars.length - 1]);

/* 

for
1 for is a loop statement used to execute code repeatedly based on a condition.

forEach
2 forEach is an array method that executes a function for each element in an array.

*/

// For Loop
for (let i = 0; i < newCars.length; i++) {
  console.log(newCars[i]);
}

// For Each
newCars.forEach(function (cars) {
  console.log(cars);
});

newCars.push("Mercedez");
console.log(newCars);

const obj2 = {
  name: "Rahul",
  age: 25,
};

console.log(obj2["age"]);
console.log(typeof newCars);
console.log(Array.isArray(obj2));

const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

/*
for...of → used for arrays (iterates values)

for...in → used for objects (iterates keys)

for loop → used when number of iterations is known

forEach → array method that executes a function for each element of an array
*/

for (let x in myObj) {
  console.log(myObj[x]);
}

console.log(newCars.toString());
console.log(newCars.at(1));

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.join("*"));
console.log(fruits.pop());

/* 
shift()
1 Removes the first element from an array.

unshift()
2 Adds element(s) at the beginning of an array.
*/

console.log(fruits.shift());
console.log(fruits);
console.log(fruits.unshift("Pineapple"));
console.log(fruits);

fruits[2] = "Kiwi";
console.log(fruits);

console.log(fruits.indexOf("Kiwi"));
console.log(fruits.lastIndexOf("Kiwi"));
console.log(fruits.includes("Kiwi"));

const numbers = [10, 20, 30, 40];
const result = numbers.find((num) => num * 2);
console.log(result);

const fruits3 = ["banana", "apple", "mango"];

fruits3.sort();

console.log(fruits3);

const numbers2 = [10, 2, 5];

numbers2.sort((a, b) => a - b);

console.log(numbers2);

const users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 30 },
  { name: "Neha", age: 22 },
];

users.sort((a, b) => a.age - b.age);

console.log(users);

const myInfo = ["Himanshu", "Dakshit", "Pooja"];
myInfo.forEach(function (info) {
  console.log(info);
});

// Map returns new array
const data = [
  {
    name: "John",
    age: 33,
  },
  {
    name: "Michael",
    age: 28,
  },
];
data.map((item) => {
  console.log(item);
});

const data2 = [
  {
    name: "John",
    city: "New York",
  },
  {
    name: "Michael",
    city: "London",
  },
];

data2.filter((item) => item.name === "Michael");

const arr = [10, 20, 30];

/* 
some
some() returns true if at least one element satisfies the condition.

find
find() returns the first element that satisfies the condition.

every
every() returns true if all elements satisfy the condition.

*/

const result2 = arr.find((num) => num > 15);

console.log(result2);

const result3 = arr.some((num) => num > 10);
console.log(result3);

const result4 = arr.every((num) => num * 2);
console.log(result4);

const arr1 = [1, 2, 3, 4];
const arr2 = [...arr1, 5];
console.log(arr2);

function rest(...args) {
  console.log(args);
}

rest(1, 2, 3, 4);

/* 
Spread (...) → expands elements of an array or object.
Rest (...) → collects multiple arguments into a single array parameter.
*/

// Set -> Collection of unique elements
const numbers1 = new Set([1, 2, 3, 3, 4]);
console.log(numbers1);

const set = new Set();
set.add(20);
set.add(30);
console.log(set);

set.delete(20);
console.log(set);

set.has(20);
console.log(set);

set.clear();
console.log(set);

const set2 = new Set([1, 2, 3]);
console.log(set2.size);

// Map -> Map is a collection of key-value pairs where keys can be of any data type.

const map = new Map();
map.set("name", "John");
map.set("age", 30);

console.log(map);
console.log(map.get("name"));

console.log(map.has("department"));

console.log(map.delete("age"));
console.log(map);

console.log(map.size);

console.log(map.clear());

const map2 = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

console.log(map2);

/* 

for
for loop is used to run code repeatedly when the number of iterations is known.

while
while loop runs code repeatedly as long as a condition is true.

do...while
do...while loop executes code at least once and then repeats while the condition is true.

for...of
for...of loop iterates over the values of iterable objects like arrays or strings.

for...in
for...in loop iterates over the keys (properties) of an object.

forEach
forEach is an array method that executes a function for each element of an array.

*/
const name = "W3Schools";
for (let x of name) console.log(name[x]);
