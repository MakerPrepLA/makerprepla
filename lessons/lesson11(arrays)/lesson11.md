# Lesson 11: Arrays

An [array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) is a high-level, list-like object, and is a data type that is defined at the language-level by JavaScript. In JavaScript, arrays are actually special implementations of the traditional objects we've already learned about.

See for yourself:

```javascript
typeof { a: 1 }; // 'object'
typeof [ 1, 2, 3 ]; // 'object' (?!?! not useful)

Array.isArray({ a: 1 }); // false
Array.isArray([ 1, 2, 3 ]); // true
```

One way to represent arrays is as sequential blocks of identical size in memory:

`var numbers = [99, -5, 82, 65, 39 120, 431, 98, 17, 42]`

![an array](resources/array.jpg)

**Type** out all of the following examples on your own:

An array of numbers:

```javascript
var nums = [5, 10, 20, 50, 100, 250];

nums[0];
nums[1];
nums[5];
nums[6];

var index = 4;
nums[index];

var len = nums.length;
nums[len];
nums[len - 1];
```

An array of strings:

```javascript
var words = ["Hello", "and", "welcome", "to", "my", "webpage!"];

words[0];
words[1];
words[5];
words[6];

var the_number_three = 3;
words[the_number_three];

var len = words.length;
words[len];
words[len - 1];
```

Arrays can hold all kinds of stuff:

```javascript
var all_kinds_of_stuff = ["Hello", 3, undefined, true, ["woah", "dude", "an array", "inside an array"], null];

all_kinds_of_stuff[0];
all_kinds_of_stuff[1];
all_kinds_of_stuff[5];
all_kinds_of_stuff[6];

var another_array = all_kinds_of_stuff[4];

// ?
another_array[0];

// ?
all_kinds_of_stuff[4][1];
```

Okay, now we've seen some arrays, let's create a few of our own.

```javascript
// creating a new instance of an array is called instantiation
var arr = []

// we can use bracket access in conjunction w/ the assignment operator
// to store a new value at that index
arr[0] = "0 is the new 1"
arr[1] = 45
arr[2] = null
arr[3] = true

arr[1] = "overwrite 45, just forget about that one, okay?"
```

#### Exercise 1:

1.  Instantiate a new array and save it to a variable `recipe`
2.  Use bracket notation to add the steps to create your favorite meal. Each index in the array should be a step.
3.  Access the first step of your recipe using bracket notation.
4.  Create variable called `lastStep` and assign to it a number which represents the index of the last item of your array
5.  Access the last step of your recipe using the `lastStep` variable. **Hint:** It should look something like this: `recipe[lastStep]`

## Array properties and methods

Arrays have associated with them some properties (just like Objects!), such as `.length`, and methods(these are simply functions that are attached to objects), like [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push), to help us use our collections more effectively.

```javascript
var arr = ['stuff', 'more stuff', 'even more stuff'];

arr.length;

arr.push("More on the end!!!");
var lastItem = arr.pop();

arr.unshift("More at the beginning!!");
var firstItem = arr.shift();
```

#### Exercise 2:

1.  Instantiate a new array and save it to a variable `bucketList`
2.  Use bracket notation with the assignment operator to add two life goals to your array.
3.  `.push()` two goals onto the end of your list.
4.  [.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift) two goals onto the beginning.
5.  What is the array's length at this point?
6.  [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop) off one goal and save it to a variable `dyingWish`
7.  [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift) off one goal and save it to a variable `doItNow`
8.  What is the array's length at this point?


## Looping Through Arrays
Often we want to consider every element in the array in turn.

```javascript
var i = 0;

while (i < words.length) {
  console.log(words[i]);
  i++;
}
```

#### Exercise 3:

1.  Use a while loop to console log each item in your recipe and bucket list.
2.  Refactor your code such that the while loop lives inside a function called `logArray` that takes an array as an input (argument)

#### Exercise 4:

