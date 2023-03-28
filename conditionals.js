/* 
CONDITIONALS:
- We use conditionals when a decision needs to be made.
- The conditions need to either be truthy or falsey.
- Tools we have available for decision making are the following:
    - if statements 
    - if else statements
    - if else if statements
    - turnary 
*/

// ? Create an if statement for the condition using a 24hr clock. If it's before 12 pm, console.log("good morning")

let currentHour = 19;

//console.log(currentHour < 12);
/* 
1. keyword - if to start the if statement
2. conditional - must result in a truth
*/

//(1)      (2)
if (currentHour < 12) {
  //in between the brackets is considered a block of code
  // this block of code will be executed if the conditional is true.
  console.log("Good Morning");
}

//! Example of if - else statement

if (currentHour < 12) {
  console.log("Good Morning");
} else {
  console.log("Good Afternoon");
}

//! Example of if - else if - else statements
//?If the hours are between 12-5pm, the greeting should be "good afternoon" and if it's between 5pm and 12am, the greeting should be "good evening".

if (currentHour < 12) {
  console.log("Good Morning");
} else if (currentHour < 17) {
  console.log("Good Afternoon (if-else-if)");
} else {
  console.log("Good Evening");
}

//? Write a conditional based on age will store in a variabel the price of the movie ticket.
// Child Price =5 (age 10 or younger)
// Adult Price = 10
// Senior Price = 8 (age 55 or older)
// Add a military discount to senior and adult tickets - discount of 1 dollar

let age = 28;
let priceOfTicket = 0;
let isMilitaryMember = true;

if (age <= 10) {
  priceOfTicket = 5;
} else if (age >= 55) {
  priceOfTicket = 8;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
} else {
  priceOfTicket = 10;
  isMilitaryMember === true
    ? (priceOfTicket = priceOfTicket - 1)
    : (priceOfTicket = priceOfTicket);
}

console.log("Price of the ticket is: $" + priceOfTicket);

//! Turnaries

/* 
1. Condition that will result in a true or false
2. Add a (?) and what is on the right side of the questionmark up to the colon is what will happen if it is true
3.Truth code
4. Truth and False divider
5. Code for the false

    (1)                  (2)                (3)                (4)      (5)
isMilitaryMember === true ? (priceOfTicket = priceOfTicket -1) : (priceOfTicket = priceOfTicket);
*/

// ? Write an if else statement to determine if the current seconds are odd or even.
// ? If it's even console log "The current second is 22 and it is even"
// ? If it's odd console log "The current second is 23 and it is odd"

// ! BONUS: See if you can create a turnary to solve this...
/*
const d = new Date();
let seconds = d.getSeconds();

if (seconds % 2 == 0) {
    console.log(`The current second is ${seconds} and it is even.`)
} else {
    console.log(`The current second is ${seconds} and it is odd.`)
}
*/

const d = new Date();
let seconds = d.getSeconds();

seconds % 2 == 0
  ? console.log(`The current second is ${seconds} and it is even.`)
  : console.log(`The current second is ${seconds} and it is odd.`);

// Turnaries are typically only used for if else statements - not if else if else if.


// ! SWITCHES

let randomNum = 2
let color = "";
switch(randomNum) {
  case 1: 
    color = "red"
    break;
  case 2:
    color = "blue";
    break;
  case 3:
    color = "pink";
    break;
  case 4:
    color = "purple";
    break;
  case 5: 
    color = "white";
    break;
  case 6:
    color = "green";
    break;
  default:
    color = "unknown";
}

console.log(color);