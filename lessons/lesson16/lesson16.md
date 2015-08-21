# Lesson 16: AJAX & JSON

Ajax is a means of interacting with servers behind the scenes using JavaScript without having to reload the page. This allows you to create complex interactive web apps that behave like desktop apps. One famous example is Gmail, which allows you to read, write, and receive emails, all without the need for refreshing the page.

Visit the following URL in your browser: `http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial`

What does the %20 represent in the [query string](//en.wikipedia.org/wiki/Query_string)?

**Hint:** Try: `encodeURI("San Francisco")` in your JS console, then google it.

Now try the following line of code in your console:

```javascript
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial',
  success: function(weather_data){
    console.log(weather_data)
  }
});
```

Open your Network tab and initiate the AJAX request again to see the network request and response in action.

![](resources/ajax.png)

The most common thing to do with data returned from an AJAX request is show it to the user. We can use jQuery to do this, but only in the callback function `to_be_run_on_server_response`. If we try to use the `weather_data` outside that function, we won't have the response from the server yet.

```javascript
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial',
  success: function(weather_data){
    $('#container').append(weather_data.main.temp)
  }
});

/* alternatively, we could define the callback function
 outside of the ajax call, like this: */
var to_be_run_on_server_response = function(weather_data){
  $('#container').append(weather_data.main.temp)
};

$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial',
  success: to_be_run_on_server_response;
});
```

**Exercise:** Create a simple weather page that shows the following data.

1.  current temperature
2.  today's high and low temperatures
3.  the description of current weather conditions
4.  current wind speed
5.  The time of sunrise and sunset. (hint: `new Date(weatherData.sys.sunrise * 1000)` )

Allow the user to click a button or link to show the weather in a different city **without reloading the page**. You will need to do the following:

1.  Create one or more links across the top of the page with names of alternate cities.
2.  Set up click handlers on the links that `event.preventDefault()` to prevent the browser from changing pages.
3.  Clear the current contents of `#container`.
4.  Tell the user that data is currently being fetched.
5.  When data returns from the weather server, display it on the page

**Extra Credit:**

1.  Refactor your code so there is only a single click handler that understands which city's data is being requested based on what element received the click event.
2.  Refactor your code so that all you need to do is add a new anchor tag to the page and all other functionality will work automatically.
3.  Refactor your code so that there exists an array of city names and all links and click events are generated dynamically on page load

Now let's try more complex interaction using a [RESTful API](//en.wikipedia.org/wiki/Representational_state_transfer), which is to say a set of endpoints, available over a network, that serve JSON data in a predictable format based on that resource's name. (e.g. a post with the id of 7 is available at the path `/posts/7`).

Here the server lives at `http://jsonplaceholder.typicode.com` and the path to the info we want is `/posts/1`

```javascript
$.ajax({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/posts/1',
  success: function(data) {
    console.log(data)
  }
});
```

Using [PlaceHolder JSON](http://jsonplaceholder.typicode.com/)

1.  Retrieve the post with id of 1 from the server, in the success callback, display it on the page.
2.  Retrieve the post with id of 2 from the server, in the success callback, display it on the page.
3.  Abstract the success callback out into a separate function called `place_post_on_page`.
4.  Using a for loop, use AJAX calls to fetch posts with ids from 1 to 10 and pass them to your `place_post_on_page` function to display them on the page. Do they always appear in the same order? Why is this?
5.  Now instead, use the `/posts` endpoint to get all posts and display only their titles on the page. This is often called the "index" view.
6.  When a visitor clicks on the title of a post, clear the content area and replace it with the full information for that post, displaying all of its properties. This is often called the "show" view.
7.  Allow the user to navigate back to the "index" view from the "show" view.
8.  Network requests are expensive and slow. Refactor your code such that once you've fetched data once, it's cached as a javascript object and accessible immediately when the user moves back and forth between 'show' and 'index' views.
9.  When showing an individual post, fetch all '/comments' and append the ones whose 'postId' property matches the post's id.
10.  Fetch information about the user who made the post. Display their name and email under the post.
11.  Create a simple login form where users can input their email address and password (let's say their password is their zip code, which we can also find on the user objects) such that visitors can see all of their own posts and comments after they log in.
12.  Create forms to allow users to create a new post or edit existing posts, pointing the forms to the appropriate RESTful endpoints using `$.post()`

### About JSON (a look under the hood)

Because we can only send strings of text (or binary data) over a network, not arrays and objects in memory, modern sites convert their data to JSON (JavaScript Object Notation) format, and your jQuery `$.ajax()` callback converts it back to arrays, objects and primitive values. Check out [this example](http://learnxinyminutes.com/docs/json/). Here is what is happening for you behind the scenes (try it out in your console with the [`products` array](students/products.js) from your e-commerce site):

```javascript
// run these one line at a time in your console.

// the server does this before sending information over the wire
var products_array_represented_as_json_string = JSON.stringify(products);
typeof products_array_represented_as_json_string;

// $.ajax() converts incoming JSON strings back into arrays, objects and primitive values before passing it into your callback function.
JSON.parse(products_array_represented_as_json_string);
```

</section>

</div>