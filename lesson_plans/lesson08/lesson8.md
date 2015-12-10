# Lesson Plan 8: While Loops

## Advice

1. The first time I taught this, most students didn't have time to get a lot of exercises done. So I made some of the exercises shorter, and removed one entirely. Its not important that students don't get to the end, but if the majority of students still don't get to nested while loops section / math section, consider revising it more.

2. I think the number introduction problem is too complicated, even the really advanced students took awhile with it...consider refactoring it into two simpler problems that are nested while loop related? Then maybe have it as extra credit or drop it entirely?

3. Pace students in this lesson. Don't let them spend too much time on the earlier exercises without ever getting the the Math object or nested while loops. I found some students wanted to do more stuff with the queryselectors and html, but they need to move on to the other topics.

4. Could even considering dropping querySelectors entirely from this lesson and just focusing on JavaScript at this point.

Today we're going to go over while loops. In programming, loops do just what they sound like. They allow use to repeat a certain block of code as many times as we need.

While loops look a lot like an `if` statement. They both execute their associated **code block** based on the result of their **conditional expression**.

[On the whiteboard, write a prototypical while loop. Label where the conitional expression and code block go]:

```javascript
while (CONDITIONAL EXPRESSION) {
  BLOCK OF CODE TO REPEAT
}
```

As you can see, this looks a lot like we did in the previous lesson. The only difference is that while the code inside of an if statement will only get executed once, when we use a while loop, the code inside the block will continue to execute until the conditional expression no longer evaluates to true.

Lets take a look at the implications of that:

```javascript
while (false) {
  alert('Hey guys!');
}
```

How many times will this alert? [everyone should say zero times]

What about this?

```javascript
while (true) {
  alert('This is so annoying!');
}
```

What this is going to do is create an infinite loop. This code will run forever until I find someway to force close chrome, or my machine runs out of memory [technically, I don't think this simple program will ever run out of memory]. Its very easy to accidentally create infinite loops with the while statement, so be careful!

Thats cool and all, but what if we want a loop that runs more than 0 times and less than infinite times. Is that too much to ask for? Luckily, we can use counter. Any ideas what this will do?

```javascript
var n = 0;
while (n < 10) {
  alert(n);
  n++;
}
alert('All done!');
```

## innerHTML

In one of the exercises today, you're going to use a querySelector, but instead of using `document.querySelect().textContent` we're gonna use `document.querySelector().innerHTML`. The difference between these two commands is the encoding. When we use `.textContent` our strings get encoded as text, but when we use `.innerHTML` it gets encoded as HTML. Lets take a look!

[Create a simple HTML document like below]:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>

  <body>
    <div id="the-div"></div>
  </body>
</html>
```

[Open up the console and do the following]:

Type `document.querySelector('#the-div').textContent = "Hey Class!";`

Cool, that did what we expected right? But what if we want to stick an `<h1>` tag inside of the div? Lets try.

`document.querySelector('#the-div').textContent = '<h1>Hey Class!</h1>';`

Thats interesting...the HTML is showing up as text! Why might that be? Well, lets go take a look at the DOM.

[Navigate to the elements section, select the div, and then right-click and select edit as html]

You should see something like this:

```html
<div id="the-div">&lt;h1&gt;Hey Class!&lt;/h1&gt;</div>
```

The HTML we wrote was encoded into text. The `&lt;` and `&gt;` are escape characters that allow you to include brackets in your text in an HTML document, without the browser interpreting it as actual HTML.

This is obviously not what we wanted, so lets try again:

`document.querySelector('#the-div').innerHTML = '<h1>Hey Class!</h1>';`

Cool, that time it worked! [Go over to the elements page and show them what it looks like in the DOM]. When we use the `.innerHTML` property, our HTML doesn't get escaped and the browser interprets it properly!

## Nested While Loops

We can also nest while loops inside of each other. Take a look at this piece of code:

```javascript
var n = 0;
var j = 0;
while (j < 10) {
  n = 0;
  while (n < 10) {
    console.log(j,n);
    n++;
  }
  j++;
}
```

What do you guys think it will do? [Let them muse about it for a bit and then run it]

What will the inner loop do?

What will the outer loop do?

What will the combination of the two do?

Why did I set `n=0` on line 4?

How many number combinations did I get?


What would happen if I didn't increment `n` and `j`?

## Math Object

We haven't covered objects yet, but JavaScript has some built in methods for certain mathematical operations. For example, `Math.random()` will generate a random number between 0 and 1. `Math.floor()` will take a number, and round it down to the nearest integer. For example `Math.floor(1.4)` evaluates to `1`.

We can combine these two functions to create random numbers, between any two integers, like so:

What will this do?

`Math.floor(Math.random()*10);`

This is a good point to also re-emphasize order of operations in javascript. Inside to out.

It generates random numbers between 0 and 9 (walk them through why)

Formula:

// define our range (20 to 100 for example)

// subtract minimumal value from maximum value --> 100 - 20 = 80

// increment that value by 1 --> 80 + 1 --> 81

That gives you the number you multiply by, and you just add the minimum so it looks like this:

`Math.floor(20 + Math.random() * 80);`

What if I change it to this. Any ideas how it will be any different? [Explain that ciel is just the opposite of floor]

`Math.ceil(Math.random()*10);`

It generates random number between 1 and 10 (let me think through that a bit and explain it more / answer questions)

What if I want random numbers between 20 and 100? Any ideas how I might accomplish that?

`Math.floor(20 + Math.random()*81)`

Why 81 instead of 80? or 100?
