**note:** make sure to include jquery before running any of these scripts

## Exercise 1
view the full solution [here](https://jsbin.com/wihude/edit?html,js,output)
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JS Bin</title>
  </head>
  <body>
    <div id="target">click me!</div>
    <button id="beep">beep!</button>
  </body>
</html>
```

```js
var fn = function () {
  console.log('heeey');
};

var beeper = function(){
  console.log('beep');
};

fn();

document.querySelector('#target').addEventListener('click', fn);

document.querySelector('#target').addEventListener('click', function() {
  console.log('same deal');
});

document.querySelector('#beep').addEventListener('click',beeper);
```

## Exercise 2
view the full solution [here](https://jsbin.com/tudutohebo/edit?html,js,output)
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-git.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div>click me!</div>

  <div id="target">boom the dynamite</div>

  <!-- remember, you can make up attribute names, like 'picture' below. this allows you
  to effectively bind pseudo-variables to your elements -->

  <div picture="money" class="click-box">
    show me the money
  </div>
  <div picture="oprah" class="click-box">
    show me the oprah
  </div>
  <div picture="opera" class="click-box">
    show me the opera
  </div>

</body>
</html>
```
```css
.click-box{
  height:150px;
  width:150px;
  background-color:dodgerblue;
  margin:10px;
  position:relative;
}

img{
  position:absolute;
  z-index:1;
  top:0px;
  left:0px;
  height:100%;
  width:100%;
}
```
```js
$('div').on('click', function(){
  console.log('A div has been clicked!');
});

$('#target').click(function(){
  $('#target').show().css('color', 'red').text('boom goes the dynamite!');
});

//hotlinking is bad, mmkay
var images = {
  oprah:"http://i.imgur.com/Sx3p1P6.gif",
  opera:"http://i.imgur.com/jhaY2BO.gif",
  money:"http://i.imgur.com/O7EEkYa.gif"
};

$(".click-box").click(function(){
  var image = $(this).attr("picture");

  $(this).append($("<img>",{
    src: images[image]
  }));

  //class selectors return every single element matching that class, unlike document.querySelector()
  //the not() method excludes the argument element from the query
   $(".click-box").not(this).find('img').hide();
});
```
## Exercise 3
view the full solution [here](https://jsbin.com/nepiqe/edit?html,css,js,output#H:L17)
```html
<!DOCTYPE html>
<html>
  <head>
    <link href="https://code.jquery.com/ui/jquery-ui-git.css" rel="stylesheet" type="text/css" />
    <script src="https://code.jquery.com/jquery-git.js"></script>
    <script src="https://code.jquery.com/ui/jquery-ui-git.js"></script>
      <meta charset="utf-8">
      <title>JS Bin</title>
  </head>
  <body>
    <div id="target">
      hover over me!
    </div>

    <div id="margaret">hover over me too!</div>

  </body>
</html>
```

```css
.highlighted{
  background-color:yellow;
}

.magic{
  height:225px;
  width:175px;
  background-image:url('http://i.imgur.com/VYUQ9Wj.jpg');
  background-size:contain;
  /*hotlinking is still bad, mmkay*/
}
```
```js
$(function() {
  $('#target').on('mouseover', function() {
    $('#target').addClass('highlighted');
  });

  $('#target').on('mouseleave', function() {
    $('#target').removeClass('highlighted');
  });

  //hover() takes two arguments & binds both mouseover & mouseleave (in that order)
  $("#margaret").hover(function() {
    $(this).addClass("magic");
  }, function() {
    $(this).removeClass("magic");
  });
});
```

## Exercise 4
view the full solution [here](http://jsbin.com/rupiqo/edit?html,js,console)

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-git.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <!--hotlinking? in our solutions? it's more likely than you think-->
  <img src="https://i.imgur.com/qswO0HCh.jpg">
</body>
</html>
```
```js
$(function() {
  var mouse_tracker = function(event) {
    console.log(event.pageX, event.pageY, !!event.which);
    $('img').css({
      top: event.pageY,
      left: event.pageX
    });
  };

  //follow without mouse press
  //$(document).on('mousemove', mouse_tracker);

  //follow with mouse held down
  var clicking;

  //prevent image from being accidentally dragged
  $('img').on('dragstart', function(event) {
    event.preventDefault();
  });

  $(document).mousedown(function(){
    clicking = true;
  }).mouseup(function(){
    clicking = false;
  }).mousemove(function(e){
    if(clicking){
      mouse_tracker(e);
    }
  });
});
```

## Exercise 5
view the full solution [here](http://jsbin.com/febuce/edit?html,js,output)

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-git.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div>click me!</div>

  <div id="output"></div>    

  <p id="1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, ipsa!</p>
  <p id="2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id, corporis!</p>
  <p id="3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolore amet ratione numquam, deleniti suscipit.</p>
  <p id="4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam natus culpa qui ad nesciunt asperiores.</p>
  <p id="5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, autem nesciunt itaque, magni aspernatur sed.</p>
</body>
</html>
```

```css
.clicked{
  color:white;
  background-color:dodgerblue;
}
```

```js
$(function() {
  var el_finder = function(event) {
    // this and event.target will both refer to the DOM node that was clicked
    console.log("calling el_finder for:", this, event.target);

    $(this).attr('id', 'active');
    // these two are identical
    $(event.target).attr('id', 'active');
  };

  $('div').click(el_finder);

  //addClass
  $("p").click(function() {
    $("#output").text($(this).attr("id"));
    $(this).addClass("clicked");
      $("p").not(this).removeClass("clicked");
  });

  //.css()
//   $("p").click(function() {
//     $("#output").text($(this).attr("id"));
//     $(this).css({
//       backgroundColor: "dodgerblue",
//       color: "white"
//     });

//     $("p").not(this).css({
//       backgroundColor: "",
//       color: ""
//     });
//   });
});
```

## Exercise 6
view the full solution [here](http://jsbin.com/gorago/edit?html,js,output)
```html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-git.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>

  <input type="text" id="color" value="type some text!">
  <div id="output">gonna change!</div>
  <button id="go">change text!</button>


</body>
</html>
```
```js
$(function(){
  $('button#go').on('click', function(){
    $('#output').text( $('input#color').val());
    $("body").css("background-color",$('input#color').val());
  });
});
```

## Exercise 7
view the full solution [here](http://jsbin.com/mirifu/edit?html,js,output)

```html
<!DOCTYPE html>
<html>
<head>
<script src="https://code.jquery.com/jquery-git.js"></script>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <input type="text">
  <label for="text"></label>
  <div id="output"></div>

  //hotlinking. not even once.
  <img src="http://i.imgur.com/cUejVLv.jpg">
</body>
</html>
```

```css
img{
  position:relative;
  left:0px;
}
```

```js
$(function(){
  var nsaSurveillance = "";

  $('input').on('keypress', function (e) {
    $('label').text(e.keyCode);
  });

  $('body').on('keypress', function(e){
    console.log(String.fromCharCode(e.keyCode));
    nsaSurveillance += String.fromCharCode(e.keyCode);
    $("#output").text(nsaSurveillance);

    //this will move the land speeder 10 pixels per keystroke
    var $currentPosition = parseInt($("img").css("left"));
    var speed = 10;
    $("img").css("left",$currentPosition + speed);
  });
});
```
