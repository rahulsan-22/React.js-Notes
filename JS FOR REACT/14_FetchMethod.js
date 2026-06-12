//!Fetch API
// Fetch API is used to make HTTP requests to servers.
// It helps us retrieve or send data over the internet.
//Introduced In Modern JavaScript (ES6+)
// fetch() always returns a Promise.

//!Why Fetch API?
// Used to:
// - Get data from APIs
// - Send data to servers
// - Update data
// - Delete data

//!Modern Syntax (async/await)
/*
let response = await fetch("API_URL");
let data = await response.json();
console.log(data);
*/

//!Example 1
let extractingData1 = async () => {
  try {
    let productsApi = await fetch("https://dummyjson.com/products");
    let output = await productsApi.json();
    console.log(output.products);
  } catch (error) {
    console.log(error);
  }
};
extractingData1();

//!Example 2
async function extractingData2() {
  try {
    let quoteApi = await fetch("https://dummyjson.com/quotes/random");
    let output = await quoteApi.json();
    console.log(output.quote);
  } catch (error) {
    console.log(error);
  }
}
extractingData2();

//!Points:

//*fetch() is used to communicate with APIs.
//*fetch() always returns a Promise.
//*await fetch() returns a Response object.
//*response.json() converts JSON into JavaScript object.
//*json() also returns a Promise.
//*await is required with json().
//*try...catch is used for error handling.
//*Fetch API is heavily used in React applications.

