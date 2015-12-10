# Lesson Plan 7: Conditional Logic Flow

## Advice

1. The whole time I did this lecture when I was typing stuff into the REPL, I asked them constantly what they thought it was gonna evaluate to before I did it.
2. I also explained a lot of the concepts using the whiteboard. Seemed to really help. The whiteboard was mostly useful because I write out a "generalized structure" for how these things work, label everything, and then do live demos.
3. `prompt()` does not work on repl.it, they have to do those in a script tag or in chrome console
4. They found the fact that `true && 'hello'` evaluates to `hello` particularly weird. Might be worth 5 minutes of explaining how to use `&&` and `||`. Maybe go over default operator and guard operator in the lecture because it appears in one of the exercises before the section in the lesson that explains it. I think it would be valuable as part of the lecture to work through some of the trickier examples in exercise 5 together and get everyone to try and figure out what it will evaluate to before you run it, then provide an explanation.

## Booleans and Comparators

Last lesson we learned about the data types strings and numbers. Today we're going to learn about a new data type: Boolean. A boolean data type, unlike strings and numbers which can have an infinite number of values, only has two:

1. true
2. false

Demonstrate how `true` and `false` can be typed directly into the REPL and evaluated. Emphasize that they must not be capitalized.

Similar to strings and integers, they can be stored in variables:

```javascript
var classInProgress = true;
classInProgress // true

classInProgress = false;
classInProgress // false (that doesn't mean ya'll get to go home)
```

Booleans are just another data type. They do, however, have a unique relationship with comparators.

### Comparators

Comparator AKA a Relational Operator

Comparators in JavaScript are used to compare values / data types. They are unique in that they always evaluate to a boolean. We'll get to that in a second.

[Draw on the whiteboard `10 > 5` and then draw an arrow pointing to 10 and 5 and write "operand" and then an arrow pointing to `>` and write "Operator" ]

The "operator" compares the two "operands" and generates a boolean value. That sounds confusing, but in practice its simple. All of you can answer this immediately: Is 10 > 5? Obviously it is, so the expression `10 > 5` evaluates to true.

How can we test this? That's right, the REPL! [Remind them that the E in REPL stands for evaluate and then type `10 > 5` into a REPL and demonstrate how it evaluates to true]

Ok lets look at one more operator (you will cover even more when you go through the lesson yourselves). What if I wanted to check if 10 was equal to 5? In JavaScript we use the `===` sign to test for equality, like this:

```javascript
10 === 5; // false

10 === 10; // true

10 === "10" // false (one is a string, the other is a number)

var fruit = "apple";

fruit === "apple" // true

fruit = "apple" //uh oh, what will this one do?
```

Make sure to emphasize the distiction between using `=` to assign a value and `===` to test for equality.

### typeof

Now that we've learned about three distinct data types, I think its time to discuss the javascript typeof operator. typeof is an operator just like '+', '-', '>', '===' , except when it evaluates, it returns a string that specifies what type of data the operand is. Again, its actually really simple when you try it in a REPL:

```javascript
typeof "hello" // "string"

typeof true // "boolean"

typeof 5 // "number"

typeof "5" // "string" (SO META)
```

## Conditional Statements

The `if` statement runs a series of lines of code AKA ** code block** depending on whether a programmer-specified boolean condition evaluates to `true` or `false`. Lets take a look:

```javascript
if (true) {
  alert("'Twas true!");
}

if (false) {
  // it don't matter what you put here, it ain't gonna happen
  console.log('YOLO!');
}

var number1 = 10;
var number2 = 5;

if (number1 > number2) {
  // will this run?
}

if (number2 > number1) {
  //what about this?
}
```

The `else` statement works similarly to if, except the code it contains will only execute if the `if` block doesn't:

```javascript
// flip this between true and false
if (true) {
  alert('its true!');
}
else {
  alert('it wasn't true!)
}
```

You can't have a standalone else statement:

```javascript
// This is a meaningless statement that JavaScript does not know how to interpret and will throw an error
else {
  console.log('Hi!');
}
```

`if` and `else` statements can be chained together to create more advanced logic flow:

```javascript
// flip these between true and false to show the three different paths this program can take.
var javascript_is_awesome = true;
var javascript_is_still_awesome = true;

if (javascript_is_awesome) {
  console.log('Javascript is awesome!');
}
else if (javascript_is_still_awesome) {
  console.log('Javascript is still awesome!');
}
else {
  console.log(':(')
}
```

## Logical AND, OR, and TERNARY

### AND / OR

We can combine boolean expressions together to create more advanced logic. We have two main logical operators: `&&` (and) **and** `||` (or)

Walk them through this demo:

```javascript
if (10 > 5) {
  alert('Thats right!');
}

if (10 > 5 && "apple" === "apple") {
  alert('Thats right!');
}

//nothing happens this time
if (10 > 5 && "apple" === "orange") {
  alert('Thats right!');
}

// worked because 10 > 5 is true
if (10 > 5 || "apple" === "orange") {
  alert('Thats right!')
}

// nothing happens
if (10 < 5 || "apple" === "true") {
  alert('Thats right!');
}
```
 
Emphasize that they don't need to think about this too hard. Just translate it into words. For example: "If 10 is larger than 5 AND apple is equal to apple then..."

### Ternary Operator

Finally, we have the ternary operator. Don't think about this one too hard either, its just a shortcut for the: `if this then do that, otherwise do something else` In code, that would look like:

```javascript
if (true) {
  console.log('It was true!');
}

else {
  console.log('It was false!');
}
```

Statements like that are written so often, we can use a shortcut that looks like this:

`true ? console.log('It was true!') : console.log('It was false!');`
