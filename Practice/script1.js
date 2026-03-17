// Strings
let text1 = "John Doe";
let text2 = "Volvo XS";

console.log(text1 + text2);

let text3 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text3.length);

let text4 = `The quick
brown fox
jumps over
the lazy dog`;

console.log(text4);

let firstName = "John";
let lastName = "Doe";

console.log(`My first name is ${firstName} my last name is ${lastName}`);

console.log(firstName.charAt(2));

console.log(firstName.charCodeAt(3));

let job = "React Native";
let quote = "I can do it";
let char = quote[0];

console.log(job.concat(quote));
console.log(quote.at(3));

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part);

let text5 = "Please locate where 'locate' occurs!";
let index = text5.indexOf("locate");
console.log(text5.lastIndexOf("occurs"));

let text6 = "Himanshu";
console.log(text6.toUpperCase());

let x = 10;
console.log(x.toString());

let text7 = " Himanshu Sinha ";
console.log(text7.trim());

let text8 = "Dakshit Sinha";
console.log(text8.toUpperCase());
