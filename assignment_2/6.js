// Create a promise that makes a fetch call, but resolves with the data only 2 seconds after
// the data has been received in the fetch.

const fetch_data = () => {
  return new Promise((resolve, reject) => {
    fetch("https://reqres.in/api/users")
      .then((response) => {
        setTimeout(() => {
          resolve(response.json());
        }, 2000);
      })
      .catch((err) => {
        reject("Error message", err);
      });
  });
};

fetch_data()
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
