// const family = {
//   fatherName: "Himanshu",
//   sonName: "Dakshit",
//   motherName: "Pooja",
//   getSonName: function () {
//     return this.sonName;
//   },
//   getMotherName: function () {
//     return this.motherName;
//   },
// };

// console.log(family.getSonName()); // Dakshit
// console.log(family.getMotherName()); // Dakshit

const obj = {
  name: "Himanshu",
  show() {
    console.log(this.name);
  },
};

obj.show(); // this = obj

let myInfo = {
  myName: "Himanshu",
  age: 35,
  mySurName: "Sinha",
  getMySurName: function () {
    // function declaration
    return this.mySurName;
  },
};
// properties access
console.log(myInfo.mySurName);
console.log(myInfo.age);

// Function define karte time `this` ka value decide nahi hota
// Function call karne par `this` current object ko refer karta hai
