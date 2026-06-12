//!Spread Operator (...) and Rest Parameter (...)
// Both use the same symbol (...)
// Their behavior depends on where they are used.

//*Spread Operator
// Expands (spreads) values.

//*Rest Parameter
// Collects multiple values into a single array.


//!SPREAD OPERATOR (...)

//*Definition
// Spread Operator expands elements of arrays, objects, or strings.


//!Spread Operator with Arrays

//@Example 1
let dmart = ["Maggi", "Chocolate", "Chips", "Popcorn"];

let kiranaStore = [...dmart];

console.log(kiranaStore);

// ["Maggi","Chocolate","Chips","Popcorn"]


//!Combining Arrays

//@Example 2

let frontend = ["Html", "Css", "Js"];

let backend = ["Python"];

let pythonFullStack = [
  ...backend,
  ...frontend,
  "Sql"
];

console.log(pythonFullStack);

// ["Python","Html","Css","Js","Sql"]


//!Spread Operator with Objects

//@Example 1

let obj1 = {
  name: "Yasin"
};

let obj2 = {
  subject: "Sql"
};

let finalObj = {
  ...obj1,
  ...obj2,
  subject: "PowerBI",
  duration: 30
};

console.log(finalObj);

// {
//   name:"Yasin",
//   subject:"PowerBI",
//   duration:30
// }



//!Spread Operator with Strings

let str = "Orange";

console.log([...str]);

// ["O","r","a","n","g","e"]



//!String Spread Inside Object

console.log({ ...str });

/*
{
  0:"O",
  1:"r",
  2:"a",
  3:"n",
  4:"g",
  5:"e"
}
*/


//!REST PARAMETER (...)

//*Definition
// Rest Parameter collects multiple arguments
// into a single array.


//!Example

function anything(a, b, c, ...rest) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(rest);
}

anything(1, 2, 3, 4, 5, 6, 7, 8, 9);

// Output
/*
1
2
3
[4,5,6,7,8,9]
*/

//!Points

//*Spread and Rest use the same (...) syntax.
//*Spread expands values.
//*Rest collects values.
//*Spread can be used with Arrays, Objects, and Strings.
//*Rest can only be used in function parameters.
//*Rest Parameter always returns an array.
//*Rest Parameter must be the last parameter.
//*In object spread, latest property overrides previous property.
//*Spread Operator is heavily used in React state updates.
