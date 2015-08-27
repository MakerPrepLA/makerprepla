# Lesson 12: Functional Programming

**Note:** We will be going over functional programming, using this lesson, for two days. The first lesson will be focused on learning about functions as first-class citizens, scope, and closure. The second lesson will be focused on functional programming using the learnRx library.

## Functions are First-Class Citizens

In JavaScript, functions are values, just like numbers, strings, arrays and objects. They can be saved to variables:

```javascript
var say_hi = function () {
  console.log('hi');
};

var greeter = say_hi;

//both of these should console log 'hi'
say_hi();
greeter();

say_hi = function () {
  console.log('meh');
};

//What will this do? Try it out!
say_hi(); // ??
greeter(); // ??
```

They can be passed as arguments (inputs) to functions:

```javascript
var runner = function (fn) {
  console.log('Invoking a function now!');
  // a function that was passed as an argument to another function is called a CALLBACK
  fn();
};

//This is an example of an anonymous function; more on that in a minute
runner( function(){ console.log('okay') } );
runner(say_hi);
runner(greeter);

//Make sure you understand this one
runner( say_hi() ); // ??
```

...and they can even be returned from *other* functions. We'll go over this in a little bit, but the takeaway here is that in JavaScript functions are **first-class citizens** which just means they can be treated like any other value or object (did I mention that functions *are* objects?)

#### Exercise 1

Write a function `answer_logger` that takes a function as input, runs it, and console logs the return value from that function.

We can test `answer_logger` using the following code, we should not need to change it at all.

```javascript
answer_logger(function(){
  return "I should be console logged";
});
```
Notice anything interesting about the function declaration above? The function has no name and its not assigned to a variable. In JavaScript a function that was declared without any named identifier is called an **"anonymous function"**, and is usually not accessible after its initial creation.

Anonymous functions are commonly used in functional programming when the only purpose of a function is to be passed as a parameter to another function. There is no need to give the function a name or assign it to a variable; the anonymous function will only be accessed by the function it is being passed to, and that function will be able to reference it by the name of the parameter. **This will become more clear with practice.** A function, anonymous or otherwise, that has been passed as an argument to another function is called a **callback**, because at some point the function it was passed to will "call it back".

#### Exercise 2

Write a function called `answer_collector` that takes an array of functions as an input and runs each of them in turn. Each time you run a function, capture its return value and *push* it to a `results_array`. Return the results array from `answer_collector`. Your code should look something like this:

```javascript
var answer_collector = function(functions_array) {
  //create array called results_array

  /*loop through functions in functions_array, invoke each of them
  and store the returned values in results_array*/

  //return results_array when complete
}
```

We can test `answer_collector` with this code:

```javascript
var fn1 = function () {
  return "this should be the first value in results array";
};

answer_collector([fn1, function(){ return "this should be the second value in results array" }]);
```

## Returning Functions from Functions

Not only can functions be passed as inputs, they can also be returned as outputs.

```javascript
var returns_a_func = function () {
  return function(){ console.log('BOOP!') };
};

// have we booped yet?
var booper = returns_a_func();

// how about now?
booper();

booper();
booper();
booper();
```

#### Exercise 3

Create a function that returns another function. The returned function should accept one parameter and return `5 + parameter` when it is invoked. Your code should look something like this:

```javascript
var add_five = function() {
  //return a function that accepts one parameter and returns 5 + parameter

}
```

You can test your function with this code:

```javascript
var add_fiver = add_five();

console.log(add_fiver(5)); //should print 10

console.log(add_fiver(3)); //should print 8
```

**Do not continue until you understand this concept. Ask for help you if need it!**

## Scope

JavaScript has two [**scopes**](https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx): global and local. A variable that is declared outside a function definition is a global variable, and its value is accessible and modifiable **anywhere** in your program.

A variable that is declared inside a function definition, on the other hand, is local. It is created and destroyed every time the function is executed, and it **cannot** be accessed by code outside the function.

```javascript
var global_variable = 'Hello world!';

function just_a_regular_function() {
  var local_variable = 'Hello local scope!'
  console.log(local_variable);
}

// print 'Hello world!'
console.log(global_variable);

// prints undefined
console.log(local_variable);

// prints 'Hello local scope!'
just_a_regular_function();
```

Functions define their own local [**scope**](https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx). Variables declared within a function invocation are available only inside of that function.

 It's as if function invocations are surrounded by one-way mirrors, they can see out and access variables named in their parent scope, but code running outside can't see in to access parameters or variables defined inside. Try this out, **don't copy and paste**:

