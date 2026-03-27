/*  
// 1 Even numbers print + count + sum
const num = [1, 2, 3, 4, 5, 6];

let count = 0;
let total = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log(num[i]);
    total = total + num[i];
    count++;
  }
}

console.log("Even count is", count);
console.log("Sum of even count is", total);

// 2 Odd numbers print + count + sum

let count2 = 0;
let totalCount = 0;

for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    console.log(num[i]);
    totalCount = totalCount + num[i];
    count2++;
  }
}

console.log("Odd count is", count2);
console.log("Sum of odd count is", totalCount);

// 3 Sum of all numbers in array

let sum = 0;

for (let i = 0; i < num.length; i++) {
  sum = sum + num[i];
}

console.log("Sum of numbers in array is", sum);

// 4 Maximum number in array
const arr = [10, 50, 25, 80, 30];

let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

// 5 Minimum number in array
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}

console.log(min);

// 6 Find middle elements of even length array
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let uniqueArray = [];

for (let i = 0; i < numArr.length; i++) {
  if (i === numArr.length / 2 - 1 || i === numArr.length / 2) {
    uniqueArray.push(numArr[i]);
  }
}

console.log(uniqueArray);

// 7 Positive / Negative numbers count + sum
const countValue = [10, -5, 0, 25, -30, 15, -2];

let positiveCount = 0;
let negativeCount = 0;

let sumPositive = 0;
let sumNegative = 0;

for (let i = 0; i < countValue.length; i++) {
  if (countValue[i] > 0) {
    positiveCount++;
    sumPositive = sumPositive + countValue[i];
  } else if (countValue[i] < 0) {
    sumNegative = sumNegative + countValue[i];
    negativeCount++;
  }
}

console.log(positiveCount);
console.log("Sum of positive count", sumPositive);

console.log(negativeCount);
console.log("Sum of negative count", sumNegative);

// 8 Print numbers between 50 and 100
const numArr2 = [10, 55, 78, 120, 95, 30, 85];

for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] >= 50 && numArr2[i] <= 100) {
    console.log("value is ", numArr2[i]);
  }
}

// 9 Find duplicate values using nested loop
const data2 = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 6, 6, 6, 6, 6];

let result = [];

for (let i = 0; i < data2.length; i++) {
  let count = 0;

  for (let j = 0; j < data2.length; j++) {
    if (data2[i] === data2[j]) {
      count++;
    }
  }

  if (count > 1) {
    result.push(data2[i]);
  }
}

console.log(result);

// 10 Frequency count using reduce
const unique = data2.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;

  return acc;
}, {});

console.log(unique);

// 11  Second largest number
const arr4 = [10, 20, 5, 30, 25];

let largest = arr4[0];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > largest) {
    largest = arr4[i];
  }
}

let secondLargest = arr4[0];

for (let i = 0; i < arr4.length; i++) {
  if (arr4[i] > secondLargest && arr4[i] < largest) {
    secondLargest = arr4[i];
  }
}

console.log(largest, secondLargest);

// 12 Palindrome check
const str = "level";

let newString = "";

for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
}

if (str === newString) {
  console.log("String is Palindrome");
} else {
  console.log("String is not Palindrome");
}

// 13 Reverse array
const arr5 = [1, 2, 3, 4, 5];

let finalArr = [];

for (let i = arr5.length - 1; i >= 0; i--) {
  finalArr.push(arr5[i]);
}

console.log(finalArr);

// 14 Reverse loop even / odd
const arr6 = [1, 2, 3, 4, 5, 6];

for (let i = arr6.length - 1; i >= 0; i--) {
  if (arr6[i] % 2 === 0) {
    console.log(arr6[i]);
  }
}

for (let i = arr6.length - 1; i >= 0; i--) {
  if (arr6[i] % 2 !== 0) {
    console.log(arr6[i]);
  }
}

// 15 Max number using reverse loop
const arr7 = [10, 25, 30, 45, 20];

let maxNum = arr7[0];

for (let i = arr7.length - 1; i >= 0; i--) {
  if (arr7[i] > maxNum) {
    maxNum = arr7[i];
  }
}

console.log(maxNum);

// 16 Reverse string + palindrome
const str2 = "level";

let reverseStringg = "";

for (let i = str2.length - 1; i >= 0; i--) {
  reverseStringg += str2[i];
}

if (str2 === reverseStringg) {
  console.log("String is palindrome");
} else {
  console.log("String is not palindrome");
}

// 17 Missing number problem
function missingNumber(arr) {
  const n = arr.length + 1;

  const sumOfNArray = (n * (n + 1)) / 2;

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  let missing = sumOfNArray - sum;

  return missing;
}

const arr2 = [1, 2, 4, 5, 6, 7, 8, 9, 10];

const final = missingNumber(arr2);

console.log(final);

// 18 Count Vowels
const countVowels = ["a", "e", "i", "o", "u"];

const str4 = "himanshu";
let count4 = 0;
for (let i = 0; i < str4.length; i++) {
  if (
    str4[i] === "a" ||
    str4[i] === "e" ||
    str4[i] === "i" ||
    str4[i] === "o" ||
    str4[i] === "u"
  ) {
    count4++;
  }
}
console.log(count4);

// 19 Flatten Array
const value = [1, 2, [3, 4], [5, 6]];
const x = value.toString();
const y = x.split(",");
let finalArray2 = [];
y.map((item, index) => finalArray2.push(parseInt(item)));

console.log(finalArray2);

//20 Check Whether Two Strings Are Anagram Of Each Other
function areAnagrams(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 !== n2) return false;

  str1.sort();
  str2.sort();

  for (let i = 0; i < n1; i++) {
    if (str1[i] !== str2[i]) {
      return false;
    }
  }

  return true;
}

let arr1 = ["t", "e", "s", "t"];
let arr3 = ["t", "t", "e", "w"];

console.log(areAnagrams(arr1, arr3));

const str6 = "Hello World";
const result3 = str6.split("").reverse().join(" ");
console.log(result3);

// 21  Swap variables
let a = 10;
let b = 20;
let temp;

// temp = a;
// a = b;
// b = temp;

[a, b] = [b, a];
console.log(`Value of a after swap ${a}`);
console.log(`Value of b after swap ${b}`);

//22 Remove Vowels from String
const str5 = "himanshu";
const vowels = "aeiou";
let result4 = "";
for (let i = 0; i < str5.length; i++) {
  if (!vowels.includes(str5[i])) {
    result4 += str5[i];
  }
}
console.log(result4);
*/
// Date 24.3.2026

