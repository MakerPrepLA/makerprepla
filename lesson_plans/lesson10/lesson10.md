# Lesson Plan 10: Functions

**Advice:** 

1. Students seemed to get tripped up over whether or not arguments vs parameters should have quotations around them and stuff. In the live demo, it might be good to show an example of passing a string as an argument (with quotations), as well as how a variable can be passed (without quotations), and how parameters never have quotations.
2. Clarify that a function can only return ONE time, and once it has returned, the function is done executing.

A function (or subroutine) is simply a block of code, packaged as a unit. Generally, you build a function to solve a specific problem that appears frequently throughout your code. By packaging it as a function, the same exact piece of code can be executed in multiple places. This also makes the code easier to maintain because even though the function is used in multiple places, the actual code is only defined in one place and can easily be updated.

In other words, a function is like wrapping a piece of your code up into a container. This code becomes modular because you can pass arguments to the function (inputs) and the output (return value) of the function will depend on that input.

You can think of it as like a black box, you put in a certain input, and based on that input, you get a certain output [draw box with arrows on board]
 eloquent javascript):

1. Tool to structure large programs
2. Reduce repetition (DRY)
3. Associate names with subprograms
4. Isolate subprograms from each other (code modularity)

The associating names with subprogram point is actually really important.

Lets imagine you were trying to build a twitter clone. The basic functionality of your application is that it needs to request recent tweets from your server, it needs to order those tweets by date/time, it needs to modify the DOM and display those tweets on the page, and then when you click a button it needs to add your tweet to the DOM and also send it to the server so it can can be seen by other people. If you tried to cram all of thise code into one block of code, it would get incredibly messy incredibly quick. Trying to update things later would be a pain, and anyone who had to read your code later would hate your guts. Instead, you could break out each of those individual componenets into its own function / file. Then, you would just have one main program that calls all your secondary functions. So someone could look at your code and it woud say something along the lines of when user hits submit, call the sendTweet function. And when the page first loads, called the getTweets function etc...it becomes much more clear and easy to ready.

I pseudocoded the above example really quickly and just showed them how it easy it was to understand what the program was doing if everything had named functions like "getTweets", "sortTweets", etc etc

Anyways that was some high level stuff, I just wanted to give you context to functions and what they're used for. Lets take a look at syntax:

```javascript
var function_name = function(parameter1, parameter2, etc){
    // Do stuff here


    Return [RETURN VALUE HERE]
}

// The above is simply a function DEFINITION
// The code will not run until we INVOKE the function

//invoke function like this
function_name(argument1, argument2, etc..)
```

So in JavaScript a function is actually just a special type of object. You can add properties to them just like regular objects, but lets not worry about that too much right now.

As you can see, just like objects and other data types, functions can be assigned to variables to give them a name. You then use the keyword `function` to define the function, and follow it immediately with parenthesis. This looks a lot like the `if` and `while` statements we've been using, except we don't put a conditional expression in the parenthesis. Instead, we put in 0 or more parameters.

A parameter is a defined INPUT to your function. When you're creating a function, you can define as many inputs as you want and name them, then inside the code block for the function, you can write code that uses these inputs to determine what the function should return (output). When we actually invoke the function, we pass data to each of the inputs.

A good analogy is an engine. A simplified engine has two inputs:

1. Gasoline (which you pour into the fuel intake)
2. Air (which is sucked in through the air intake)

The engine mixes these two things, causing a combustion, and returns an output force.

The fuel intake and air intakes are the PARAMETERS. Those are the places where things are put in. They are named and constant. The gasoline and air, on the other hand, are the arguments. They are what you pass INTO the parameters. They are not constant and could easily be changed. For example, I could easily pour water into my fuel intake. The engine would not give me the desired output (power), but I could do it. Or 87, 89, 91 gas.

In the same way when you define a function, you created named PARAMETERS which will be passed input. And then when the function is actually called or invoked, we can pass data as ARGUMENTS to each of the defined parameters. This will become clear when we do some live coding examples.

So once we've defined all our parameters, we write a bunch of code inside the CODE BLOCK (same syntax as `if` statements and `while` statements), and then at the end of all our code, we use the keyword RETURN to return a value. Whatever we put after the `return` statement is what the function will actually evaluate to when its invoked. If we don't specify a return value, the function will simply evaluated to undefined. Again, this will become clear when we do a working example.

Cool, lets look at some code!

```javascript
var greeter = function() {
    console.log('Hey Class!');
}
```

Is anything going to get console logged when I hit enter? No
How many parameters do this function take? 0
What does this function return when its invoked? Undefined

Ok cool, so we've DEFINED our function, but we have yet to invoke it.

What if I just type `greeter` what will this do? 

It just returns the whole function it doesn't invoke it. Thats because greeter is a variable that REFERENCES the function. `greeter`knows where the function is, but to actually INVOKE the function we have to add `()` at the end. Lets try that.

`greeter()`

Do I need to put anything in the parenthesis? No
Why not? Because there are no parameters
What will this function do? console.log('Hey class!');
What if I try to pass some arguments into it? Doesn't matter, function will just ignore them.

Notice that the REPL said that our function evaluated to `undefined`, lets take a closer look at that.

Ok, what if I do this:

```javascript
var greeting = greeter();
console.log(greeting);
```

What will happen now? I assume this question will trip some students up. Explain that the function will get invoked, and as a SIDE-EFFECT it will console log 'Hey Class!' and then when the function is done, since we didn't make a return statement, it will return `undefined` which is what the whole statement `greeter()` will evaluate to. Thus `greeting` will get assigned a value of undefined and when we console log, it will be undefined.

Ok cool, lets look at an example with parameters and a return statement now:

```javascript
var multiplier = function(first_number, second_number) {
  return first_number * second_number;
}
```

What are `first_number` and `second_number`? Are they parameters or arguments? Parameters.
Will anything happen when I hit enter? No

How do I invoke this function?

`multiplier(10, 20);`

What are 10 and 20? Arguments or Parameters? Arguments.
What will that statement evaluate to in the REPL? 200
How come its not undefined like last time? Because we have a retur statement.

```javascript
var multiplied = multiplier(10,20);
console.log(multiplied);
```
What will this do?

Ok, lets go back to an example we had a few lessons ago. Now that you guys have a little more knowledge of functions:

`console.log(prompt('How old are you?'));`

What is console.log? A function.
What is prompt? A function.
How many parameters does prompt take? 1
What argument are we passing to prompt? 'How old are you?'
What is the return value of prompt? The users input in the form of a string
How many parameters does console.log appear to accept in this example? 1 (technically it can take more)
What is the argument we are passing to console.log? The users input from the prompt statement.

## End of Class

Tell the students to practice JavaScript over the weekend! In particular, going over the functions, for loops, and array portions of codeacademy again would be great. Online resources like codewars and such could benefit them a lot too. If they have time, chapter 5 of eloquent javascript (lower priority, its not as helpful except for advanced students)