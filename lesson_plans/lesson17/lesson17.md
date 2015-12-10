# Lesson Plan 17: Object-Oriented JavaScript

Objected-Oriented programming is the counter-example to functional programming. In many ways, they are complete opposites.

In a functional programming style, functions are prioritized and written in such a way as to avoid state. Any function, given a specific input, should always produce the same output. Regardless of the state of the program.

Objected-Oriented programming, on the other hand, is about structuring software around Objects instead of functions. It relies heavily on the concept of 'state'. The same exact function may produce radically different results depending on when its called and what the state of the program is when that happens.

Object-oriented programming is not better than functional programming, and functional programming is not better than object-oriented programming (although you'll find plenty of people who will tell you otherwise). They are different paradigms, suited to solving different problems. A great engineer always picks the right tool for the job.

For example, due to the asynchronous nature of the web (it can often take a long time for data to traverse the internet and get from one machine to the next), functional programming can be extremely useful due to the ability to register callbacks for when data is received from a remote server. We saw that in ajax lesson yesterday.

On the other hand, object-oriented programming could be really useful if you were trying to make a videogame (which are often heavily state dependent).

## Objects

Before we dive into object-oriented programming, I want to do a quick refresher on objects. [live coding]:

1. Lets make an object called makerprep. How do we create an empty object?
2. Actually, on the other hand, I want to initialize that object with some data. Lets say we wanted to have 'tuesday', wednesday', 'thursday', and 'friday' properties that contains descriptions of what we're going to learn on each of those days respectively. How do we do that?
3. Cool, we've initialized our object. How do we access properties on it? What if we want to access the tuesday property? What if I wanted to change the friday property?
4. Woops, it looks like we forgot to list all the students in the class now. How can I added a another property to the object, AFTER it has already been declared? Lets make that property an array that contains all your names.
5. Ok, now we have an array **inside** our object. How do we reference individual value inside that array? What if I wanted to loop through all the values inside that array?
6. Lets put an object inside our object. How do I create a new property called 'nicknames' and put an object inside it with key-value pairs for student names and their nicknames (I gave the students nicknames like javascript guru, javascript ninja, functional frank, makersquare malek etc etc)
7. How do I lookup a students nickname?

## Calling Context

Cool, lets talk about calling context. We got into this a little bit in our events lesson, but I know a lot of you have been wanting more information. Lets zoom out and talk at a 50,000 foot level for a minute.

JavaScript is an object-oriented language. Every function in JavaScript is actually a method (remember, that just means a function attached to an object). Inside of every function, we have access to the keyword `this`. `this` is always a reference to the object that the current function belongs to. This is a bit of an oversimplification, but the simplest definition of `this` that works **most** of the time, is that its simply the object on the lefthand side of the "." in dot notation.

Lets take a look:

```javascript
var freestanding_function = function() {
  console.log(this);
}

freestanding_function();
```

It logged the window! In JavaScript, if you write a freestanding function, its actually a method on the window object. I can prove it by doing this:

`window.freestanding_function();`

In fact, any variable you declare in the global space is actually just a property on the window object.

```javascript
var message = "Hello Class!";

window.message;
```

Where things really to start get interesting though is when we attached methods to our own objects. Lets go back to our makerprep object. Remember, we had an object that had the students nicknames inside of out. What if we wanted to add a method to that object that would print all the students nicknames?

1. We need to add a function as a property to our object. How do we do that?
2. Cool, so we're declaring our method now, how are we going to loop through all the properties in the nicknames object? One way would be to do this:

```javascript
makerprep.printNicknames = function() {
  for (var name in makerprep.nicknames) {
    console.log(name, ':', makerprep.nicknames[name]);
  }
}
```

The problem is that this method relies on directly referencing the object by name. What if the object name changes, or if we want to use the same exact method for 100 different objects?

This is where the keyword `this` comes in. We can re-write the function above to look like this:

```javascript
makerprep.printNicknames = function() {
  for (var name in this.nicknames) {
    console.log(name, ':', this.nicknames[name]);
  }
}
```

Now that we're using the keyword this, this method is much more versatile and could be applied to any object with a property called nicknames. In fact, we could do something like this:

```javascript
var printProperties = function(propertyName) {
  for (var key in this[propertyName]) {
    console.log(name, ':', this[propertyName][key]);
  }
}

makerprep.printProperties = printProperties;
makerprep.printProperties('nickname');
```

Now the function we've made is much more versatile and I've applied it to the makerprep function, but I could apply it to any other function as well!

## Decorator pattern

The are two common object-oriented patterns that you will see frequently. The first is the decorator pattern: A decorator function is simply a function that adds functionality to whatever object you pass it. For example:

```javascript
var add_shout = function(object){
  object.shout = function() {
    console.log("I LOVE SHOUTING!!!!!!!");
  }
}

var quiet_object = {};

// doesn't work
quiet_object.shout();

add_shout(quiet_object);

// works
quiet_object.shout();
```

An importantant thing to notice here is that the decorator pattern is **destructive**. It alters the original input. It doesn't matter what the function returns, and in fact I don't need to capture the return value, because it modifies the actual object you pass it. It doesn't make a copy.

## Factory pattern

Another really common pattern that you'll see is the factory pattern. This is similar to a "constructor" function in other languages. The job of the constructor/factory function is simple: Create new objects.

```javascript
var pizza_oven = function(toppings) {
  // new object each time this function is called
  var pizza = {};

  pizza.delicious = true;

  for (var i = 0; i < toppings.length; i++) {
    pizza[toppings[i]] = true
  }

  //also can show them how to swap out pizza for this
  pizza.leaveOut = function() {
    pizza.delicious = false;
  }

  return pizza;
}

// what will this do?
var pepperoni_pizza = pizza_factory(['pepperoni']);

//what will this do?
var hawaiian_pizza = pizza_factory(['ham', 'pineapples']);

console.log(pepperoni_pizza);
console.log(hawaiian_pizza);

pepperoni_pizza.leaveOut();

// what will be different? Will it affect both pizzas, or only one?
console.log(pepperoni_pizza);
console.log(hawaiian_pizza);
``` 

Everytime I call this pizza_oven function, it creates a new pizza object. It literally makes pizza objects.