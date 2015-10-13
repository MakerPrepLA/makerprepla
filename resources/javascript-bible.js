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

// to `escape` 

// --------------------------------------------------------------------
// Popup Boxes:
// --------------------------------------------------------------------
alert("This will be alerted.");

// confirm returns a boolean
var accept = confirm("Do you agree you are above 18?");

// prompt returns a string
var userName = prompt("What is your name?");

// --------------------------------------------------------------------
// Selectors:
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

// --------------------------------------------------------------------
// 
// --------------------------------------------------------------------