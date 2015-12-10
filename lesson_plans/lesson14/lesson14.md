# Lesson Plan 14: JQuery

JQuery is a front-end developers swiss army knife. It helps you do everything from DOM traversal and manipulation (similar to what we were doing with querySelectors before), event handling (which we'll look at tomorrow), animations, and ajax (which we'll take a look at on monday.) With nothing but jquery and a little knowhow, you can make some really powerful single-page applications.

So lets say that we wanted to make a twitter clone. When the application loaded, the first thing we would want to do is make a request to twitters server to get some tweets, JQuery can do that with ajax. Then, we'd probably want to loop through all the tweets we got back, and maybe make a div for each one on the page. JQuery can do that too. Maybe we want to make it so when a user clicks on a tweet, a new element on the page slides in and shows some information about that user. We can do that with JQuery too.

On top of all that, a lot of different browsers have their own quirks. Things that work in chrome don't necessarily work in internet explorer. JQuery manages all of that for us. Under the hood, JQuery's code will do things slightly differently based on the browser its being run in.

So how do we use JQuery? The way that the JQuery library makes it so that all of its functionality is exposed via the `$` object. If you've included jquery on your page, then all of JQuerys functionality can be accessed via methods on the `$` object.

So how do we use JQuery? JQuery relies on query selectors. Remember those things? Lets do a quick review:

[write these out on board]

1. How do we select an html tag? Just a string with the HTML tags name. So if I wanted to select an H1 tag how would I do that? 'h1'
2. How do we select something with a specific class? '.class_name' For example: '.important'
3. How do we select something with a specific id? '#id_name' For example: '#the-one-and-only'

Cool, check out easy this is. Lets start by working on the H1 tag at the top of this page (I used a chrome extension to injec jquery into the lesson on github while I was viewing it). Lets make it have a red background:

`$('h1').css('background-color', 'red');`

Thats the generic syntax for pretty much all JQuery commands. You start with the dollar sign, pass in a query selector as a string, and then invoke a METHOD. Depending on which method you invoke, you'll pass different parameters. 

Lets change the text:

`$('h1').text('Hello class!');`

We can also change the inner HTML:

`$('h1').html('<i>Italics!</i>');`

[go to the elements tab of the browser and show them how the DOM has changed]

Cool, lets try to add another word after that:

`$('h1').html('<b>Bold!</b>')`

Notice that when use the `html()` method, it completely replaces all of the HTML thats inside of the selector [show them this in the DOM again]. What if I don't want to replace the whole thing, I just want to add new stuff at the end? For that, JQuery has a `append()` method. Lets try using that now:

`$('h1').append('<i>Italics!</i>');`

[Show them what happened to the DOM in the elements tab]

This lends itself to a lot of use cases. For example:

```javascript
$('h1').html('<ul></ul>');
$('h1 ul').append('<li>Student Name</li>');
$('h1 ul').append('<li>Student Name</li>');
$('h1 ul').append('<li>Student Name</li>');
```

I'm not gonna go over all of JQuerys functionality today, a lot of it I want ya'll to learn on your own by reading the documentation and there is too much to cover in one lecture. But it has some cool stuff for you guys to find. For example, check this out:

`$('h1').slideUp();`

`$('h1').slideDown();`

Thats simply a nice animation setting the CSS display property to none. You can do the same thing, but without the animation, using `.hide()` like this:

`$('h1').hide();`

One thing to keep in mind when you're using JQuery is that if your selector selects more than one thing, JQuery will operate on all of them. For example, check this out:

[The exercise headings are in H3 so scroll the page so that atleast two are in view before executing this code in the console]

`$('h3').slideUp();`

Notice that ALL of my h3 headings dissapeared!