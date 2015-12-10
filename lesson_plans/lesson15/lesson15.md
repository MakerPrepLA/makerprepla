# Lesson Plan 15:

Today we're going to learn about events. This will be our first foray into asynchronous programming. As a web developer, you will deal write asynchronous code all the time. In the MakerPrep course, we learn how to use asynchronous code to solve two common problems: Responding to user input to the UI and managing the inherent delay associated with any network request (that will wait until Monday).

Before we start talking about asynchronous programming though, lets talk about the type of programming we've been doing this whole time: synchronous programming. Take a look at this piece of code:

```javascript
var username = prompt('What is your name, user?');

console.log('Thats suspicious, I don't know anyone by the name of ' + username);

var secretAnswer = prompt('What is the secret password?');

if (secretAnswer === "JavaScript is awesome!") {
  console.log('Welcome suspicious user!');
}
else {
  console.log('Off with his head!');
}
```

Lets take a close look at the code above. What is the first thing thats going to happen? The user will be prompted to give their name. What if it takes the user 30 seconds to respond? Will the rest of the code continue to execute while we wait for the user to respond, or will the code execution pause until the user reponds? The code execution will pause. Similarly, when we prompt the user to give us a password, the same thing will happen: all execution will pause UNTIL the user responds, at which point execution resumes where it left off.

Why is this important? What would happen to that console log if we didn't pause execution while we waited for the user to respond? The username variable would evaluate to undefined and the console log would print undefined.

The reason we have to pause execution is becacuse computers are really really really fast, and humans are not. This is an example of sychronous or "blocking" code. The nice thing about synchronous code is that you can reason about it in a linear fashion. No line of code will execute until **ALL** of the lines of code that precede it have executed.

Thats acceptable for the contrived situation in this example, but what happens when we start to design complex user interfaces? If a webpage has 15 different ways for the user to interact with it, we can't be constantly pausing execution of the whole program just to wait for the user to click on one of those buttons. The application would feel really slow and unresponsive and no one would want to use it.

The obvious solution is easily expressed in words. We need a code that does something like this: "If a user clicks on a button, then execute this code", but we need a way to do that without pausing the whole program and waiting for it to happen! The solution to that problem is events. An 'event' is exactly what it sounds like. Its just something that "happens" during the execution of the program, like a user clicking a button. The beauty of events is that you can associate code with them. So you can define an event, and an associated block of code. For example: "If the user clicks this button, then add an image to the page that tells them how wonderful they are", but your code can continue to run and do whatever its supposed to do without pausing and waiting around for the user to click the button. When the user does finally get around to clicking the button, the program will execute the block of code that is associated with the button click event, and then go back to whatever it was doing (this is an oversimplification, but the general concept is sound.) This is the essence of asynchronous programming.

Lets take a quick look at an [example](example.html)

[When you show them the example code, emphasize how the click handler function is literally just a callback function, no different than what they were doing in the functional progamming lectures]

Notice how once the page has finished loading and your program has finished executing in its linear fashion (we see the console log), the button will still respond to being clicked on by the user, and each time its clicked the anonymous function that we associated with it gets run. This event system is what allows us to build powerful, responsive user interfaces.

You may have noticed that I defined a parameter called "event" for the callback function, I'm not gonna go into too much detail on what this is, you'll explore that in a lesson, but we can take a quick look at its properties:

`console.dir(event)`

Show them the object in the console and then scan through the properties briefly.

## Calling Context

I don't want to go into too much detail here because we're gonna talk about it more next week, but in JavaScript every function has access to a "calling context". Generally speaking, the "calling context" is reference to which object the function is being called as a method on. This is a result of the fact that in JavaScript, every function is secretly a method, even if it doesn't look like one.

 We'll talk about this more next time when we go over object-oriented programming, but for now I want you guys to know that the calling context for an event function is the dom element that the event itself is being triggered on. We can access the calling context using the keyword "this". Lets take a look:

[Use the beeper example, but add a `console.dir` for the `this` keyword]

Show them how it literally just gives back the raw DOM element, and that if you wantede you could rewrap it in JQuery and do something with it:

```
$(this).slideUp();
```

Demonstrate the difference between using `$(this)` and `$('button')` inside the event callback by creating two more buttons. If you don't use `this` then when you click a button, they all dissapear, but if you use `this` then only the one you clicked dissapears.