//!Destructuring
// Destructuring was introduced in ES6.
// It allows us to extract values from arrays and objects
// and store them into variables in a cleaner way.

//!Array Destructuring
// Extract values based on POSITION (index).

//*Example 1
let random = ["Chai", "Biscuit", "MaskaBun", "Boost", "Coffee"];
let [Chai, Biscuit, MaskaBun, Boost, Coffee] = random;
console.log(Chai);
console.log(Biscuit);
console.log(MaskaBun);
console.log(Boost);
console.log(Coffee);


//!Skipping Values

//*Example 2

let stuff = ["Laptop", "Books", "Plate", "Soap", "Towel"];
let [, , , soap] = stuff;
console.log(soap); //Soap


//!Nested Array Destructuring

//*Example 3

let nestedArray = ["Chair", "Door", ["AC", ["Mic", ["Pen"]]]];

let [, , [, [, [a]]]] = nestedArray;

console.log(a); //Pen

//*Example 4

let numbers = [1, 2, [3, [4, 5, [6, [8, 9, [10, [11, [12]]]]]]]];

let [, , [, [, , [, [, , [, [, [b]]]]]]]] = numbers;

console.log(b); //12


//!Object Destructuring
// Extract values based on PROPERTY NAMES.

//*Example 1

let food = {
  name: "Chicken Juicy Mandi",
  place: "Elite Mandi",
  price: 320
};

let { name, price, place } = food;

console.log(name);
console.log(price);
console.log(place);


//!Renaming Variables

//*Example 2

let movie = {
  title: "Peddi",
  actor: "Ramcharan",
  actress: "Jahnvi Kapoor",
  rating: 2.5
};

let { actress: heroine } = movie;

console.log(heroine);


//!Nested Object Destructuring

//*Example 3

let drinks = {
  day: "Sunday",
  place: {
    area: "Chaitanyapuri",
    location: {
      floor: 4,
      room: 2
    }
  }
};

let { place: { location: { room } } } = drinks;

console.log(room); //2


//!Deeply Nested Object Destructuring

//*Example 4

let info = {
  planet: {
    name: "Earth",
    continent: {
      name: "Asia",
      country: {
        name: "India",
        state: {
          name: "Telangana",
          city: {
            name: "Hyderabad"
          }
        }
      }
    }
  }
};

let {
  planet: {
    continent: {
      country: {
        state: {
          city: { name }
        }
      }
    }
  }
} = info;

console.log(name); //Hyderabad




//!Mixed Destructuring
// Combination of Array and Object Destructuring.

let bioData = {
  name: "Monty",
  skills: {
    extraCurricular: ["Singing", "Dancing", "Cricket"],
    technical: [
      {
        frontend: ["Html", "Css", "Js", ["ReactJs", ["Redux"]]]
      }
    ]
  }
};

let {
  skills: {
    technical: [
      {
        frontend: [, , , [, [finalValue]]]
      }
    ]
  }
} = bioData;

console.log(finalValue); //Redux



//!Summary

/*
Array Destructuring
--------------------
Based on Position

Object Destructuring
--------------------
Based on Property Name

Nested Destructuring
--------------------
Used to extract deeply nested values

*/


//!Points

//*Destructuring was introduced in ES6.
//*Array Destructuring works based on index position.
//*Object Destructuring works based on property names.
//*Values can be skipped in Array Destructuring.
//*Variables can be renamed in Object Destructuring.
//*Rest Operator can collect remaining values.
//*Destructuring is heavily used in React.


