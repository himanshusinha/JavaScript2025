// IIFE imediate invoke function expression
// An IIFE is a function that invokes itself when defined.

(function chai() {
  // named
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("Himanshu");

// Global Scope
let count = 0;

const add = (function () {
  // Lexical Scope:
  // This function can access variables from its outer (global) scope.
  // Accessing 'count' here is possible due to lexical scoping.

  if (count === 0) {
    count += 1;
  }

  // Closure:
  // The inner function retains access to the variable 'count'
  // even after the outer function (IIFE) has finished execution.

  return function () {
    count += 1;
    console.log(count);
  };
})(); // IIFE executes immediately

add();
add();
add();

// Object Get Set
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
person.lang = "en";
console.log(person.lang);

// Classes

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const c1 = new Car("Volvo", 2025);
const c2 = new Car("BMW", 2026);
console.log(c1.name + " " + c2.name);

// inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} barks`);
  }
}
const d = new Dog("Tommy");
d.speak();
d.bark();

// static - A static member in JavaScript is a class-level method or property that can be called directly on the class without creating an instance of that class.
class MathUtils {
  static pi = 3.141;

  static square(n) {
    return n * n;
  }
}
console.log(MathUtils.pi);
console.log(MathUtils.square(5));

// Asyncronous

console.log("Start");

setTimeout(() => {
  console.log("Start after 2 seconds");
}, 2000);

console.log("End");

function myFunc(data) {
  setTimeout(() => {
    data("Data received");
  }, 2000);
}
