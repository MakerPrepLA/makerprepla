**note:** make sure to include bootstrap & jquery before running any of these scripts

## Exercise 1
view the full solution [here](http://jsbin.com/wiyeqo/4/edit?html,css,js)


```html
<!DOCTYPE html>
<html>
  <head>
    <script src="https://code.jquery.com/jquery.min.js"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <meta charset="utf-8">
    <title>JS Bin</title>
  </head>

  <body>
    <div class="container">
      <div class="well well-lg custom-well">
        <div class="app-data">
          <div class="city-display">
          </div>
          <div>
            <span class="weather-label">current temperature</span>
            <span class="weather-data current"></span>
          </div>
          <div>
            <span class="weather-label">high</span>
            <span class="weather-data high"></span>
          </div>
          <div>
            <span class="weather-label">low</span>
            <span class="weather-data low"></span>
          </div>
          <div>
            <span class="weather-label">current weather</span>
            <span class="weather-data current-weather"></span>
          </div>
          <div>
            <span class="weather-label">wind speed</span>
            <span class="weather-data wind-speed"></span>
          </div>
          <div>
            <span class="weather-label">sunrise</span>
            <span class="weather-data sunrise"></span>
          </div>
          <div>
            <span class="weather-label">sunset</span>
            <span class="weather-data sunset"></span>
          </div>

        </div>
      </div>
    </div>
  </body>
</html>
```

```js
$(function() {
  var cities = ["san francisco", "budapest", "timbuktu"];
  var loadingImage = $("<img>").attr("src","http://i.imgur.com/Bfo3Bgl.gif");

  //self invoking function
  (function displayCities() {
    cities.forEach(function(city) {
      var cityLink = $("<a>").text(city + " ");

      $(".city-display").append(cityLink);
    });
  })();

  function displayData(data) {
    $(loadingImage).hide();
    $(".app-data").show();

    var units = ["ºF", "mph"];

    $(".current").text(data.main.temp + " " + units[0]);
    $(".high").text(data.main.temp_max + " " + units[0]);
    $(".low").text(data.main.temp_min + " " + units[0]);
    $(".current-weather").text(data.weather[0].main);
    $(".wind-speed").text(data.wind.speed + " " + units[1]);
    $(".sunrise").text(new Date(data.sys.sunrise * 1000).toLocaleTimeString());
    $(".sunset").text(new Date(data.sys.sunset * 1000).toLocaleTimeString());
  }

   loadingImage.hide().appendTo(".custom-well");

  $("a").click(function() {
    $.ajax({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $(this).text() + '&units=imperial&appid=e42d32af9555a899db7106b67e9e5aae',
      beforeSend: function() {
        $(".app-data").hide();
        loadingImage.delay(10000).show();
      },
      success: displayData
    });
  });
});
```

```css
body {
  background-color: cadetblue;
}
.custom-well {
  position:relative;
  top:40%;
  width:450px;
  margin:0 auto;
  text-align:center;
}

.weather-label{
  font-weight:bold;
  font-size:22px;
}

.weather-data{
  font-size:18px
}
```

## Exercise 2
view the full solution [here](http://jsbin.com/gatogo/edit?html,js)

* we'll be using the following css and html for all the steps of this exercise.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://code.jquery.com/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>
  <div class="container">
    <div class="my-panel panel panel-default">
      <div class="panel-heading">
        <h3 class="panel-title">blog post</h3>
      </div>
      <div class="panel-body">

      </div>
    </div>
  </div>
</body>
</html>
```

```css
.my-panel{
  position:relative;
  top:20px;
  width:375px;
  margin:20px auto;
}
```

### exercise 2, part 1

```js
$(function() {
  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts/1',
    success: function(data) {
      $(".panel-body").text(data.body);
    }
  });
});
```

### exercise 2, part 2

```js
$(function() {
  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts/2',
    success: function(data) {
      $(".panel-body").text(data.body);
    }
  });
});
```

### exercise 2, part 3

```js
$(function() {
  var placePostOnPage = function(post){
    $(".panel-body").text(post);
  };

  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts/2',
    success: function(data) {
      placePostOnPage(data.body);
    }
  });
});
```

### exercise 2, part 4

```js
$(function() {
  var placePostOnPage = function(post){
    $("<p>").text(post).appendTo(".panel-body");
  };


  for(var i = 1; i <= 10; i++){
    $.ajax({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts/' + i,
      success: function(data) {
          placePostOnPage(data.body);
          console.log(data.id);
        //check the console.
        //the posts are not received in order.
      }
    });
  }
});
```

* **protip**: remember that the "a" in "ajax" stand for "asynchronous". when you put an
ajax call inside a for loop, you're making ten completely separate ajax calls, which will
all respond at 10 completely separate times. imagine if you were standing at the top of a
hill with ten go-karts lined up side by side in front of you. if you run down the line, from first racer to last racer,
pushing each of the racers down the hill, they will arrive at different times.

### exercise 2, part 5
```js
$(function() {
  var placePostOnPage = function(post){
    $("<p>").text(post).appendTo(".panel-body");
  };


 $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    success:function(data){
      data.forEach(function(post){
        placePostOnPage(post.title);
      });
    }
  });
});
```

### exercise 2, part 6
```js
$(function() {
  var $panelTitle = $(".panel-title");
  var $panelBody = $(".panel-body");
  var savedPosts;
  var placePostOnPage = function(post){
    var $postElement = $("<p>").text(post.title);
    //.data() allows us to "attach", or bind, data of
    //any type to the html element. here, i'm attaching
    //the post object retrieved from json to the html element
    //representation of the post
    $postElement.data("postObject",post);
    $postElement.appendTo($panelBody);
  };
  var displayShowView = function(post){
    var $clickedPostObj = $(post).data("postObject");
    var $idEl = $("<div>").text("post id ");
    var $userIdEl = $("<div>").text("user id ");

    $panelBody.empty();
    $panelTitle.text($clickedPostObj.title);
    $idEl.append($clickedPostObj.id).appendTo($panelBody);
    $panelBody.append($clickedPostObj.body);
    $userIdEl.append($clickedPostObj.userId).appendTo($panelBody);
  };

  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    success: function(posts){
      posts.forEach(function(post){
        placePostOnPage(post);
      });

      savedPosts = posts;
    }
  });

  //event handlers, like .on(), only work with elements that
  //are already on the page when the javascript is loaded.
  //as such, we insert a second parameter into the .on() method
  //that allows us to "delegate" the click event to the paragraph
  $(document).on("click","p",function(){
    displayShowView($(this));
  });
});
```

### exercise 2, part 7
```js
$(function() {
  var $panelTitle = $(".panel-title");
  var $panelBody = $(".panel-body");
  var savedPosts;
  var placePostOnPage = function(post){
    var $postElement = $("<p>").text(post.title);

    $postElement.data("postObject",post);
    $postElement.appendTo($panelBody);
  };
  var displayShowView = function(post){
    var $clickedPostObj = $(post).data("postObject");
    var $idEl = $("<div>").text("post id ");
    var $userIdEl = $("<div>").text("user id ");
    var $indexViewButton = $("<div>").addClass("btn btn-primary").text("index view");

    $panelBody.empty();
    $panelTitle.text($clickedPostObj.title);
    $idEl.append($clickedPostObj.id).appendTo($panelBody);
    $panelBody.append($clickedPostObj.body);
    $userIdEl.append($clickedPostObj.userId).appendTo($panelBody);
    $panelBody.append($indexViewButton);
  };
  var displayIndexView = function(){
    $panelBody.empty();

    savedPosts.forEach(function(post){
      placePostOnPage(post);
    });
  };

  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    success: function(posts){
      posts.forEach(function(post){
        placePostOnPage(post);
      });

      savedPosts = posts;
    }
  });

  $(document).on("click","p",function(){
    displayShowView($(this));
  });

  $(document).on("click",".btn-primary",function(){
    displayIndexView();
  });
});
```

### exercise 2, part 8

* we've actually already been doing this. when the ajax request completes, it saves all the
retrieved posts to the `savedPosts` global variable. as such, we only make one ajax call,
after which we reference our locally cached data.

### exercise 2, part 9
```js
$(function() {
  var $panelTitle = $(".panel-title");
  var $panelBody = $(".panel-body");
  var savedPosts;
  var placePostOnPage = function(post){
    var $postElement = $("<p>").text(post.title);

    $postElement.data("postObject",post);
    $postElement.appendTo($panelBody);
  };
  var displayShowView = function(post){
    var $clickedPostObj = $(post).data("postObject");
    var $idEl = $("<div>").text("post id ");
    var $userIdEl = $("<div>").text("user id ");
    var $indexViewButton = $("<div>").addClass("btn btn-primary").text("index view");

    $panelBody.empty();
    $panelTitle.text($clickedPostObj.title);
    $idEl.append($clickedPostObj.id).appendTo($panelBody);
    $panelBody.append($clickedPostObj.body);
    $userIdEl.append($clickedPostObj.userId).appendTo($panelBody);
    displayComments($clickedPostObj.id);
    $panelBody.append($indexViewButton);
  };
  var displayIndexView = function(){
    $panelBody.empty();

    savedPosts.forEach(function(post){
      placePostOnPage(post);
    });
  };
  var displayComments = function(postId){
    $commentsEl = $("<div>").text("comments");

    $.ajax({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts/' + postId + "/comments",
      success: function(comments){
        comments.forEach(function(comment){
          $commentsEl.append($("<div>").append(comment.body));
        });
      }
    });

    $panelBody.append($commentsEl);
  };

  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    success: function(posts){
      posts.forEach(function(post){
        placePostOnPage(post);
      });

      savedPosts = posts;
    }
  });

  $(document).on("click","p",function(){
    displayShowView($(this));
  });

  $(document).on("click",".btn-primary",function(){
    displayIndexView();
  });
});
```
### exercise 2, part 10
```js
$(function() {
  var $panelTitle = $(".panel-title");
  var $panelBody = $(".panel-body");
  var savedPosts;
  var placePostOnPage = function(post){
    var $postElement = $("<p>").text(post.title);

    $postElement.data("postObject",post);
    $postElement.appendTo($panelBody);
  };
  var displayShowView = function(post){
    var $clickedPostObj = $(post).data("postObject");
    var $idEl = $("<div>").text("post id ");
    var $userIdEl = $("<div>").text("user id ");
    var $indexViewButton = $("<div>").addClass("btn btn-primary").text("index view");

    $panelBody.empty();
    $panelTitle.text($clickedPostObj.title);
    $idEl.append("<p>" + $clickedPostObj.id + "</p>").appendTo($panelBody);
    $panelBody.append("<p>" + $clickedPostObj.body + "</p>");
    $userIdEl.append("<p>" + $clickedPostObj.userId + "</p>").appendTo($panelBody);
    displayComments($clickedPostObj.id);
    $panelBody.append($indexViewButton);
  };
  var displayIndexView = function(){
    $panelBody.empty();

    savedPosts.forEach(function(post){
      placePostOnPage(post);
    });
  };
  var displayComments = function(postId){
    $commentsEl = $("<div>").text("comments");
    $commentEl = $("<div>");

    $.ajax({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts/' + postId + "/comments",
      success: function(comments){
        comments.forEach(function(comment){
          $commentEl.append("<p>" + comment.body + "</p>").append("<p>name: " + comment.name + "</p>").append("<p>email: " + comment.email + "</p>");
          $commentsEl.append($commentEl);
        });
      }
    });

    $panelBody.append($commentsEl);
  };

  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    success: function(posts){
      posts.forEach(function(post){
        placePostOnPage(post);
      });

      savedPosts = posts;
    }
  });

  $(document).on("click","p",function(){
    displayShowView($(this));
  });

  $(document).on("click",".btn-primary",function(){
    displayIndexView();
  });
});
```
