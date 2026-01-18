
// string operations in JavaScript

let string1 = "Hello "
let string2 = "Coders!"

// concatenation
let string3 = string1+string2

console.log("Concatenated String:", string3);

// string length
let strLength = string3.length;
console.log("Length of Concatenated String:", strLength);

// accessing characters
console.log("First character:", string3[0]);
console.log("Last character:", string3[strLength - 1]);

// substring
let substring = string3.substring(0, 5);
console.log("Substring (0-5):", substring);