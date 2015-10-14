## Exercise 2

### My First Javascript Enabled Web Page

```
<html>
  <head>
  </head>
  <body>

  <script>
    alert("this site is extremely awesome, and should be approached with caution.");

    var userName = prompt("what's your name?");
    alert("you are welcome here " + userName);
  </script>
  </body>
</html>
```

### Favorite Sports team

```
var favSportsTeam = prompt("what's your favorite sports team?");
console.log(favSportsTeam + "?  wow, they sure suck.")

```
## Exercise 3
```
var a = 1
var b = 2
var c = 3;
var d = a + b + c;
var b = a;
b = 100;

//a does not change.  javascript primitives are pass by value.
```

## Exercise 4
```
//current time is 4:44 PM
var hour = 16 * 60 * 60; //using military time
var minute = 48 * 60;

var midnight = 24 * 60 * 60;

console.log("time to midnight: " + (midnight - (hour + minute)));
```

## Exercise 5
```
var name = "gabriel",
    birthday = "november 15, 1992",
    occupation = "teacher",
    hometown = "liverpool, new york",
    favoriteFood = "bacon";
//etc, etc, until you have 10 variables

console.log("i'm " + name + "!  i was born on " + birthday + ".  i'm from " + hometown + ".  my favorite food is " + favoriteFood + ".");
```

## Exercise 6
```
<html>
  <head>
  </head>
  <body>
    <div class="target-div">
      <p>you should see me in the console.</p>
    </div>

  <script>
    var myDiv = document.querySelector(".target-div");

    console.log(myDiv.textContent);

    myDiv.textContent = "changed it!";
  </script>
  </body>
</html>
```
## Exercise 7
```
<html>
  <head>
  </head>
  <body>
    <h1></h1>

    <div id="primary"></div>

    <div class="important"></div>

    <div class="important">
      <p>i won't change.</p>
    </div>

  </body>
</html>
```
## Exercise 8
```
<html>
  <head>
  </head>
  <body>
    <div id="greeting"></div>
    <p>it is so nice to have a visitor from <span id="hometown"></span></p>

    <script>
      var greetingDiv = document.querySelector("#greeting");
      var visitor_name = prompt("what's your name?");
      var welcome_message = "it's good to see you, " + visitor_name;

      greetingDiv.textContent = welcome_message;

      var town = prompt("what's your hometown?");

      document.querySelector("#hometown").textContent = town;
    </script>
  </body>
</html>

```
## Exercise 9
```
<html>
  <head>
  </head>
  <body>
    <div id="source">
      hello
    </div>
    <div id="destination">
      goodbye
    </div>

    <div id="swap_1">i should be second</div>
    <div id="swap_2">i should be first</div>

    <script>
    var sourceDiv = document.querySelector("#source");
    document.querySelector("#destination").textContent = sourceDiv.textContent;
    var swap1Div = document.querySelector("#swap_1");
    var swap2Div = document.querySelector("#swap_2");
    var tempSwap = "i should be second";

    swap1Div.textContent = swap2Div.textContent;
    swap2Div.textContent = tempSwap;
    </script>
  </body>
</html>
```
## Exercise 10
```
<html>
  <head>
  </head>
  <body>
    The <span id="adj"></span> <span id="noun"></span> went to the <span id="adj2"></span> <span id="noun2"></span>.

    <script>
    var userAdj = prompt("give me an adjective.");
    var userNoun = prompt("give me an noun.");
    var userAdj2 = prompt("give me another adjective.");
    var userNoun2 = prompt("give me another noun.");

    var pageAdj = document.querySelector("#adj");
    var pageNoun = document.querySelector("#noun");
    var pageAdj2 = document.querySelector("#adj2");
    var pageNoun2 = document.querySelector("#noun2");

    pageAdj.textContent = userAdj;
    pageNoun.textContent = userNoun;
    pageAdj2.textContent = userAdj2;
    pageNoun2.textContent = userNoun2;
    </script>
  </body>
</html>


```
