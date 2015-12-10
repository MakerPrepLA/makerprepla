# Lesson Plan 16: AJAX and JSON

**Advice:**

1. I found it instructive, in the last example, to ask the students why these two bits of code would not work:

```javascript
var weatherData = $.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial',
  success: function(weather_data){
    console.log(weather_data)
  }
});
// undefined
console.log(weather_data);
```

and

```javascript
var weather_data
$.ajax({
  method: 'GET',
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial',
  success: function(weather_data_from_server){
    weather_data = weather_data_from_server
  }
});
 // undefined
 console.log(weather_data);
```

2. For students that were struggling with the first exercise, I had them first try and console log all the information they were trying to put on the page, 

The last example is interesting because it logs undefined, but if you type weather_data into the console after the page has been open for a few seconds it works. Interesting thing to point out to them.

3. Url-encoding was last covered in week 1. Do a quick refresh on that and show them how they can change the data they get by changing the query params in the url they're working with.

4. I spent a lot of time suggesting to the students some more advanced ideas about how to solve the problems in the exercise (a lot of the exercises require the students to do some interesting stuff). I don't think this was necessarily a bad thing though, just be prepared to answer those questions and give the students some ideas on how to implement those things.

## Ajax

Last lesson we talked about asynchronous programming and events, and how that pattern can be used to create responsive UI's. Today, we're going to talk about how we can use that same pattern to write code that manages the latency inherent with any kind of network request. Like we talked about on Friday, computers are really really fast. But networks are not. If you do something like this (and this is just pseudocode):

```
var data = getDataFromServer();

console.log(data);
```

Data will always log undefined because there is simply no way that a network request can travel all the way to a remote server, get processed, and then receive a response before your computer finishes executing one line of code. We'll discuss how to solve this problem in a little bit, but first lets talk about Ajax.

How many have you heard the term Ajax before? How many of you know what it means? Ajax is actually a really simple concept. It is simply a way of requesting data from a server, without reloading the page, using JavaScript. This is one of the core technologies that makes single-page applications possible.

[Note I used the spotify web player as my single-page application example, so I recommend hiding any embarassing music beforehand. My demonstration also relies on the fact that your spotify account actually has music in it and such. If you don't have a spotify account, you could prepare one beforehand, or simply do the demo with some other single-page application of your choice. I Just chose to do spotify because I thought the students would think it was cool.]

Notice how when I click around, what happens? Or to be more accurate, what doesn't happen? The page never refreshes. Whats happening is that instead of reloading the page, when I click on something, an Ajax request is made behind the scenes to retrieve the informaton. That information is then used to update the page using some kind of front-end technology like JQuery, Angular, React, or backbone. In fact, if we type "$" into the console, we see that we don't get an error. This means that they're using JQuery on this page for something, it could be the ajax requests, or it could be the actual updating of the page. We could find out if we were so inclined, thats one of the cool things about JavaScript applications, the source code is sitting right there inside your browser, but we don't have time for reverse engineering spotifys front-end today.

So I mentioned that network request are happening behing the scenes, right? Luckily, you don't have to take my word for it. We can see them in the network tab on the chrome developer tools. Check this out: [navigate to your playlist section. If you have enough playlists, spotify will only load thumbnails for the ones that are scrolled into view so if you keep the network tab open and then scroll down your playlists, thumbnails for the playlists will start to appear on the page AND in the network tab. Also clear the network tab before scrolling so its more obvious whats going on]

Spotify does this because the spotify player already takes a good amount of time to load. By not loading those thumbnails until you need them, the page loads faster. This makes a lot of sense right? I'm one of those people who never deletes their emails. If google tried to send me all 15,000 of my emails everytime I opened the application, it would never load. Instead, they send me 50 at a time.

[Keep the network tab open and click around the website showing them how stuff keeps getting loaded in even though the page isn't refreshing. All ajax requests.]

Lets take a look at another source of data: [put this in your browser "http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial"]

Hmm what is that weird looking data? Lets try to clean it up a little: [Copy and paste the reponse into http://jsonlint.com/]

What does it look like? It looks like we're just declaring an object in JavaScript, but with lots of extra quotes and stuff. JSON is essentially just a string that represents a JavaScript object. JSON can be converted to JavaScript objects, and JavaScript objects can be converted to JSON. 

## JSON

JSON stands for JavaScript Object Notation. JSON mimics the structure of JavaScript objects, both syntactically and because it is a way of representing key-value pairs.

If you understand how to declare an object in JavaScript, you understand how to read/write JSON. Don't let the name fool you though, the JSON format is completely language independent and can be parsed and generated by any language. Why base it on JavaScript then? Because as I'm so fond of reminding ya'll, JavaScript is the language of the web :)

Whats so special about JSON? JSON has two properties that make it ideal for communicating data accross the internet:

1. It is easy for humans to read and write.
2. It is easy for machines to parse and generate.

Not every value we can store in a JavaScript object can be stored in JSON, but its close. JSON supports:

1. strings
2. numbers
3. objects
4. arrays
5. booleans
6. null


## JQuery and Ajax

Ok, so we've taken a look at what Ajax requests are, how they're used, and how JSON is a great way of transmitting information using JSON. The big question is: How do we use it? JQuery to the rescue! [Example code here](ajax_example.html)

There is a lot going on here. Lets break it down:

1. The method that we're invoking is called ajax(), that much is easy enough.
2. The ajax method accepts one argument: An object in which we pass all the options for the ajax request we're trying to make. This is a pattern you will see in a lot of javascript libraries. Instead of having a function that accepts 20 different possible parameters and have to be specified in a very specific order, you can simply pass an object with key-value pairs for the settings you'd like to define. [Create a toy function that accepts an object as a parameter and does something simple with the key-value pairs]
3. The method is set to `GET`. Remember a long time ago when we worked with forms and we talked about the difference between `GET` and `POST`?  We're only going to use `GET` in todays lesson, but the main distinction between the two is that `GET` is used for requesting information, and `POST` is used for sending data. Note that since Ajax can also handle `POST` requests, we can use it to handle form submissions without refreshing the page, but we're not gonna deal with that today.
4. A `url` option. This part is easy, we just tell JQuery which address to send the ajax request to.
5. Remember when we talked about how functions can be attached as values to object properties? This is a good example. The success function is actually a callback. Think about that for a moment and make sure it sinks in. We're used to seeing callbacks written out as an independent parameter, but this is no different. The function is still being passed as an argument to the function, even if its contained inside an object. The way this works is JQuery will execute the ajax request and then it will wait until it gets a response back from the server. Once it does, it will trigger whatever callback function is assigned to the success property (in this case, it will console.log the reponse from the server) [Write a toy version of the each function that accepts the array and callback inside of an object and show them how it behaves exactly the same as if they were independent parameters]

The callback is very important because the request we're making is asynchronous. By the time the response from the server gets back, our program will be in a completely different state. Essentially what we're doing is tying a callback (or a block of code / function) to an event, exactly like we did in the previous lesson, except now the event is getting data from a server, not a user clicking on a button, and instead of getting an event object as an argument to our callback, we get the data that the server sent us!

Once you run the code, open the network panel and show them the ajax request and response.

Cool, so we've been able to retrieve data from a server without refreshing the page. Combining this with the rest of the JQuery functionality we've been learning about allows us to create some pretty powerful single-page applications! [Add the following to your success callback]

```
$('body'.append('<h1>' + weather_data.name + '</h1>'));
```