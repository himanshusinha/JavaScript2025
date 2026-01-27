/* 27.1.2026 */
/* 
// Print number from 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log("Value of i :", i);
}

// Print number from 10 to 1
for (let j = 10; j >= 1; j--) {
  console.log("Value of j :", j);
}

*/

// Print even number from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log("Even numbers :", i);
  }
}

// Print odd number from 1 to 50
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log("Odd numbers :", i);
  }
}

// Sum of numbers from 1 to 100
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
  console.log("Sum of 1 to 100 is :", sum);
}

// Stop loop at 7 using break
for (let k = 1; k <= 10; k++) {
  if (k === 7) break;
  console.log("break loop :", k);
}
// Stop loop at 5 using continue
for (let m = 1; m <= 10; m++) {
  if (m === 4) continue;
  console.log(m);
}
//print *
/*
 *
 **
 ***
 ****
 */
for (let i = 1; i <= 4; i++) {
  let sum = "";
  for (let j = 1; j <= i; j++) {
    sum += "*";
  }
  console.log(sum);
}
