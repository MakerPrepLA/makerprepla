# Lesson Plan 12

**Advice:** 

1. I told them that if they're feeling really shaky on the material, I recommend they spend this time on the codeaademy functions and for-loops tracks. They have two days to accomplish that, and then get some of this lesson done (with me available as a resource), and the rest of the curiculuum is not heavily dependent on learnRx.They can then tackle learnRx on their own after the curiculuum with a more solid foundation.
2. This lecture took me an entire hour to get through (usually they take me about 30 minutes), but it seemed to go over really well. I was really redundant, explained things multiple times, asked them lots of questions, tried to be as clear as possible. Live coded most of it, but used the whiteboard to explain scoping (which seemed to work really well, although one person said in the feedback they would have preferred if the live scoping was explained using the REPL)

Everyone is coming in to this course with different levels of experience.

## Functions Review

We're gonna start todays lesson off with a quick review of functions. Can someone explain to me in words what a function is?

A function is simply a block of code that is given a name. That black box takes a certain input, does something with it, and then generates an output. One way to think of a function is imagine you have a robot that brings you things. Thats all the robot knows how to do. You just look at it and yell slippers, and it brings your slippers. That robot is kind of like a function. Its pre-programmed to do a very specific task, it accepts an input (what you yell at it) and then it **RETURNS** something backed to you based on that input. Thats basically what a function is.

The syntax for a function looks like this:

```javascript
var printer = function(wordToPrint) {
  console.log(wordToPrint);
}
```

Is this going to print anything? No, we need to invoke it.

`printer()` Will that work? No, we need to pass an **argument**.

`printer(sayThis)` Will that work? No because we haven't defined a variable called sayThis.

`print("say this!")` that time it will work!

There are two ways of thinking about how functions work:

1. Functions with side-effects
2. Functions that return things

And some functions do both.

What type of function is our printer function? It has side-effects because it prints to the console. It modifies the state of the program.

What if we changed printer to look like this:

```javascript
var printer = function(wordToPrint) {
  return wordToPrint;
}
```

How will this function behave differently than our previous function? It won't console.log
What will happen when I run it? What does the return keyword mean? Make sure they understand this part.

So if I want the return value of printer to be logged, what do I need to do? `console.log(printer("Hey class!"));`

## First-Class Citizens

Today, I want to expand on that a little bit. In JavaScript, functions are first-class citizens. This means that they are values, just like numbers, string, arrays, and objects. They can be saved to variables, they can be passed as arguments (inputs to  OTHER functions), and they can even be returned from functions.

```javascript
function_runner = function(fn) {
  fn();
}

var say_hi = function() {
  console.log("Hi");
}

function_runner(say_hi);
```

I've defined a function called `function_runner` and it takes one parameter called `fn`. All function_runner does is invoke `fn`. So I can pass `say_hi` (a function) as an argument, and what do you think will happen? Step through the program manually and explain how it will execute at each step.

This is called a CALLBACK. A **callback** is a function that is passed to **another** function, to be invoked at a later time. [write this on the board.]

Javascript also allows us to use anonymous functions. An anonymous function is simply a function without a name. It is not assigned to a variable, and it is not defined with a specific name. I'm going to convert the code above to work using an anonymous function:

```javascript
function_runner = function(fn) {
  fn();
}

function_runner(function() {
  console.log("Hi");
});
```

Looks a little weird huh? This code does the EXACT same thing, the only difference is that instead of creating a variable name `say_hi` and assigning it a function, I simply passed an anonymous function into function_runner. This anonymous function is still a callback!

In that example, we were dealing with a function that had side-effects. Lets change the anonymous function to use a return statement instead of console logging.

```javascript
function_runner = function(fn) {
  fn();
}

function_runner(function() {
  return "Hi";
});
```

Whats gonna happen here? Will it do what I expect? Why not? What do I need to change here?

One way to solve it would be to console.log the function invokation inside of function_runner:

```javascript
function_runner = function(fn) {
  console.log(fn());
}

function_runner(function() {
  return "Hi";
});
```

But now my function_runner function has a side-effect, its also console logging! One aspect of functional paradigm is about trying to avoid side-effects in our functions. How can I change this code so that function_runner doesn't have any side effects, but "Hi" still gets console logged?

```javascript
function_runner = function(fn) {
  return fn();
}

console.log(function_runner(function() {
  return "Hi";
}));
```

Manually step through this program and explain what happens at each step.

### Returning functions from functions

Another interesting thing about functions in JavaScript is that they can return functions. Take a look at this:

```javascript
// this "factory" function is a function that creates new functions
beeper_function_factory = function() {
  return function() {
    console.log('Beep!');
  }
}

var beeper = beeper_function_factory();

//notice nothing has console logged yet

beeper();
```

Manually step through the code above and explain whats happening at each step. First, the beeper_function_factory function is created. This is a function that takes no inputs, and returns a new function that console logs beeps.

When I set `beeper = beeper_function_factory()` the invokation of beeper_function_factory will evaluate to whatever is on the right side of the return statement. Whats on the right side of the return statement? An anonymous function. So beeper is now set to be equal to the anonymous function that console logs beep.

Now when I run `beeper()` I'm actually just calling the anonymous function that was defined in beeper_function_factory and "Beep!" gets console logged.

## Scope

A variables "scope" refers to which parts of the program it is accessible in, and in which parts it is not accessible. JavaScript is a functionally scoped language. This means that any variables defined **OUTSIDE** of a function are accessible **ANYWHERE**, and any variables defined **INSIDE** a function are only accessible from **INSIDE** that function.

You can imagine that functions are surrounded by one-way mirrors. They can see out and access variable named in their parent scope, but code running outside cant see in to access parameters or variables defined inside.

[Use the whiteboard for this portion]

```
var global_variable = "Hello world!";

function some_function(){
  var local_variable = 'Hello local scope!';
}
```

Explain to them how you can determine a variables scope just by reading the code. Step through it with them and if global / local are available in various parts of the program. Prove it to them by doing a live-coding with console logs and then invoking the functions.

What if I change it up and add another function inside of the function? [back to whiteboard]

```javascript
var global_variable = "Hello world!";

function some_function(){
  var local_variable = 'Hello local scope!';
  function nested_function() {
    var nested_local_variable = 'Hello nested local scope!'
  };
};
```

go over how nested_function has access to all the variables in the program, some_function has access to all the variables except nested_local_variable. Outside those functions, the only variable thats available is global_variable. Prove it with console logs and invoking the functions.

**Note:** When I actually gave the lecture I used different colored arrows to show where each of the three variables was available and where it wasn't (questioning the students as I went). That seemed to work really well.

## Closures

[live-coding]

That last bit of code leads to us an interesting junction. What happens if we do something like this:

```javascript
function function_factory(){
  var local_variable = 'Hello local scope!';
  //point out this was converted to an anonymous function
  return function() {
    console.log(local_variable);
  };
};

var returned_function = function_factory();

returned_function();
```

Give the student a minute to try and see if there are any obvious issues with this code before you run it. Why, based on the scoping rules we just learned, might it fail? Nudge / hint them till they get it and think its going to console.log(undefined) or throw an error, then show them that it doesnt.

That function that was returned from `function_factory` was able to console.log local_variable, even though it was ran from OUTSIDE of `function_factory`. How is that possible? Variables declared inside functions are not supposed to be available **OUTSIDE** of them. The reason this works is because of closure. A functions scope is based on the point in the code where it was **DEFINED**, not where it was **INVOKED**.

The anonymous function was defined **inside** of the function_factory, so even though it was invoked **outside** of function_factory, its scope was set when it was defined, and it retains access to local_variable!