1.  Write a function `reverser` which will take an array of values as an input and return a new array of the same values in reverse order.
2.  Inside `reverser` instantiate a new array `reversedArray`, use a `for` loop to populate it, then return it from the function.

#### Exercise 5:

Write a function `biggestSmallest` that takes an array of numbers as an input, and using a `for` loop, returns an array containing the smallest number in the zeroth position and the largest number in the first position.

For example, given the input `[1,-10,33,16,4,25,106]`, `biggestSmallest` should return `[-10,106]`

## Pass by Reference and More Array Methods

Arrays are pass by reference, this means when you do the following, you get two arrays pointing at the same object in memory. This can lead to the unexpected results

```javascript
var arr2 = arr
arr2.pop() // both arr and arr2 are changed!!

var arr3 = arr.slice() // clones the array
arr3.pop() // only arr3 is changed
```

#### Exercise 6:

Create a function arrayDuplicator, that takes an array as an input, and returns a copy as the output.

```javascript
var arrayDuplicator = function(inputArray) {
var outputArray = [];

// your code here

return outputArray;
};
```

You can tell if your arrayDuplicator works with the following piece of code:

```javascript
var original = [1, 2, 3, 4];
var duplicated = arrayDuplicator(original);

duplicated.pop();
duplicated.pop();
duplicated.pop();

console.log(original, duplicated); // should not be the same!
```

### Array.concat()

[.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) is short for concatenate. It smooshes two arrays together.

```javascript
var friends = ['ada', 'will', 'bianca', 'abe'];
var enemies = ['john', 'alice'];

var frenemies = friends.concat(enemies);

console.log(frenemies);
console.log(friends, enemies;) // does not change original arrays!
```

**Aside:** If concatenate does not modify the original arrays, what must it be doing internally? Functions that do **not** alter their inputs are called **non-destructive**, meaning they don't destroy or alter their inputs.

#### Exercise 7:

Write a function `arrayCombiner` that takes two arrays as inputs and returns the two of them smooshed together as an output

```javascript
var arrayCombiner = function(array1, array2) {}

var combinedArray = arrayCombiner([1, 2, 3], [4, 5, 6])
/* should print one array that contains all the values from array1
   and array 2 smooshed together */
console.log(combinedArray)
```

### Array.splice()

[.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) destructively removes a number of elements from an array starting at a particular index.

**Note:** The fact that `.splice()` is a **destructive** function means that it **alters** the array that it works on.

```javascript
var frenemies = ['ada', 'will', 'bianca', 'abe', 'john', 'alice'];
var startingAtIndex = 3;
var numberToRemove = 2;

// Notice that like pop() and unshift(), splices returns the values it removes
var removedElements = frenemies.splice(startingAtIndex, numberToRemove);

console.log("We took out ", removedElements);
console.log("The remaining array ", frenemies);
```

#### Exercise 8:

Write a function `arrayPlucker` that takes an array and an index as inputs and destructively removes the single value at that index. **Return that value.**

```javascript
var arrayPlucker = function(array1, indexToRemove) {
  var removedValue;
  // your code here
  return removedValue;
}
```
Make sure your arrayPlucker function works properly with the following example:

```javascript
var daysOfSchool = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var dayOff = arrayPlucker(daysOfSchool, 4);

console.log("I'll go to school on: ", daysOfSchool);
console.log("but I'm taking vacation on ", dayOff);
```
#### Exercise 9: Magic 8-ball

```javascript
// define array called words and fill it with vague responses

// prompt the user to ask a question

// generates a random index number between 0 and the length of the array
var rand = Math.floor( Math.random() * words.length)

// alert the value in the words array that corresponds to the randomly generated index
```

1.  Create a Magic 8-ball that prompts the user to ask a question.
2.  When the user enters a request, randomly select a reply from an array of appropriately vague stock phrases, and alert it to the user

#### Exercise 10: More exercises

