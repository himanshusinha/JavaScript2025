/* Date 17.2.2026 */

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
