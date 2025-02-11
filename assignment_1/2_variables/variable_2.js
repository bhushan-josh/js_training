///////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Use the typeof operator to find the types of different variables.
//  Specially note what t typeof operator returns for arrays, null values and NaN.
//  How can you find if a variable an array or NaN besides typeof?

///////////////////////////////////////////////////////////////////////////////////////////////////

let a = "josh";
let b = 10;
let crr = [1, 2, 3, 4];
let bool = true;
let obj = { a: "one", b: "two" };
const cars = ["Saab", "Volvo", "BMW"];

console.log(typeof a);
console.log(typeof b);
console.log(typeof crr);
console.log(typeof bool);
console.log(typeof obj);

console.log(Array.isArray(cars));
console.log(Array.isArray(a));

console.log(isNaN(crr));
console.log(isNaN(10));

///////////////////////////////////////////////////////////////////////////////////////////////////

// To check the variable is array or not we can use isArray() method which returns boolean value.
// if variable is Array isArray() returns true and if variable isn't array then it will false.

// Same isNaN() method also return boolean value, if variable is NaN it returns true and if
// variable isn't NaN then it will return false.

///////////////////////////////////////////////////////////////////////////////////////////////////
