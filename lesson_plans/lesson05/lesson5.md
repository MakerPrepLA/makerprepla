# Lesson Plan 5: CSS Frameworks

We're gonna go over CSS frameworks today. A framework is basically a bunch of pre-written code that makes it easier to do frequently repeated things. For example, creating layout and appealing styles for websites is done over and over again. You all experiened yesterday how painful that can be. By using CSS frameworks, we can use a bunch of pre-written code that makes developing our own layouts easier, faster, and DRYer (explain do not repeat yourself). This makes it so that we as developers can focus on our design and vision for the product, instead of spending countless hours making sure our HTML/CSS looks good on hundreds of different device sizes.

Before we get started, I want you to all know that the material covered in todays lecture is designed to show you guys how HTML and CSS can be easier and faster. This lesson is not crucial to your success in this course, or as a developer, or even at MakerSquare. CSS Frameworks are one of those things you pick up as you go in your career, and often times you'll simply be modifying a pre-built template. That being said, since we spent the whole week doing HTML and CSS, this is a great way to have some fun and see how frameworks can make our lives a lot easier.

## Bootstrap

Bootstrap is a *responsive* CSS framework that makes creating nice-looking CSS layouts a breeze. Responsive just means just that the websites you build in Bootstrap will automatically adjust themselves to look good on any device screen size. We'll take a closer look at that in a minute.

Layouts are really easy to make in Bootstrap because of the grid system. Bootstrap comes pre-built with a 12 column grid system, which means that you can automatically partition parts of your website into 1-12 columns. Lets take a look at that:

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">
      <div class="row" id="panel">
        <div class="col-md-4">
        column 1
        </div>
        <div class="col-md-4">
        column 2
        </div>
        <div class="col-md-4">
        colmun 3
        </div>
      </div>
    </div>
  </body>
</html>
```

Points to emphasize as you live code:

1. Bootstrap will only work on stuff that you put inside of a div with a class of "container"
2. Columns must be defined inside of a div with a class of "row"
3. The class "col-md-4" means that each column should take up 4 colums in the 12 column grid. That's why we ended up with three columns. If we wanted 6 columns we would have used "col-md-2". Also show them how you can have uneven columns by setting the first one to "col-md-6" (this one will take up half the screen) and the other two to "col-md-3"


Another commonly used Bootstrap thing is the Jumbotron:

```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <link href="style.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">
      <div id="greeting" class="jumbotron">
      <h1>Where the Lumber Meets the Color</h1>
      <p>Hammer beautiful.</p>
      </div>
      <div class="row" id="panel">
        <div class="col-md-4">
        column 1
        </div>
        <div class="col-md-4">
        column 2
        </div>
        <div class="col-md-4">
        colmun 3
        </div>
      </div>
    </div>
  </body>
</html>
```
```css
#greeting {
  background-image:url("https://newevolutiondesigns.com/images/freebies/colorful-background-1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
```

Cool, we're going places now! [Finish the live coding by adding the menu at the top of the page like in the [example](index.html) and putting some images in the columns along with some hispter text and a background for the jumbotron]

They seemed to like the lecture, but a lot of them wanted to know what classes I was using in the demonstration / they copied my live coding session. Maybe should make the example code available as source in the actual lesson so they an recreate it and then start modifying it and stuff.

Also, tell them that their .css file should be linked **AFTER** boostraps stylesheet because earlier stylesheets are overwritten by newer ones


## End of Class

Tell the students that we'll be starting JavaScript next week and they should practice this weekend. JavaScript codeacademy or any other online resources would be a great place to go.