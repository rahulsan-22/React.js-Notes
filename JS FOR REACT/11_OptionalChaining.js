//!Optional Chaining Operator (?.)
// Optional Chaining was introduced in ES2020.
// It is used to safely access properties of an object.
// If a property does not exist, it returns undefined
// instead of throwing an error.

//*Syntax
// object?.property

// If object exists → access property.
// If object is null or undefined → return undefined.


//!Example
let info = {
  name: "Someone",
  age: 18,
};

console.log(info.name); //"Someone"
console.log(info.age); //18
console.log(info.address?.place); //undefined


//*Explanation

//*Without Optional Chaining:
console.log(info.address.place); // Uncaught TypeError: Cannot read properties of undefined

//*With Optional Chaining:
console.log(info.address?.place); // Returns undefined