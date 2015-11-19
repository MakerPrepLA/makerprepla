# Lesson 8: While Loops

The **while loop** looks a lot like an **if statement**. They both execute their associated **code block** based on the result of their **conditional expression**. The difference being, the while loop will repeatedly check its conditional expression and continue to run its code block as long as it evaluates to true. **Give it a try:**

**Don't you dare copy & paste any of the examples in this lesson! It's incredibly important that you type them out and debug them yourself.**

```javascript
var n = 0

console.log("I am called the Count... because I really love to count!")

while (n < 10) {
  console.log(n, "ha-ha-ha");
  n++;
}

console.log('fin!');
```

### Exercise 1:

Write a while loop that counts from 0 to 50 by twos

```javascript
var n = 100, song = ''

while ( n >= 0 ) {
  if ( n !== 0 ) {
    song = song + ' ' + n + " bottles of beer on the wall! chug, chug, chug";
  } else {
    song+= " no bottles of beer! stumble, stumble, stumble...";
  }
  n--;
}

document.querySelector('#lyrics').textContent = song;
```

Create a super-quick HTML document that displays the above. Pretty messy right? Now try the following:

```javascript
var n = 100, song = '<ul class=lyrics>';

while ( n >= 0 ) {
  if ( n !== 0 ) {
    song = song + '<li>' + n + " bottle" + (n === 1 ? '' : 's')
    + " of beer on the wall! chug, chug, chug</li>";
  } else {
    song+= "<li>no bottles of beer! stumble, stumble, stumble...</li>";
  }
  n--;
}
song += "</ul>";

// note, this is different than .textContent
document.querySelector('#lyrics').innerHTML = song;
```

**Hint:** If you're having trouble with this exercise, go through it step-by-step and figure out exactly what its doing. Think about what HTML elements you need in order to get it working!

#### Exercise 2: Fencepost Loop

1.  Create a variable `n` and assign it an integer.
2.  Code a while loop that builds as a single string, the numbers 1 through n, separated by commas
3.  How can we make sure not to have a comma after the last number? e.g., for `n = 9` print `"1, 2, 3, 4, 5, 6, 7, 8, 9"`
4.  Use `.textContent` to place that string into a div#target in the HTML document.
5.  Now change your code to create a string full of `<p>` tags, with the number inside, and with `<hr>` dividers between them (but not after the last one), and use `.innerHTML` to place them into the page.
6.  Give odd numbers a class of "odd", even numbers a class of "even." Have a css rule inside your `<style>` tag that styles them differently.

#### Exercise 3: Cumulative Sum

```javascript
var n = 1, sum = 0;

while ( n <= 10 ) {
  sum = sum + n;
  n++;
}

// Why n - 1 ?
console.log("The sum of the numbers 1 through " + (n - 1) + " is " + sum)
```

1.  Similar to the example above, write a while loop that computes the product of multiplying the first n positive integers: product = 1 * 2 * 3 * ... * n.
2.  Use `.innerHTML` to place a formatted piece of text into the HTML document that explains what `n` was and what the product of the numbers computed to.

#### Exercise 4: FizzBuzz

1.  Write a program that console.log's the numbers from 1 to 100
2.  Now for numbers that are multiples of three print **"Fizz"** instead of that number
3.  For the multiples of five print **"Buzz"** instead of that number
4.  For numbers which are multiples of both three and five print **"FizzBuzz"**

**Note:** This is an actual interview question that a lot of experienced developers actually fail to implement. Give yourself a big pat on the back once you get through it, and don't hesitate to ask for help!

## Nested While Loops

While loops can be nested inside of each other. Try out this piece of code. What does it do? Write it, **don't** copy it.

```javascript
var i = 0;
var n = 5;
var j;

while ( i < n ) {
  j = 0; // What happens if we remove this line?
  while ( j < n ) {
    console.log("i is", i, "and j is", j);
    j++;
  }
  i++;
}
```

#### Exercise 5: Multiplication table

Using nested while loops print a multiplication table from 1 to 12.
The output should look something like this:
```javascript
"1 2 3 4 5 6 7 8 9 10 11 12 "
"2 4 6 8 10 12 14 16 18 20 22 24 "
"3 6 9 12 15 18 21 24 27 30 33 36 "
"4 8 12 16 20 24 28 32 36 40 44 48 "
"5 10 15 20 25 30 35 40 45 50 55 60 "
"6 12 18 24 30 36 42 48 54 60 66 72 "
"7 14 21 28 35 42 49 56 63 70 77 84 "
"8 16 24 32 40 48 56 64 72 80 88 96 "
"9 18 27 36 45 54 63 72 81 90 99 108 "
"10 20 30 40 50 60 70 80 90 100 110 120 "
"11 22 33 44 55 66 77 88 99 110 121 132 "
"12 24 36 48 60 72 84 96 108 120 132 144 "
```
Extra credit: Format your table so that the columns line up & there is no trailing space(s) at the end.

