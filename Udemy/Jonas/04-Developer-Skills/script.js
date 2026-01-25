'use strict';

const x = '23';

const calcAge = birthYear => 2037 - birthYear;
console.log();
/*
Problem Statement: Temperature Amplitude

We are given an array of temperatures for one day.

The temperatures array can contain:
- Numbers (valid temperature values)
- The string "error" (which represents a sensor error)

Our task is to calculate the temperature amplitude.

Temperature amplitude is defined as:
- The difference between the highest and the lowest temperature in the array.

Steps to solve the problem:
1. Understand the problem:
   - What is temperature amplitude?
     → Difference between the highest and lowest temperature.
   - What should we do with sensor errors?
     → Ignore them completely.

2. Break the problem into sub-problems:
   - Ignore non-number values ("error").
   - Find the maximum temperature in the array.
   - Find the minimum temperature in the array.
   - Subtract minimum temperature from maximum temperature.
   - Return the result.

3. Important constraints:
   - The array may contain invalid values.
   - We must not use Math.max() or Math.min().
   - We must loop through the array manually.
   - The array may start with an "error" value.

Expected Output:
- A single number representing the temperature amplitude.
*/
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitudeNew = function (temps) {
  console.log(temps);
  let max = temps[0];

  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    console.log(currentTemp);
    if (typeof currentTemp !== 'number') continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    value: Number(prompt('Degree celsius')),
  };
  console.table(measurement);

  const kelvin = measurement.value + 273;

  return kelvin;
};
console.log(measureKelvin());
///////////////////////////////////////////////
// Coding Challenge #1
/* 
Given an array of forecasted maximum temperatures,
the thermometer display a string with these
temperatures.

Example : [17,21,23] will print ("...17°C in 1 days .
..21°C in 3 days")

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the
above to the console

Use the problem-solving framework : Understand the problem and break it up into sub-problems!

TEST DATA 1 : [17,21,23]
TEST DATA 2 : [12,5,-5,0,4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`...${data1[0]}°C ....${data1[1]}°C ...${data1[2]}°C`);

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(str);
};
printForecast(data1);
