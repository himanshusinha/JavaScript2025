/* Date 17.2.2026 */
/*  
const num = [5, 15, 22, 30, 10, 18];

// 10 se bade numbers
for (let i = 0; i < num.length; i++) {
  if (num[i] > 10) {
    console.log("Numbers greater than 10", num[i]);
  }
}
// 20 se chote numbers
for (let i = 0; i < num.length; i++) {
  if (num[i] < 20) {
    console.log("Numbers less than 20", num[i]);
  }
}

// Sirf even numbers print karo.
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    console.log("Even Numbers", num[i]);
  }
}
// Sirf odd numbers print karo.
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 !== 0) {
    console.log("Odd Numbers", num[i]);
  }
}

// Sirf even numbers ka sum print karo.
let sum = 0;
for (let i = 0; i < num.length; i++) {
  if (num[i] % 2 === 0) {
    sum += num[i];
  }
}
console.log(sum);
*/

/* Date 18.2.2026 */
/*  
// 3 se divisible numbers or count bhi print karo
let count = 0;
const arr = [5, 15, 22, 30, 10, 18];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    console.log("Number divisible by 3 is", arr[i]);
    count++;
  }
}
console.log("Count is", count);

// 5 se divisible numbers or count bhi print karo
let count = 0;
const arr = [5, 15, 22, 30, 10, 18];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 === 0) {
    console.log("Number divisible by 5 is", arr[i]);
    count++;
  }
}
console.log("Count is", count);

// 2 or 3 dono se divisible number print karo aur count bhi
const arr = [5, 15, 22, 30, 10, 18];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
    console.log("Numer divisble by 2 and 3 is", arr[i]);
    count++;
  }
}
console.log(count);

// Range check 5-10 tak ke numbers print karo
const numbers = [2, 3, 4, 6, 12, 15, 18, 20];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 5 && numbers[i] < 10) {
    console.log(numbers[i]);
  }
}

// Range 50-100 tak ke numbers print karo
const numbers = [55, 60, 75, 80.95, 100, 120];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 50 && numbers[i] < 100) {
    console.log(numbers[i]);
  }
}

// 19.2.2026 

// 1 positive and negative count print karo
let positiveCount = 0;
let negativeCount = 0;
const numbers = [10, -5, 0, 25, -30, 15, -2, 50, -100];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log("PositiveNumbers", numbers[i]);
    positiveCount++;
  } else {
    console.log("NegativeNumbers", numbers[i]);
    negativeCount++;
  }
}
// 2 3 se 7 ke beech ke numbers count karo
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 3 && arr[i] < 7) {
    console.log(arr[i]);
    count++;
  }
}
console.log(count);

// 3 55 - 150 ke beech ke numbers count karo
const arr2 = [10, 55, 70, 120, 95, 40, 85, 150];
let count2 = 0;
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 55 && arr2[i] < 150) {
    console.log(arr2[i]);
    count2++;
  }
}
console.log(count2);

// 4 50 - 100 ke beech ke numbers ka sum
const arr3 = [10, 55, 70, 120, 95, 40, 85, 150];
let count3 = 0;
let sum3 = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > 50 && arr3[i] < 100) {
    console.log(arr3[i]);
    sum3 += arr3[i];
    count3++;
  }
}
console.log(sum3);
console.log(count3);

// 5 50 - 100 ke beech ke numbers ko new array me store karo
const num = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];

let total = [];

for (let i = 0; i < num.length; i++) {
  if (num[i] > 50 && num[i] < 100) {
    total.push(num[i]);
  }
}
console.log(total);

// 20.2.2026
// 1. 50-100 ke beech ke numbers ka average nikalo
let sum = 0;
let count = 0;
const num = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];
for (let i = 0; i < num.length; i++) {
  if (num[i] > 50 && num[i] < 100) {
    sum += num[i];
    count++;
  }
}
const average = sum / count;
console.log(average);
console.log(count);

// 2. Reverse string
const myName = "Himanshu";
let newString = "";
for (let i = myName.length - 1; i >= 0; i--) {
  newString += myName[i];
}
console.log(newString);

// 3 Max from the array
const arr = [12, 55, 7, 90, 34];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("Max is", max);

// 4 Min from the array
let min = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
}
console.log("Min is", min);

//5 Array me even numbers ke sum ko reverse print karna hai
const arr3 = [1, 2, 3, 4, 5, 6];
let sum3 = 0;
for (let i = arr3.length - 1; i >= 0; i--) {
  if (arr3[i] % 2 === 0) {
    console.log("Even numbers", arr3[i]);
    sum3 += arr3[i];
  }
}
console.log(sum3);

//6 Array me even numbers ke sum ko reverse print karna hai
const arr4 = [1, 2, 3, 4, 5, 6];
let sum4 = 0;
for (let i = arr4.length - 1; i >= 0; i--) {
  if (arr4[i] % 2 !== 0) {
    console.log("Odd numbers", arr4[i]);
    sum4 += arr4[i];
  }
}
console.log(sum4);


// 21.2.2026
// 1 Remove duplicates from array
const arr = [1, 2, 3, 3, 4, 3, 5];
let unique = [];

for (let i = 0; i < arr.length; i++) {
  if (unique.indexOf(arr[i]) === -1) {
    unique.push(arr[i]);
  }
}
console.log(unique);

// 2 How to find duplicate values in array
const arr2 = [1, 2, 3, 3, 4, 3, 5];
let duplicate = [];
for (let i = 0; i < arr2.length; i++) {
  if (arr2.indexOf(arr2[i]) !== i && duplicate.indexOf(arr2[i]) === -1) {
    duplicate.push(arr2[i]);
  }
}
console.log(duplicate);

// 3 second largest from the array
const arr3 = [1, 2, 3, 3, 4, 3, 5];
let firstLargest = arr3[0];

for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > firstLargest) {
    firstLargest = arr3[i];
  }
}

let secondLargest = arr3[0];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] > secondLargest && arr3[i] < firstLargest) {
    secondLargest = arr3[i];
  }
}
console.log(secondLargest);
*/

// 22.2.2026
// 1 middle ke number nikalo
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (i === arr.length / 2 || i === arr.length / 2 - 1) {
    console.log(arr[i]);
  }
}

// 2 find missing number from array
function findMissingNumber(arr1) {
  let n = arr1.length + 1;
  let sumOfFirstN = (n * (n + 1)) / 2;
  let sumOfArray = 0;
  for (let i = 0; i < arr1.length; i++) {
    sumOfArray = sumOfArray + arr1[i];
  }
  let missingNumber = sumOfFirstN - sumOfArray;
  return missingNumber;
}
const arr1 = [1, 2, 3, 4, 6];
const missingNumber = findMissingNumber(arr1);
console.log("Missing Number is :", missingNumber);

// 23.2.2026

// 1 Check Whether Two Strings Are Anagram Of Each Other
function checkAnagram(str1, str2) {
  let n1 = str1.length;
  let n2 = str2.length;

  if (n1 !== n2) return false;

  for (let i = 0; i < n1 - 1; i++) {
    if (str1[i] !== str2[i]) return false;
    return true;
  }
}
let str1 = ["t", "e", "s", "t"];
let str2 = ["t", "t", "e", "w"];

if (checkAnagram(str1, str2)) {
  console.log("Both strings are anagrams");
} else {
  console.log("Both strings are not anagrams");
}

// 2 check vowels
function containsOnlyVowels(str) {
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(containsOnlyVowels("aeiou")); // Output: true
// console.log(containsOnlyVowels("hello")); // Output: false
