/* 
Hoisting:

let and const do not get hoisted.

var will get hoisted and if you access it before it is initialized/assigned, you will get an undefined.
*/

console.log(firstName);
// let firstName = "Rob";

var firstName = "Rob";


/* 
SCOPE:

Var vs Let
- with the introduction of ES6 came the introduction of let and const
- using let or const you can NOT reference a variable before it is initialized


- when it comes to scope - JS will try to look for the variable in it's current block first then it will look outwards.

- a variable created in a code block can NOT be accessed outside of the block.

- JS has three types of scope: Block Scope, Functional Scope, and Global Scope

- Var keyword can NOT have block scope

*/


function greeting () {
    console.log(`Good Afternoon ${firstName}`)
}
greeting();


function greeting2 () {
    let firstName = "Jimbo";
    console.log(`Good Afternoon ${firstName}`)
}
// ? What first name will it use?
greeting2();

// ? Do I get ROB or JIMBO outside of the function
console.log(firstName)


function greeting3 () {
    let firstName = "Betty";
    console.log(`Good Afternoon ${firstName}`)
}
// ? What first name will it use?
greeting3();
// ? What first name will I get, "Rob" or "Betty"
console.log(firstName);


function greeting4(firstName) {
    console.log(`Good Afternoon ${firstName}`)
}
greeting4("Barney");


var x = 12

function varTest() {
    var x = 33;
    if(1==1) {
        var x = 45;
        console.log(x); // 45?
    } 
    console.log(x); // 33? If VAR, then NOPE - 45: if let, then 33
}


console.log(x) // 12?
varTest();


function varTest2() {
    if(1==1) {
        let y = 200    
    }
    console.log(y);
}

varTest2();
