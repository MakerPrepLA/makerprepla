# Lesson 8: While Loops

The **while loop** looks a lot like an **if statement**. They both execute their associated **code block** based on the result of their **conditional expression**. The difference being, the while loop will repeatedly check its conditional expression and continue to run its code block as long as it evaluates to true. **Give it a try:**

**Don't you dare copy & paste any of the examples in this lesson! It's incredibly important that you type them out and debug them yourself.**

```javascript
var n = 0

console.log("I am called the Count... because I really love to count!")

while (n < 10) {
  console.log(n, "ha-ha-ha")
  n++
}

console.log('fin!')
```

### Exercise 1:

Write a while loop that counts from 0 to 50 by twos

```javascript
var n = 100, song = ''

while ( n >= 0 ) {
  if ( n !== 0 ) {
    song = song + ' ' + n + " bottles of beer on the wall! chug, chug, chug"
  } else {
    song+= " no bottles of beer! stumble, stumble, stumble..."
  }
  n--
}

document.querySelector('#lyrics').textContent = song
```

Create a super-quick HTML document that displays the above. Pretty messy right? Now try the following:

```javascript
var n = 100, song = '<ul class=lyrics>'

while ( n >= 0 ) {
  if ( n !== 0 ) {
    song = song + '<li>' + n + " bottle" + (n === 1 ? '' : 's')
    + " of beer on the wall! chug, chug, chug</li>"
  } else {
    song+= "<li>no bottles of beer! stumble, stumble, stumble...</li>"
  }
  n--
}
song += "</ul>"

document.querySelector('#lyrics').innerHTML = song
```

**Hint:** If you're having trouble with this exercise, go through it step-by-step and figure out exactly what its doing. Think about what HTML elements you need in order to get it working!

### Exercise 2: Fencepost Loop

1.  Create a variable `n` and assign it an integer.
2.  Code a while loop that builds as a single string, the numbers 1 through n, separated by commas
3.  How can we make sure not to have a comma after the last number? e.g., for `n = 9` print `"1, 2, 3, 4, 5, 6, 7, 8, 9"`
4.  Use `.textContent` to place that string into a div#target in the HTML document.
5.  Now change your code to create a string full of <p> tags, with the number inside, and with <hr> dividers between them (but not after the last one), and use `.innerHTML` to place them into the page.
6.  Give odd numbers a class of "odd", even numbers a class of "even." Have a css rule inside your <style> tag that styles them differently.

```javascript
var n = 1, sum = 0

while ( n <= 10 ) {
  sum = sum + n
  n++
}

// Why n - 1 ?
console.log("The sum of the numbers 1 through " + (n - 1) + " is " + sum)
```

### Exercise: Cumulative Sum

1.  Write a while loop that computes the product of multiplying the first n positive integers: product = 1 * 2 * 3 * ... * n.
2.  Use `.innerHTML` to place a formatted piece of text into the HTML document that explains what `n` was and what the product of the numbers computed to.
3.  Give the tags different classes and ids that match pre-written CSS with some styling to make it a bit prettier.

### Exercise: Code Refactor

```javascript
var n = 0

while ( n <= 20 ) {
  if ( n !== 13 && n % 2 === 0 ) {
    console.log("I like the number " + n + ", a nice even number.")
  } else if ( n !== 13 && n % 2 !== 0 ) {
    console.log("I like the number " + n + ", odd is okay too!")
  } else {
    console.log("la-la-la, nothing to say here")
  }
  n++
}
```

Refactor the code above. What improvements can be made? Can it be made shorter, clearer, and more succinct?

>"There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies."" --- C.A.R. Hoare

### Exercise: FizzBuzz

1.  Write a program that console.log's the numbers from 1 to 100
2.  Now for numbers that are multiples of three print "Fizz" instead of that number
3.  For the multiples of five print "Buzz" instead of that number
4.  For numbers which are multiples of both three and five print "FizzBuzz"
5.  Instead of console.logging construct a long string and use textContent to place it in a div
6.  Now put each number in a div tag. Give 'fizz', 'buzz', and 'fizzbuzz' different classes and style appropriately. Use innerHTML to place it all on the page after the looping is done.

**Note:** This is an actual interview question that a lot of experienced developers actually fail to implement. Give yourself a big pat on the back once you get through it, and don't hesitate to ask for help!

## Nested While Loops

```javascript
var i = 0, j, n = 5

while ( i < n ) {
  j = 0 // What happens if we remove this line?
  while ( j < n ) {
    console.log("i is", i, "and j is", j)
    j++
  }
  i++
}
```

### Exercise

`n` numbers are coming to a number party. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for `n = 5`:

"welcome 1"
"welcome 2, meet 1"
"welcome 3, meet 1 and 2"
"welcome 4, meet 1, 2 and 3"
"welcome 5, meet 1, 2, 3 and 4"

## The **Math** object (if you don't have time to make it throug this section, that's ok)

The **Math** object holds properties and methods related to Mathematics (if you don't know what these are, that's ok, we'll be going over that in a later lesson).

### Exercise

Figure out what each of the following does:

`
*   > Math
*   > Math.PI
*   > Math.E
*   > Math.pow(9, 2)
*   > Math.random()
*   > Math.floor(7.2)
*   > Math.ceil(7.2)
*   > Math.ceil( Math.random() * 10 )
*   > Math.ceil( Math.random() * 10 )
`

How about?

`
*   > parseInt("23")
*   > parseInt(23)
*   > parseInt("boink")
`

What about this? Try and figure out what it will do before you type it out.

```javascript
var input

while( !(input = prompt('write something...')) ){
  console.log("you didn't write anything")
}

console.log("yay, you did it! you wrote: " + input)
```

### Exercise

Write code to ask a user to enter an integer greater than 0. Keep asking for a number until it is valid.

### Exercise: Rock, Paper, Scissors

Write code to play rock, paper, scissors with the user.

1.  Ask for input until the user enters either "R", "P", or "S"
2.  Use `Math.random()` to choose a play for the computer
3.  Tell the user what the outcome was
4.  Ask the user if they'd like to play again

### Exercise: Guess a number

1.  Prompt the user for an input to determine what the highest integer `n` should be. use `parseInt(n)` to convert it from a string to a number. As long as the result is NaN, ask them again.
2.  Generate a random number between 1 and n.
3.  Ask the user to guess the number. Tell them if their guess is too high or too low.
4.  Loop until they guess correctly
5.  Use `.innerHTML` to show them something fun as a reward for guessing correctly.
6.  Show them what number was the correct number in the end.
7.  Use a counter to let them know how many guesses it took them to get the right number.

### Exercise: Interest Rate Calculator

1.  Ask the user for three pieces of information: a starting balance, a target balance, and an interest rate (entered as 0.05 for 5%, for example)
2.  Use a `while` loop to calculate the number of investment periods required for the starting balance to have grown larger than the target balance
3.  Set the textContent of a div#output to explain the answer to the user: "To grow an initial investment of $1000 to $2000 at 4.5% will require..."

## Turn in your work!

Please submit a gistcontaining the most challenging or fulfilling piece of code you've written thus far.

It can be a specific exercise you've completed, semi-related to the concepts we've covered, or code you've written on your own, not at all related to what we've done in class.

## Extra Credit

+ Learn about the [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) statement. How is it different than a simple while loop?
