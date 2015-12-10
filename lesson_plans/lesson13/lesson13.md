# Lesson Plan 13

**Advice**:

1. I told the students if they hadn't started this lesson yet and had been doing codeacademy, they should start working on it today.

We've been looping through arrays for a few lessons now. Usually, we do something like this:

```javascript
var languages = ["python", "javascript", "perl"];

for (var i = 0; i < languages.length; i++) {
  // do something with each value in the array here
  console.log(languages[i]);
}
```

This pattern is so common that JavaScript has a built-in array method called `forEach`. We can re-write the code above to look like this:

```javascript
languages.forEach(function(item) {
  console.log(item);
});
```

What just happened right there? forEach is a method that accepts a single argument: a function. The function that you pass it accepts one argument as well, an individual item in the array. Inside the body of the function, you can interact with the item parameter as if it were a direct reference to an individual item in the array (in fact it is).

What if we wanted to write a function that does the same thing for each does? Lets give that a shot.

```javascript
var each = function()
```

How many parameters is each gonna need, and what will they be? Since each is not a method, we need two parameters. One will be the actual array that we pass it, the second will be the **callback** function.

```javascript
var each = function(array, callback) {
  
};
```

Cool. So what does each do, in words? It iterates through an array right? Lets start with that. How do we iterate through the array in each?

```javascript
var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {

  }
}
```

Cool, now we have a loop that goes through the array, but do we want to do inside the loop on each iteration? Lets take another look at how we used forEach:

```javascript
languages.forEach(function(item) {
  console.log(item);
});
```

So the callback function can accept one argument that is the value of an item in an array right? That means that inside OUR implement of each, inside of the for loop, we need to pass each individual value in the array TO the callback function. How do we do that?

```javascript
var each = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}
```

look at the relationship between `function(item)` and `callback(array[i])`. When you define an anonymous function to pass to each, you create a function with the assumption that the each function will pass it one argument each time its invoked. That one argument will represent a value from the array. When we **implement** each on our own, we see that when the callback is invoked, its passed an argument that is a value in the array. By doing so, we fullfill the anonymous functions expectation that it will receive one argument to act upon.

So we've implement our own version of forEach, but each is a non-destructive function. That means it will not modify the array it works on. For example, if we do something like this using our new function:

```javascript
var numbers = [1,2,3];
//note I can call that parameter anything I want
each(numbers, function(number) {
  number = number + 1;
});
console.log(numbers);
``` 

We see that by the end, the numbers array hasn't been changed at all. If we really wanted to modify the original array, we could do something like this:

```javascript
var numbers = [1,2,3];
var new_numbers = [];
each(numbers, function(number) {
    new_numbers.push(number + 1);
});
console.log('old numbers: ', numbers);
console.log('new numbers: ', new_numbers);
```

Turns out, there is a built in way of doing this. Its called map!

```javascript
var numbers = [1,2,3];
var new_numbers = numbers.map(function(item) {
  return item + 1; 
});
console.log('old numbers: ', numbers);
console.log('new numbers: ', new_numbers);
```

What map does is, it loops through an array, and returns a **new** array that is a projection of the old array. The project is managed via the mapping function that you provide. In the above example, my mapping function was `return item + 1` . This tells map to give me a new array, of equal size, that contains all the old values from the array, except add 1 to all of them. Why we need the return keyword will become more clear in a few minutes.

To make sure everyone is on the same page, what would happen if I did this?

```javascript
var numbers = [1,2,3];
var new_numbers = numbers.map(function(item) {
  return item + 1; 
});
var newer_numbers = new_numbers.map(function(item) {
  return item + 1;
});
console.log('old numbers: ', numbers);
console.log('new numbers: ', new_numbers);
console.log('newer numbers: ', newer_numbers);
```

Alright, so we looked at how each functions worked, then we implemented it. Now we've looked at the map function, what do you think is next? **Implement it!**

```javascript
var map = function()
```

What parameters will our map function need? Hopefully they realize its the same as the each function

```javascript
var map = function(array, callback) {
  
}
```

Cool, so what does map return? A new array of mapped values

If we already know what map returns, we can just go ahead and incorporate that now.

```javascript
var map = function(array, callback) {
var mapped_array = [];

return mapped_array;
}
```

Ok, so now that we've defined that we're going to return an array, all that is left is to use the callback function to map all the values in the input array to the new array. Whats the first thing we need to do that? I don't know if anyone will think to use the each function already, but lets avoid that for now.

We need a loop right?

```javascript
var map = function(array, callback) {
var mapped_array = [];

for (var i = 0; i < array.length; i++) {
}

return mapped_array;
}
```

Ok so we've got our loop, but what are we going to do inside our loop? Remember we're trying to map all of the values in the input array into new values (via the anonymous function) in the mapped_array.

```javascript
var map = function(array, callback) {
var mapped_array = [];

for (var i = 0; i < array.length; i++) {
  mapped_array.push(callback(array[i]));
}

return mapped_array;
}
```

What we're doing here is calling the callback function on each item in the array. This will return a new **MAPPED** value. We then take that value and pushed it into the mapped_array. Once we're done with the loop, mapped_array will contain all the old values from the input, but mapped to their new values.

Can anyone tell me now why it was important that our anonymous function include a return statement?

Ok cool, we implemented map. But our code is a little redundant. We already wrote an each function, lets try to refactor our code so that map uses each internally. Any ideas how we could do that?

Ask them questions and slowly walk through the process of refactoring the for loop to use each like below:
```javascript
var map = function(array, callback) {
var mapped_array = [];

each(array, function(item) {
  mapped_array.push(callback(item));
});

return mapped_array;
}
```

Once you've refactored, prove to them that it works, then step through the code line-by-line and explain whats going on.

Would this work? Why not? [I'm not sure I'll ask this question, gonna play it by ear.]

```javascript
var map = function(array, callback) {
var mapped_array = [];

each(array, callback);

return mapped_array;
}
```