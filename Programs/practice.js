// 23.3.2026

// 1 Remove Duplicate Values
/*  
const data = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 6, 6, 6, 6, 6];

let unique = [];
let count = 0;
for (let i = 0; i < data.length; i++) {
  // Check if element already exists in unique array
  if (unique.indexOf(data[i]) === -1) {
    // If not present then push into unique array
    unique.push(data[i]);
  }
  count++;
  console.log(count);
}

console.log(unique); // Output: [1,2,3,4,5,6,7,8]

// 2 Find Middle Numbers of Array

const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99, 100,
];

for (let i = 0; i < arr.length; i++) {
  if (i === arr.length / 2 - 1 || i === arr.length / 2) {
    console.log(arr[i]); // Output: 50 , 51
  }
}

// 3 Find Maximum Value in Array

const arry2 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

let max = arry2[0];

for (let i = 0; i < arry2.length; i++) {
  if (arry2[i] > max) {
    max = arry2[i];
  }
}

console.log(max);

// 4 Flatten 2D Array

const num = [
  [1, 2],
  [3, 4],
  [5, 6],
];

let uniqueArray = [];

const x = num.toString();

const y = x.split(",");

let finalArray = [];

y.map((item) => finalArray.push(parseInt(item)));

console.log(finalArray);
function reverseString(str) {
  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
}

const str2 = "Hello How are you";
const str3 = reverseString(str2);

console.log(str3);

const reverse = "Himanshu";
for (let i = reverse.length - 1; i >= 0; i--) {
  console.log(reverse[i]);
}
 */
