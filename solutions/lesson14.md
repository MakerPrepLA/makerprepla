**note:** make sure to include jquery before running any of these scripts

## Exercise 2
```html
<html>
<head>
</head>
  <body>
    <h1></h1>
    <img>
    <div id="notification"></div>
    <div class="container"></div>

  <script src="https://code.jquery.com/jquery-2.1.1.js"></script>
  </body>
</html>
```
## Exercise 3
```js
$('h1').css("color", "blue");
$('body').css("background-color", "red");
$("#everything").css("font-size", "35px");
$(".holder").css("background-color", "5px solid black");
$("ul li").css("font-weight", "bold");
$("h1 + p").css("background-color", "green");
$("#secret").css("display", "none");
$("#secret").css("display", "block");
$("#change-me").text("a new sentence!");
$("#change-me").append("<p>a new paragraph!</p>");
$("li").text("a new list item sentence!");
$("li").append(" newly appended text!");
$("#everything").append("<ol><li>new one</li><li>new two</li><li>new three</li></ol>");
```
## Exercise 4
view the full solution [here](http://jsbin.com/peyifiloqu/edit?html,css,js,output)

```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div class="layout-element header"><span>my website<span></div>
  <div class="layout-element content"><img src="http://i.imgur.com/ESiI6Kf.png"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus officiis harum nisi ad possimus aliquid eaque doloribus, dicta odio debitis. Eum et doloremque culpa, reprehenderit maiores provident minus eligendi assumenda. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id impedit molestiae nemo dolorum deserunt autem, animi natus corporis eveniet. Optio quas, commodi est sint nisi voluptatem! Suscipit quisquam beatae inventore?</p></div>
  <div class="layout-element footer">all rights reserved to whatever imaginary person they might belong to</div>

  <script src="https://code.jquery.com/jquery-git.js"></script>
</body>
</html>
```

```css
.layout-element {
  margin: 15px auto;
  width: 450px;
  border: 3px solid black;
  border-radius: 25px;
  box-sizing:border-box;
  padding:15px;
  background-color:lightgrey;
}

.header {
  text-align: center;
  font-size: 65px;
}

.footer{
  font-size:12px;
  text-align:center;
}

img{
  width:75px;
  height:75px;
  float:left;
  margin:10px;
}
```

```js
$(function(){
  var validColors = ["cyan", "blue", "green"];
  var userColor = prompt("what color theme would you like?\ncyan\nblue\ngreen");

  function changeImage(image) {
    $("img").attr("src",image);
  }

  while (validColors.indexOf(userColor) === -1) {
    userColor = prompt("please enter red, blue, or green");
  }

  $(".layout-element").css({
    backgroundColor: "light" + userColor,
    borderColor: "dark" + userColor,
    color: userColor
  });

  if (userColor === "cyan") {
    changeImage("http://i.imgur.com/dr4PNY6.png");
  } else if (userColor === "blue") {
    changeImage("http://i.imgur.com/1AOU94z.png");
  } else if (userColor === "green") {
    changeImage("http://i.imgur.com/Qi8RZow.png");
  }
})
```

## Exercise 5
view the full solution [here](http://jsbin.com/zazuqayiga/edit?html,js,output)

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div class="test-element">
    here we go!
  </div>

  <div class="hidden-element">
    invisible!
  </div>

  <div class="visible-element">
    visible!
  </div>

  <script src="https://code.jquery.com/jquery-git.js"></script>
</body>
</html>
```

```js
$(function(){
$(".test-element").fadeOut(1000);
$(".test-element").fadeIn(1000);
$(".test-element").slideUp(1000);
$(".test-element").slideDown(1000);

$(".hidden-element").hide();
$(".hidden-element").slideToggle();

$("visible-element").show(); //does nothing, since block elements' display properties default to "block"
$(".visible-element").slideToggle();
});
```

## Exercise 6
view the full solution [here](https://jsbin.com/qazemawuri/edit?html,js,output)

```js
$(function() {
  var $container = $("<div>").attr("id", "container");
  var $newImg = $("<img>").attr("src", "https://i.imgur.com/Ox3HVVS.gif");

  $("body").append($container.append($newImg));

  //really small
  $newImg.css("height","100px");

  //really big
  //$newImg.css("height","600px");

  var images = ["http://i.imgur.com/iM8ybeC.gif","http://i.imgur.com/qDGL4T6.gif","http://i.imgur.com/IVR4bGk.gif"];

  images.forEach(function(currentImage){
    this.min = 1;
    this.max = 450;
    this.randNum = Math.floor(Math.random() * (this.max - this.min)) + this.min;

    $img = $("<img>").attr("src",currentImage).addClass("paul").css({
      width:"100px",
      position:"fixed",
      top: this.randNum + "px"
    }).hide();
    $("body").append($img);
  });

  (function fadeLoop(){
    $(".paul").fadeToggle(2000,fadeLoop);
  })(); //self-invoking function
});

```
