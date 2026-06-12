//!Logical Operators
// Logical Operators are used to combine or manipulate boolean values.
// They mainly return true or false, but in JavaScript they can also return actual values.

//*Types of Logical Operators
// 1. Logical AND (&&)
// 2. Logical OR (||)
// 3. Logical NOT (!)

let x = 10;
let y = 20;
let z = "10";

//!Logical AND (&&)
// Returns the first falsy value.
// If all values are truthy, it returns the last value.

//*Syntax
// condition1 && condition2
// Both conditions must be true for the result to be true.

console.log(x < y && y > x); //true
console.log(x === z && y > x); //false
console.log(true && true && true); //true
console.log(true && false); //false
console.log(10 && 20); //20
console.log(0 && 20); //0
console.log("" && "JS"); //""

//!Rule for AND (&&)
// Returns first falsy value.
// If no falsy value exists, returns last value.

//!Logical OR (||)
// Returns the first truthy value.
// If all values are falsy, it returns the last value.

//*Syntax
// condition1 || condition2
// At least one condition must be true.
console.log(x > y || y > x); //true
console.log(x === z || y < x); //false
console.log(10 || 20); //10
console.log(0 || 20); //20
console.log("" || "JavaScript"); //"JavaScript"

//!Rule for OR (||)
// Returns first truthy value.
// If all values are falsy, returns last value.

//!Logical NOT (!)
// Reverses the boolean value.

//*Syntax
// !value
console.log(!true); //false
console.log(!false); //true
console.log(!(10 > 5)); //false
console.log(!(10 < 5)); //true

//!Truthy and Falsy Values

//*Falsy Values
// false
// 0
// 0n
// -0
// ""
// null
// undefined
// NaN

//*Everything else is Truthy


//!Short-Circuit Evaluation (&&)
// If the first condition becomes false,
// JavaScript stops checking further conditions.
//*Example:
let num = 3;
num % 2 === 0 && console.log("Even");
// Condition is false.
// Therefore console.log() never executes.


//!Difference Between && and ||
/*
&& (AND)
-----------
Both conditions must be true.
Returns first falsy value.
If all are truthy, returns last value.

|| (OR)
-----------
At least one condition must be true.
Returns first truthy value.
If all are falsy, returns last value.
*/


//!Note:
//*&& returns first falsy value or last truthy value.
//*|| returns first truthy value or last falsy value.
//* ! reverses a boolean value.
//* && supports short-circuit evaluation.
//*Logical operators are heavily used in React for conditional rendering.
