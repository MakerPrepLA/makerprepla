# Lesson 4: Forms and Positioning

## Forms

**Collect user input with forms**

[HTML forms](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms) are used to collect user input. The `<form>` element defines an HTML form and inside of it there are many different types of input elements can that can be used: checkboxes, radio buttons, submit buttons, and more. Give this a try:

```html
<form action="/test" method="GET">
  name: <input type="text" name="text">
  password: <input type="password" name="password">
  email: <input type="email" name="email">
  <input type="submit">
</form>
```

Note how the different "types" of input look and behave differently. Switch the method to "POST" and try again. Notice anything different?

Now, try this more complex example:

```html
<!--
  The action attribute defines where on the server the form data should be sent
  The method attribute specifies the HTTP method (GET or POST)
-->

<form action="form-responses/new" method="POST">

  <input type="text" name="firstname" value="default" size="100" autofocus>
  <input type="password" name="pswd">
  <input type="email" name="userEmail" placeholder="hello@site.com">

  <input type="radio" name="weird" value="code-blue" checked><span>pick this!</span>
  <input type="radio" name="weird" value="code-red" checked><span>or pick this</span>

  <input type="checkbox" name="optin" value="trusting" checked>You agree to everything
  <input type="checkbox" name="optout" value="skeptical" disabled>Wait, what?

  <select name="car">
    <optgroup label="Swedish Cars">
      <option value="boring">Volvo</option>
      <option value="cool">Honda</option>
    </optgroup>
  </select>

  <textarea name="user_message" rows="8" cols="40"></textarea>
  <input type="submit">
</form>

<!--
  HERE IS THE BODY OF THE 'POST' NETWORK REQUEST GENERATED UPON 'SUBMIT'
  firstname=user+numero+uno&pswd=secretstuff&userEmail=me%40site.com&weird=code-blue&optin=sucker&car=boring&userMessage=what+about++++spaces%3F%0D%0Aand%0D%0A+++indentation%3F
-->

```

**Exercise: Style the Form:** 

1. Create your own version of the above form. Don't copy and paste!
2. Take a look in your browser...It's a mess!
3. Add line breaks (`<br>` tags) between elements
4. Add labels for each element
5. In your Chrome Developer tools, go to the Network tab, click the "preserve log" button and submit your form. Click on the POST request to view the content of the network traffic
6. Check out the **form data** specifically.
7. **WHY DID THIS POST REQUEST FAIL?** Hint: Where are you trying to send it?

![network tab](resources/network_tab.png)

## Thinking about network traffic

