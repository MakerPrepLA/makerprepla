# Lesson 10: Functions

A function is an object containing a [subroutine](https://en.wikipedia.org/wiki/Subroutine) that defines a sequence of lines of code, packaged as a unit. When defined and saved as a variable, we can reference it by that variable name, and use the invocation operator `()` to run it 0, 1, or many times.

```javascript
// definition
var greeter = function () {
  console.log( "Hello, nice to meet you." );
};

// do we see a console.log yet?

// reference
greeter;

// do we see a console.log yet?

// invocation
greeter();

// do we see a console.log yet?

greeter();
greeter();
greeter();
// what about now?
```

The above is a function that creates side effects when run. The function's side effect is a message logged in the console. Run each of the above lines of code one at a time. At what point does the greeting actually appear in the console?

#### Exercise 1:

1.  Define a function that console.logs a simple message and the time: `new Date()`
2.  Invoke your function multiple times.
3.  Place your function in a script tag in an HTML document.
4.  Invoke it multiple times in the script tag.
5.  Open the HTML document in your browser and hit reload a few times.
6.  Define a function that generates an enthusiastic string of text and alerts it to the screen.
7.  Invoke it a few dozen times from the console.

## Returning Values from Functions

A function with a return value, but no side effects

```javascript
var greeter = function () {
  return 'Hello';
};

// saving the return value
var greeting = greeter();

// what value does the variable greeting hold?

// using the return value to compose larger expressions
console.log(greeting + ", nice to meet you.");

// what's the difference here?
console.log(greeter() + ", nice to meet you.");
```

The result of evaluating an expression consisting of a function reference, followed by an invocation operator, is the value to the right of the keyword `return` inside the function when the code is run. Bet you can't say that 5 times fast! Lets look at it in practice:

```javascript
var saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz.";
  return phrase;
};

// What is the return value? saying will now === phrase
var saying = saying_generator();

var broken_saying_generator = function () {
  var phrase = "Heeey, " + "it's the " + " Fonz.";
  phrase;
};

// What about now? What causes this one to be broken?
var broken_saying = broken_saying_generator();
```

#### Exercise 2:

1.  In a script tag, define a new function called `random_number`
2.  `random_number` should a return a random number between 1 and 10.
3.  Save the return value to a variable called `new_random_number`
4.  console log `new_random_number`. **Note:** There should *not* be a `console.log` inside of your function definition.
5.  Refactor your code so that it doesn't need the `new_random_number` variable
6.  Run your code inside a while loop so that it generates 10 random numbers

**Hint:** Remember, the formula for generating random number in javascript is:

`Math.floor([minimum_value] + Math.random() * [maximum_value - minimum_value + 1]);`

## Named Parameters

We use named **parameters** to give our inputs (**arguments**) variable names for the length of the function invocation

```javascript
var value_logger = function (value) {
  console.log(value);
};

value_logger("Howdy ho, neighborino!");

/* parameters and variables defined in function invocations
are local to that invocation. This is called "scope" and
we'll cover it in more detail in a later lesson */
value;     // ReferenceError: No variable 'value' exists

value_logger(3 + 7);

// where's the seven?
value_logger(3, 7);

var doubler = function (num) {
  return num * 2;
};

// is it ten?
var should_be_ten = doubler(5);

var double_value_logger = function (value1, value2) {
  console.log(value1, value2);
};

double_value_logger("hello", "how are you");

// what is value2?
// What happens to the value of a parameter when we don't pass it an argument?
double_value_logger("hello");

var add = function(num1, num2){
  return num1 + num2;
};

var sum = add(7, 12);
```

#### Exercise 3: Simple Math

1.  Write a function called `tripler` that takes a number and returns triple the value.
2.  Create a function `multiply` that takes two numbers as inputs and returns their product
3.  Create a function `divide` that takes two numbers as inputs and returns the result of dividing the first by the second
4.  Create a function `remainder` that takes two numbers as inputs and returns the result of modulo(`%`) the first by the second
5.  Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.
6.  Write 4 more lines of code that use all of your math functions in a single expression. **Hint:** This means that you use the return value of one function as an **argument** to another. You should be able to write a single expression that uses all of your math functions together, but doesn't require any temporary variables for intermediate values.

## Looping Functions

#### Exercise 4:

Remember while loops?

1.  Write a function called `factoral_of_n` that takes a number and returns the [factoral](//en.wikipedia.org/wiki/Factorial) i.e. `factoral_of_n(5)` should return 120 (5x4x3x2x1).
2.  Write a function called `count_by_n` that has parameters `count_by` and `count_up_to`, and console.log's the numbers up to `count_up_to` by intervals of `count_by`.

### Exercise 5: FizzBuzz 2 - FizzBuzz Rises

**Rewrite the below from scratch if you can, try not to reference your previous fizzbuzz code.**

1.  Write a function `this_that` that takes in two strings and reimplements fizzBuzz using those two words instead of 'fizz' and 'buzz' (prints the numbers from 1 to 100\. But for multiples of three print word1 instead of the number and for the multiples of five print word2\. For numbers which are multiples of both three and five print word1word2.)
2.  Allow the user to input a `count_up_to` argument
3.  Allow the user to input `fizz_num` and `buzz_num` arguments to set the word substitutions to multiples of something other than 3 and 5

#### Exercise 6: Fibonacci

By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are:

`0, 1, 1, 2, 3, 5, 8, 13, 21, 34`

Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.

## Extra Credit

Use the sum, multiple, divide, and remainder functions you wrote earlier to create a "calculator" function. This function should accept three parameters. The first two parameters are the numbers on which to perform an operation, and the third parameter should be a string which specifies which mathematical operation to perform on the two numbers.

## Nightmare Mode

### Generators

Learn about [generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators) and create a generator that yields the next fibonacci number each time its called, and can be reset by passing it a value of `true`.

**Hint:** The problem is solved for you in the documentation link above, but you need to implement it on your own **AND** understand it. Once you think you've got it, reimplement FizzBuzz as a generator.

### Recursion

Read the [recursion section](http://eloquentjavascript.net/03_functions.html) of chapter 3 of Eloquent JavaScript and then attempt to solve the recursion problem at the bottom of the page, under the "Exercises" section.
