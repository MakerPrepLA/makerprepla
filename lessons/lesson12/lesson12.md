# Lesson 12: Functional Programming

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

### Exercise 1

Write a function `answer_logger` that takes a function as input, runs it, and console logs the return value from that function.

We can test `answer_logger` using the following code, we should not need to change it at all.

```javascript
answer_logger(function(){
  return "I should be console logged";
});
```
Notice anything interesting about the functional declaration above? The function has no name, and its not assigned to a variable. In JavaScript, a function that was declared without any named identifier is called an **"anonymous function"** and is usually not accessible after its initial creation.

Anonymous functions are commonly used in functional programming when the only purpose of a function is to be passed as a parameter to another function. There is no need to give the function a name or assign it to a variable; the anonymous function will only be accessed by the function it is being passed to, and that function will be able to reference it by the name of the parameter. **This will become more clear with practice.**

### Exercise 2

Write a function called `answer_collector` that takes an array of functions as an input and runs each of them in turn. Each time you run a function, capture its return value and *push* it to a `results_array`. Return the results array from `answer_collector`. Your code should look something like this:

```javascript
var answer_collection = function(functions_array) {
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
```

### Exercise 3

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
}

// print 'Hello world!'
console.log(global_variable);

// prints undefined
console.log(local_variable);
```

Functions define their own local [**scope**](https://msdn.microsoft.com/library/bzt2dkta(v=vs.94).aspx). Variables declared within a function invocation are available only inside of that function.

 It's as if function invocations are surrounded by one-way mirrors, they can see out and access variables named in their parent scope, but code running outside can't see in to access parameters or variables defined inside. Try this out, **don't copy and paste**:

```javascript
var word = 'original';
var phrase = " is the word";
var new_word = 'unoriginal';

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

word_changer('changed');

console.log(word + phrase); // ??
console.log(new_word + phrase); // ??

// Did the console logs differ from what you expected? 

// what's about now?

leaky_word_changer('changed');

console.log(word + phrase); // ??
console.log(new_word + phrase); // ??
```
Confused? In the `word_changer` function, the `var` keyword causes a *new* local variable (accessible only inside the function) called `word` to be created. This local variable **masks** the global variable `word`, and as a result, the global word variable is left unchanged; the function is operating on a local variable.

In the `leaky_word_changer` function, on the other hand, the `var` keyword is not used. As a result, instead of instantiating a new local variable called `word` like the `word_changer` function did, `leaky_word_changer` modifies the **global** `word` variable and sets it equal to `new_word`. Thus, when you `console.log(word + phrase);` the word has changed.


### Exercise 4

1.  Write a function `secret_keeper` that defines a variable `secret` inside its code block.
2.  Try to access the secret variable from outside the function scope using your JS console. Make sure it's safe!
3.  Allow the user to invoke `secret_keeper` with two strings as arguments
4.  Alert the two strings with the secret word between them.

Your code should look something like this:

```javascript
var secret_keeper = function(string1, string2) {
  //define secret here

  //alert both strings with secret between them here
}

//try to access secret here (you should not be able to)
```

## Closure

Returned functions retain access to the scope that was available to them when they were defined. This is called **closure**.

**Read that again**.

When a function is defined, the scope that is available to it is established at the point **where the keyword `function` is written,** ***not*** **where it is invoked.**

This is incredibly important, please don't move on until you understand this concept. **Ask the instructor for help you if need to, this isn't easy!**

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

### Exercise 5
Write a function `multiplies_by` that takes a number as input and returns a function that, when invoked with a second number as an argument, multiplies the two numbers together.

We can test `multiplies_by` with this code, we should not need to change it at all.

```javascript
var times5 = multiplies_by(5);
times5(4); // 20

var times10 = multiplies_by(10);
times10(32); // 320
```

## Functional Programming with Underscore

Underscore is a JavaScript Library (like jQuery). It provides a bunch of pre-written code for solving common programming challenges. While jQuery helps web developers interact with the DOM, Underscore focuses on providing useful helpers for [Functional-style programming](//en.wikipedia.org/wiki/Functional_programming).

Include the [Underscore library](http://underscorejs.org/) in an empty HTML document, along with an array of products (you can use your own from the e-commerce exercise or use [this one](students/products.js)) and try the following:

**first:** Pass `_.first()` the array of products and display the returned object in a "featured" section of your site.

**last:** Pass `_.last()` the array of products and display the returned object in a "clearance" section of your site.

**filter:** Use `_.filter()` to display only products that belong to the "books" category.

**reject:** Use `_.reject()` to display only products that are priced below $20.

**uniq:** Use `_.uniq()` to ensure that their are no duplicate selling points in any products before displaying them.

**map:** Use `_.map()` to grab the `picture_url` of all products for sale, assign each to the `src` property of a new `<img>` tag and return that DOM element. Pass the result of calling `_.map()` directly into a `$('#container').append()` expression to create a photo montage.

**pluck:** Use `_.pluck()` to quickly retrieve a list of the names of all products for sale to list them in an index

**reduce:** Pass a shopping cart (array of objects) to `_.reduce()` and use it to add up the total price of the order.

**contains:** Determine if the order `_.contains()` a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.

**every:** Use `_.every()` to determine if every item in the order has a price tag less than $10\. If so, call the user a cheapskate!

**some:** Use `_.some()` to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!

**extend:** Use `_.extend()` to merge two objects together. What would this be good for?

### Reimplementing Underscore

Ok, now that we've tried them all out, let's try rebuilding a few from scratch. Download [the following HTML document](students/underbar.html) and open it in your code editor to get started.