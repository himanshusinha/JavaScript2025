const num = [1, 2, [3, 4], [5, 6]];
const x = num.toString();
const y = x.split(",");
let finalArray = [];
y.map((item) => {
  finalArray.push(parseInt(item));
});
console.log(finalArray);
