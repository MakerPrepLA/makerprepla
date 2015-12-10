# Lesson Plan 4: Forms and Positioning

## Forms

### Context

HTML forms are one of the main points of interaction between a user and a web site or application. You will use them constantly in your careers as developers to obtain information from users and process it on your servers. Today though, we just want to focus on the forms themselves, and we'll let someone elses server handle the actual processing of the form.

Every HTML form is constructed from a series of "widgets" that define the types of information we want to obtain from the user.

https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms (great resource on forms)

Lets start with a really simple example. Live code the following demonstration:

```html
<form action="/test" method="GET">
  name: <input type="text" name="text">
  password: <input type="password" name="password">
  email: <input type="email" name="email">
  <input type="submit">
</form>
```

While typing, explain the following as you do them:

1. The `<form>` element contains all the input elements or 'widgets'
2. The `action` attribute specifies where to submit the form. In this example, I'm specifying a path that doesn't exist (I might set up a node server that simply listens for form submissions and sends them back, just show the students how simple servers can run on machines and such. Maybe deploy my own server and try to make them all connect to it and read each others messages or something). If you're not using a local server, feel free to leave this field blank, but explain why you're doing so.
3. The `method` attribute specifies which method the form should use on the action: GET or POST. The simplest way to explain the difference between the two is that a GET request asks for information from the server, and a POST request sends information (like a user's form input or a file to upload) to the server.
4. The `type` attribute specifies how the input box will behave, they'll get a better understanding this in a second once you render the form.
5. The `name` attribute is REQUIRED if the form is to actually send any data without the form. Emphasize this point because its a common bug that developers run into. Withou the name field, the browser has no way of encoding the data in a way that the server can understand (again, they'll get a better understanding of this in a second, but introduce the concept)

Once you're done live coding, draw students attention to how the input boxes on the rendered form behave. The text input behaves exactly how you would expect, the password field obfuscates what you're typing, and the email input box will throw an error when you try to submit a value that doesn't look like an email address. This is called form validation and is important to prevent users from sending the wrong type of data to your servers.

Now submit the form and draw the students attention to the address bar. It should look something like this:file:///home/richie/Desktop/test1.html?name=richie&password=123qwe&email=richie%40gmail.com

Notice how the data we submitted with the form has been **encoded in the url.** The server will read this request and be able to interpret the encoded data into meaningful, structured data. Each one of those individual key:value pairs is called a **query string parameter** and in essence what they do is, since you're issuing a GET request I.E requesting information, tell the server how to find the information you're looking for.

What if we change the method to POST though? Lets try that. Thats interesting, the data wasn't URL encoded like in the other example. Luckily, we can still figure out what happened using the Chrome Developer Tools. [Open up the network tab, set it to preserve log, and then make the post request again]

The data we typed into the form was still sent to the server, but instead of being URL-encoded, it was sent to the server in the **body** of the request [flip between the parsed and non-parsed view to show them the difference]. Lets switch the method back to "GET" one more time and see what happens in the network panel this time. [Switch the method back to GET and resubmit the form]. The data we put in the form stills hows up in the network panel, but notice that instead of the title of the data saying: "Form-Data", implying that the data was sent in the body of the request, it says "Query String Parameters" which means the data was URL-encoded instead of being put in the body.

In summary, when you're using forms:

1. GET method encodes the form data into the URL itself
2. POST method encodes the form data into the body of the request

In practice during today lesson, this difference won't have much influence on your work, but its an important distinction to understand as you learn about building web applications.

Ok cool. So the exercise for today is a little complicated because we're gonna be using Git. I'm gonna walk you guys through it, step-by-step, and I want you guys to follow along with me as I go.

The first thing we're gonna do is create a form with the POST method:

```javascript
<html>
  <body>
    <form action="http://formspree.io/[YOUR EMAIL HERE]" method="POST">
      <input type="text" name="name">
      <input type="email" name="_replyto">
      <input type="submit" value="Send">
    </form>
  </body>
</html>
```

[Rexplain all the form inputs and stuff as you're typing it.] Also emphasize that the formspree page has an example code too, and that we're posting it to formsprees website.

Cool, now that we have our form we're gonna save it in its own folder and call it index.html. Its extremely important that we name it index.html and not something else. The reason is because when you point your browser to a new url, the file it asks for, by convention, is "index.html". So if that file is not there, the browser won't know which file to request first, and it won't be able to load the web page.

Cool, so lets test out our form! [open the index.html file you just made, fill it out, and submit it. You'll get an error message from formspree. Explain to the students that this just a security thing, don't delve into explaining COORs or anything like that.

So formspree says that our webpage has to be deployed on a real server, and they won't allow forms to be submitted using the "file://" protocol (point to the url in your browser when you say this). Luckily, GitHub allows you to host simple web pages, and this will be a great way for you guys to get a taste of using git and GitHub. Please keep in mind, Git and GitHub are incredibly complex, learning them has a very steep learning curve, and many developers go their whole lives without really understanding them that well. Follow along, but if you don't completely understand everything, thats ok. I just want you guys to get a taste for Git!

Alright so we've got our file in its own folder. Now, we need to create a github repository. [Go to GitHub and make a new GitHub repository].

Cool, now we have a REMOTE Git repository on GitHub, but we need a Repository on our local machine too. [Open up your terminal and navigate to the folder that contains your file. Make sure everyone has managed to get there using bash before moving on]. Now that we're in our folder, we simply type:

[If they haven't used git before they might need to do the initual setup with the following two commands:]

`> git config --global user.email "YOUR EMAIL HERE"`
`> git config --global user.name "YOUR NAME"`

[Also, if you haven't managed to get BASH / git installed on their machine, this website has a pretty good unix terminal that comes with GIT that they can use: http://www.tutorialspoint.com/unix_terminal_online.php]

`> git init`

This creates a local repository. Now, we need a way of connecting and sending files to our REMOTE repository, the one you guys just saw me setup on Github. We do this using the conveniently named "git remote" command, like this:

`> git remote add origin [link to repo from GitHub here]`

Let's break that command down. We start all our git-commands in the terminal with the keyword 'git', so that part is easy. The next keyword 'remote' tells git that we're going to be doing something related to git remotes. The 'add' keyword is pretty self-explanatory, it just tells git that we're going to be adding a new remote. The word 'origin' is the most interesting. This is actually just a naming convention. We could have called this 'godzilla_pizza_monster' and it still would have worked. Its just a name for the remote we're creating. Finally, we just put the link to the github repository at the end.

Cool, so we've created our local repository, but we still haven't put anything in it yet. We can see that using this command:

`> git status`

The git status commands tells us the difference between the current saved version of our repository, and whats in our local folder. As you can see, git is telling us that we have a file called index.html that hasn't yet been "comitted" to our repository. Only once a file or change has been comitted, does it actually get incorporated into our codebase / repository. So how do we commit it? Thats a two-step process. First:

`> git add index.html`

This adds index.html to our list of things that **WILL** be commited, once we actually commit. We can see this once we type git status again:

`> git status`

You can see now that index.html is green now, not red, indicating that if make a commit, it will be committed to the repository. Lets do that!

`git commit -m 'Initial commit'`

Lets break that command down. We already went over the git keyword. "commit" just tells git that we're committing everything in our "add list" to the current repository, and the -m simply states that we'd like to specify a message along with this git, usually this describes what has changed since the last commit, but since this is the first one, we'll just say "Initial commit". **NOTE:** The message HAS to be inside quotation marks.

Awesome guys! You just comitted your first piece of code! This is the exact same process professional developers all over the world use every day to commit their code! But how do we get it up on the internet? With a git command of course!

`>git push origin master`

The "push" keyword tells git that we want to send our new commits to one of our REMOTE repositories, the next keyword is simply the name of the remote repository (in this case "origin" because thats what we named it earlier, remember?), and finally the last keyword is the branch name. In this case, its master because that is the default git name gives to your initial branch. We'll worry about that more in a little bit, but right now go back to your repository page on GitHub and see your published code!

Alright guys, pat yourselves on the back, this is pretty cool. We're almost there, but we're not done yet! We still need GitHub to host our index.html as a simple web page. The only thing GitHub requires us to do in order to enable that is to create a new **branch** caled "gh-pages". A git branch is simply an alternate version of your code [draw a git tree on the white board, showing the forks (with a central origin) and how branches can be merged back together later, but tell them not to worry about merging for now]. Lets create that branch now!

`git checkout -b gh-pages`

The "checkout" keyword tells git that we want to switch to a new branch of our repository, the "-b" parameter tells us that it should be a **NEW** branch, and "gh-pages" is simply the name of the new branch. Note that when you create a new branch, it will contain all the code from the previous branch, but any new changes that you commit will only affect the new branch, not the old one (until you merge them back together).

Cool! One more command, and then we're done:

`> git push origin gh-pages`

Now go check out your web pages!

**NOTE:** A few students had trouble because they initialized the git repository "too high" in their folder structure. Make sure they do `git init` **IN** the folder that their index.html is located.

## Positioning

### Live Demo

Lets talk about positioning now. [Navigate back to the lesson page and open up chrome dev tools.] The first possible positioning attribute is "static". Statically positoned items are not "special" in any way and they are rendered based on the page flow (interaction between boxes). They are not affected by the 'top, left, right, bottom' attributes. [Demonstrate this by inspecting the "Static (default)" bullet point and then adding a left property set to 50 px, nothing will happen]

The next positioning attribute is "Relative", behaves the same as static unless you add some extra properties. Relatively positioned elements will respond to the 'top, left, right, and bottom' attributes based on the positions of elements around them. [Inspect the bullet point that is labeled "Relative" on the lesson 5 page and change the color to red, position it relative, set the left property to 50px and then top property to -50px] Notice how when it moved around, other elements didn't move to fill in any gaps it left behind. When you're using top, left, right, and bottom with relative positioning, you can think of the offsets as being **relative** to where the element would normally be in the document flow.

http://stackoverflow.com/questions/10426497/position-relative-vs-position-absolute

The next positioning attribute is "Absolute". Absolutely positioned items are removed from the normal flow of the document and placed in an exact location on the page. Unless you override it, absolutely positioned items will be placed in the upper left corner of their **parent** element (parent defaults to body if no other parent is positioned something other than static). Pay close attention to this demo. [inspect the "Absolute" bullet point on the lesson5 page and set the position to absolute.] Notice how once I set the position to absolute, the element gets remove from the normal flow of the document and other items move to fill in the space? Now look what happens when I set the left and top properties to 0px [set left to 0px and top to 0px] Notice how the element moved to the most top left corner of the entire document? If you position an element absolutely like this, it will be positioned relative to the entire page by default. However, if you set its parent element to be positioned 'relative' [find the parent element, as I write this now its an <ul> tag and style it with position 'relative'] Notice how the the absolute element is now in the top most left corner of the **parent** element, not the entire document.

Finally, we have the "Fixed" positioning attribute. [Explain the two bullet points on the page that described the "Fixed" position, and then inspect the "Fixed:" bullet point and set its position to fixed] - notice that the element disappeared. To bring it back, we'll need to define its position in the X/Y coordinate system [set left: 0px and top:0px]. Now that when I scroll [start scrolling] the element remains in the same part of the viewport. [set left and top to 50% and then demonstrate scrolling again]. Unlike relative positioning, a fixed element doesn't leave a gap in the page where it would have bene otherwise [demonstrate this by toggling the position property on and off]

Show them the hipster ipsum website and then let them try the layout exercise on their own without livecoding it first, check in with them regularly though and make sure everyone is on track.

## A Better Way: Floats

The Float property was originally designed to allow text to wrap around images. Designers later realized that they could use it to create website layouts in CSS, but we'll get to that in a moment. First, lets try wrapping some text! [Inspect the "Form and Positioning" header at the top of lesson 4 and set its float property to left] Notice "Collect user input with Forms!" rushed up to wrap around the image? Lets say we want that text to be on the same line, but on the right side of the page. [inspect "Collect user input with forms!" and set `float: right`]. Cool, that worked, but we've still got all this text that rushed up to wrap around the floats that we dont want.

This other piece of text "HTML forms are used to collect user input. The `<form>` element defines an HTML form. Form elements are different types of input elements, checkboxes, radio buttons, submit buttons, and more. Try it out on your page:" decided to fill in the empty space. Luckily, their is a CSS property for handling just this type of situation.  We can use the CSS clear property on any items after the floated item to take care of that. The "Clear" property specifies whether an element can be next to floating elements that precede it, or must be moved down (cleared) below them. [inspect the block of text and add "clear:both" as a style. Also, explain the difference here between clear left, right, and both]

This is a good opportunity to explain that unlike absolute positioning, floated elements remain a part of the flow of the web page. Demonstrate this by first changing the float property of "Collet user input with forms!" from right to left. Notice how it ends up next to "Forms and positioning", but does not overlap it. Switch it back to float left, and then turn off the float property of the "Forms and Positioning" header and instead set its position to "Absolute". Finally, go back to "Collect user input with forms!" and change its float property to "left" one more time. This time, the two headers will overlap each other.

Once again, let them work through the exercises with live-coding it first. Check in frequently to make sure no one is stuck. Also, remind them to use a '.css' file to store their CSS instead of putting it in a `<style>` tag.

**TIMING:** I pretty much walked them through the whole form part of the lesson, took about an hour, then I gave them 15 minute to answers questions / relax / keep messing with their form, then I told them to do the positioning stuff. When there was 30 minutes left before class, I told them if they hadn't gotten to the float exercise, they should skip to that because thats the most important part (after they understand how to position things, creating the layout with floats is just meant to show them how hard it is without floats, although consider revamping that part of just taking it and out and putting something else there. Just seems to confuse them more than anything.)

According to the feedback, students felt like layouts were really confusing and they wanted more time with that. Makes sense, but considering they'll probably be using a css framework in the future that takes care of all the layout stuff, I'm not too worried about it. To a certain degree, this was just so they would understand how things work (like what a CSS framework is actually doing for them) and how hard it is to do thing manually.