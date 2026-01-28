/* 27.1.2026 */
/* 
// 1 Print number from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("Value of i :", i);
}

// 2 Print number from 10 to 1
for (let j = 10; j >= 1; j--) {
  console.log("Value of j :", j);
}

// 3 Print even number from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Even numbers :", i);
  }
}

// 4 Print odd number from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers :", i);
  }
}

// 5 Sum of numbers from 1 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
  console.log("Sum of 1 to 100 is :", sum);
}

// 6 Stop loop at 7 using break
for (let k = 1; k <= 10; k++) {
  if (k === 7) break;
  console.log("break loop :", k);
}
// 7 Stop loop at 5 using continue
for (let m = 1; m <= 10; m++) {
  if (m === 4) continue;
  console.log(m);
}

// 8 print * pattern

function pattern(num) {
  for (let i = 1; i <= num; i++) {
    let sum = "";
    for (let j = 1; j <= i; j++) {
      sum += "*";
    }
    console.log(sum);
  }
}
pattern(5);
// max number from array
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
let max = arr[0];

for (let i = 0; i <= arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max);

//28.1.2026 
// 11 Multiplication of table
let num = 2;
for (let i = 1; i <= 10; i++) {
  console.log(`Multiplication of ${i}*${num}=${i}`);
}
// 12 Count even numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even Number from 1 to 100 is : ", i);
  }
}
 */
// 13 Count odd numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log("Odd Number from 1 to 100 is : ", i);
  }
}

// 14 Print numbers from 1 to 100 divisible by 3 and 5
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Number is divisible by 3 and 5 is :", i);
  }
}
//15 factorial of number
let num = 5;
let factorial = 1;

for (let i = 1; i <= num; i++) {
  factorial = factorial * i;
}

console.log(`Factorial of ${num} is ${factorial}`);
