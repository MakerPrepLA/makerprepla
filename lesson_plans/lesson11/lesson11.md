# Lessson Plan 11

**Advice:**

1. Students were a little confused about shift and unshift and why they're called that / how they work. Might be worth drawing an array in memory, showing how push and pop work, and then showing how shift and unshift work (change indexes of existing values)

2. Weakest students seem to have forgotten how to use functions, they only two hours to work on them Friday. Maybe would have been best to have them do more codeAcademy function stuff over weekend instead of read chapter 5 of eloquent javascript.

3. Students seemed to find this one really challenging. I encouraged the students who struggled the most to do functions and for loops in javascript code academy

4. Students really had trouble with the reverse array problem, maybe make that one of hte last problems so they can focus on learning to loop forward, and not backwards at the same time

5. Students also struggled with the biggestSmallest problem, as well as setting up functions. Might be worth providing skeleton code for those two problems so studenst don't struggle on them so much.

6. This lesson has way more exercises than even the most advanced students could get through. Set that expectation and tell them that they won't get through it all, but the exercises are available if they want to go back and get more practice!

## Arrays

In JavaScript, an array is JUST an object [write this on the board and underline it]. They're a special type of object that has the following properties:

1. All the keys are sequential integers
2. They have slightly different instantiation syntax to take advantage of the sequential keys
3. They have some properties and built-in functions that make working with the sequential keys easier. These functions are called methods. Generally speaking, a method is just a FUNCTION that is attached to an object.

Arrays are a specialized type of object, an abstraction. They behave exactly like objects, they just have some functions and properties that make working with their seqeuntial keys easier.

Demonstrate that arrays are just objects using this:

```javascript
typeof { a: 1 }; // 'object'
typeof [ 1, 2, 3 ]; // 'object' (?!?! not useful)

Array.isArray({ a: 1 }); // false
Array.isArray([ 1, 2, 3 ]); // true
```

Lets take a look at one array:

```javascript
var makerprep = ["<student name>", {name: "<student name>", age:<student age>}, <num students>, true, ["nested", "array"]]
```
Ok, so right off the bat. Whats different here than the way we used objects before? Insantiation syntax is a comma-separated, bracketed list, instead of a collection of key-value pairs. Why can we define an array this way? Because the keys are implied. They're just sequential integers.

[Draw an array on the board with a few values on it and then emphasize that array keys begin at **zero** not **one**]

These sequential keys are commonly refered to as **indexes**.

Ok, back to our makerprep array. How is it similar to the objects we learned about previously? You can assign it to a variable and you can put any other data type inside of it. In the array above, there is a string, an object, an integer, a boolean, and **a nested array*. There is no limit to this type of stuff, I could easily add an array, that contains an object, that contains an array, ad infinitum.

Alright, we've declared an array, but we still need to read and write to it right? Well, if its just an object, how do you guys think we can access its properties?

`makerprep[0]` vs `makerprep['0']` Do we need the quotation marks?

Turns out both of them work [demonstrate this]. If you stick an integer in there, JavaScript will automatically convert it to a string and lookup the appropriate key. Remember, the keys of objects are just strings, and arrays are not different! 

What might be a benefit of being able to put an integer in this?

Well, one benefit is that we can do arithmetic inside the brackets. For example:

```javascript
var i = 2;
makerprep[i + 1];
```

Which index will this print? Why does this work?

The expression `i + 1` becomes `2 + 1` at runtime, which evaluates to `3` which is then automatically converted to a string by JavaScript and index 3 (actually the 4th value!) is looked up.

What if I want to change the value of the second item in the array? Same as you would in an objecct

`makerprep[1] = "new value!"`

Notice that we used index 1 to access the second item in the array.

### Properties and Methods

We've looked at instantiating arrays, as well as reading and writing to them, but I mentioned earlier that they have special properties and methods (remember those are just functions attached to an object) that make working with their sequential keys easier. Lets take a look at a few of those.

Lets say you wanted to loop through all the indexes in an array. What piece of information about the array would you need? The length.

Luckily, JavaScript takes care of that for us. We can simply use the `.length` property. For example:

`makerprep.length`

Ok, now what if I wanted to add an item to the end of the array? You would have to do something like tihs:

`makerprep[makerprep.length] = "New value"`

Not only is that unwieldly, but there are some edge cases that it won't handle very well.

Instead, JavaScript gives us a better way: the `push()` method. It looks like this:

`makerprep.push("new value");` The push method takes one argument: The new value to add at the END of the array.

If we have a `push` method to add items at the end of the array, we're obviously gonna need a `pop` method to remove items from the end. If pop is an array method, without me telling you, what do you think the syntax might look like? Notice that since it always removed items from the end, it doesn't accept a parameter because its always gonna remove from the end, it doesn't matter what you pass as an argument.

`makerprep.pop()`

Anyone notice anything interesting about what that evaluated to in the repl? Pop evaluated to the item that was "popped" off the end of the array

What does that mean about the pop function? If you were writing the pop method, and you wanted it to evaluate to the item that gets removed from the array, how would you do that? Return the item that gets removed from the array at the end.

Naturally, this leads to this pattern:

```javascript
makerprep.push("I'm about to get popped!");
var poppedValue = makerprep.pop();
console.log(poppedValue);
```

Arrays also have two more methods called shift and unshift. They behave **exactly** like push and pop, except they operate on the front of the array instead of the beginning.

### Looping through arrays

We already hinted how we could loop through an array using a while loop. We would just use a counter variable like we normally do, and use `array.length` as the limit. It would look like this:

```javascript
var loopingArray = [1,2,3];
var counter = 0;
while (counter < loopingArray.length) {
  console.log(loopingArray[counter]);
  counter++;
}
```

This is such a common procedure, JavaScript gives us an alternative looping syntax: The for loop! The for loop has a very specific syntax [draw general form of it on board]:

`for ("initialize variables here"; "set conditional expression here"; "code to execute after each loop here")`

[Write out the while loop in the example above on the board, then translate it into a for loop on the board as a class. Ask the students where each individual piece of the while loop goes on the for loop, and draw arrows between the two so they can see the mapping]

Make sure to explain how they can use the Array[counter] syntax to reference each individual element in the array.

There are alot more Array methods availalble in JavaScript, I'm not gonna cover them all in lecture though, the exercises will walk you through them. Good luck!