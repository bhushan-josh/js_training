/////////////////////////////////////////////////////////////////////////////////////////////////

// 1. What is the difference between ++i and i++? 

// A - ++i is pre increment which increment tha variable first and them it will be assigned
//   - i++ is post increment which will assigned first and then incremented

/////////////////////////////////////////////////////////////////////////////////////////////////

// 2. What do you think would happen if you pass an index beyond the range of the string?
//    Or if you pass a negative index? Try it out. 

// let str2 = "josh";

// console.log(str2.at(-3))    // o
// console.log(str2.at(-2))    // s

// console.log(str2.at(5))     // undefined

// A - when we pass index beyond the range of the string it will return undefined 
//     as that index is not defined anywhere

//     if we pass negative index then indexing start from ending of the string
//     for example we pass -1 index in str2 then it will return 'h' character

/////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Do you think JSON.stringify would work for arrays as well?

// A - Yes, stringify works with arrays.

// What about nested objects? 
// A - Nested object is object inside object.

// What happens if we pass numbers, strings, undefined, null to JSON.stringify? 
// A - Number, string, null converted into strings
//     but only for `undefined` JSON.stringify will return `undefined` type and not string

// var hash = {
//   "name" : 99,
//   "email" : undefined,
//   "country" : "africa",
//   "phone": null
// };

// var string = JSON.stringify(hash);

// console.log(string)

/////////////////////////////////////////////////////////////////////////////////////////////////

// 4. What happens if you pass a regular/invalid JSON string to JSON.parse? 
//    What will happen if such an invalid function runs in the program? 
//    Will other parts of the code execute correctly after that?

// A - If we pass an regular json string to JSON.parse(), it will convert it into Json object.
    // var obj = JSON.parse('{ "name":"Bhushan", "city":"Pune"}'); 
    // console.log(obj)

//   - If we pass an invalid JSON string to JSON.parse(), it will throw a SyntaxError.

//   - As the Error occurs the program will terminate and other part wont be executed.

/////////////////////////////////////////////////////////////////////////////////////////////////