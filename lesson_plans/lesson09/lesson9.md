# Lesson Plan 9: Objects

**Advice:** Overall this lesson went really well and student comprehension was high. I used the whiteboard a lot in my explanations.

**Note:** I would have preferred to teach functions first, then objects, then arrays. But I think the topic of objects takes longer to cover than functions, and the friday lesson is only 2 hours, so I taught objects first, then functions on Friday. If this isn't the case anymore when you teach the class, consider changing the order.

In JavaScript an Object is a collection of properties, and a property is simply a key-value pair (an association between a name and a value).

If you're coming from a python background, object in JavaScript fullfill the dual roles of classes and dictionaries.

So we've talked about key-value pairs before, but what does that really mean? A good example is a phone book. A phone book, like an object, is a collection of key-value pairs. If I want to know what [student names] phone number is, I just open up the phone book, look for [student name], thats the key, and then read the phone number associated with it, the value.

Cool, so we how do we create our collection of key-value pairs in JavaScript? The generalized syntax is [write on board]:

var object_name = {
  key: value,
  key: value,
  key: value
}

The collection of properties is contained by the curly brackets, and each key-value pair is written in the form: `key: value`. Key-value pairs are separated by commas, but the last pair doesn't need a terminating comma. Remember, we use colons to separate key-value pairs, NOT "=";

Let's try a real example!

## Instantiating an object

```javascript
var makerprep = {
  num_students: 9,
  instructor: 'Richie',
}
```

## Accessing Object Properties

To access object properties, we use bracket notation. This takes the general form of:

`object_name['property_name']`

So for example if I wanted to see the number of students in the MakerPrep object, I could simply type:

`makerprep['num_students']; // 9`

You can think of object properties as being similar to variables in that they can be read from (like we just did), but also written to. So, if a student decided they wanted to join makerprep today, I could do something like this:

```javascript
makerprep['num_students'] = 10;
makerprep['num_students']; // 10
``` 

You can use the same notation to add new properties to an object, like so:

```javascript
makerprep['paying_attention'] = true;

makerprep; //should print the object and it should now have a new property
```

Using this notation, I could also just initialize an empty object, and then assign properties after the fact, like so:


```javascript
var empty_object = {};

empty_object['not_so_empty_anymore'] = true;

empty_object; // object with new property

empty_object['not_so_empty_anymore']; // true
```

## bracket notation vs dot notation

We just learned about bracket notation, but JavaScript actually has two different ways of adding / modifying object properties. The first way, using brackets, we just covered. We can also use something called "dot notation". It takes the general format of:

`object_name.property_name;`

Lets try it in code:

```javascript
var makerprep = {
  num_student: 9,
  instructor: 'Richie'
}

makerprep['num_student']; // 9

makerprep.num_student; //9

makerprep.num_student = 10;

makerprep.num_student; // 10
```

So what is the difference between bracket notation and dot notation? Dot notation is a *shorthand* for for bracket notation, but its also more limited. Bracket notation allows us to dynamically access object properties using variables, but dot notation does not. Lets take a deeper look at that:

```javascript
var makerprep = {
  num_student: 9,
  instructor: 'Richie'
}

var accessor = 'num_student';

// Do I need quotations marks around accessor here? Why not?
makerprep[accessor]; // 9
makerprep[accessor] = 10;
makerprep[accessor]; // 10

var accessor = 'paying_attention';
makerprep[accessor] = true;
makerprep; // should output the original object, plus a new property called 'paying_attention' with a value of true

// Ok that's interesting, since we normally put a string inbetween the brackets, we can also use a variable that contains a string and it behaves the same way. Lets try that with dot notation.

var accessor = 'num_student';
makerprep.accessor; // undefined. Why? When we use dot notation, whatever we put after the dot is always interpreted as a string. No matter what. So makerprep.accessor was actually interpreted as makerprep['accessor'] which we haven't defined, so it returns undefined.

// what do we expect this to do?
makerprep.accessor = 15;

makerprep; // should print the object, plus a new property called 'accessor' with a value of 15
```
This concept is really important, so allow them to ask questions and really make sure they're grasping it. They'll get to solidify the concept with teh exercises though.

## Looping through objects

Imagine you guys wanted to loop through an object with a while loop. How would you do that? [let them think about it for a bit]. You guys are struggling a bit, thats ok, because you cant! If you don't know what the keys are beforehand, there is no way to use a while loop to programatically loop through an objects key-value pairs. Luckily, JavaScript provides a special way for us to do this: the "for in" loop.

The `for in` loop allows us to loop through all of an objects key-value pairs without knowing the names of the keys beforehand. In our phone book example, it would be a lot like just opening the phone book to the first page and starting to read "name : phone-number" cominbations starting at the beginning until we reached the end. Lets take a look at what that looks like in JavaScript. The general form is:

```javascript
for var key_name in object_name {
  //your code here

  //whatever you define as "key_name" will evaluate to a string in each iteration of the loop
}
```

Lets try a live example:

```javascript
var makerprep = {
  num_students : 9,
  instructor: 'Richie',
  paying_attention: true
}

// if we just want to print out all the keys in the makerprep object we could just do:

for (var key in makerprep) {
  console.log(key);
}
```

In each iteration of the loop, `key` will simply be a string that holds the name of the current key. So the first time this loop triggers, what will key be? "num_students" What about the second time? "instructor" And the third time? "paying_attention"

One things that important to keep in mind is that when you use the `for var key in object` syntax, you can call the `key` variable whatever you want. So I could do something like this:

```javascript
var types_of_pizza = {
  pepperroni: 'Delicious!',
  hawaiian: 'Also good!',
  vegetarian: 'Gross!'
}

for (var pizza_name in types_of_pizza) {
  console.log(pizza_name);
}
```

I cannot however, change the name of the object. The word that comes after `in` **has** to be the name of the variable references my object.

Cool, so we've managed to print out the keys. What if we want to print out the values? Well, we already learned how to lookup the values in objects based on the key name, we just need to apply that here

```javascript
for (var pizza_name in types_of_pizza) {
  console.log(types_of_pizza[pizza_name]);
}
``