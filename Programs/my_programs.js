// 27.3.2026
// 1 print only duplicate values in array
const data = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 6, 6, 6, 6, 6];

let uniqueArr = [];
for (let i = 0; i < data.length; i++) {
  let count = 0;
  for (let j = 0; j < data.length; j++) {
    if (data[i] === data[j]) {
      count++;
    }
  }
  if (count > 1) {
    uniqueArr.push(data[i]);
  }
}
console.log(uniqueArr);

// 2 print only unique value
const data2 = [1, 2, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 8, 6, 6, 6, 6, 6];

let finalArr = [];

for (let i = 0; i < data2.length; i++) {
  if (finalArr.indexOf(data2[i]) === -1) {
    finalArr.push(data2[i]);
  }
}
console.log(finalArr);

// 3 output = [1,2,3,4,5,6]
const numArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const x = numArr.toString();
const y = x.split(",");
let newArray = [];
y.map((item) => newArray.push(parseInt(item)));
console.log(newArray);

// 4 reverse sring
const myName = "Himanshu";
let newString = "";
for (let i = myName.length - 1; i >= 0; i--) {
  newString += myName[i];
}
console.log(newString);

// 5 Missing Number from array
function missNumber(arr) {
  let n = arr.length + 1;
  let sumOfNArray = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let missNum = sumOfNArray - sum;
  return missNum;
}
const findNum = [1, 2, 4, 5, 6, 7, 8, 9, 10];
const missingNum = missNumber(findNum);
console.log("Mising Number is", missingNum);
