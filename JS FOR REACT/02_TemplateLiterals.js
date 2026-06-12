//!Template Literals
// Template Literals were introduced in ES6.
// They allow us to create strings using backticks (` `).
// They make string handling easier and more readable.

//*Syntax
// `string content`


//!Features of Template Literals

//*1) String Creation Using Backticks
// Instead of single (' ') or double (" ") quotes,
// we can use backticks (` `) to create strings.

let firstName = `Monty`;
let lastName = "Model";


//*2) String Interpolation
// Interpolation means inserting variables or expressions
// directly inside a string using ${ }.

// Syntax:
// `${variable}`
// `${expression}`

console.log(
  `My fullname is ${firstName} ${lastName} and my age is ${30 - 2}`
);
// My fullname is Monty Model and my age is 28


//*3) Multi-line Strings
// Template Literals allow writing strings across multiple lines
// without using \n escape characters.

console.log(`
My
name
is
Pavan
Shetty
`);


//!Interview Points:

//*Template Literals were introduced in ES6.
//*They use backticks (` `) instead of single or double quotes.
//* ${ } is used for interpolation.
//*Expressions can be evaluated inside ${ }.
//*They support multi-line strings.
//*They make code cleaner and more readable.