1.  Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array.
2.  Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.
3.  Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.
4.  Write a function called `sumArray` that takes an array of numbers and returns the sum of all of those numbers added together.
5.  Write a function called `arrayMath` that takes an array of numbers and a string with a mathmatical operator and applies that operator to all the numbers together. `arrayMath([4,2,3], "*")` should return `24`
6.  Write a `zipper` function that combines two arrays in order, alternating between arrays as you progress. `zipper([1,2,3],['a','b','c'])` should return `[1, 'a', 2, 'b', 3, 'c']`. Make sure to handle cases where one array is longer than the other.
7.  Write a function that merges two sorted lists into a new list. `mergeSorted([1, 2, 5, 9], [3, 7, 19])` should return `[1, 2, 3, 5, 7, 9, 19]`
8. Create a function `shuffler` that takes an array as input and returns a new array of the same elements, but in a random order. **How will you keep track of which elements have already been put into the new array? An object map come in handy...**

## [Optional Content] Advanced Concepts in Arrays

### More pass by Reference

Read these code snippets, make a prediction about what they will do, and then go test them out yourself. **Type them out, don't copy and paste**.

```javascript
var arr = [52, 27,31];

// pass by reference
arr2 = arr;
arr2.push(44);
arr[0] = "new value";

// why?
console.log(arr, arr2);

// what does slice do?
arr2 = arr.slice();
arr2.push(44);
arr[0] = "new value";

// why?
console.log(arr, arr2);

var arr = [ ['hello', 'and', 'hi'], [2,3,4] ];
arr2 = arr.slice();
arr2[1].push(44);
arr[0] = "new value";

// ?
console.log(arr, arr2);
```

### Functions Inside of Arrays

```javascript
var arrayOfFunctions = [ function(){ console.log('hi') }, function(){ console.log('bye') } ];

arrayOfFunctions.push(function(val1){ console.log(val1 * 2) });

var adder = function(val1, val2){ console.log(val1 + val2) };
arrayOfFunctions[3] = adder;

for (var i = 0; i < arrayOfFunctions.length; i++) {
    arrayOfFunctions[i]();
}
arrayOfFunctions.forEach(function(func){
  func(3,4);
})
```

### Combining Arrays and "Traditional" Objects

As demonstrated earlier, arrays are just objects:

```javascript
typeof { a: 1 }; // 'object'
typeof [ 1, 2, 3 ]; // 'object' (?!?! not useful)

Array.isArray({ a: 1 }); // false
Array.isArray([ 1, 2, 3 ]); // true
```

#### Exercise 11:

With that in mind, create a function that takes any value and tells you what type it is. **Make sure it handles arrays correctly!**

You can test your function using the following code snippet:

```javascript
var type_tester = function(input) {
    console.log(input);
}

type_tester(3); // number
type_tester('hello'); // string
type_test(true); // boolean
type_tester({}); // object
type_tester([]); // array
```

#### Exercise 12:

Arrays and objects are often used in combination

```javascript
var them_dogs = [{
    name: 'Henry',
    age: 0.5,
    breed: 'Aussie',
    food: 'kibble',
    toys: ['tennis ball', 'chew toy'],
    picture: 'http://rubyriverminiaustralianshepherds.com/wp-content/uploads/aussie-puppy-for-sale-940x412.jpg'
}, {
    name: 'Tilly',
    age: 5,
    breed: 'Mutt',
    food: 'kibble',
    toys: ['bone', 'kong', 'squeaky toy'],
    picture: 'http://www.dogchannel.com/images/zones/top_promo/excited-mixed-breed.jpg'
}, {
    name: 'Apollo',
    age: 10,
    breed: 'Labrador',
    food: 'absolutely anything',
    toys: ['old sock', 'other old sock', 'more old socks'],
    picture: 'http://media.cmgdigital.com/shared/img/photos/2014/08/01/5a/66/LadyLabrador.jpg'
}];
```

