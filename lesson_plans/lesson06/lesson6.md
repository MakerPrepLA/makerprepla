# Lesson Plan 6: JavaScript and the DOM

Today we're going to start learning about JavaScript. JavaScript is considered the language of the web because it is the only language that runs in the browser.

**NOTE:** As you're going through this lesson, one of the things you need to convey is that every expression (don't need to go into too much detail about what an expression is) in JavaScript evaluates to something, and thats what we see in the REPL (they get confused about the difference between a REPL and using `<script>` tags so reiterate on the whiteboard what REPL stands for and how it automatically prints every expression, but this is not always the case and won't happen in your script tags)

Lets prove that right now. [open up the console and walk through some of the following]:

+ `window.document;`
+ `window.location;` <-- show how if you set it equal to a url, the page changes
+ `window;`

## Primitives

### Numbers

JavaScript has a number of data types, but today we're going to focus on numbers and strings. Numbers are pretty easy to understand, they behave pretty much how you would expect them to. [Open up console and show the following:]

+ `2 + 3;`
+ `3 * 5 + 4;`
+ `3 * (5 + 4);`
+ `-300 * 2.57;`

### Strings

Strings are another data type in JavaScript and they're used to represent text (AKA sequences of alphanumeric characters). [Open up console and show following:]

+ `"Hello, how are you?"`
+ `Hello, how are you?` <-- Talk about how JavaScript can interpret numbers in their raw format, but strings must be wrapped in quotations or they will be interpreted as a command (error)
+ 'Hi' + ' ' + '[student name]' <-- can concatenate strings (stick them together) using `+`

[Heavily emphasize that strings require quotation marks, and NOTHING else in javascript requires quotation marks, but strings always do]

## Interacting with the user

### Logging and Alerting

We can use console logs and alerts to send information to the user:

+ `console.log('Hello Students!');`
+ `alert('Hello Students!');`

[Point out how console.log and alert() evaluate to undefined in the REPL]


### Prompting

We can also request information from the user with `window.prompt`:

`window.prompt("How are you students? Did you do codeacademy this weekend?")`

[Point out how window.prompt will evaluate to whatever the user puts in and then demonstrate that concept with the following example. Make them think about what it will do before you run it]

`alert(prompt('Whats up?'))`

After running it, explain in detail what just happened.

Starts off with:

1. `alert(prompt('Whats up?'))`;
2. Code will run and the JavaScript interpretor will try and run the alert function. When the JavaScript interpret is trying to figure out what to alert, the prompt function will trigger which will cause a prompt to show up for the user.
3. The user types in 'nothing much' and now the entire statement `prompt('Whats up?`') will evaluate to `'nothing much'` (with the quotation marks because its a string)
4. From the interpreters perspective, the code now looks like this: `alert('nothing much')` and that gets alerted to the user

## Script Tags

This is pretty straightforward. Just show them how if you put some javascript in a `<script>` tag in html, it will execute. Emphasize that they should always put their `<script>` right before the closing `</body>` tag. 

Also demonstrate that unlike in a REPL, not everything you put in a `<script>`tag automatically gets printed. This is really important, make sure they understand the distinction.

At this point, let them go work on some of the exercises before continuiing to lecture.

## Variables

Variables allow us to create identifiers for specific values. They are called "variables" because you can change what value they hold based on what the program is doing. In JavaScript, we use the `var` keyword to declare a variable:

+ `var x`
+ `x` <-- Explain why its undefiend
+ `x = 1`
+ `var y = 2` <-- Explain how you can initialize a variable with a value

can combine variable to create expressions

+ `x + y + 7`
+ `var z = x + y`

[Emphasize that whatever is on the right hand side of the `=` sign gets stored to whatever is on the lefthand side of the `=`. Draw it on the board if you have to.]

### Pass by value

In JavaScript, primitives like Strings and Numbers are **pass by value**. This means that when we set one variable equal to another like this:

```javascript
var student_food = "apple";
var different_student_food = student_food;

// will print "apple"
console.log(student_food);

// will also print "apple"
console.log(different_student_food);
```

That both `student_food` and `different_student_food` have their own copy of the string `"apple"`. If we modify `student_food` like such:

```javascript
//note I don't use var here because this variable has already been created earlier
student_food = "tomato";

// will print "tomato"
console.log(student_food);

// will still print "apple"
console.log(different_student_food);
```

`different_student_food` still retains its original value. This is really important to understand because when we move on to Objects and Arrays later, we'll see that they do not behave this way, and instead function as **pass by reference**, but we'll talk about that in a later lesson.

## Manipulating the DOM

JavaScript is used to make web pages interactive, right? Lets take a look at how we can start doing that. **Note:** The techniques I'm about to show you regarding manipulating DOM elements are pretty barebones. Pretty much every developer in the world uses a library called JQuery to do this instead, but we're gonna go over it today just to show you guys how Javascript can be used to interact with a page. We'll spend the next several days doing nothing but focusing on Javascript fundamentals, and then we'll learn JQuery after that and go back to single-page applications.

[open [this page](../../lessons/lesson06/resources/dom_example.html) and then demonstrate the following]:

+ document.body <-- just a shortcut for document.querySelector('body')
+ document.querySelector('p')
+ document.querySelector('p.important').textContent <-- see how we can extract the text?
+ document.querySelector('p.important').textContent = 'Hey! We changed it!' <-- We can also modify the text

As you work through the examples above, go back and forth between the JavaScript console and the "Elements" tab, showing them how each of the querySelectors is actually just grabbing particular DOM nodes, just how we did with CSS styling.

The querySelector must be written as a string, and are the exact same selectors we've been using to write our CSS. Basically what the querySelector function does is search through the DOM, find DOM nodes that match the specified query selector, and then provides a way of reading and writing to those DOM nodes.

Set them loose and have them work through the rest of the exercises.

Things they didn't grasp immediately:

1. strings are always declared with quotation marks, if you don't use quotation marks javascript inerprets it as a variable. They kept thinking either nothing needed quotes or everything needed quotes. Maybe hit the point home hard that the only thing in javascript that requires quotations are strings, nothing else.
2. left hand sign of "=" is set equal to right hand sign of "="
3. Difference between script tag and REPL. They didn't understand at first that a REPL will utomatically print everything, whereas in a script tag, you have to manually console.log
4. Remind them to use semi-colons
5. People seemed to think exercises 7-10 were not clear. Consider rewriting those?
6. People didn't seem to grasp the point of querySelectors. Kind of hard to grasp when they don't understand functions or objects yet. Maybe move those to a different part of the curiculuum or just remove them entirely and just cover jquery later?
