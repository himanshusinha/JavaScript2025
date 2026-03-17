const car = {
  type: "Fiat",
  model: "500",
  color: "white",
};

console.log(car.type, car.model, car.color);

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

console.log(person.firstName, person.lastName, person.age, person.eyeColor);

const person2 = {};

person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

const person3 = new Object({
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
});

console.log(person3.firstName, person3.lastName);

let age = person3.age;

let age1 = person3["age"];

console.log(
  person3["firstName"] + "is" + person3["lastName"] + person3["age1"],
);

const myInfo = {
  firstName: "Himanshu",
  lastName: "Sinha",
  age: 35,
  fullInfp: function () {
    return this.firstName + this.lastName;
  },
};

// Create an Object
const person5 = {
  name: "John",
  age: 30,
  city: "New York",
};

let text = person5;
console.log(text);

function MyInfo(first, last, age) {
  this.first = first;
  this.last = last;
  this.age = age;
}

const myInfo1 = new MyInfo("John", "Doe", 33);
console.log(myInfo1);
