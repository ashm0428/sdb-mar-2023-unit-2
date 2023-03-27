/* 
Types - Data Types
- Strings
- Numbers
- Boolean
*/

/* 
STRINGS:
- data types used to represent text and they are wrapped in single quotes, double quotes, or backticks.
*/

let stringOne = "double quotes";
//prettier-ignore
let stringTwo = 'single quotes';

let stringThree = `backtick quotes`;

// Combining Strings aka Concatenation

let greeting = "Good Morning";
let firstName = "Ashlee";
//! PROBLEM Morning and Ashlee does not have a space
console.log(greeting + firstName);

// Solution 1:
console.log(greeting + " " + firstName)

let fullGreeting = `${greeting} ${firstName}`; // ${} only works with backticks

console.log(fullGreeting) //expected value: (copy and past what the console gives you:) Good Morning Ashlee

//! If you want to know what "TYPE" the variable is you can use the keyword typeof

console.log(typeof firstName);


// Extra's with Rob
let bookBest = "The Lord of the Rings"

console.log(bookBest.length)
let bookNoSpace = bookBest.replaceAll(" ", "")
console.log(bookNoSpace.length)

//You can daisy chain
let fruit = "banAna";
console.log(fruit.toLowerCase().includes("nana")); //Console printed: true

// To determine the size of the string you the .length method

let animal = "horse";
console.log(animal.length);
// Accessing the first letter it is zero based when it is a string
console.log(animal[1]); // console printed "o"
console.log(animal[2]); // Console printed "r"

// Removing unnecessary spaces
let textData = "         Hello     ";
console.log(textData.trim());


// Creating new lines in the middle of a string
let newLineString = "I went to the store yesterday. \nI bought eggs and milk.";
console.log(newLineString);


//! NUMBERS

let currentTemp=38
console.log(typeof currentTemp); //Console printed "number"

let funkyNumber = 0.2 + 0.1
console.log(funkyNumber);

let add1=2+1
console.log(add1);

// Can make money function properly by making it a whole number then dividing. EX: 19.99+15.99 - see below
let totalMoney=(1999+1599)/100;
console.log(totalMoney); //Console prints the correct amount of money
//TODO Research other math related functions via w3 schools


//! Be careful of mismatching Strings and Numbers - mostly a problem with + which can mean plus or concat

let myAge="42"
let friendAge=34
console.log(myAge+friendAge); //Console log prints "4234"

console.log(Number(myAge)+friendAge); //Console prints "76"
// parseInt(myAge)
// Add a + before the string variable
console.log(+myAge+friendAge);

console.log(myAge/friendAge); //Works because it is not a +

let stringNumber="23"
let stringExample="abcd"
console.log(stringNumber/2); //It will convert a number within a string to a number
console.log(stringExample/2); //NaN means Not a Number


//! Number Operators
/* 
Adding numbers use (+)
Subtracting numbers use (-)
Multiplying numbers use (*)
Dividing numbers use (/)

Special Ones:

Exponents use (**)
Modulus (AKA: The Remainer) use (%)
*/

console.log(3**3); //3 to the 3rd power AKA 3*3*3
console.log(21 % 10); //21 / 10 = 2 R 1 (2 remainder 1)


// ? How can I tell if a number is even
console.log("odd", 33 % 2) // Results in a remainder of 1 so it is not even
console.log("even", 32 % 2) // results in a remainder of 0 so it is even


// ? How do I take what I had before and add to it?
let totalPrice=0
let item1=5
totalPrice=totalPrice+item1;
console.log(totalPrice); // result is 5
let item2=10
totalPrice=totalPrice+item2;
/* 
Can also do 
totalPrice += item2;
*/
console.log(totalPrice); // result is 15



//! Booleans
// Only two possible values: true or false. Boolean names often have "is" in them.

let isOver21=true;
let isCloudy=false;

console.log(typeof isCloudy); //Boolean


