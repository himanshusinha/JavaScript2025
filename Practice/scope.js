/*  

// global scope

let a = 10;

function show() {
  console.log(a); // accessible
}
console.log(a); // accessible

// function scope
function get() {
  const c = 10;
  const d = 20;

  console.log(c, d); // c,d accessible only in function
}
// console.log(c, d); // cannot access outside of function

//block scope
if (true) {
  let e = 20;
  let f = 30;

  console.log(e, f); // only access inside block scope
}
// console.log(e, f); // cannot access outside of it

//Scope chain is how JavaScript looks for variables by moving from the current scope to outer scopes until it finds the variable or throws a ReferenceError.
let l = 20;

function outer() {
  let m = 10;

  function inner() {
    let n = 30;
    console.log(l);
    console.log(m);
    console.log(n);
  }
  inner();
}
outer();
*/

// global scope
let a = 10;

// parent scope
function outer() {
  let b = 20;

  function inner() {
    // current scope
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
  }
  inner();
}
outer();

// scope chaining
// execution global()->outer()->inner()
let fatherName = "Himanshu";

function displayChild() {
  let sonName = "Dakshit";

  function displayMa() {
    let motherName = "Pooja";
    console.log(fatherName);
    console.log(motherName);
    console.log(sonName);
  }
  displayMa();
}
displayChild();

