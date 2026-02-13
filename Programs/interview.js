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
// 3 se 7 ke beech ke numbers array1 me se print karo

/* 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {  
  if (array[i] >= 3 && array[i] <= 7) {  
    console.log(array[i]);              
  }
}

console.log("-----");

// 55–150 ke beech ke numbers array2 me count karo
let count = 0;
const array2 = [10, 55, 70, 120, 95, 40, 85, 150];
for (let i = 0; i < array2.length; i++) { 
  if (array2[i] >= 55 && array2[i] <= 150) {  
    console.log(array2[i]);                  
    count++;                               
  }
}
console.log("Count of numbers between 55-150:", count);

console.log("-----");

// 50–100 ke beech ke numbers ka sum nikaalo
let sum2 = 0;
const numbers = [25, 60, 45, 80, 110, 95, 30, 75, 150];
for (let i = 0; i < numbers.length; i++) {  
  if (numbers[i] >= 50 && numbers[i] <= 100) {
    console.log("number is", numbers[i]);    
    sum2 = sum2 + numbers[i];                 
  }
}
console.log("Sum of numbers between 50-100:", sum2);

console.log("-----");

// 50–100 ke numbers ko new array me store karo
let total = [];
const num = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];
for (let i = 0; i < num.length; i++) {
  if (num[i] >= 50 && num[i] <= 100) {   
    console.log(num[i]);                
    total.push(num[i]);                
  }
}
console.log("Array of numbers between 50-100:", total);

console.log("-----");

// 50–100 ke numbers ka average nikaalo
const num2 = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];
let sum1 = 0;
let count1 = 0;

for (let i = 0; i < num2.length; i++) {
  if (num2[i] >= 50 && num2[i] <= 100) {
    console.log(num2[i]);               
    sum1 += num2[i];                    
    count1++;                          
  }
}

const avg = sum1 / count1;           
console.log("Average of numbers between 50-100:", avg);

*/

