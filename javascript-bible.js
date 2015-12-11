///////////////////////// JAVASCRIPT BIBLE ////////////////////////////
// --------------------------------------------------------------------
// Variables:
// --------------------------------------------------------------------

// data types:
// String (denoted by quotation marks)
// Number
// Boolean (true or false)
// Array []
// Object {}

// declaring variables
var x = 23;
var name = "Brandy";

// variables can be assigned to other variables
var myName = name;
var age = x;

// concatination vs addition
var firstName = "Jacob";
var lastName = "Hansen";
console.log(firstName + " " + lastName); // Jacob Hansen

console.log(9 + 12); // 21
console.log("9" + 12); // 912
console.log("9" * 12); // NaN

// mathematical operators
x = x + 12; /* is the same as: */ x += 12;
x = x - 12; /* is the same as: */ x -= 12;
x = x * 12; /* is the same as: */ x *= 12;
x = x / 12; /* is the same as: */ x /= 12;

// to increment/decrement a number/variable by 1:
x++;
x--;

var x = 10;
console.log(x++); // 10

// if the `++` or `--` are before the variable then it adds/subtracts 1 BEFORE it is used
++x;
--x;

var x = 10;
console.log(++x); // 11

// --------------------------------------------------------------------

// to `escape` use backslash
console.log("This text\'s quotes will \"display\""); // This text's quotes will "display"

// --------------------------------------------------------------------
// Type conversion:
// --------------------------------------------------------------------

// string to integer (parseInt()):
var age = "29";
var inegerAge = parseInt(age);

// string to float (parseFloat()):
var balance = "67.89";
var foatBalance = parseFloat(balance);

// data to string
var stringAge = String("25");
var nan = String(NaN);

// --------------------------------------------------------------------
// Type Checking:
// --------------------------------------------------------------------

// array:
Array.isArray([-1, 0, 5]); // true

// NaN:
isNaN("Hi!"); // true
isNaN(NaN); // true
isNaN(69); // false

// --------------------------------------------------------------------
// Popup Boxes:
// --------------------------------------------------------------------

alert("This will be alerted.");

// confirm returns a boolean
var accept = confirm("Do you agree you are above 18?");

// prompt returns a string
var userName = prompt("What is your name?");

// --------------------------------------------------------------------
// DOM Manipulation:
// --------------------------------------------------------------------

// to 'get' element from DOM:
document.querySelector('*selector*');

// to set element from DOM to a JavaScript variable:
// in html:
// <div class="my-div">This is my div, there are many other like it but this one's mine!</div>
// in JavaScript:
var myDiv = document.querySelector('.my-div');

// to get/set text in `myDiv`:
myDiv.textContent = "This will overwrite previous content.";

// another way to do it with 'injecting' html:
myDiv.innerHTML = "<h1>This will overwrite previous content AND be a heading!</h1><p>Add as many tags as you like!</p>";

// you can also alter CSS
myDiv.style.backgroundColor = "purple";
myDiv.style.border = "2px solid blue";

// --------------------------------------------------------------------
// Conditional Logic Flow
// --------------------------------------------------------------------

// predicates are anything that can be resolved to either `true` or `false`
// i.e. 5 > 1, "this" === "that", true

// syntax:
if (predicate) {
  // code to run if predicate resolves to `true`
}

// example:
var password = "rubberduckie";
if (password === "rubberduckie") {
  console.log("Correct password.");
} else if (password === "rubberduck") {
  console.log("Almost correct password.");
} else {
  console.log("Incorrect password");
}

// combining multiple predicates using && (and) and || (or):
var isCool = true;
var name = "Jim";
if (isCool && name === "Jim") {
  console.log("You're cool & your name is Jim.");
} else if (!isCool && name === "Jim") {
  console.log("You're not cool but you're name is Jim.");
} else if (isCool || name === "Jim") {
  console.log("You're either cool or your name is Jim.");
} else {
  console.log("You're not cool and you're name's not Jim.");
}

// Ternary Operator:
// syntax:
// predicate ? 'if true, this will run' : 'if false, this will run'

// example:
var isMember = true;
var feePrompt = "The fee is " + (isMember ? "$2.00" : "$10.00"); // The fee is $2.00

// Default Operator:
// assigns a value if one is not given (think default value)
var greeting = "Hello there, " + (prompt("What's your name?") || "anonymous");

// Guard Operator:
// sets value to second condition if first condition is true
var secretCode = isAdmin && "The password is 'cheese'";

// Switch Statement:
//syntax:
// note: anything in `[ ]` is optional
/*
switch (expression/variable) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  default:
    //Statements executed when none of the values match the value of the expression
    [break;]
}
*/

// example:
var fruit = "Papayas";
switch (fruit) {
  case "Bananas":
    console.log("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    console.log("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    console.log("Sorry, we are out of " + fruit + ".");
}
// Mangoes and papayas are $2.79 a pound.






// last update: 11/17/15 by Christoph the Wolf