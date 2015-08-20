# Lesson 14: jQuery

jQuery is a library (a bunch of pre-written code), written in JavaScript, designed to make it easier to manipulate a web page and do various web-related work.

[Open it up](https://code.jquery.com/jquery-2.1.1.js) and skim over it. How many lines of code is it?

```html
<script src="https://code.jquery.com/jquery-2.1.1.js"></script>
<script>
  $('body').text('hello?')
</script>
```

### Exercise 1:

Place the above in a fresh HTML document, just above the closing body tag. The first tag includes the jQuery library and makes it available to the page. The second script uses it to do some work.

## The $ Character

In the same way that `window` stores an object with a bunch of properties and methods (functions stored as properties on objects) related to the web page, jQuery uses the `$` variable to store an object that contains the library's functionality. To see if jQuery is included on the page, type `$` into the JavaScript console. You should see the following in reply:

*   `function jQuery(selector, context)`

`$()` is a function designed to accept a [CSS selector](../../resources/query_selector_reference.md) (in string format) as input, and return all matching elements, but wrapped with jQuery super powers. The last part will make more sense in a bit.


### Exercise 2:

Referencing [the documentation](http://oscarotero.com/jquery/), **Create an appropriate HTML document on which to try out the following:**

    $('body').css('background-color', 'red')
    $('img').attr('src','http://i.imgur.com/nWGCwiE.gif')

    $('h1').text('hello')
    $('#notification').html('<div class="alert">Hold on! <b>an error</b> has occured!</p>')
    $('.container').append("<p>What's the difference between <i>.append()</i> and .html()?</p>")

**Hint:** Ctr/Command + F is your friend for searching documentation.

### Exercise 3:

Using [the provided HTML document](jquery-select.html)

1.  Include the jQuery library in the file
2.  Write an expression using jQuery that targets all h1 elements and makes their font-color blue
3.  ... that targets the body element and turns its background red
4.  ... that targets the element with the id "everything" and increases its font-size
5.  ... that targets all elements with the class "holder" and adds a black border
6.  ... that targets all li elements within ul elements and bold them
7.  ... that targets p elements coming immediately after an h1 element and makes it green
8.  ... that targets the element with the id of "secret" and changes its display property to 'none'
9.  ... now change #secret's display property back to block
10.  ... that targets the element with the id of "change-me" and changes its text to a new sentence
11.  ... that appends new text to the end of the sentence in #change-me
12.  ... that replaces #change-me's contents with two new paragraph tags with content included
13.  ... that appends a new paragraph to #change-me
14.  ... that targets the all li elements and changes their text to a new sentence
15.  ... that targets the all li elements and appends new text to all of them
16.  ... that targets the element with the id of "everything" and appends an ordered list with three list elements inside

Not sure exactly how to do something? [Google](http://www.google.com) and the [documentation](http://oscarotero.com/jquery/) are your friend! JQuery is a very popular library, so you should be able to find plenty about it online. If you're still having trouble, don't hesitate to ask the instructor!

### Exercise 4: Theme Changer

1.  Create a web page that asks the user what color theme they'd like to view the web page in.
2.  Keep asking until they enter a valid input. **Hint:** You can end the `while` loop manually using the `break` keyword, like this:

  ```javascript
    while(true) {
      console.log('This loop will now end');
      break;
    }
  ```
3.  Use jQuery to change the css of various elements on the page to use at least three shades of that color. <small>e.g. If they choose "green", show a light green background, with green text and dark green borders</small>
4.  Use jQuery to display a message letting the user know what theme has been applied to the page
5.  Have at least three color schemes for a visitor to choose from <small>(green, blue and red?)
6.  Place different images on the page depending on the theme
7.  **Extra Credit:** Allow the user to enter in a hex value and programmatically create lighter and darker tones of that color.

## jQuery Effects

### Exercise 5

Learn a little about [jQuery Effects](http://learn.jquery.com/effects/). Try each of the following:

*   `$('h1').show()` - convenience method to set element's 'display' property to 'block'
*   `$('p#secret').hide()` - set element's 'display' property to 'none'
*   `$('ol li').fadeIn()` - fade in a set of matched elements over time
*   `$('p .comments').fadeOut()` - fade out a set of matched elements over time
*   `$('div#thing').slideDown()` - animate an element sliding down over time
*   `$('#message').slideUp()` - animate an element sliding up over time
*   `$('.alert').slideToggle()` - toggle between an element sliding up or down over time depending on whether it's visible or not

## Creating HTML elements using jQuery

Open an HTML document and type the following in, one line at a time.

```javascript
var new_div = $('<div class="important">Got a new div coming in here!</div>')

// can we see the new div on the page yet?
new_div.css('color','red').attr('id','primary').text("Hi, I'm new here")

// is it on the page yet?
$('body').append(new_div)

// how about now?

// what's this do?
new_div.fadeOut(2000).delay(1000).fadeIn().slideUp(4000)
```

Here we are creating new jQuery-wrapped HTML elements in JavaScript memory, manipulating them, then appending them to the DOM, which makes them appear on the page. We are also using [method chaining](http://schier.co/blog/2013/11/14/method-chaining-in-javascript.html) to run multiple consecutive operations on a jQuery wrapped DOM node.

Method chaining works because each method we call returns another JQuery object which has access to all of the JQuery methods; this allows us to chain methods indefinitely.

### Exercise 6

Construct an HTML document entirely using jQuery...

1.  Start with an empty HTML document with jQuery included.
2.  Place a second `<script>` tag on the page to contain your JavaScript
3.  Use jQuery to create a new `<div>` tag with an id of `container` and append it to the body
4.  Use jQuery to create a new `<img>` tag and place it inside #container
5.  Give the img a src attribute with the URL of a funny picture
6.  Use jQuery to change the image to be really small
7.  Now make it really big
8.  Now add a few more images and some text captions and use various jQuery effects to make them dance around!
9.  Use `Math.random()` and `position:fixed` to randomize the placement of the various HTML elements on your page. Every time you hit refresh, your page should rearrange itself.

**Hint:** `window.innerHeight` and `window.innerWidth` might come in handy. Look up what they do.

## Extra Credit

+ Deploy the page you made in exercise 6 to [GitHub Pages](https://pages.github.com/)

+ Include the [jQuery User Interface](http://learn.jquery.com/jquery-ui/getting-started/) plug-in on your site to add additional functionality to jQuery. Try it out!
