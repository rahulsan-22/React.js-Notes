//!Arrow Functions
// Arrow Functions were introduced in ES6.
// They provide a shorter and cleaner syntax for writing functions.

//*Syntax
// let functionName = (parameters) => {
//  code
// }
// functionName(arguments)


//!Basic Arrow Function
// Used when the function performs an action but does not return a value.

let greet = () => {
  console.log("Good Afternoon");
};

greet();


//!Explicit Return Arrow Function
// When we use the return keyword inside the function body,
// it is called an Explicit Return Arrow Function.

let findPower = (x, y) => {
  return x ** y;
};

console.log(findPower(2, 3)); //8


//!Implicit Return Arrow Function
// If the function contains only one statement,
// we can remove {} and return keyword.
// The value is returned automatically.

let powerValue = (x, y) => x ** y;
console.log(powerValue(2, 3)); //8

//!Single Parameter
// If a function has only one parameter,
// parentheses () are optional.

let sayHello = msg => msg;
console.log(sayHello("Hello")); //Hello


//!No Parameter
// If there are no parameters,
// replace parenthesis with _.

let askSomething = () => "Understanding JS?";
console.log(askSomething()); //Understanding JS?


//!Interview Points

//*Arrow Functions were introduced in ES6.
//*They use the => (arrow) operator.
//*Explicit Return uses the return keyword.
//*Implicit Return does not require return.
//*For a single parameter, parentheses are optional.
//*For no parameters, replace parentheses with underscore
//*Arrow Functions provide shorter and cleaner syntax.
//*Arrow Functions are heavily used in React applications.