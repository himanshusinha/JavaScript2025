const country = "India";
const continent = "Asia";
let population = 147; 
let isIsland = false;
let language = country;

console.log("Country is", country);
console.log("Continent is", continent);
console.log("Population is", population);

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

isIsland = true;

// Basic Operators
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 = `${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description1);
