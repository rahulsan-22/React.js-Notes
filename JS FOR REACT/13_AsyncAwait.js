//!Async and Await
// async and await were introduced in ES2017.
// They provide a cleaner and more readable way to work with Promises.

//*Why async/await?
// Instead of using then() and catch(),
// we can write asynchronous code that looks
// similar to synchronous code.

//!Promise Example
let p = new Promise((resolve, reject) => {
  let bookTickets = false;
  if (bookTickets) {
    resolve("Tickets booked successfully 🥳");
  } else {
    reject("Booking Failed");
  }

});
console.log(p); // Promise { <rejected>: "Booking Failed" }
console.log(typeof p); //object

//!async Function
// async keyword makes a function asynchronous.
// An async function always returns a Promise.
let resolvingPromise = async () => {
  try {
    let result = await p;
    console.log(result + " Lets enjoy movie");
  } catch (err) {
    console.log(err + " Try Again");
  }
};
resolvingPromise();

//*Output
// Booking Failed Try Again

//!Points
//*async and await were introduced in ES2017.
//*async function always returns a Promise.
//*await waits for a Promise to settle.
//*await can only be used inside async functions.
//*try block handles success.
//*catch block handles errors.
//*async/await is a cleaner alternative to then() and catch().
//*Used heavily for API calls in React applications.
