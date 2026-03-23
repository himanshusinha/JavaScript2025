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
