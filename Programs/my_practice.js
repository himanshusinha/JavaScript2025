// Date 24.3.2026

// 7 Sorting Array
const xm = [1, 2, 3, 5, 6, 7, 8, 9, 10];
const res = missingNumber(xm);

console.log("Missing num", res);

const arr = [5, 3, 8, 4, 2];
let temp;
console.log("Before Sorting", arr);
for (let i = 0; i < arr.length - 1; i++) {
  if (arr[i] > arr[i + 1]) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    i = -1;
  }
}
console.log("After Sorting", arr);
// Freguency Array
const unique = data2.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(unique);

//  remove duplicates
const uniqueArr = data2.filter((item, index) => data2.indexOf(item) === index);

console.log(uniqueArr);

const uniqueArr2 = data2.filter((item, index) => data2.indexOf(item) !== index);
const newArr = [...new Set(uniqueArr2)];
console.log(newArr);

console.log(data2.slice(0, 2));
