### Exercise 1:
```javascript
// 1.  Define a function that console.logs a simple message and the time: `new Date()`
function messageAndDate() {
  console.log("To day is a great day.");
  var today = new Date();
  console.log(today.toLocaleTimeString());
}
messageAndDate();

// 2.  Invoke your function multiple times from the console.
var times = 5;
while (times > 0) {
  messageAndDate();
  times--;
}

// 3.  Place your function in a script tag in an HTML document.
// okay

// 4.  Invoke it multiple times in the script tag.
// see #2

// 5.  Open the HTML document in your browser and hit reload a few times.
// done

// 6.  Define a function that generates an enthusiastic string of text and alerts it to the screen.
function alerter() {
  alert("I am a STRING!");
}

// 7.  Invoke it a few dozen times from the console.
var dozens = 24;
while (dozens > 0) {
  alerter();
  dozens--;
}
```

### Exercise 2:
```javascript
// 1.  In a script tag, define a new function called `random_number`
// 2.  `random_number` should a return a random number between 1 and 10.
function randomNumber() {
  return Math.floor(1 + Math.random() * [10 - 1 + 1]);
}

// 3.  Save the return value to a variable called `new_random_number`
var newRandomNumber = randomNumber();

// 4.  console log `new_random_number`. **Note:** There should *not* be a `console.log` inside of your function definition.
console.log(newRandomNumber);

// 5.  Refactor your code so that it doesn't need the `new_random_number` variable
console.log(randomNumber());

// 6.  Run your code inside a while loop so that it generates 10 random numbers
var count = 10;
while (count > 0) {
  console.log(randomNumber());
  count--;
}
```
### Exercise 3:
```javascript
// 1.  Write a function called `tripler` that takes a number and returns triple the value.
function trippler(inputNum) {
  return inputNum * 3;
}

// 2.  Create a function `multiply` that takes two numbers as inputs and returns their product
function multiply(multiplicand, multiplier) {
  return multiplicand * multiplier;
}

// 3.  Create a function `divide` that takes two numbers as inputs and returns the result of dividing the first by the second
function divide(numerator, denominator) {
  return numerator / denominator;
}

// 4.  Create a function `remainder` that takes two numbers as inputs and returns the result of modulo(`%`) the first by the second
function remainder(numerator, denominator) {
  return numerator % denominator;
}

// 5.  Using only the functions you wrote above, and no operators, calculate the value of tripling 5, multiplying that by 12, dividing by 2 and then finding the remainder of dividing that by 3.
console.log(remainder(divide(multiply(trippler(5), 12), 2), 3));

// 6.  Write 4 more lines of code that use all of your math functions in a single expression. **Hint:** This means that you use the return value of one function as an **argument** to another. You should be able to write a single expression that uses all of your math functions together, but doesn't require any temporary variables for intermediate values.
console.log(trippler(divide(multiply(remainder(4, 10), 2), 4)));
console.log(divide(multiply(remainder(trippler(2), 4), 2), 8));
console.log(multiply(divide(remainder(trippler(8), 3), 2), 1));
console.log(remainder(multiply(trippler(divide(5, 2)), 2), 10));
```

### Exercise 4:
```javascript
// 1.  Write a function called `factoral_of_n` that takes a number and returns the [factoral](//en.wikipedia.org/wiki/Factorial) i.e. `factoral_of_n(5)` should return 120 (5x4x3x2x1).
function factorialOfN(num) {
  var factorial = 1;
  while (num > 0) {
    factorial *= num;
    num--;
  }
  return factorial;
}
console.log(factorialOfN(5));

// 2.  Write a function called `count_by_n` that has parameters `count_by` and `count_up_to`, and console.log's the numbers up to `count_up_to` by intervals of `count_by`.
function countByN(countBy, countUpTo) {
  var incrementor = countBy;
  while (countBy <= countUpTo) {
    console.log(countBy);
    countBy += incrementor;
  }
}

countByN(2, 30);
```

### Exercise 5:
```javascript
// 1.  Write a function `this_that` that takes in two strings and reimplements fizzBuzz using those two words instead of 'fizz' and 'buzz' (prints the numbers from 1 to 100\. But for multiples of three print word1 instead of the number and for the multiples of five print word2\. For numbers which are multiples of both three and five print word1word2.)
// 1. Write a function this_that that takes in two strings and reimplements fizzBuzz using those two words instead of 'fizz' and 'buzz' (prints the numbers from 1 to 100. But for multiples of three print word1 instead of the number and for the multiples of five print word2. For numbers which are multiples of both three and five print word1word2.)
function thisThat(str1, str2) {
	var startNum = 1;
    var endNum = 100;
    var longString = "";
    for (var i = startNum; i <= endNum; i++) {
        if (i % 15 === 0) {
            longString += str1 + str2;
        } else if (i % 5 === 0) {
            longString += str2;
        } else if (i % 3 === 0) {
            longString += str1;
        } else {
            longString += i;
        }
        if (i !== endNum) {      
        	longString += ", ";
        }
    }
    return longString;
}
console.log(thisThat("hi", "bye"));

// 2. Allow the user to input a count_up_to argument
// 3. Allow the user to input fizz_num and buzz_num arguments to set the word substitutions to multiples of something other than 3 and 5
function thisThat(str1, str2, endNum, fizzNum, buzzNum) {
	var startNum = 1;
    var longString = "";
    for (var i = startNum; i <= endNum; i++) {
        if (i % (fizzNum * buzzNum) === 0) {
            longString += str1 + str2;
        } else if (i % buzzNum === 0) {
            longString += str2;
        } else if (i % fizzNum === 0) {
            longString += str1;
        } else {
            longString += i;
        }
        if (i !== endNum) {      
        	longString += ", ";
        }
    }
    return longString;
}

console.log(thisThat("hi", "bye", 75, 2, 7));
```

### Exercise 6:
```javascript
// By definition, the first two numbers in the Fibonacci sequence are 0 and 1, and each subsequent number is the sum of the previous two. For example, the first ten Fibonacci numbers are:
// `0, 1, 1, 2, 3, 5, 8, 13, 21, 34`
// Write a function that accepts a number and returns the number at that position in the fibonnaci sequence.
function fibonacciIndex(index) {
    var previous = 0;
    var next = 1;
    var sum = 0;
    for (var i = 0; i < index - 1; i++) {
    	sum = previous + next;
        console.log(sum);
        previous = next;
        next = sum;
        sum = 0;
    }
    return next;
}

var fibIndex = fibonacciIndex(7);
console.log(fibIndex);
```
