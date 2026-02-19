function myName(name, callback) {
  console.log("Hello", name);
  callback();
}

function sayHello() {
  console.log("Hello Buddy");
}
myName("Himanshu", sayHello);

// Asynchronous Callback
setTimeout(sayHi, 2000);
function sayHi() {
  console.log("Hello");
}

console.log("start");

setTimeout(function () {
  console.log("Asyn task run");
}, 2000);

console.log("end");

//this
const user = {
  firstName: "Himanshu",
  lastName: "Sinha",
  age: 35,
  getInfo: function () {
    return "age is" + " " + this.age;
  },
};
console.log(user.getInfo());

// Object jisko hum "this" banana chahte hain
const obj = {
  name: "John",
};

// Normal function
function greet(message) {
  console.log(`${message}, ${this.name}`);
}

/*
call()
Definition:
call() method immediately function ko execute karta hai
aur "this" ki value manually set karne deta hai.
Arguments comma separated pass hote hain.
*/
greet.call(obj, "Hello"); // Output: Hello, John

/*
bind()
Definition:
bind() method function ko immediately execute nahi karta.
Ye ek new function return karta hai jisme "this" permanently set ho jata hai.
Baad me us function ko call karte hain.
*/
const bindFunction = greet.bind(obj);
bindFunction("Hi"); // Output: Hi, John

/*
apply()
Definition:
apply() method bhi function ko immediately execute karta hai,
lekin arguments array ke form me pass hote hain.
*/
greet.apply(obj, ["Hello"]); // Output: Hello, John

const myInfo = {
  name: "Himanshu",
};

function myGreet(message) {
  console.log(`${message} ${this.name}`);
}

myGreet.call(myInfo);
