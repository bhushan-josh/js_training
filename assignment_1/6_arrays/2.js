// 2. What makes a method mutating or non mutating in Javascript? Find out whether each of the following methods are mutating or non-mutating. How can you verify this?: 
// - push 
// - pop 
// - sort 
// - find 
// - map 
// - filter 

// Mutating method in javascript are the method which change the actual array (push(), pop(), sort())
// while non mutating method are method which create new array without changing the actual array.(map(), filter(), sort(), find())

let array = [8, 4, 7, 2, 5];

array.pop();
console.log(array); 

array.push(7);
console.log(array); 

array.sort();
console.log(array); 

const arr = array.filter((i) => i % 2 == 0);
console.log(arr); 

const brr = array.find((i) => i == 7);
console.log(brr); 

const crr = array.map((i) => i + 10);
console.log(crr); 
