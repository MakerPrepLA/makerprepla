# Lesson Plan 3: Larger Web Documents

Before the beginning of class I encouraged everyone to make a new directory for this lesson using the BASH commands they learned yesterday.

## Multi-Section Web Pages

Today we're gonna be talking about Multi-Section Web Pages. Large Web Pages can quickly become a mess if the designer doesn't take special care to lay everything out in an organized and logical manner.

First, I'd like to discuss the difference between a **block** element and an **inline** element.

[Write out some HTML code that uses a bunch of block elements like `<div>`, `<h1>`, `<p>` and demonstrate how everything ends up on a newline automatically]

```html
<div id="greeting" class="section">
  <h1>Hello!</h1>
  <p>This content is all related!</p>
  <p>Nice that we can group it using a "div" tag!</p>
</div>
```

Unlike `<h1>` and `<p>` tags, a `<div>` tag is not associated with any inherent styling. You can learn a little more about why thats significant if you choose to pursue todays lecture's additional reading about CSS resets.

[Write out some html code that uses a bunch of inline elements like `<b>`, `<i>`, and `<span>`]

```html
<p>Sometimes, <span class="highlight">all we really want</span> is
to be able to refer to certain sections of our page, but we want to completely
<span class="highlight">control their styling</span>, and not get the
"b" or "i" tags involved</p>
```

Similar to the `<div>` tag, the `<span>` tag is not associated with any inherent styling or semantics.


## CSS Box Model Live Demo

Every element on a web page is a rectangular box. Every. Single. One.
[Open up lesson 5 in browser, open chrome dev tools, and then go to the elements section. Feel free to explain a little about the dev tools as you do this, but don't overwhelm them with detail. Hover over various items in the body tag and show them how rectangles on the page get highlighted]

The box model describes the contents of the space taken by an element. Each box has four edges:

1. The edge of the content
2. The edge of the padding
3. The edge of the border
4. The edge of the margin

[Open up dev tools again and in the element tabs, select "Computed" on the right side of the screen to view a computed box model. Point to each of the edges with the cursor and describe them to the students. Also make sure you uncheck the box-sizing property for now. I used the MakerSquare logo at the top of the page for all my examples.]

Now lets take a look at what actually happens when we begin to modify those properties. You'll notice that no matter how I increase or decrease padding, border, and margin, the size of the content remains the same. In the box model, the width of the rendered element is equal to the width of the content + the width of the padding + the width of the border and similarly for the height.

You can think of padding as extending the content in the box. If the content has a background or color, this will expand into the padding. [Add a background-color to the MakerSquare logo and then change the padding to 50px]

The border is pretty to easy understand. There are different ways to define a border (feel free to look those up), but I'm going to use the "border" short-hand like so [set the "border" style to "10px solid red"] and you can see that a red border, 10px thick, shows up around the logo.

The margin is special because it doesn't affect the size of the box, but it does affect how boxes interact with each other. [Show how by adding a margin-bottom property you can push other content on the page down.] So we can think of the margin as defining the space between boxes. What about the other two properties?

Pretty cool, huh? Now you guys go try! They should do the CSS box model mini-demo on their own in the lesson, and then the Blog Post Refactor with minimal extra lecture from you.

## Blog Post Exercise

Live code the blog post exercise. You can pretty much just follow the instructions in the actual lesson. Make sure you explan what you're doing at each step. I've also included a working solution [here](blog_example.html)

Make sure to cover:

1. Why you're using divs as containers and not some other HTML element (can explain that something like a `<p>` tag has semantic meaning, while `<div>` and `<span>` are semantically meaningless)

2. Why you're putting everything into containers in the first place (layout and aesthetics)

3. How the container div and setting the width / margin: 0 auto works

4. How the above changes when you set max-width instead of width

5. Some of the more advanced selectors / the effect of using inline vs. block again (I think the horizontal menu items is a good example)

6. Remind them of how to select classes vs ids

Once you finish the live demonstration, let the students go work on the exercise on their own.

**TIMING:** I told them to start working on "A very boxy page" at around an hour, and then lectured about CSS selectors at an hour and a half

Its ok if they don't finish all the exercises in the first portion, as long as they get a feel for the box-model its ok. Maybe even consider marking the box exercise as extra credit or something. I also honestly think I rushed them a little too much. I would say let them spend as much time as they want on the blog post exercise, probably up to the two hour mark, then have them do the stylesheet / selector stuff in the last hour (obviously allow people to move forward before that, but after two hours I would usher students who were still working on previous material). If they don't get the choose your own adventure done, no big deal, as long as they refactor some of their work to use a .css file.

## Complex CSS Selectors

I want you guys to try and figure out the CSS selector exercise on your own, but please flag me down if you're really having trouble. Also, there is a little reference guide in the main resource folder if you're having trouble understanding them.

I do, however, want to go over the CSS specificity exercise briefly. When multiple conflicting CSS rules apply to a single element, which one wins out? Lets take a look.

[Open up the following block of code in your browser and show them that the text is red. Try toggling the #important styling property on and off in the chrome dev tools to emphasize the point]

```html
<!DOCTYPE HTML>
<head>
  <style>
    p {
      color: blue;
    }

    #important {
      color: red;
    }
  </style>
</head>

<body>
<p id="important">JAVASCRIPT IS SEXY</p>
</body>
```

As you all can see, the id selector has priority over the type selector. For a complete list of CSS priority rules, check out the link to the documentation in the lesson, but the general priority (from lowest to highest) is: 

1. Universal selectors (*) 
2. Type selectors (H1)
3. class selectors(.example)
4. attribute selectors(type="radio")
5. pseudo-classes(:hover)
6. id selectors(#yolo)
7. inline style(style="font-weight: bold").

**NOTE:** Students kept getting tripped up by the fact that a styling with higher precedence (like id) will ve 

[This might also be a good time to show them how .CSS files work, simply take that little example and cut the code in the `<style>` tags into a .CSS file, link it in the header, and voila! Mention the principle of D.R.Y]

Thats it ya'll, go tackle the CSS selector and specificity exercises! Feel free to jump into the final exercise when you're ready, and as always, don't hesitate to ask me when you're stuck.