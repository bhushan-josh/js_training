// What will be printed on console

const testAsyncFunction = () => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Test Resolve");
    } else {
      reject("Test Reject");
    }
  }).catch((err) => {
    console.log("Error caught in testAsyncFunction", err);
    throw new Error("Forced error");
  });
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block: ", res);
  })
  .catch((err) => console.log("Error in catch block: ", err));


// If number genrated by Math.random()>0.5 
    // Response in then block: Test Resolve

// If genrated number lesser than 0.5
    // Error caught in tesAsyncFunction  Test Reject
    // Error in catch block: Error: Forced error