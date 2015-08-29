### Exercise 1:

1.  Define a function that console.logs a simple message and the time: `new Date()`
function logMessageTime() {
  var message = "Have a stupendous day!";
  var date = new Date();
  var time = date.getHours(); //TODO: get it in better format

  console.log(message + "\n" + time);
}
2.  Invoke your function multiple times from the console.
logMessageTime();
logMessageTime();
3.  Place your function in a script tag in an HTML document.
4.  Invoke it multiple times in the script tag.
5.  Open the HTML document in your browser and hit reload a few times.
6.  Define a function that generates an enthusiastic string of text and alerts it to the screen.
function alertText() {
  alert("The clouds are falling!");
}
7.  Invoke it a few dozen times from the console.
alertText();
alertText();

### Exercise 2:

1.  In a script tag, define a new function called `get_sentence`
2.  `get_sentence` should select a sentence randomly between two or more options and return it
3.  Save the return value to a variable called `new_sentence`
function getSentence() {
  var sentence1 = "It's cloudy with a chance of meatballs.";
  var sentence2 = "Meatballs are good for the soul.";
  var newSentence = "";
  var min = 1, max = 2;
  var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  if (randomNumber === 1) {
    newSentence = sentence1;
  } else {
    newSentence = sentence2;
  }
  return newSentence;
}
4.  Use a querySelector to put the sentence inside a `<p>` in the HTML docuemnt
5.  Refactor your code so that it doesn't need the `new_sentence` variable
6.  Use a while loop to run `get_sentence` ten times in a row so we can make sure the sentence really is random.
7.  What is the statistical likelihood that we randomly get the same sentence ten times in a row?

### Exercises 3:

1.  Create a function `log_and_return` that console.logs all of its inputs and then returns them from the function invocation.
2.  Store the return value as a variable `returned_values`
3.  Pass that variable as an argument to a second invocation of `log_and_return`

### Exercise 4: Simple Math

1.  Write a function called `tripler` that takes a number and returns triple the value.
2.  Create a function `multiply` that takes two numbers as inputs and returns their product
3.  Create a function `divide` that takes two numbers as inputs and returns the result of dividing the first by the second
4.  Create a function `remainder` that takes two numbers as inputs and returns the result of modulo(`%`) the first by the second
5.  Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.
6.  Write 4 more lines of code that use all of your math functions in a single expression

### Exercise 5:

Remember while loops?

1.  Write a function called `factoral_of_n` that takes a number and returns the [factoral](//en.wikipedia.org/wiki/Factorial) i.e. `factoral_of_n(5)` should return 120 (5x4x3x2x1).
2.  Write a function called `count_by_n` that has parameters `count_by` and `count_up_to`, and console.log's the numbers up to `count_up_to` by intervals of `count_by`.

### Exercise 6: FizzBuzz 2 - FizzBuzz Rises

**Rewrite the below from scratch if you can, try not to reference your previous fizzbuzz code.**

1.  Write a function `this_that` that takes in two strings and reimplements fizzBuzz using those two words instead of 'fizz' and 'buzz' (prints the numbers from 1 to 100\. But for multiples of three print word1 instead of the number and for the multiples of five print word2\. For numbers which are multiples of both three and five print word1word2.)
2.  In the first iteration, have `this_that` return a long string of the counting seperated by commas
4.  Allow the user to input a `count_up_to` argument
5.  Allow the user to input `fizz_num` and `buzz_num` arguments to set the word substitutions to multiples of something other than 3 and 5

### Exercise 7: Fibonacci

By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

### Extra Credit

Use the sum, multiple, divide, and remainder functions you wrote earlier to create a "calculator" function. This function should accept three parameters. The first two parameters are the numbers on which to perform an operation, and the third parameter should be a string which specifies which mathematical operation to perform on the two numbers.

### Nightmare Mode

Learn about [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) and create a generator that yields the next fibonacci number each time its called, and can be reset by passing it a value of `true`.

**Hint:** The problem is solved for you in the documentation link above, but you need to implement it on your own **AND** understand it. Once you think you've got it, reimplement FizzBuzz as a generator.