```javascript
var word = 'original';
var phrase = " is the word";
var new_word = 'changed';

var word_changer = function (new_word) {
    var word = new_word;
    console.log(word + phrase);
};

var leaky_word_changer = function (new_word) {
    word = new_word;
    console.log(word + phrase);
};

// What is the difference between word_changer and leaky_word_changer?

console.log(word + phrase); // ??
console.log(new_word + phrase); // ??

word_changer(new_word);

console.log(word + phrase); // ??
console.log(new_word + phrase); // ??

// Did the console logs differ from what you expected?

// what's about now?

leaky_word_changer(new_word);

console.log(word + phrase); // ??
console.log(new_word + phrase); // ??
```
Confused? In the `word_changer` function, the `var` keyword creates a *new* local variable (accessible only inside the `word_changer` function) called `word`. This local variable **masks** the global variable `word`, and as a result, the global word variable is left unchanged; the function is operating on a local variable.

In the `leaky_word_changer` function, on the other hand, the `var` keyword is not used. As a result, instead of instantiating a new local variable called `word` like the `word_changer` function did, `leaky_word_changer` modifies the **global** `word` variable and sets it equal to `new_word`. Thus, when you `console.log(word + phrase);` after running `leaky_word_changer`, the word has changed.


#### Exercise 4

1.  Write a function `secret_keeper` that defines a variable `secret` inside its code block.
2.  Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe!
3.  Allow the user to invoke `secret_keeper` with two strings as arguments
4.  Print the two strings with the secret word between them.

Your code should look something like this:

```javascript
var secret_keeper = function(string1, string2) {
  // Define secret string here

  // Console log both strings with secret between them here
}

// Try to access secret here (you should not be able to)

// Invoke the secret_keeper function, this should print the secret string
```

You can test your code with the following snippet:

```javascript
console.log(secret); // should be undefined

// This should print: "The secret -->[value of secret here]<--"
secret_keeper('The secret -->', '<--');
```

#### Exercise 5

1. Write two versions of a function `adds_10`
2. The first version of the function, `adds_10` should print the result of adding 10 to a global variable `number`, but should not modify it.
3. The second version of the function, `leaky_adds_10` should increase the value of a global variable `number`, and then print the new value of `number`

Use this pseudo-code to help you write your code:

```javascript
// Define number here

var adds_10 = function() {
  // Print number + 10
};

var leaky_adds_10 = function() {
  // Increase number by 10
  // Print number
}
```

You can test your functions using this code:

```javascript
var number = 10;

// Prints 20
adds_10();

// Number is still 10
console.log(number);

// Prints 20
leaky_adds_10();

// Number has been changed to 20
console.log(number);
```

## Closure

Returned functions retain access to the scope that was available to them when they were defined. This is called **closure**.

**Read that again**.

When a function is defined, the scope that is available to it is established at the point **where the keyword `function` is written,** ***not*** **where it is invoked.**

This is incredibly important, please don't move on until you understand this concept. **Ask the instructor for help you if need to!**

```javascript
var returns_a_func = function () {
  var word = 'I can see inside';
  return function(){ console.log('BOOP! ' + word) };
};

var word = 'I can see outside';

var new_booper = returns_a_func();
new_booper(); // what does this log? why?

var returns_a_func = function () {
  var number = 5;
  return function(){ console.log( "The number is: " + number) };
};

var number = 4;
var fn = returns_a_func();
fn(); // what will this log? why?

var func_runner = function(func){
  var number = 3;
  func();
};

func_runner(fn); // what will this log? why?
```

Remember, scope is set when the function is **defined**, not when it is **invoked**.

### Exercise 6
Write a function `multiplies_by` that takes a number as input and returns a function that, when invoked with a second number as an argument, multiplies the two numbers together.

Your code should look something like this:

```javascript
var multiplies_by(number) {
  // Store number parameter

  /* Return function that accepts one parameter and returns
     the result of multiplying parameter by stored number above */
}
```

We can test `multiplies_by` with this code, we should not need to change it at all.

```javascript
var times5 = multiplies_by(5);
times5(4); // 20

var times10 = multiplies_by(10);
times10(32); // 320
```

## LearnRx

Go to [learnRx](http://jhusain.github.io/learnrx/) and start working. Ask the instructor for guidance when you need it, but really do spend some time and try to figure these challenges out on your own. Its ok to struggle, we *want* you to struggle. If you feel comfortable, you're probably not learning.
