// 3 ways to declare variablesv [var, let, or const]
// JS ends with a semicolon (however they are optional). Prettier will automatically add it. 


// prettier-ignore
var firstName = "Ashlee";
//(1)  (2)   (3)  (4)

/*
1. JS keyword denotes the creation of the variable (var, let, or const)
2. The name of the variable that the developer will reference in order to use the value that is stored
3. Assignment Operator
4. Initial Value it gets set to
*/

console.log ("firstName", firstName)

//! JS Variables are case sensitive

// console.log("firstName", FirstName); // code breaks casing matters

// ? Reassignment of a variable
// No need for a var, let, or const beause the variable has already been declared.
//Onnly the variable name followed by an = you can reassign the value.

//! Using var and let you CAN reassign. However using const you CANNOT

firstName = "Jordan"
console.log ("firstName", firstName);

//CONST example

const pi = 3.14;
//pi = 4.2; //error cannot reassign a const


//? Can you declare a variable without assigning it?

var lastName;
console.log ("lastName", lastName); //lastName undefined

lastName = "Smith";
console.log("lastName", lastName);


// Naming your variables is important. Stay away from single letters.
// 60 * 60 * 24
//let second = 60
//let minutes = 60
//let hours = 24
//let totalSeconds = seconds * minutes * hours


 // ? Create a variable used to store a current temperature, console.log the current temperature.

 let currentTemp = "24 Degrees";
 console.log("currentTemp", currentTemp)

