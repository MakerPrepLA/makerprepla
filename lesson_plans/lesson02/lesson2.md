# Lesson 2: Styling Web Pages

## Bash Primer

Before we get started with our main lesson today, I want to give you guys a quick tutorial on how to use the UNIX shell and the BASH scripting language.

So what is Bash? Bash is a command processor. The user types commands, and that causes actions be executed. You can think of it as a low-level programming language designed for interacting with your computer and its file-system. Bash is also that really cool thing you see hackers working on in every movie where they type furiously and text scrolls down a black screen.

[Optional: I like to have [cmatrix](http://www.asty.org/cmatrix/) installed on my machine and then when I talk about hackers and movies I just type cmatrix into my terminal and it looks like a terminal from the movie the matrix]

[Also: telnet starwars (look it up) is another really cool terminal thing you can show them]

Bash has a *ton* of features, but today I just want to go over the basics of manipulating files and folders. So what we're gonna do is set up a simple folder-structure for you all to store your code in.

The first three commands you need to know are:

1. `ls` - lists all the folders/files in the current directory

2. `pwd` - tells you which directory you're in

3. `cd` - switch the current directory to a new one

Ok so open up your terminal (if you're on mac) or git for windows (if you're on windows) and then type pwd. That should list the directory that you're currently in. If you type ls, that will let you know which other folders / files are in that directory. Chances are, the folder that you're currently in is probably not where you want to store your projects. So what we're gonna do is use the `cd` command to navigate to a folder where *do* want to store our project. You can type `cd <folder name>` to navigate to a folder that is in the folder you're currently in, or you can use 'cd ..' to move up to the parent directory.

Once you've navigated to a directory that you're happy to store your projects in, type `mkdir <folder name>`, this will create a new folder. In this case, we're gonna do something like `mkdir makersquare` and then we're gonna do `cd makersquare` to go into that folder, and then we're gonna use `mkdir` again to make some more folders for each of our lessons.

That's pretty much it, I just want you guys to get a taste for working with the command line and bash because we're gonna need it, but also because its cool everyone wants to feel like a hacker :)

[Also remind them there is more information on Bash in the main resources folder]

## Context

CSS stands for Cascading Style Sheets. In the same way that a markup language describes how data should be displayed and structured, a style sheet describes how that data should look and be formatted AKA "styled".

So why do we want to use CSS instead of just writing all our styling inside of the HTML itself? CSS allows developers to separate the content of a document from its presentation. Since CSS stylesheets are independent of the content they style, they can be reused and swapped in and out at will.

CSS can be used to do anything from modifying the size or color of text, to animating entire parts of your website.

## Examples
Some cool examples of things that can be done in pure CSS: 
http://anthonycalzadilla.com/css3-ATAT/index.html
http://codepen.io/thebabydino/pen/FpAun
http://www.subcide.com/experiments/fail-whale/
http://codepen.io/JCMais/pen/lByim (all css)
http://codepen.io/juliangarnier/pen/idhuG [This one has 40 lines of JS, but its too cool not to show]

Make sure to set expectations at here. The things you just demoed are not within the realm of possibility for the students to create over the next month, or for most developers at all, but you want to give them a taste of the power that developers have access to within the web browser, and thats not even using webGL or more modern browser rendering technology. Remind them that the code they write as web developers will work on almost ANY device (screen size issues aside), and that is one of the many things that makes web development so cool. 

## Live Demo
Quickly create a simple HTML document with some random tags (good to refresh them on the material from yesterday) and show them that it works. Then dive back into the text editor and add some inline styling like below:

```html
<body style="background-color:lightgrey">
<h1 style="color:blue">This is a heading</h1>
<h1 style="color:#AA22FF">Also a heading</h1>
<h1 style="color:rgb(0,255,255)">Moar!!</h1>
<p style="color:red;background-color:green">This is a paragraph.</p>
<img src="https://i.imgur.com/81qyN1y.jpg" style="height:100px;width:100px">
```

Alternate between adding the inline styles in your text editor, as well as adding them directly using the chrome dev tools so they can get more accustomed to using the tools, as well as see how you can preview CSS immediately.

Core concepts to explain as you do the demonstration:
1. CSS rules are key-value pairs (similar to HTML attributes)
2. The keys represent the property to be changed
3. The value represents what it should be changed to
4. The key and value are separated by a colon
5. Each key-value pair is separated with a semi-colon
6. Allude to the fact that there are multiple ways to define colors in CSS, but you don't need to spend too much time on this.
7. Emphasize that styles applied to **parent** elements effect their **children** (nested) elements as well, unless that style is overwritten. Its easy to forget to mention this part, but its crucial to really understanding CSS. You can demo this by simply testing one element inside of another and then setting the text color of the parent or something like that. The code snippet below might help demonstrate that:

```html
<h1 style="font-family:verdana;color:orange;">This is a heading</h1>
<p style="color:green;">This <i style="color:orange;font-size:300%">is</i> a paragraph.</p>
<p style="color:green;">This <i style="font-size:300%;">is</i> a paragraph.</p>
<p style="color:green;font-size:40px;text-align:center;font-family:'Times New Roman';">This is a paragraph.</p>
```

## Vacation Exercise
Now have the students do the vacation exercise, remind them to have fun with it, and that the purpose of the exercise is for them to experiment with CSS as much as possible, not create something presentable.

## Style Tag
As you guys probably noticed, things can get messy pretty quick when we're just using the inline style attributes on HTML tags. Once way we can counter-act this issue is by using the `<style>` tag.

Go back to the original HTML document you made at the beginning of the lecture, and refactor some it using the style tag. You can also just copy and paste this into your text editor:

```html
<html>
  <head>
  </head>
  <body>
    <h1 style="font-family:verdana;color:orange;">This is a heading</h1>
    <p style="color:green;">This <i style="color:orange;font-size:300%">is</i> a paragraph.</p>
    <p style="color:green;">This <i style="font-size:300%;">is</i> a paragraph.</p>
    <p style="color:green;font-size:300%;text-align:center;font-family:'Times New Roman';">This is by far the most important part of the page!</p>
  </body>
</html>
```

and refactor it into:

```html
<html>
    <head>
    <style>
      h1 {
        font-family: verdana;
      }
      p {
        color: green;
      }
      i {
        font-size: 300%;
      }
    </style>
  </head>
  <body>
    <h1 style="color:orange;">This is a heading</h1>
    <p>This <i style="color:orange;">is</i> a paragraph.</p>
    <p>This <i>is</i> a paragraph.</p>
    <p style="font-size:300%;text-align:center;font-family:'Times New Roman';">This is by far the most important part of the page!</p>
  </body>
  </html>
```

Emphasize these points:
1. The `<style>` elements goes inside the `<head>` of the page.
2. The CSS lines begin with a **selector** to indicate which element the rules apply to.
3. We describe how the elements should be styled inside the curly brackets, using the same format we used earlier with the inline statements.
4. Talk about how you could easily copy and paste this style element into a bunch of different html files to give them all a consistent look and feel (this will transition naturally into the next part is which creating .css stylesheets). In addition, if you wanted to change the styling of something, isntead of changing it 100 times, you only have to do it once. Centralizing your configuration.

We also want to cover the concept of **ids** and **classes** and how those can be used with selectors to be even more specific with our styling.

Refactor your code to look like this, or something similar (as long as you get the point across):
```html
<html>
  <head>
  <style>
    h1 {
        font-family: verdana;
    }
    p {
      color: green;
    }
    .big {
      font-size: 300%;
    }
    #primary {
      text-align: center;
      font-family: 'Times New Roman';
    }
    .important {
      color: orange;
    }
  </style>
  </head>
  <body>
    <h1 class="important">This is a heading</h1>
    <p>This <i class="important big">is</i> a paragraph.</p>
    <p>This <i class="big">is</i> a paragraph.</p>
    <p  id="primary" class="big">This is by far the most important part of the page!</p>
  </body>
<html>
```

Make sure you hit these points:
1. CSS selector to match an id starts with a hash (\#)
2. CSS selector to match a class starts with a period (\.)
3. An id should be unique to **one** element (explain how you would use an id when you want to refer to one specific element, whereas you use a class when you want to style a group of related things)
4. With this latest refactor, we've truely separated **presentation** from **content**. We've saved typing, increased readability, increased modularity, and separated our concerns.

## Vacation Refactor
Go back and refactor your vacation file to use the style element


## HTML Protocols
We've already used the `<a>` tag to create links between pages. So far we've been prepending our URI's with HTTP or HTTPS (an encrypted version form of HTTP). HTTP stands for Hypertext Transfer Protocol (HTTP) and probably the single most important protocol that allowed the internet to become what it is today.

HTTP functions as a request-response protocol in the client-server computing model. [Draw a simple diagram of a client and server on the whiteboard or pull up a picture of one]. For example, the client might be your web browser, and a computer hosting a website may be the server. When you click on a link, your browser sends a message to the server requesting a specific piece of content, like an HTML file, and the server responds with the requested file. The HTTP protocol is the language of this request and defines a technical standard for how requests and responses should be formatted.[The wikipedia article on this topic is pretty good, so encourage them to read that if they want more detail, this little intro is just meant to give them some context]

A simple mental model for visualizing what happens when you click a traditional link is that your browser throws away the current HTML document, sends a request over the network to get a new HTML document, and then renders that on the screen.

So what other protocols can we use with our link tags? There is a `mailto:` protocol that instead of telling the browser to request an html page, will tell it to open a new email message and populate the `to:` field with the email address. [If they ask about what other protols there are, you can mention FTP and even the file protocol, these are also additional reading at the end.]

[Create a mailto link using the chrome developer tools or a text editor and just show them what it does when you click it]

## Embedding
The concept of embedding is basically that you take a block of html (and possibl associated Javascript) and compartmentalize it somewhere in your website. One tool we have for this is iframes. We discussed earlier how when you click a link, your browser gets rid of the current HTML document and loads a new one. iframes allow us to load a new HTML document *inside* of the existing HTML document, instead of throwing it away.

[dev tools / text editor: create an iframe and then show them how the web page is rendered into the iframe. Keep in mind that some websites have builtin functionality to prevent them from being displayed in an iframe, so test out the website first. ]

```html
<iframe src="http://www.weather.gov/" width="800" height="300"></iframe>
<iframe src="http://example.com" width="200" height="200" style="border:none"></iframe>
```

Cool! Now you guys go add a mailto link on your website, and embed some fun stuff like a YouTube video or Google Map.