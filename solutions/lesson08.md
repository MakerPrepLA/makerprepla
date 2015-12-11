## Exercise 1

### Count by Twos

```javascript
var count = 0;
var countTo = 50;

while(count <= countTo){
  console.log(count);
  count += 2;
}
```

### Display Bottles of Beer

```
<html>
  <head>
  </head>

  <body>
    <div id="lyrics"></div>
  </body>
</html>

```
## Exercise 2

### Fencepost Loop

```html
<html>
  <head>  
    <style>
      .even {
      color:chartreuse;
      }

      .odd {
          color:red;
      }
    </style>
  </head>
  <body>
    <div id="target"></div>

    <script>
      var n = 9;
      var countNum = 0;
      var pageString = "";

      while (countNum <= n) {
          var className = countNum % 2 === 0 ? "even" : "odd";
          var endingTag = countNum !== n ? "<hr>" : "";

          pageString += "<p class=" + className + ">" + countNum + "</p>" + endingTag;

          countNum++;
      }

      document.querySelector("#target").innerHTML = pageString;
    </script>
  </body>
</html>

```

## Exercise 3
### Cumulative Sum

```html
<html>
  <head>
  </head>
  <body>

    <div id="target"></div>

  <script>
    var count = 1;
    var product = 1;
    var n = 5;

    while(count <= n){
      product *= count;
      count++;
    }

    document.querySelector("#target").innerHTML = "n's value was " + n + ".\nthe total product was " + product + ".";

    // \n is the linebreak character
    </script>
  </body>
</html>
```

## Exercise 4: FizzBuzz

```javascript
var countNum = 1;
var maxNum = 100;

while(countNum <= maxNum){
    if(countNum % 15 === 0){
        console.log("fizzbuzz");
    } else if(countNum % 5 === 0){
    	console.log("buzz");
    } else if(countNum % 3 === 0){
    	console.log("fizz");
    }  else {
     	console.log(countNum);   
    }
 	countNum++;   
}
```

## Exercise 5: Multiplication Table
```javascript
var i = 1;
var j = 1;
var stop = 12;
var line = "";

while(i <= stop) {
  while(j <= stop) { // 1
    line += (i * j) + " ";
    j++;
  }
  console.log(line);
  line = "";
  j = 1;
  i++;
}
```

## Exercise 7
### Valid Integer

```javascript
var userInput = parseInt(prompt("gimme a number greater than zero."));

while (userInput === 0) {
    userInput = parseInt(prompt("invalid input.  try again."));
}

alert("good job!");
```
## Exercise 8
### Rock, Paper, Scissors

```javascript
var userChoice;
var compChoice;
var isRunning = true;

while (isRunning) {
    userChoice = prompt("rock, paper, or scissors?");
    while (!(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors")) {
        userChoice = prompt("invalid input.  please try again.");
    }

    compChoice = Math.floor(Math.random() * 3);

    if (userChoice === "rock") {
        alert("you threw rock!");
        switch (compChoice) {
            case 0:
                alert("the computer threw rock!  it's a draw!");
                break;
            case 1:
                alert("the computer threw paper!  you lose!");
                break;
            case 2:
                alert("the computer threw scissors!  you win!");
                break;
        }
    }

    if (userChoice === "paper") {
        alert("you threw paper!");
        switch (compChoice) {
            case 0:
                alert("the computer threw rock!  you win!");
                break;
            case 1:
                alert("the computer threw paper!  it's a draw!");
                break;
            case 2:
                alert("the computer threw scissors!  you lose!");
                break;
        }
    }

    if (userChoice === "scissors") {
        alert("you threw scissors!");
        switch (compChoice) {
            case 0:
                alert("the computer threw rock!  you lose!");
                break;
            case 1:
                alert("the computer threw paper!  you win!");
                break;
            case 2:
                alert("the computer threw scissors! it's a draw!");
                break;
        }
    }

    isRunning = confirm("would you like to go again?");
}

```

## Exercise 9
### Guessing Game
```
<html>
  <head>
  </head>
  <body>
    <div class="target"></div>

    <script>
      var maxNum = parseInt(prompt("what will the max guessing number be?"));
      var guessNum = Math.floor(Math.random() * (maxNum - 2)) + 2;
      var userGuess = parseInt(prompt("i'm thinking of a number between 1 and " + maxNum + ".  what is it?"));
      var guesses = 0;
      var myDiv = document.querySelector(".target");

      while (userGuess !== guessNum) {
          if (userGuess < guessNum) {
              userGuess = parseInt(prompt(userGuess + " is too low.  try again!"));
          } else {
              userGuess = parseInt(prompt(userGuess + " is too high.  try again!"));
          }
          guesses++;
      }

      myDiv.innerHTML = "congrats!  the number was " + guessNum + ".  it took you " + guesses + (guesses === 1 ? " try " : " tries ") + "to figure it out.";
    </script>
  </body>
</html>
```
## Exercise 10
### Interest Rate Calculator
```
<html>
  <head>
  </head>
  <body>
    The <span id="adj"></span> <span id="noun"></span> went to the <span id="adj2"></span> <span id="noun2"></span>.

    <script>
    var userAdj = prompt("give me an adjective.");
    var userNoun = prompt("give me an noun.");
    var userAdj2 = prompt("give me another adjective.");
    var userNoun2 = prompt("give me another noun.");

    var pageAdj = document.querySelector("#adj");
    var pageNoun = document.querySelector("#noun");
    var pageAdj2 = document.querySelector("#adj2");
    var pageNoun2 = document.querySelector("#noun2");

    pageAdj.textContent = userAdj;
    pageNoun.textContent = userNoun;
    pageAdj2.textContent = userAdj2;
    pageNoun2.textContent = userNoun2;
    </script>
  </body>
</html>
```

## Exercise 10
### Interest Rate Calculator
**note:** the `\n` character creates a line break, and the `x.toFixed(y)` method rounds off number x to y decimal places. read more about `toFixed()` [here]('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed').
```
var startBalance = Number(prompt("starting balance?"));
var targetBalance = Number(prompt("target balance?"));
var interestRate = Number(prompt("interest rate?\nplease input as a decimal, e.g. 5% = 0.05"));
var currentBalance = startBalance;
var years = 0;


while(currentBalance < targetBalance){
  currentBalance += (currentBalance * interestRate);
  years++;
}

alert("it will take " + years + " years to grow from $" + startBalance + " to $" + targetBalance + " with a " + (interestRate * 100) + "% interest rate.  your total balance will be " + currentBalance.toFixed(2));
```

## Nightmare Mode: Number Introduction
**Note:** adding a number to a string automatically converts the number into a string.  to avoid this, encase the number in parentheses.
```
var guestNum = 1;
var presentNum;
var n = 10;
var message = "";

while(guestNum < n){

  message += "welcome " + (guestNum) + "";

  if(guestNum > 1) {
    message += ", meet";

    presentNum = 1;

    while(presentNum < guestNum){
      if(presentNum > 1){
        if(presentNum == guestNum-1){
          message += " and";
        } else {
          message += ",";
        }
      }
      message += " " + (presentNum);
      presentNum++;
    }
  }
  console.log(message);
  message = "";
  guestNum++;
}
```