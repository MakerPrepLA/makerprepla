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

// if the `++` or `--` are before the variable then it adds/subtracts 1 BEFORE it is used
++x;
--x;

// to `escape` use backslash
console.log("This text\'s quotes will \"display\""); // This text's quotes will "display"

// convert numbers to strings and vice versa
// parseInt()
var age = "29";
var numberAge = parseInt(age);

// String()
var stringAge = String(numberAge);

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

// ternary operator:
// syntax:
// predicate ? 'if true, this will run' : 'if false, this will run'

// example:
var isMember = true;
var feePrompt = "The fee is " + (isMember ? "$2.00" : "$10.00"); // The fee is $2.00

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------