/* 
 // Date 13.2.2026
const arr = [5, 15, 22, 30, 10, 18];
// 10 se bade numbers
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     console.log(arr[i]);
//   }
// }
// 20 se chote numbers
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 20) {
    console.log(arr[i]);
  }
}
// Sirf even numbers print karo.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even numbers", arr[i]);
  }
}

// Sirf odd numbers print karo.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log("Odd numbers", arr[i]);
  }
}

// Even numbers ka sum nikaalo.
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even numbers", arr[i]);
    sum += arr[i];
  }
}
console.log(sum);

// Even numbers ka sum nikaalo.
let total = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    console.log("Even numbers", arr[i]);
    total += arr[i];
  }
}
console.log(total);
// 3 se divisible numbers print karo
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    console.log(arr[i]);
  }
}

// 5 se divisible numbers count karo.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 5 === 0) {
    console.log(`Number divisible by 5 ${arr[i]}`);
  }
}
const arr = [2, 3, 4, 6, 12, 15, 18, 20];
// 2 aur 3 dono se divisible numbers print karo.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0 && arr[i] % 3 === 0) {
    console.log(`${arr[i]} is divisible by both 2 and 3`);
  }
}

//Range check: 5–10, 50–100 ke numbers count ya sum
const numbers = [2, 5, 6, 9, 10, 12, 25, 55, 60, 75, 80, 95, 100, 120];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] >= 5 && numbers[i] <= 10) {
//     console.log(numbers[i]);
//   }
// }
let count = 0;
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] >= 50 && numbers[i] <= 100) {
    console.log(numbers[i]);
    sum += numbers[i];
    count++;
  }
}
console.log(count);
console.log(`Sum is ${sum}`);


const numbers = [10, -5, 0, 25, -30, 15, -2, 50, -100];

let positiveCount = 0;
let negativeCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    console.log("Positive:", numbers[i]);
    positiveCount++;
  } else if (numbers[i] < 0) {
    console.log("Negative:", numbers[i]);
    negativeCount++;
  }
}

// Result
console.log("Total Positive Numbers:", positiveCount);
console.log("Total Negative Numbers:", negativeCount);
// 3 se 7 ke beech ke numbers array1 me se print karo

/* 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {  
  if (array[i] >= 3 && array[i] <= 7) {  
    console.log(array[i]);              
  }
}

console.log("-----");

// 55–150 ke beech ke numbers array2 me count karo
let count = 0;
const array2 = [10, 55, 70, 120, 95, 40, 85, 150];
for (let i = 0; i < array2.length; i++) { 
  if (array2[i] >= 55 && array2[i] <= 150) {  
    console.log(array2[i]);                  
    count++;                               
  }
}
console.log("Count of numbers between 55-150:", count);

console.log("-----");

// 50–100 ke beech ke numbers ka sum nikaalo
let sum2 = 0;
const numbers = [25, 60, 45, 80, 110, 95, 30, 75, 150];
for (let i = 0; i < numbers.length; i++) {  
  if (numbers[i] >= 50 && numbers[i] <= 100) {
    console.log("number is", numbers[i]);    
    sum2 = sum2 + numbers[i];                 
  }
}
console.log("Sum of numbers between 50-100:", sum2);

console.log("-----");

// 50–100 ke numbers ko new array me store karo
let total = [];
const num = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];
for (let i = 0; i < num.length; i++) {
  if (num[i] >= 50 && num[i] <= 100) {   
    console.log(num[i]);                
    total.push(num[i]);                
  }
}
console.log("Array of numbers between 50-100:", total);

console.log("-----");

// 50–100 ke numbers ka average nikaalo
const num2 = [12, 55, 78, 34, 99, 120, 65, 43, 88, 150];
let sum1 = 0;
let count1 = 0;

for (let i = 0; i < num2.length; i++) {
  if (num2[i] >= 50 && num2[i] <= 100) {
    console.log(num2[i]);               
    sum1 += num2[i];                    
    count1++;                          
  }
}

const avg = sum1 / count1;           
console.log("Average of numbers between 50-100:", avg);

// Array reverse karna (without using reverse())
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

const arr = [10, 25, 30, 45, 50];
const num = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 50) {
    num.push(arr[i]);
    count++;
  }
}
console.log(count);
console.log(num);

const myName = "Himanshu Sinha";
let newString = "";
for (let i = myName.length - 1; i >= 0; i--) {
  newString += myName[i];
}
console.log(newString);

function reverseString(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}
const str3 = "My name is himanshu sinha";
console.log(reverseString(str3));

const arr = [12, 55, 7, 90, 34];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("max in array", max);
for (let i = 0; i < arr.length; i++) {
  if (arr[i] < max) {
    max = arr[i];
  }
}
console.log("min in array", max);

// Array ke even numbers ko reverse order me print karo

const arr = [1, 2, 3, 4, 5, 6];

for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 === 0) {
    console.log(arr[i]);
  }
}
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] % 2 !== 0) {
    console.log(arr[i]);
  }
}
//Reverse loop me maximum number ka sum nikaalo
// let sum = 0;
// const num = [25, 60, 75, 40, 90];
// for (let i = num.length - 1; i >= 0; i--) {
//   sum += num[i];
//   console.log(num[i]);
// }
// console.log("Sum is ", sum);

// Reverse loop me minimum number nikaalo
const maxArr = [10, 50, 20, 70];
let max = maxArr[0];
for (let i = maxArr.length - 1; i >= 0; i--) {
  if (maxArr[i] > max) {
    max = maxArr[i];
  }
}
console.log(max);

//Reverse loop me string me vowels count karo
const str = "Himanshu";
let newString = "";
let count = 0;
for (let i = str.length - 1; i >= 0; i--) {
  newString += str[i];
  if (
    str[i] === "a" ||
    str[i] === "e" ||
    str[i] === "i" ||
    str[i] === "o" ||
    str[i] === "u"
  ) {
    count++;
  }
}
console.log(count);
console.log(newString);

// palindrome reverse loop me

const reverseString = "level";
let newStr = "";

for (let i = reverseString.length - 1; i >= 0; i--) {
  newStr += reverseString[i];
}

if (reverseString === newStr) {
  console.log("String is pelindrome");
} else {
  console.log("String is not palindrome");
}
//Reverse loop me maximum number nikaalo aur uska sum
let sum = 0;
const num = [25, 60, 75, 40, 90];
let maxx = num[0];
for (let i = num.length - 1; i >= 0; i--) {
  if (num[i] > maxx) {
    maxx = num[i];
  }
  sum += num[i];
}
console.log("Max is", maxx);
console.log("Sum is", sum);

//Reverse loop me min number nikaalo 
let min = num[0];
for (let i = num.length - 1; i >= 0; i--) {
  if (num[i] < min) {
    min = num[i];
  }
}
console.log(min);

*/
