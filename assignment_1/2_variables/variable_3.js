//////////////////////////////////////////////////////////////////////////////////////////////

// 3. Use let and const to create arrays and objects.
// Try modifying, deleting properties within the array or object.
// What actually happens in both cases.
// What is the difference between an object declared as a let or a const variable?

//////////////////////////////////////////////////////////////////////////////////////////////

let Array1 = [1, 2, 3, 4, 5];

console.log(Array1);

Array1[0] = 9;
delete Array1[1];
console.log(Array1);

Array1[1] = 8;
console.log(Array1);

Array1 = [5, 6, 7, 8]; //reinitialize Array1
console.log(Array1);

//////////////////////////////////////////////////////////////////////////////////////////////

// const Array2 = [10, 20, 30, 40, 50];

// console.log(Array2);

// Array2[0] = 9
// delete Array2[1];
// console.log(Array2);

// Array2[1] = 8
// console.log(Array2);

// // Array2 = [5,6,7,8]          //error
// console.log(Array2);

//////////////////////////////////////////////////////////////////////////////////////////////

// const druva = { engg1: "prashant", engg2: "pratik", engg3: "aniket" };

// console.log(druva);

// druva.engg2 = "rohan";
// delete druva.engg3;

// console.log(druva);

//////////////////////////////////////////////////////////////////////////////////////////////

// let josh = { intern1: "bhushan", intern2: "harsh", intern3: "shubham" };

// console.log(josh);

// josh.intern2 = "krushnal";
// delete josh.intern3;

// console.log(josh);

//////////////////////////////////////////////////////////////////////////////////////////////

// Conclusion
//   - When we create array or object using let keyword we can reassign the array or object
//   - Where as when we create with const we can not reassign array or object
//   - Other deletion and modification works same for both keyword

//////////////////////////////////////////////////////////////////////////////////////////////
