const readline = require("readline");

const computerResponse = require("./input-output-computer-response")

const readlineInterface = readline.createInterface(
  process.stdin,
  process.stdout
);

function ask(questionText) {
    return new Promise((resolve, reject) => {
      readlineInterface.question(questionText, resolve);
    });
  }



async function start(){
    console.log("This Works!");
    let firstName = await ask("What is your name? ");
    firstName = correctCasing(firstName)
    computerResponse(`Good Morning, ${firstName}`)
}

start();


// function computerResponse(string){
// let white = "\033[0;39m"
// let yellow = "\033[0;33m";

// console.log(yellow + string + white)
// }

function correctCasing(word) {
    let wordLowerCase = word.toLowerCase();
    let capitalized = word.charAt(0).toUpperCase() + wordLowerCase.slice(1);
    return capitalized; 
  }


/* 
How to get this program to start.
1.Right click the file > Open Integrated Terminal
2. Type in the terminal node [name of the file] ex: node input-output.js  (node i (tab))

How do you exit the program
1. CTRL - C
2. End the process with a process.exit() in your code

SPECIAL NOTE
If you make changes to your file and would like to see those changes you MUST CTRL-C or exit the program and restart it with node i (tab).
*/