## The **Math** object (Don't worry if you don't make it through all of this section)

The **Math** object holds properties and methods related to Mathematics (if you don't know what these are, that's ok, we'll be going over that in a later lesson).

#### Exercise 6:

Figure out what each of the following does:

*   `> Math;`
*   `> Math.PI;`
*   `> Math.E;`
*   `> Math.pow(9, 2);`
*   `> Math.random();`
*   `> Math.floor(7.2);`
*   `> Math.ceil(7.2);`
*   `> Math.ceil( Math.random() * 10 );`
*   `> Math.ceil( Math.random() * 10 );`

How about these?

*   `> parseInt("23");`
*   `> parseInt(23);`
*   `> parseInt("boink");`

That last one will give you an interesting result. Try googling what it means, but don't spend too much time on it. It's not that important in the grand scheme of things.

What about this? Try and figure out what it will do before you type it out.

```javascript
var input

while( !(input = prompt('write something...')) ){
  console.log("you didn't write anything")
}

console.log("yay, you did it! you wrote: " + input)
```

#### Exercise 7:

Write code to ask a user to enter an integer greater than 0. Keep asking for a number until it is valid (larger than 0);

#### Exercise 8: Rock, Paper, Scissors

Write code to play rock, paper, scissors with the user.

1.  Ask for input until the user enters either "R", "P", or "S"
2.  Use `Math.random()` to choose a play for the computer
3.  Tell the user what the outcome was
4.  Ask the user if they'd like to play again

#### Exercise 9: Guess a number

1.  Prompt the user for an input to determine what the highest integer `n` should be. Use `parseInt(n)` to convert it from a string to a number. As long as the result is NaN, ask them again. Read [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN) how to determine if a value is NaN.
2.  Generate a random number between 1 and `n`.
3.  Ask the user to guess the number. Tell them if their guess is too high or too low.
4.  Loop until they guess correctly
5.  Use `.innerHTML` to show them something fun as a reward for guessing correctly.
6.  Show them what number was the correct number in the end.
7.  Use a counter to let them know how many guesses it took them to get the right number.

#### Exercise 10: Interest Rate Calculator

1.  Ask the user for three pieces of information: a starting balance, a target balance, and an interest rate (entered as 0.05 for 5%, for example)
2.  Use a `while` loop to calculate the number of years required for the starting balance to have grown larger than the target balance
3.  Set the textContent of a div#output to explain the answer to the user: "To grow an initial investment of $1000 to $2000 at 4.5% will require ... years"

## Turn in your work!

Please submit a gist containing the most challenging or fulfilling piece of code you've written thus far.

It can be a specific exercise you've completed, semi-related to the concepts we've covered, or code you've written on your own, not at all related to what we've done in class.

## Extra Credit

+ Learn about the [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) statement. How is it different than a simple while loop?
+ Read more about [NaN](http://ariya.ofilabs.com/2014/05/the-curious-case-of-javascript-nan.html)
+ Did you know that getting predictable and precise machines like computers to generate random numbers is really hard? Read about "true" random numbers vs. "pseudo" random numbers, and why the distinction matters. [This](http://www.howtogeek.com/183051/htg-explains-how-computers-generate-random-numbers/) is a good place to start.
+ Learn about [time complexity](https://en.wikipedia.org/wiki/Time_complexity) and [Big-O notation](https://en.wikipedia.org/wiki/Big_O_notation). [This](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/) is a good place to start. Once you think you have a grip on the concept, try to determine the time complexity of the two code snippets below:

```javascript
var n = 0;
while (n < 100) {
  console.log(n);
  n++
}
```

```javascript
var n = 0;
var j = 0;
while (j < 100) {
  n = 0;
  while (n < 100) {
    console.log(j,n);
  }
}
```

## Nightmare Mode: Number Introduction

`n` numbers are coming to a number party. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for `n = 5`:

"welcome 1"

"welcome 2, meet 1"

"welcome 3, meet 1 and 2"

"welcome 4, meet 1, 2 and 3"

"welcome 5, meet 1, 2, 3 and 4"

If its getting late, don't spend too much time worrying about how to format the strings properly. The key takeaway from this excercise is getting two nested while loops to work. If you're able to print something along the lines of:

1. 1
2. 2,1
3. 3,1,2
4. 4,1,2,3
5. 5,1,2,3,4
