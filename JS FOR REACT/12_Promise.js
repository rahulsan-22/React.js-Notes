//!Promise
// A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation.

//*Why Promises?
// Promises help handle asynchronous tasks such as:
// - API Calls
// - Database Operations
// - File Reading
// - Timers

//!Promise States

//*1) Pending
// Initial state.
// Operation is still running.

//*2) Fulfilled
// Operation completed successfully.
// resolve() is executed.

//*3) Rejected
// Operation failed.
// reject() is executed.

//!Creating a Promise
let p = new Promise((resolve, reject) => {
  let bookTickets = true;
  if (bookTickets) {
    resolve("Tickets booked successfully 🥳");
  } else {
    reject("Booking Failed");
  }
});

//*Promise Object
console.log(p);

// Promise {
//   <fulfilled>:
//   "Tickets booked successfully 🥳"
// }

console.log(typeof p); //object

//*Explanation
// Promise is created using new Promise().
// It returns a Promise object.
// Therefore typeof promise is object.


//!Promise Constructor Syntax
/*
let promise = new Promise((resolve,reject)=>{

  if(success){
    resolve(data);
  }
  else{
    reject(error);
  }

});
*/


//!resolve()
// Used when an operation succeeds.
resolve("Tickets booked successfully 🥳");

//!reject()
// Used when an operation fails.
reject("Booking Failed");

//!Handling Promise

//*Using then() and catch()

p.then((res) => {
  console.log(res + " Lets enjoy movie");
})
  .catch((err) => {
    console.log(err + " Try Again");
  });


//*Output (bookTickets = true)
// Tickets booked successfully 🥳 Lets enjoy movie


//*Output (bookTickets = false)
// Booking Failed Try Again


//!then()
// Executes when Promise is fulfilled.
// Receives resolved value.

// Syntax

/*
promise.then((result)=>{

});
*/


//!catch()
// Executes when Promise is rejected.
// Receives rejection reason.

// Syntax

/*
promise.catch((error)=>{

});
*/

//!Points:
//*Promise is an object.
//*Created using new Promise().
//*A Promise has 3 states: // Pending, Fulfilled, Rejected.
//*resolve() changes state to Fulfilled.
//*reject() changes state to Rejected.
//*then() handles success.
//*catch() handles failure.
//*typeof Promise object is "object".
//*Promises are used for asynchronous operations.
//*async/await is built on top of Promises.


