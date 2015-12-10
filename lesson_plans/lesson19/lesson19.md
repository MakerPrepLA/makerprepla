# Lesson Plan 19: Backends and Firebase

So far, everything you guys have done has been front-end web development. If you think back to the AJAX and JSON lesson, we used HTML and CSS to render the user interface for an application, and we used JavaScript to make the interface respond dynamically to user input, as well as retrieve data from a remote server.

But where did that data come from? How did it get there? What exactly is a server? What if you want to allow users to submit their own data, process it, store it, and allow them to retrieve it later? Lets take another look at client-server architecture. [Preface this by saying that everything you're about to say is a simplification, but a valuable one to be aware of]

[On the whiteboard, draw a client box and a server box with arrows between them showing HTTP requests for static files]

This is the client-server architecture in its simplest form. A client (in this case) your browser or application (depening on how you want to think about it) makes a request to the server for some data. This could either be static assets like an HTML file / image or it could be dynamically generated data like JSON.

Lets take a closer look at the server piece of this model to see how that all works. [draw a db symbol inside / next to the server as well as a box that will represent the servers router and another box and just label it logic].

So lets say we want a user to be able to post a tweet. To do that, we need our server to expose a route that can be used to POST tweets to the server. What does that look like? If our website is called 'besttwitter.com' then we might have a rout ecalled 'besttwitter.com/tweet' that allows a POST method.

So when a user wants to submit a tweet they will POST to 'besttitter.com/tweet' and in the body of their POST request they will provide all the information that teh server needs. For example: the username of the user posting the tweet, as well as the message of their tweet. That all might be in JSON form and look like this:

{
  "username": "JSNinja",
  "tweet": "Hello world!"  
} 

The server will receive this data and then send it to the logic part of the server that knows how to handle posting tweets [draw an arrow from route to box label post tweet logic]. The post tweet logi box is gonna decide that this tweet needs to be stored in the database (if you're not familiar with what a database is, that could be an entire course on its own, but basically you can think of it as software for storing information on your computers file system in an organized manner and easily searchable). The logic box will notify the DB and tell it to store the tweet, then the DB will notify the logic box that the tweet was saved, and then the logic box will notify the user that their tweet has been processed. Cool, we've stored tweets!

Now we need to retrieve all tweets. We'll have another route called 'besttwitter.com/tweets' and this will accept requests of method type 'GET'. These requests will have an **empty** body, but they might have some kind of query param that specifies which data they want or how it should be structured. For example: 'besttwitter.com/tweets?sort=latest' will give us all tweets, ordered newest to oldest. This request will be sent to a different logic unit [draw get tweets logic box] which will determine what to do. This logic box will look at the query and decide that it needs to construct a proper DB query that will request all tweets in the DB, but ask the DB to sort them as well. This request will get sent to the DB, the DB will send the tweets to the logic box, and then that data will be sent to the client/application and rendered on the page. 

The architecture we just described is called a REST API. Generally speaking, a REST API is a defined interface that a programmer can use to interact with a backend server that exposes various routes and methods for each of those routes (like **GET** and **POST**)

So you can see how with only these two routes we could have many different users posting tweets to our application by **POSTing** to the 'tweet' route, and they could all view each others tweets by **GETting** from the 'tweets' route. This is the gist of the client-server architecture, and really modern web applications in general.

## Firebase

So what is Firebase? Firebase is a backend-as-a-service. That means Firebase takes care of all the messy server/database management stuff that we just went over, so all you have to do is write front-end client-side code, and Firebase provides a magical server/database combo with baked in authentication / authorization (basically user management) that just works. On top of that, everything in Firebase is inherently realtime. So, for example, in the twitter clone we just went over, if we wanted to know if any new tweets had been posted, we would have to frequently ask the server: "Hey, are there any new tweets yet?" over and over again until there were new  tweets. Firebase, on the otherhand, uses a technology called websockets to make everything realtime.

Basically with firebase, you can say something like "once a new tweet is added, let me know" and then you can attach a callback to that event that adds the tweet to the page (using JQuery or any other framework).

That being said, Firebase makes a lot more sense once you start using it, so lets jump into the tutorial together!

### FireBase Tutorial

#### Part 1

To use the FireBase server, we'll first need to get access to the FireBase JavaScript client library. We can include it in our HTML document the **exact** same way we include JQuery. The FireBase client library is just a bunch of pre-written JavaScript code that knows how to interact with FireBases's servers.

#### Part 2

We need to create a reference to our FireBase database. This syntax is FireBase specific, but if you pay close attention, its not that weird looking. Essentially what we're saying is: "Hey Firebase, when I ask you to store data or retrieve data, this is the server/database that I want you to use". That firebase url is equivalent to the name of your website / server in a traditional application. Remember how in our twitter clone, all our **GET** and **POST** requests started with 'bestwitter.com'? This is the same thing.

#### Part 3

Cool, we've told our FireBase client library where our server is. FireBase's URL patterns are slightly different than a traditional application. In FireBase, every piece of data has its own URL. Try clicking that link on the page!

#### Part 4

Oooh, there are a bunch of dollar signs lying around this code. What could that possibly mean? That's right, its JQUERY! Notice that they added the JQuery library to the top of the document.

Can anyonee take a guess at what this code will do? Ignore the FireBase part for a bit and just step through the JQUery.

[After you get some answers, walk through the code line-by-line and explain whats it doing]

Also just explain when you get to the part about inserting objects instead of just a string

Also as you do this part, have them refer to their database visualizer so they can see what happens when they run their code. Stop and have them test their code in the browser every once in awhile.

#### Part 5

Ok so what we've been doing is overwriting all the data everytime we send a message. But really what we want is to keep adding new message to a list or array each time we submit. FireBase supports this natively and we can use a method called push instead of set.

[Test in your browser and see whats its doing]

#### Part 6

Cool, we've learned the basics of sending data to the FireBase servers, lets take a look at how we can get data back!

```javascript
myDataRef.on('child_added', function(snapshot) {
  //We'll fill this in later.
});
```

Looks a lot like JQuery events huh? Its work essentially the same way, the only difference is the actualy events. What this line of code says is that when a child is added to the reference that our firebase client is pointing to, then let us know. The client will be notified in the form of a "snapshot". This is a type of object that has lots of methods we can use to manipulate it.

FireBase events have the same structure as JQuery events, the first parameter is event (described as a string) and the second parameter is a callback function that accepts one parameter. Whatever code we put inside that code block will be executed every time a child is added, or in otherwords, whenever someones posts a message.

Whats all this child_added nonsense? FireBase represents all its data in a tree-structure that you can mentally picture as being a lot like JSON. [Draw out a FireBase tree structure and explain the concept of children and such, its just like the DOM]

Cool, we've attached a callback to the child_added event, but that callback isn't doing anything yet. One thing to keep in mind about how FireBase works is the way the child_added event is handled. If you have 150 items in your database already and your application loads, it will call this callback on all 150 of the messages, and then wait for new ones and call the callback again. This is a really powerful feature that simplifies our code. With a traditional REST API you'd have to make an initial request to get whatever is currently in the database, and then continually poll to see if there is anything new, and on top of all that we'd have to include some kind of logic to distinguish between tweets/message we'd already seen vs. new ones. With Firebase's implementation, thats all taken care of automatically.

#### Part 7: Using Snapshots

I said earlier that all snapshots have methods attached to them. The most common one that we'll use is the .val(); This will return the data that the snapshot is actually storing, in our case, a message in object form.

The displayChatMessage does exactly what it says. Its just some JQuery magic to append the message to the page and keep it scrolled into view.

That's it, we're done! You each have your own running chat application. But thats not very fun, I'm gonna post my firebase url into slack and you should all replace your url with mine and then we should all end up in the same chat room. [Let them play around with that for a bit]

That's all I have for you today. Spend the rest of the lesson playing around with Firebase, reading the documentation, making your application look cooler or have more features, or following firebase tutorials. Let me know if you have any questions!