Now might be a good time to review the [How the Internet Works](https://www.youtube.com/watch?v=7_LPdttKXPc) video we watched at the beginning of this week.

+ A GET request asks for information (like an HTML document, CSS file, or image) from the server
+ A POST request sends information (like a user's form input or a file to upload) to the server

![get request](resources/get_request.png)

## HTML5 Form Elements

```html
<input type="data" name="birthday">
```

HTML5 gives us fancy new input types. Give them all a try by setting the `type` attribute of an input element to the following:

+ color
+ date
+ datetime
+ datetime-local
+ file
+ email
+ month
+ number
+ range
+ search
+ tel
+ time
+ url
+ week

We can also use HTML attributes to change the behavior of form elements or do [form validation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms/Data_form_validation) to only allow users to submit the form when certain conditions are met. Try out a few:

```html
<input type="text" name="country_code" pattern="[A-Za-z]{3}">
```

+ disabled -- Specifies that an input field should be disabled
+ max -- Specifies the maximum value for an input field
+ maxlength -- Specifies the maximum number of characters for an input field
+ min -- Specifies the minimum value for an input field
+ pattern -- Specifies a [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
+ readonly -- Specifies that an input field is read only (cannot be changed)
+ required -- Specifies that an input field is required (must be filled out)
+ value -- Specifies the default value for an input field 

**Hint:** Don't guess about how to use them, use Google to lookup the documentation.

**Exercise: Create a Sign-Up Form**

Your personal website needs a contact form! (and this one will actually work, promise)

1. Ask your users to fill out a contact form to reach you!
2. The form should collect their name, email, and message.
3. Ask them to introduce themselves using a `<textarea>` element.
4. Ask them to fill in a "get to know you" survey using dropdown menus, checkboxes, radio buttons, and various other form elements.
5. Use [Formspree](https://formspree.io/) to have form responses emailed to you

**You'll need to have your site deployed for Formspree to work.** [GitHub pages](https://pages.github.com/) would be a good choice.

## Positioning

All HTML elements can accept a positioning attribute that affects how the elements fits into the flow of the page. The four possible values for the positioning attribute are:

+ Static (default):
  + Not positioned in any special way
  + Based on page flow
  + Does NOT use 'top, left, right, and bottom' attributes
+ Relative
  + Uses 'top, left, right, and bottom' attributes *based on elements around it*
  + Relative to positions of elements around it
  + Other content will not be adjusted to fit into any gap left by the element
  + Behaves the same as 'static' unless you add some extra properties
  + **Does not affect other elements on the page**
+ Absolute
  + Position absolute *relative to parent element*
  + Gets taken out of 'page flow' (can be in front / behind content)
  + Set parent element to 'position: relative' to set relative that element (by default, parent element is entire page)
+ Fixed
  + Fixed to x/y-coordinates of **viewport** (using 'top, left, right, and bottom' attributes)
  + Stays in the same place even if the page is scrolled

Don't forget that you can use negative values for positions and % signs!

Also, if you're having trouble understanding CSS positioning, [this website](http://learnlayout.com/) is a great resource.

**Positioning Exercise:**

Use the Chrome Developer tools to mess with the positioning of elements on this page and get an intuitive feeling of how they work.

1. Use the Chrome Developer tools to recreate the live demo you just saw. Set the position property of each of the bullet points above to the value they correspond to.

2. Create a fixed element that appears on the page in the same place no matter how much you scroll. It can do whatever you want; try and distract users away from studying javascript by encouraging them to check their email, embed a music player, or even just create a page header/footer that is always present.

3. If you have time, try and incorporate some of these elements into your personal website.

### Page Layouts with CSS

Up until this point, we've worked only with single-column HTML documents. What if we want more complex layouts. Maybe a snazzy sidebar, like this?

![two column layout](resources/2-column-layout.jpg)

**Exercise 1: A page for Hipsters**

Hipsters have money and buy ridiculous things. Let's take advtange of this situation by building a very hip 2-column website to sell them hand-stitched leather whatevers.

**Step 1: No layout**

Create a new HTML document with a bunch of text from [hipster ipsum](http://hipsum.co/). We want a lot of text to make the hipsters feel at home. Have at least 10 paragraphs.

Having no layout makes [block elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) (like `<div>`, `<h1>`, `<p>`) really wide, which gets kind of annoying to read.

**Step 2: Margin auto**

```css
#container {
  width: 960px;
  margin 0 auto;
}
```

Let's add a container div to surround the content on our page with the above styles applied. We've seen this before. It just gives a fixed width to the content and centers it.

**Step 3: Flexible sizing for small screens**

Try squishing the browser window really narrow though. What happens?

```css
#container {
  max-width: 960px;
  margin: 0 auto;
}
```

What happens if we change our CSS to use `max-width` instead?

**Step 4: Brand and navigation divs**

1. Let's put our content inside a div#content (still inside #container)
2. Above div#content (still inside #container), add a div#header, which should contain div#brand and div#nav
3. Give everyy Id'd (div with an id attribute) div a different background-color so we can see what's going on
4. Place a logo and company name in #brand
5. Mock out a few fake links for the #nav
6. The navigation links should be an unordered list
7. How can we make the list items horizontal? Try it first, then check [the solution](resources/horizontal_list.md)

**Step 5: Fixed header**

What if we want our branding and navigation to be visible no matter how far the user scrolls? You already learned how to do that using the "fixed" position.

**Hint:** Remember, if you position something as "fixed", you must provide values for the top/left properties, or it will not be displayed.

Experiment with the following:

1. We've taken #header out of the page flow. How do we prevent it from overlapping our content? **Hint:** Which property did we learn about last lesson that creates space between HTML elements?
2. What if we place our #header above #container, instead of inside it?
3. What if we give the header a set height and width?
4. What if we give the "top" and "left" properties non-zero pixel values (like 10px)?
5. What if we change the "top" and "left" properties to "bottom" and "right", respectively?

**Step 5: A second column** 

Things are starting to get serious now.

1. Create a div#sidebar as the last element inside the #container
2. Put a bunch of pictures of snazzy hipster things to buy in there
3. Give #container a css rule `position:relative;` **Why?**
4. Give #content css rules `position:absolute, width:600px;` **Why?**
5. Give #sidebar css rules `width:350px; margin-left:600px;` **Why?**
6. Take a moment to think back to what we learned earlier about positioning, and why that enables steps 3-5 to do what they do.

Ok, the above works, but it's a bit confusing, it doesn't squish itself for small screens, and for complicated reasons, if our `position:absolute;` element is larger than our container, it overflows its bounds.

### A better Way: Floats

Another CSS property which has been hacked into layout duty is float. Float was originally intended for wrapping text around images. Try mixing a few images in with the hipster upsum text. Observe the result, and then give them the following style:

```css
#content img {
  float: right;
  margin: 0 0 1em 1em;
}
```

Now try floating them left instead.

Awesome, we're almost there! Time for the big finale!

1. Remove the position, and margin-left `css` properties from #container, #content, and #sidebar respectively.
2. Add `float: left` to both #content and #sidebar
3. Where did the background color go from our #container?
4. Add `overflow: auto;` to #container
5. Change the widths of #content and #sidebar to 75% and 25% (% of what?) respectively and try making the browser window really narrow or use Chrome's [device mode](https://developer.chrome.com/devtools/docs/device-mode).
6. What is the difference in behavior between #container having 'width' vs 'max-width' when making the browser narrower?

If you get stuck, take a look at the source code of [this page](resources/simple_grid.html)

Let's add some padding, margins, borders, background colors, etc to make things look nice. What happens if we don't use the `border-box` CSS property on every element?

```html
* {
  box-sizing: border-box;
}
```

**Exercise: Improving your Personal Website**

If you have extra time, try designing a layout for your personal website (or even just one of the pages). Don't copy and paste code from the hipster site!

1. There should be a div#container that centers the content
2. Create a div#header that contains the brand and nav links
3. Add a div#brand with the logo
4. Add a div#nav with the site navigation links
5. Add a div#content to hold that specific page's content
6. Add a div#sidebar with extra content that should be shown on every page
7. Add a div#footer if you'd like

**Note:** Although we didn't explicitly use it in this exercise, its important to know about the [clear property](https://developer.mozilla.org/en-US/docs/Web/CSS/clear), which goes hand-in-hand with [float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

**Extra Credit:** 

+ Read [this site](http://learnlayout.com/) from start to finish.
+ Try centering a div on the page, both horizontally *and* vertically.
+ Use [Pure](http://purecss.io/) to creat a responsive layout that looks good on desktop *and* mobile -- use the "Getting Started" link on the left for a simple tutorial.
*If you want to see what your website will look like on mobile, open up the chrome developer tools, and then click on the phone icon in the top left.*

**Nightmare Mode:** Try recreating one of Pure's [sample layouts.](http://purecss.io/layouts/)

**Additional Reading:** HTTP methods other than GET and POST

