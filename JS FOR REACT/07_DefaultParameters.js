//!Default Parameters
// Default Parameters were introduced in ES6.
// They allow us to assign default values to function parameters.
// If an argument is not passed during the function call,
// the default value is used.

//*Syntax
// functionName(parameter = defaultValue)


//!Example
let greet = (name = "User") => {
  console.log(`Welcome ${name}`);
};
greet("Pavan"); //Welcome Pavan
greet("Monty"); //Welcome Monty
greet(); //Welcome User

//!Note:
//*Default Parameters were introduced in ES6.
//*Used to assign default values to function parameters.
//*Default value is used only when the argument is undefined.
//*null, false, 0, and "" do not trigger the default value.
//*Makes code cleaner and easier to maintain.
//*Frequently used in React components and functions.