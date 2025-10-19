// Data types are of two types :

// 1. Primitive Data Types
// 2. Non-primitive Data Types

// 1. Primitive Data Types :

// 1.1 String :
let mentor1 = "Prabir";
let mentor2 = "Mithun S";
let mentor3 = `Vishwa Mohan Singh`;

console.log(mentor1, typeof mentor1);
console.log(mentor2, typeof mentor2);
console.log(mentor3, typeof mentor3);

// ---------------------------------------

// 1.2. Number :

let num1 = 1234567890;
let num2 = 98.74;
let num3 = Infinity;
let num4 = NaN;
let num5 = -45;

console.log(num1, typeof num1);
console.log(num2, typeof num2);
console.log(num3, typeof num3);
console.log(num4, typeof num4);
console.log(num5, typeof num5);

// -------------------------------------------

// 1.3 BigInt :

const bigNum1 = 1234567890123456789012345678901234567890n;
const bigNum2 = BigInt(123456789012345678901234567890123);

console.log(bigNum1, typeof bigNum1);
console.log(bigNum2, typeof bigNum2);

// -----------------------------------------------

// 1.4 Boolean : true or false

let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn, typeof isLoggedIn);
console.log(isAdmin, typeof isAdmin);

const a = BigInt(123456789000);
const b = BigInt(5000);
console.log(a + b);

// ----------------------------------------------------

// 1.5 null :

const emptyValue1 = null;
const value = 2;
const output = emptyValue1 + value;

console.log(emptyValue1, typeof emptyValue1);
console.log(output, typeof output);

// -------------------------------------------------

// 1.6 undefined :

let notInitializedValue;
const undefinedValue = undefined;

console.log(notInitializedValue, typeof notInitializedValue);
console.log(undefinedValue, typeof undefinedValue);

// ----------------------------------------------------
