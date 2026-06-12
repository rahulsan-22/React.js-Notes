//!ES6 Modules
// Modules were introduced in ES6.
// They help split code into multiple files
// and allow code reusability.

//*Benefits of Modules
// - Better code organization
// - Reusability
// - Maintainability
// - Avoids global scope pollution

//!Types of Exports

//*1) Named Export
// Multiple values can be exported.

//*2) Default Export
// Only one default export per file.


//!Importing Modules
import whatever, { chips, biscuits, vegetable } from "./Modules/Dmart.js";
import anything, { chips as snacks, softDrinks, soap } from "./Modules/VishalMart.js";


//!Named Imports
console.log(chips);
console.log(biscuits);
vegetable();


//!Alias (Renaming Imports)
console.log(snacks);

//!Other Named Imports
console.log(softDrinks);
console.log(soap());


//!Default Imports
console.log(whatever);
anything();

//!Named Export Syntax

/*
export let name = "Rahul";
export let age = 25;
*/

//!Default Export Syntax

//*Variable

/*
export default "Hello";
*/


//*Function

/*
export default function(){
  console.log("Hi");
}
*/


//!Named Export vs Default Export

/*
Named Export
-------------------
Multiple Allowed

Import Using
-------------
import {name} from "./file.js"

Must Match Name?
-----------------
Yes



Default Export
-------------------
Only One Allowed

Import Using
-------------
import anything from "./file.js"

Must Match Name?
-----------------
No
*/

//!Points
//*Modules were introduced in ES6.
//*Modules help split code into multiple files.
//*There are two types of exports: // Named Export and Default Export.
//*A file can have multiple named exports.
//*A file can have only one default export.
//*Named imports must match exported names.
//*Default imports can have any name.
//*Aliasing is done using 'as' keyword.
//*Modules improve code reusability and maintainability.

