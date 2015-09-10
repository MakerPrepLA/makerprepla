### Lesson 7 Solutions

### Exercise 1
```javascript
// 1.  Use the console to write an expression which compares two strings and produces a `true` value.
console.log("cars" === "cars");

// 2.  Write an expression comparing two strings which produces a `false` value.
console.log("cars" === "car");

// 3.  Determine whether string comparison is case sensitive
console.log("cars" === "CARS"); // false, therefore case sensitive

// 4.  Determine whether string comparison is space sensitive (does adding extra spaces change the outcome?)
console.log("cars" === "ca rs"); // false, therefore space sensitive

// 5.  Write an expression that considers the equivalency of a string and a number and produces a `false` value
console.log("cars" === "99");

// 6.  Write an expression that considers the equivalency of a number and a string and produces a `true value`
console.log("99" == 99);
```

### Exercise 3
```javascript
// 1.  Write an `if` statement that always runs its code block
if (true) {
  console.log("this will run!");
}

// 2.  Write an `if` statement that never runs its code block
if (false) {
  console.log("this will NOT run!");
}

// 3.  Write a statement that logs a message of encouragement if a visitor, when prompted, responds that they are sad.
var mood = prompt("How are you feeling visitor?");
if (mood === "sad") {
  alert("The best is yet to come.");
}

// 4.  Write a statement that alerts a warning if a visitor, when prompted, does not guess that the secret number is 3.
var userNumber = parseInt(prompt("What do you think the secret number is?"));
if (userNumber !== 3) {
  alert("You did not guess the secret number!");
}

// 5.  Prompt the visitor to enter a password when they visit your site. If it is correct, welcome them. Otherwise, direct them elsewhere using this line of code:
// `window.location = "http://www.google.com";` (This code will not work in repl.it, you'll need to use a `<script>` tag or the JavaScript console)
var userPassword = prompt("Please enter the password:");
if (userPassword === "rubberduckie") {
  alert("Welcome old friend.");
} else {
  window.location = "http://cdn.akamai.steamstatic.com/steam/apps/30/header.jpg?t=1421369795";
}
```

### Exercise 5
```javascript
!true; // false
!false; // true
!!false; // false
!!true; // true
!!"type coercion"; // true
!!"all strings are 'truthy' except for..."; // true
!!""; // false

true && true; // true
true && false; // false
false && true; // false
false && false; // false
true || true; // true
true || false; // true
false || true; // true
false || false; // false

true && "what does this evaluate to?"; // what does this evaluate to?
false && "and this?"; // false
true || "sigh, i'm not needed"; // true
false || "default value"; // default value
```

### Exercise 6
```javascript
//  In a script tag, create variables `name`, `age`, `gender`, `isMember`, and `isThirsty` and assign them appropriate values or no values at all. Then compose a paragraph in a div#greeting according to the following rules: (**Write it in pseudocode first, then JavaScript**)
var name = "Noah",
age = 47,
gender = "male",
isMember = true;

var prefix;
if (gender === "male") {
  prefix = "Mr.";
} else {
  prefix = "Ms.";
}
// 1.  If they are not a member or if they are under the age of 21, address them as sir or ma'am as appropriate and apologetically deny them access to the club.
// 2.  Otherwise, greet them as Mr. or Mrs. (as appropriate by gender) and their name, and welcome them. If they are thirsty, prompt them as to what drink they would like and store it in a variable.
// 3.  If their favorite drink is anything but "Coors Light", tell them "yes" (name) "one" (drink_name) "coming right up!". If they ask for a Coors, kick them out.
if (!isMember || age < 21) {
  alert("You are denied " + prefix + name);
} else if (isMember && age > 21) {
  alert("Welcome " + prefix + name);
  var isThirsty = confirm("Are you thirsty?");
  if (isThirsty) {
    var drinkChoice = prompt("What drink would ya like?");
    if (drinkChoice === "Coors Light") {
      isMember = false;
      alert("You are banned from this establishment");
    } else if (!drinkChoice) {
      alert("Enter a drink next time!");
    } else {
      alert("Sure thing, one " + drinkChoice + " coming right up!");
    }
  } else {
    alert("Too bad");
  }
}
```

### Exercise
```javascript
// Create a "choose your own adventure" style text adventure game by using multiple prompts and branching if/ else conditional statements. Write a story into the HTML document on the basis of the user's responses to the prompts.
var room = prompt("Would you like to go in the cave or the castle.");
if (room === "cave") {
  alert("You are now in the cave.");
  var direction = prompt("There is a fork in the cave. Would you like to go to the right or left?");
  if (direction === "right" || direction === "r") {
    alert("You chose the right path. You found a pot of gold.");
  } else if (direction === "left" || direction === "l") {
    alert("You died.");
  }
} else if (room === "castle") {
  alert("You are now in the castle.");
  alert("There is a stairwell in front of you.");
  var direction = prompt("Will you go up the stairs or down the hall?");
  if (direction === "stairs") {
    alert("You slipped and died.");
  } else {
    alert("You found Dracula but he was nice and gave you some gold!");
  }
} else {
  alert("You didn't enter 'cave' or 'castle'");
}
```