1.  Iterate over `them_dogs` and log each dog's name
2.  Iterate over `them_dogs` and add all the toys to a new `all_toys` array
3.  Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.

### String Manipulation

Strings are secretly collections of letters stored at sequential memory addresses (just like Arrays!)

![a string](resources/string_memory.jpg)

We can access each letter using square brackets and a zero-indexed number. **Try typing out each of the following for yourself, using your own values and variable names:**

```javascript
var word = "Hello";

word[0];
word[1];
word[4];
word[5];

var index = 3;
word[index];

// strings have a length property
var len = word.length;
word[len];
word[len - 1];
```

It works for larger strings too.

```javascript
var greeting = "Hello and welcome to my webpage!"

greeting[0];
greeting[1];
greeting[28];
greeting[29];

var index = 2;
greeting[index];

var len = greeting.length;
greeting[len];
greeting[len - 1];
```

#### Exercise 13:

`split()` and `join()` can be used to split strings into arrays, and join arrays into strings respectively. Each of them takes one argument: a string that acts as the separator by which strings are separated, in the case of `.split()`, or a string that acts as the "joiner" when combining array elements into a string.

Try out the following code snippet to get a feeling for how they work, and maybe take a look at their documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join):

```javascript
var str = "one two three"
var arr = str.split(' ')
var new_str = arr.join(' and a ')
```

```javascript
// now our turn...
var scrambledPoem = "roses red are bacon crispy i bacon love and is blue violets are"
```

1.  use `.split(' ')` on `scrambledPoem` and save the result as an array `scrambledArray`
2.  Create a new array `unscrambledArray`
3.  While the length of `scrambledArray` is greater than 0, remove the FIRST and LAST value and add them to `unscrambledArray`.
4.  Turn the values in `unscrambledPoem` into a string by using the array's native `.join()` method.

#### Exercise 14:

Read the documentation for the following string methods, and try to figure out how to use them. **Hint:** A good way to find documentation for JavaScript is to type whatever you're looking for in google + "MDN"

1. str.indexOf
2. str.search
3. str.slice (look familiar?)
4. str.subString
5. str.replace
6. str.concat
7. str.toLowerCase
8. str.toUpperCase

## Nightmare Mode

Copy and paste (**just this one time!**) the code below into an environment that you can run JavaScript in. The code below creates a new class of object called `ArrayLike` that inherits from Array (don't worry if you don't understand this). The only difference is that the following methods have been overwritten:

1. indexOf
2. push
3. pop
4. unshift
5. shift
6. concat

Your job is to use the area defined below for your own code to implement each of those methods. Once you have implemented a method, write some code at the end of the file which creates a new ArrayLike using the following syntax (this is called pseudoclassical instantiation. You can look it up now if you want, or just take it as a given):

```javascript
var name_of_array_like = new ArrayLike()
```

and then call the methods that you've written on it and see if it works as intended.

```javascript
/*creates an array-like object (subclass of array) that is missing the methods that
the user needs to implement */
var ArrayLike = function() {
  Array.call(this);
}
ArrayLike.prototype = Object.create(Array.prototype);
ArrayLike.prototype.indexOf = undefined;
ArrayLike.prototype.push = undefined;
ArrayLike.prototype.pop = undefined;
ArrayLike.prototype.unshift = undefined;
ArrayLike.prototype.shift = undefined;
ArrayLike.prototype.concat = undefined;

/*Pay special attention to what each function is supposed to return
as well as what the .length property of each array should be*/

ArrayLike.prototype.indexOf = function(arr, item) {
  // your code here
};

ArrayLike.prototype.push = function(arr,item) {
  // your code here
};

ArrayLike.prototype.pop = function(arr) {
  // your code here
};

ArrayLike.prototype.unshift = function(arr,item) {
  // your code here
};

ArrayLike.prototype.shift = function(arr) {
  // your code here
};

ArrayLike.prototype.concat = function(arr1, arr2) {
  // your code here
}
```
