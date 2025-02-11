// Declare a variable let arraySize = 25;.
// Using a for loop, add numbers from one onwards into an array till the arraySize is reached.
// (while loop)

let Arr = new Array(25);

let i = 0;
while (Arr.length > i) {
  Arr[i] = ++i;
}

console.log(Arr);
