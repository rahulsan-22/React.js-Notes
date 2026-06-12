//!Ternary Operator (? :)
// The Ternary Operator is a shorthand way of writing an if...else statement.
// It evaluates a condition and returns one of two values based on whether
// the condition is true or false.

//*Syntax
// condition ? expression1 : expression2
// If condition is true  -> expression1 executes.
// If condition is false -> expression2 executes.


//!Example 1
let isLoggedIn = false;
let result = isLoggedIn ? "Logged In" : "Logged Out";
console.log(result); //Logged Out

//!Example 2
let num = 3;
let output = num % 2 === 0 ? `${num} is Even Number` : `${num} is Odd Number`;
console.log(output); //3 is Odd Number


//!Note:
//*Ternary Operator is a shorthand for if...else.
//*It uses ? and : symbols.
//*Syntax: condition ? trueValue : falseValue
//*It always returns a value.
//*Useful for simple conditional checks.
//*Commonly used in React for conditional rendering.
