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
*/
