// // Find Maximum Value in JavaScript Arrays
// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// // remove duplicate from array
// const array = [1, 2, 3, 2, 3];

// function getUniqueArray(arr) {
//   let uniqueArray = [];
//   for (let i of arr) {
//     if (uniqueArray.indexOf(i) === -1) {
//       uniqueArray.push(i);
//     }
//   }
//   console.log(uniqueArray);
// }

// getUniqueArray(array);

// // output = [1,2,3,4,5,6]
// const numArr = [1, 2, [3, 4], [5, 6]];
// const x = numArr.toString();
// const y = x.split(",");
// let finalArray = [];
// y.map((item) => finalArray.push(parseInt(item)));
// console.log(finalArray);

// // reverse a string
// function reverseString(str) {
//   let newString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }
//   return newString;
// }
// const string = "Hello";
// const result = reverseString(string);
// console.log(result);

// // find missing number from array
// function findMissingNumber(arr) {
//   let n = arr.length + 1;
//   let sumOfFirstN = (n * (n + 1)) / 2;
//   let sumOfArray = 0;
//   for (let i = 0; i < n - 1; i++) {
//     sumOfArray = sumOfArray + arr[i];
//   }
//   let missingNumber = sumOfFirstN - sumOfArray;
//   return missingNumber;
// }
// const arry = [1, 2, 5, 4, 6, 8, 7];
// const missingNumber = findMissingNumber(arry);
// console.log("Missing Number is : ", missingNumber);

// //Check Whether Two Strings Are Anagram Of Each Other
// function areAnagrams(str1, str2) {
//   let n1 = str1.length;
//   let n2 = str2.length;

//   if (n1 != n2) return false;
//   str1.sort();
//   str2.sort();

//   for (let i = 0; i < n1 - 1; i++) {
//     if (str1[i] !== str2[i]) return false;
//     return true;
//   }
// }

// let str1 = ["t", "e", "s", "t"];
// let str2 = ["t", "t", "e", "w"];

// if (areAnagrams(str1, str2)) {
//   console.log("Both strings are anagrams");
// } else {
//   console.log("Both strings are not anagrams");
// }

// // check number is prime or not
// function checkIsPrime(num) {
//   let isPrime = true;

//   if (num === 1) {
//     console.log("1 is neither prime nor composite.");
//   } else if (num > 1) {
//     for (let i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime) {
//       console.log("Number is prime");
//     } else {
//       console.log("Number is not prime");
//     }
//   }
// }
// checkIsPrime(2)
// check fibonacci series
// function fibonacci(n) {
//   if (n <= 1) return n; // base case for 0 and 1

//   let n1 = 0,
//     n2 = 1,
//     next;

//   // Loop to calculate the Fibonacci number iteratively
//   for (let i = 2; i <= n; i++) {
//     next = n1 + n2;
//     n1 = n2;
//     n2 = next;
//   }

//   return n2; // nth Fibonacci number
// }

// console.log(fibonacci(6)); // Output: 8 (Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8)

// // check vowels
// function containsOnlyVowels(str) {
//   const vowels = "aeiouAEIOU";
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.indexOf(str[i]) === -1) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(containsOnlyVowels("aeiou")); // Output: true
// console.log(containsOnlyVowels("hello")); // Output: false
