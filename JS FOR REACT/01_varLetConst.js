//!var, let and const
// var, let, and const are used to declare variables in JavaScript.
// They differ in terms of re-declaration, re-initialization, scope, and initialization rules.

//*Re-declaration
// Re-declaration means declaring the same variable name again in the same scope.

// var allows re-declaration.
var a = 10;
var a = true;
console.log(a); //true

// let does NOT allow re-declaration.
let b = 20;
let b = false;
console.log(b); //Uncaught SyntaxError: Identifier 'b' has already been declared

// const does NOT allow re-declaration.
const c = 30;
const c = "Pavan";
console.log(c); //Uncaught SyntaxError: Identifier 'c' has already been declared


//*Declaration without Initialization
// Declaration means creating a variable.
// Initialization means assigning a value to the variable.

// var can be declared without assigning a value.
// JavaScript automatically assigns undefined.
var num;
console.log(num); //undefined

// let can also be declared without assigning a value.
let food;
console.log(food); //undefined

// const must be initialized at the time of declaration.
// Otherwise, it throws an error.
const subject;
console.log(subject); //Uncaught SyntaxError: Missing initializer in const declaration


//*Re-initialization (Re-assignment)
// Re-initialization means changing the value of an already declared variable.

// var allows re-assignment.
var vehicle = "bike";
vehicle = "auto";
console.log(vehicle); //auto

// let also allows re-assignment.
let snacks = "eggpuff";
snacks = "punugulu";
console.log(snacks); //punugulu

// const does NOT allow re-assignment.
// Once a value is assigned, it cannot be changed.
const food = "biryani";
food = "palav";
console.log(food); //Uncaught TypeError: Assignment to constant variable.


//!Block Scope
// A block is a set of statements enclosed inside {} braces.
// Variables declared with let and const are block-scoped.
// Variables declared with var are function-scoped and ignore block scope.

{
  var color1 = "red";
  let color2 = "green";
  const color3 = "blue";
}

// var is accessible outside the block.
console.log(color1); //red

// let is accessible only inside the block.
console.log(color2); //Uncaught ReferenceError: color2 is not defined

// const is accessible only inside the block.
console.log(color3); //Uncaught ReferenceError: color3 is not defined


//!Summary
//*var
// Re-declaration      : ✅ Allowed
// Re-assignment       : ✅ Allowed
// Initialization Req? : ❌ No
// Scope               : Function Scope

//*let
// Re-declaration      : ❌ Not Allowed
// Re-assignment       : ✅ Allowed
// Initialization Req? : ❌ No
// Scope               : Block Scope

//*const
// Re-declaration      : ❌ Not Allowed
// Re-assignment       : ❌ Not Allowed
// Initialization Req? : ✅ Mandatory
// Scope               : Block Scope


//!Best Practice
//*Use const by default.
//*Use let when the value needs to change.
//*Avoid var in modern JavaScript because of scope-related issues.