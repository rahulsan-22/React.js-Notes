//!Nullish Coalescing Operator (??)
// It is used to provide a default value when the left side is either null or undefined.

//*Syntax
// value ?? defaultValue
// If value is NOT null or undefined → return value.
// If value is null or undefined → return defaultValue.

//!Examples
console.log(null ?? "Hello"); //Hello
console.log(undefined ?? ""); //""
console.log("Hello" ?? null); //"Hello"
console.log("" ?? undefined); //""
console.log(null ?? undefined); //undefined
console.log(undefined ?? null); //null
console.log(undefined ?? null ?? undefined); //undefined
console.log(undefined ?? "" ?? undefined); //""

//!Note:
//*Returns the first value that is NOT null and NOT undefined.
//*Only checks for null and undefined.
//*Does not treat 0, false, "", or NaN as missing values.
//*Often used for default values.
//*Safer than || when 0, false, or "" are valid values.
//*Frequently used in React while displaying API data.
