// Date 24.3.2026

const data2 = [1, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 6, 6, 6, 6, 6];

// 1 unique values
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

// 2 remove duplicates
let finalArr = [];
for (let i = 0; i < data2.length; i++) {
  if (finalArr.indexOf(data2[i]) === -1) {
    finalArr.push(data2[i]);
  }
}
console.log(finalArr);

// 3 Find maximum and minimum from array
const array = [1, 2, 3, 2, 3];
let max = array[0];
let min = array[0];
for (let i = 0; i < array.length; i++) {
  // maximum
  if (array[i] > max) {
    max = array[i];
  }
  //minimum
  if (array[i] < min) {
    min = array[i];
  }
}
console.log("Maximum", max);
console.log("Minimum", min);

// 4 output = [1,2,3,4,5,6]
const numArr = [1, 2, [3, 4], [5, 6]];
const x = numArr.toString();
const y = x.split(",");
let finalArray = [];
y.map((item) => finalArray.push(parseInt(item)));
console.log(finalArray);

// 5 reverse string
const reverseString = "Hello Himanshu";
let newString = "";
for (let i = reverseString.length - 1; i >= 0; i--) {
  newString += reverseString[i];
}
console.log(newString);

// 6 Missing Number from array
function missingNumber(arry) {
  let n = arry.length + 1;
  let sumOfNArray = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arry.length; i++) {
    sum = sum + arry[i];
  }
  let missNum = sumOfNArray - sum;
  return missNum;
}
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

console.log(data2.slice(0,2));
