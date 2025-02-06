// Write a function that can stop execution of a function for the number of milliseconds
// sent as an argument

const sleep = (time) => {
  setTimeout(() => {
    console.log("Printing after sleep!");
  }, time);
};

const func = async () => {
  console.log("Printing before");

  // Call the sleep function to pause for 3 seconds (3000ms)
  sleep(3000);
  console.log("Printing after");
};

func();
