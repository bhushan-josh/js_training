// What will be printed on console

const testAsyncFunction = () => {
  return Promise.reject("Test static reject");
};

testAsyncFunction()
  .then((res) => {
    console.log("Response in then block", res);
  })
  .catch((err) => console.log("Error in catch block", err));

// As testAsyncFunction return Promise reject message on console will be
  // Error in catch block Test static reject