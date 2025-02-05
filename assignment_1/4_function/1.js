////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 1. What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break?
//    Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? 
//    Can you return from inside an if block? What impact does that have? 

// A - If we use return inside for loop/ while loop / switch case then the function will return to caller from that point and remaining part of function wont execute
//   - If we pass any value after return keyword, that value will be return to the caller of function.
//   - Yes we can pass return value from the function.
//   - Yes we can return from the if block, if any code after if block that code wont executed.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Take a function that accepts a function as a parameter 
// -  test(callbackFunc) 
// -  test(callbackFunc()) 
// -  test(() => callbackFunc()) 

// function test(callback){ 
//   callback(); 
// } 

// function callbackFunc(){ 
//   console.log("Calling the callback function");
//   return; 
// } 

// test(callbackFunc)        // successfully called callback function 
// test(callbackFunc())      // throw error while execution of test() but it calls callback() method and string gets prints
// test(() => callbackFunc())   // successfully called callback function 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// -  What happens when you return callback() from the test function? 
// -  What happens when you return callback from the test function?

// function test(callback){ 
//   return callback(); 
// } 

// function callbackFunc(){ 
//   console.log("Calling the callback function");
//   return; 
// } 

// test(callbackFunc)

// This will call the callback function at line 38 and the data received from callback function will return to caller(string)

function test(callback){ 
  return callback; 
} 

function callbackFunc(){ 
  console.log("Calling the callback function");
  return; 
} 

console.log(typeof test(callbackFunc))

// This wont call the callback function but it will return the function callbackFunc