// 23 Find Largest And Smallest In One Loop
let numVal = [10, 5, 30, 20, 15];

let largestVal = numVal[0];
let smallestVal = numVal[0];

for (let i = 0; i < numVal.length; i++) {
  if (numVal[i] > largestVal) {
    largestVal = numVal[i];
  }

  if (numVal[i] < smallestVal) {
    smallestVal = numVal[i];
  }
}

// Print results
console.log("Largest Value", largestVal);
console.log("Smallest Value", smallestVal);

// 24 Move All Zeros To Last Position

// Input array
const newVal = [1, 0, 2, 0, 3, 4, 0];

// Pointer to track position of non-zero elements
let j = 0;

// Loop through array
for (let i = 0; i < newVal.length; i++) {
  if (newVal[i] !== 0) {
    [newVal[i], newVal[j]] = [newVal[j], newVal[i]];
    j++;
  }
}

console.log(newVal);

// 25 Find First Repeating Character
const str = "swiss";

for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
    console.log(str[i]);
    break;
  }
}

// 26 Character Frequency Using Reduce and also repeating characters
const repeating = "programming";

const unique = repeating.split("").reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;

  return acc;
}, {});

console.log(unique);

for (let key in unique) {
  if (unique[key] > 1) {
    console.log(key);
  }
}

// const str2 = "programming";
// for (let i = 0; i < str2.length; i++) {
//   if (str2.indexOf(str2[i] !== str2.lastIndexOf(str2[i]))) {
//     console.log(str2[i]);
//   }
// }
// unique Character ke liye
const str2 = "programming";
let printed = "";

for (let i = 0; i < str2.length; i++) {
  if (
    str2.indexOf(str2[i]) !== str2.lastIndexOf(str2[i]) &&
    !printed.includes(str2[i])
  ) {
    console.log("Unique repeating character:", str2[i]);
    printed += str2[i];
  }
}
console.log("All repeating characters:", printed);

// JavaScript programs to sort array without using sort ascending order
const arr = [5, 3, 8, 4, 2];

console.log("Before Sorting:", arr);

let temp;

for (let i = 0; i < arr.length - 1; i++) {
  // ascending order
  // if (arr[i] > arr[i + 1]) {
  //   temp = arr[i];
  //   arr[i] = arr[i + 1];
  //   arr[i + 1] = temp;
  //   i = -1;
  // }

  //descending order
  // ascending order
  if (arr[i] < arr[i + 1]) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    i = -1;
  }
}

console.log("After Sorting:", arr);

const arr1 = [
  { id: 1, firstName: "anshu" },
  { id: 2, firstName: "avni" },
];

const arr2 = [
  { id: 1, lastName: "shetty" },
  { id: 2, lastName: "singh" },
];

const result = arr1.map((item) => {
  let match = arr2.find((e1) => {
    return e1.id === item.id;
  });

  return {
    ...item,
    ...match,
  };
});
console.log(result);
const arr3 = [1, 2, 3, 4];
const arr4 = [3, 4, 5, 6];

const newResult = arr3.filter((item) => arr4.includes(item));
console.log(newResult);

const arr11 = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
];

const arr12 = [
  { id: 2, name: "B" },
  { id: 3, name: "C" },
];

const newResult2 = arr11.filter((a) => arr12.some((b) => b.id === a.id));
console.log(newResult2);
