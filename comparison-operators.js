// Comparison Operators
/* 
Equal:
double equal (==) - checks for equal value only
triple equal (===) - checks for equal value and equal type

Not Equal:
(!=) - not equal in value
(!==) - not equal in both value and type

For Numbers (Greater than, less than)
(>) - greater than
(<) - less than
(>=) - greater than or equal to
(<=) less than or equal to

Logical Operators
&& - and (does this AND this apply?)
|| - or (does this OR this OR this apply?) - [shift]+[\]=[|]
*/

//Equal examples
let helicopter1="blackHawk"
let helicopter2="Blackhawk"

console.log(helicopter1==helicopter2); //returns a boolean - "false" because they are not equal
console.log(helicopter1.toUpperCase()==helicopter2.toUpperCase()); //returns a boolean - "true" because they are equal once they are both upper case.


let myAge=42
let friendAge="42"

console.log(myAge==friendAge); //returns as "true" - (==) CAN accept difference in type
console.log(myAge===friendAge); //returns as "false" - (===) CANNOT accept difference in type



// Not Equal examples
let name1="Robin"
let name2="Batman"

console.log(name1 != name2); // returns as "true" because they are not equal

console.log("not age", myAge !== friendAge); // returns as "true" because they are not equal


// For Numbers (<>)
let num1=10
let num2=5

console.log(num1>num2); //returns as true because 10 is greater than 5


let joiningMilitaryAge=18;
let maxJoiningMilitaryAge=34;

let bethAge=17;
let hankAge=38;

console.log(bethAge>=joiningMilitaryAge); // returns as false because beth is not equal to or older than 18
console.log("hank", hankAge>=joiningMilitaryAge && hankAge<=maxJoiningMilitaryAge);



let person1Permissions="admin"
let person2Permission="user"
let person3Permission="guest"

let isViewableAdmin=person1Permissions === "admin" || person2Permission === "user";

console.log("isViewableAdmin", isViewableAdmin);


// ? Mini Challenge: 
// Create a variable called isEven1 and isEven2
// the variable will be true if the value is even - false if it is odd
// test it out with 33 and 122

let isEven1=33
let isEven2=122

console.log(isEven1 %2 === 0);
console.log(isEven2 %2 === 0);

let isEven3= 33 % 2 === 0;
let isEven4= 122 % 2 === 0;

console.log(isEven3);
console.log(isEven4);

