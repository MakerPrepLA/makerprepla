# Lesson 15: Events

```javascript
// we've defined a function and set it equal to a variable
var fn = function () {
  console.log('heeey')
};

// of course, we can invoke it manually
fn();

// Alternately, we can ask the browser to run it at a later time

// The below is called an event handler, take a guess at what it does...
// Add it to an HTML document containing a div#target and test it out
// Remember, div#target means a div with an id of "target"
document.querySelector('#target').addEventListener('click', fn);

/* Often times, instead of using a variable, we'll just define the function inline
using an anonymous function.*/
document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal');
});
```

An **event handler** is a function (subroutine) that is run each time an event happens, in this case, when a specific type of input is received from the user.

### Exercise 1

1.  Make the above code work inside a script tag in an HTML document <small>(you'll need a #target element on the page)</small>
2.  Define a function `beeper`
3.  Create a `<button>` on the page
4.  Every time the user clicks a button, console log "Beep!"


## Jquery Events

Ok, that's the native JavaScript syntax for adding **event handlers** to the page. Now let's see jQuery's way:

```javascript
$('div').on('click', function(){
  console.log('A div has been clicked!')
});

// shortcut
$('#target').click(function(){
  $('#target').show().css('color', 'red').text('boom goes the dynamite!')
});
```

### Exercise 2

1.  Make the above code work inside a script tag in an HTML document
2.  Create a div with the text "show me the money". If the user clicks on it, show them the money!
3.  Create a div with the text "show me the Oprah". If the user clicks on it, show them the Oprah!
4.  Create a div with the text "show me the Opera". If the user clicks on it, show them the Opera!
5.  Make it so that when a user clicks on one item to show it, all the others hide first if they are already shown. [.toggle()](http://api.jquery.com/toggle/) might come in handy.
6.  When a user clicks on an item that is already shown, hide it instead.

### Exercise 3

```javascript
$('#target').on('mouseover', function(){
  $('#target').addClass('highlighted')
});

$('#target').on('mouseleave', function(){
  $('#target').removeClass('highlighted')
});
```

1.  Place the above code into a script tag in an HTML document
2.  Make sure there is a #target element on the page and that it has a non-zero height and width (either put some text inside of it, or manually assign it a height and width)
3.  Define CSS rules for the 'highlighted' class (there should be some visual change, a color or border, etc)
4.  Make sure everything is wired up correctly and works as you would expect
5.  Place an image on the page that disappears when you place your mouse over a particular div#magic. Maybe this one of [Margaret Hamilton](//en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)#/media/File:Margaret_Hamilton.gif).
6.  How many different ways can you think of to accomplish that task?

**Aside:** If you have some free time later, take a minute to check out her Wikipedia page and read the paragraph about her work on the Apollo 11 project.

### Exercise 4

```javascript
var mouse_tracker = function(event){
  console.log(event.pageX, event.pageY, !!event.which)
};

$(document).on('mousemove', mouse_tracker);
```

Using the code above as inspiration, try and answer the questions / perform the tasks listed below:

1.  How can we inspect the `event` object in the console? What properties and methods does it have? **Hint:** Try `console.dir()` instead of `console.log()`
2.  Do click events and mouseover events get arguments passed into each invocation of their event handler functions as well? Do they have the same properties?
3.  Create a small `position: fixed` `<img>` that follows the cursor around the screen. Maybe a [gif of a puppy walking](https://www.google.com/search?q=puppy+walking+gif&es_sm=91&source=lnms&tbm=isch&sa=X&ved=0CAcQ_AUoAWoVChMIno7mzKHexgIVUSmICh3S4Q_N&biw=1305&bih=732&dpr=1.1).
4.  Figure out how to hide the cursor with CSS
5.  Make the image follow the mouse only if the mouse button is pressed

## Event Calling Context

In addition to the `arguments` keyword, each function invocation also has access to the **calling context** via the `this` keyword. Event handlers are called in the context of the element that received the event.

```javascript
var el_finder = function(event){
  // this and event.target will both refer to the DOM node that was clicked
  console.log("calling el_finder for:", this, event.target);

  $(this).attr('id', 'active');
  // these two are identical
  $(event.target).attr('id', 'active');
};

$('div').click(el_finder);
```

### Exercise 5

1.  Place the above code in an HTML document with at least one div and test it out.
2.  Create an HTML document [with at least 5 paragraphs](http://www.catipsum.com/)
3.  Give each paragraph a unique id attribute
4.  Create a div#output at the top of the page
5.  Create a click handler that shows the id attribute of the last paragraph that was clicked on in the div#output
6.  Change the `color` and `background-color` of a clicked-on div to make it stand out
7.  When you click on another div, clear the special styling of any perviously clicked-on divs
8.  Is this easier to do by styling directly with `.css()` or by adding and removing a class name? Try both ways

### Exercise 6

```javascript
$('button#go').on('click', function(){
  $('#output').text( $('input#color').val() );
});
```

1.  Guess what does the code above does. How would you go about testing your theory?
2.  Place the above code in a fresh HTML document
3.  Create the correct HTML elements referenced by the click handler
4.  Now that you understand how the code works, change it so that when a user types a color into the input and presses the go button, the background color of the page changes to that color


### Exercise 7

```javascript
$('input').on('keypress', function (e) {
  $('label').text(e.keyCode);
});

$('body').on('keypress', function(e){
  console.log(String.fromCharCode(e.keyCode));
});
```

1.  Try out the above code in an appropriately set up HTML document
2.  What's the difference between the event's keyCode property and the actual letter? **Hint:** Open up the console and try typing inside the input box, then typing outside the input box (without the input box selected)
3.  What's the difference between putting the `keypress` handler on the input and on the body?
4.  If the `keypress` handler is placed on the body and we type into the input, does the event handler run? Why is this?
5.  Create a keylogger that concatenates every letter the user types to a string called "nsa_surveillance"
6.  Show the user everything they've typed in a div#output
7.  Create your own version of [Type Racer](http://play.typeracer.com)


## Extra Credit

+ Change `console.log(String.fromCharCode(e.keyCode));` to `$('label').text(String.fromCharCode(e.keyCode));` in exercise 7. Can you still see the character codes when you type in the input box? Scroll to the [event bubbling](http://jqfundamentals.com/chapter/events) section of this page, and see if you can figure out why.


## Additional Learning

+ Read more about [asynchronous programming](http://www.i-programmer.info/programming/theory/6040-what-is-asynchronous-programming.html).

+ Watch this video about the [JavaScript event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
