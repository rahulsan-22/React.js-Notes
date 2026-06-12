//!Array Methods: forEach(), map(), filter(), find()
// These are higher-order array methods introduced to simplify looping.
// They take a callback function as an argument.

//*Common Callback Parameters
// element -> Current value
// index   -> Current index
// array   -> Original array

// Syntax:
// array.method((element, index, array) => {})


//!1) forEach(fn(element,index,array))
// Used to perform an action on each element of an array.
// It does NOT create a new array.
// It always returns undefined.

let food = ["Biryani", "Fruits", "Pappu", "Dessert"];

food.forEach((item) => {
  console.log(item.toUpperCase());
  console.log(item.length);
  console.log(item.at(0));
  console.log(`${item} 😁`);
});


//!2) map(fn(element,index,array))
// Used to transform each element.
// Creates and returns a NEW array.
// Original array remains unchanged.

food.map((item) => {
  console.log(item.toUpperCase());
  console.log(item.length);
  console.log(item.at(0));
  console.log(`${item} 😁`);
});


//!forEach() vs map()

let forEachOutput = num.forEach(n => n * n);
console.log(forEachOutput); //undefined

let mapResult = num.map(n => n * n);
console.log(mapResult); //[1,4,9,16,25]


//*Difference

/*
forEach()
-----------
Used for performing actions.
Returns undefined.
Does not create a new array.

map()
-----------
Used for transforming data.
Returns a new array.
Does not modify original array.
*/


//!3) filter(fn(element,index,array))
// Used to select elements based on a condition.
// Returns a NEW array containing only matched elements.

let marks = [35, 45, 10, 95, 55];

let filteredMarks = marks.filter(mark => mark > 50);

console.log(filteredMarks); //[95,55]


//!4) find(fn(element,index,array))
// Used to find the FIRST matching element.
// Returns a single value, not an array.

let findMark = marks.find(mark => mark > 50);

console.log(findMark); //95


//*Difference

/*
filter()
-----------
Returns ALL matching elements.
Always returns an array.

find()
-----------
Returns FIRST matching element.
Returns a single value.
Stops searching after first match.
*/


//!Summary Table
/*
Method     Returns            Purpose
------------------------------------------------
forEach()  undefined          Perform action
map()      New Array          Transform data
filter()   New Array          Select data
find()     Single Value       Find first match
*/
