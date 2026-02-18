"use strict";

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `You are ${age} born in ${birthYear}`;
    console.log(output);
  }
  if (birthYear >= 1991 && birthYear <= 1996) {
    const str = `Oh,and you're a millenial, ${firstName}`;
    console.log(str);
  }
  // console.log(str);
  printAge();

  return age;
}

const firstName = "Jonas";
calcAge(1991);
