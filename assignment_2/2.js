// Using promises - write a function that fetches data from an API endpoint (GET
// https://reqres.in/api/users ). Log the data into the console once it is received

const fetch_data = () => {
  const fetchPromise = fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    });
};

fetch_data();
