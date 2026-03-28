// Date 28.3.2026

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
