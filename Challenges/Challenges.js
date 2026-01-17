/* Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:

BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall. 



// Test Data 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// Calculate BMIs for Mark and John
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

// Log the BMI values
console.log("Mark's BMI:", BMIMark);
console.log("John's BMI:", BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log("Does Mark have a higher BMI than John?", markHigherBMI);

// Test Data 2
const massMark2 = 95;
const heightMark2 = 1.88;
const massJohn2 = 85;
const heightJohn2 = 1.76;

// Calculate BMIs for Mark and John with Test Data 2
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
*/
/* 

CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

"Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

2. Modify the outputs above to use template literals to include the BMI values in the outputs.

Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

Note: Don't round the BMI values. Leave them as they are.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).


*/

const massMark2 = 78;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;

// const massMark2 = 95;
// const heightMark2 = 1.88;
// const massJohn2 = 85;
// const heightJohn2 = 1.76;

// Calculate BMIs for Mark and John with Test Data 2
const BMIMark2 = massMark2 / (heightMark2 * heightMark2);
const BMIJohn2 = massJohn2 / (heightJohn2 * heightJohn2);
if (BMIMark2 > BMIJohn2) {
  console.log(`Marks BMI ${BMIMark2} is higher than ${BMIJohn2} John's BMI `);
} else {
  console.log(`John's BMI ${BMIJohn2} is higher than ${BMIMark2} Mark's BMI `);
}
