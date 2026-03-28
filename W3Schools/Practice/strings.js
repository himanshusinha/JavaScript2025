let carName1 = "Volvo";
let carName2 = "BMW";
console.log(carName1 + " " + carName2);

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';

console.log(answer1 + " " + answer2 + " " + answer3);
const firstName = "Himanshu";
console.log(`Hello my name is ${firstName}`);
console.log(firstName.length);

let text = "We are the so-called '\Vikings\' from the north.";
console.log(text);

console.log(firstName.charAt(3));
console.log(firstName.charCodeAt(4));
console.log(firstName.codePointAt(3));

const wifeName = "Pooja";
const sonName = "Dakshit";

console.log(wifeName.concat(" ", sonName));
console.log(wifeName.at(2));

let text1 = "HELLO WORLD";
let char = text1[0];
console.log(char);

let text2 = "Apple, Banana, Kiwi";
let part = text2.slice(7, 13);
console.log(part);

let text4 = "Please locate where 'locate' occurs!";
let index = text4.indexOf("locate");
console.log(index);
let text5 = "Can you Please help?";
console.log(text5.search("Please"));
console.log(text5.includes("help"));
console.log(text5.startsWith("Can"));
console.log(text5.endsWith("Please"));
console.log(text5.match("hel"));

let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr);

let arr2 = [10, 20, 30, 40, 50];
arr2.splice(2, 2);
console.log(arr2);

let arr4 = [1, 2, 3, 4];
arr4.splice(2, 1);

console.log(arr4);

let arr3 = [1, 4];
arr3.splice(1, 0, 2, 3);

let arr5 = [1, 2, 3, 4];
arr5.splice(1, 2, 9, 8);
