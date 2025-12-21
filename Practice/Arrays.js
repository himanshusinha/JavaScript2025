const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Array.length return length of array
console.log(fruits.length);

// Array.toSring() return comma separated values
console.log(fruits.toString());

// Array.at() return value at index
console.log(fruits.at(2));

//Array.join() concate all the values in single string
console.log(fruits.join("-"));
console.log(fruits);

//Array.pop() remove elements from the last position
console.log(fruits.pop());
console.log(fruits);

//Array.push add elements to last position
console.log(fruits.push("Pineapple"));
console.log(fruits);

//Arrays.shift remove element from first poisiotn
console.log(fruits.shift());
console.log(fruits);

//Array.unshift add element at first position
console.log(fruits.unshift("Strawberry"));
console.log(fruits);

//Array.isArray check that value is array or not
console.log(Array.isArray(fruits)); // false aayega kyuki ye string hai
Array.isArray(["Apple", "Mango"]);

// concat to merge Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// Array.copyWithin Array ke kuch elements ko uthakar usi array ke kisi aur index par copy karta hai Original array modify ho jata hai (mutable)
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr);

//array.flat() Array ke andar jo arrays hote hain unko khol deta hai
const arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

const arr3 = [1, [2, [3, [4]]]];
console.log(arr3.flat(3));

// Array.slice method array ka ek hissa utha kar copy karke new array return karta hai original array change nahi hota
const result = fruits.slice(1, 3);
console.log(result);
console.log(fruits);

// Array ke elements remove / add / replace karta hai Original array modify ho jata hai
const result1 = fruits.splice(1, 3);
console.log(result1);

//include Check karta hai ki value array me hai ya nahi
const result3 = fruits.includes("Orange");
console.log(result3);

// find Pehla element return karta hai jo condition satisfy kare
const numbers = [5, 12, 8, 130, 44];
const result4 = numbers.find((num) => num > 10);
console.log(result4);

// findIndex() Pehle matching element ka index return karta hai
const numberss = [5, 12, 8, 130, 44];
const index = numberss.findIndex((num) => num > 10);
console.log(index);

//some() Check karta hai ki kam se kam ek element condition pass karta hai ya nahi
const num = numberss.some((num) => num > 10);
console.log(num);

// every() check karta hai ki saare elements ki condition pass ho
const isEven = [2, 4, 6, 8, 10];
const even = isEven.every((num) => num % 2 === 0);
console.log(even);
