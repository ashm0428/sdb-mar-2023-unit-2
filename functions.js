/* 
Functions:

- Functions provide a block of code that will only be ran once it is `called` upon.
- It starts with a keyword `function` followed by the name you give your function.
- Functions do NOT need to have arguments/parameters
- Functions do NOT need to return a value, however they often do.
- Functions get hoisted - meaning you can `call` on them prior to the function declaration.
*/


/* 
1. keyword "function" 
2. Function Name
3. (Argument)
*/

example1();

// (1)      (2)     (3)
function example1() {
    // any code inside here will be executed when the function is `called`
    console.log("Example1 Function Was Executed");
}

// Call
example1();


/* 
Function with Parameters or Arguments
1. keyword `function`
2. Function Name
3. Inside the ()'s we can have unlimited parameters, all separated by a comma.
4. Argument
5. Call name
6. Call parameters
*/

// (1)     (2)          (3)        (4)
function example2(param1, param2) {
    console.log("Example 2 function was executed");
    console.log("Param1:", param1);
    console.log("Param2:", param2);
}
// (5)     (6)
example2(10, 5);
example2("Rob", "Vanarsdall");
example2(); // still runs but comes back undefined


function sumTwoNumbers(number1, number2) {
    let total = number1 + number2;
    return total;
}

let sum1 = sumTwoNumbers(10, 5);
let sum2 = sumTwoNumbers(12, 36);
console.log(sum1, sum2);
console.log(`sum1 equals: ${sum1}, and sum2 equals: ${sum2}`);


function calculateTax(cost, taxPercentage) {
let totalTax = cost * taxPercentage
return +totalTax.toFixed(2); //toFixed returned it as a string. Adding a plus before totalTax turned it back into a number.
}

let shoppingCartTotal = 21.99
let checkOutTax = calculateTax(shoppingCartTotal, .08)
let checkoutTotal = sumTwoNumbers(shoppingCartTotal, checkOutTax);

console.log(checkoutTotal);


// ? Write a function that will take 3 arguments(length, width, height)
// ? Function should return the volume of the Cuboid

function cuboidVolume(length, width, height) {
let volume = length * width * height
return +volume;
}

let cuboid1 = cuboidVolume(4, 6, 2)
console.log(cuboid1);


// ? Write a funciton that will accept a dog's age and returns a human age
// ? Human Age = (Dog Age-2) X 4 + 21

function dogAgeToHumanAge(dogAge) {
let humanAge = (dogAge - 2) * 4 + 21
return humanAge
}

let johnDogAge = dogAgeToHumanAge(3);
let ashleeDogAge = dogAgeToHumanAge(1.8)
let isaacDogAge = dogAgeToHumanAge(11)
let nickDogAge = dogAgeToHumanAge(14)
let trevorDogAge = dogAgeToHumanAge(2.5)

console.log(johnDogAge, ashleeDogAge, isaacDogAge, nickDogAge, trevorDogAge);



// ? Create a function called `divisible`
// ? Takes 2 parameters, firstNum, secondNum
// ? Return true if it divides evenly otherwise returns false
// ? Refactor the code to return a turnary


function divisible(firstNum, secondNum) {
    return firstNum % secondNum === 0;
}
console.log(divisible(4,2))


//When you are using arrow functinos that are one line
// - omit the return because it is assumed

const divisible2 = (firstNum, secondNum) => firstNum % secondNum === 0;

console.log(divisible2(25, 5))


// ? Create a function using the arrow function method called difference
// ? The function will return the difference between the two mnumbers (positive number)

const difference = (firstNum, secondNum) => {
    let diff = Math.abs(firstNum - secondNum);
    return diff;
};

console.log(difference(6, 10))

//! Arrow function DANGER: they do not get hoisted. They need to be initialized first (place them above your code before you call it.)


function userInputCleaner(word) {
    return word.trim().toLowerCase();
}

console.log(userInputCleaner("RaZZLE DAZzle  "))

