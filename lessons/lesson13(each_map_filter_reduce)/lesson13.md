# Lesson 13: each, map, filter, reduce

### Exercise 1:
Without looking at the solutions below (or as minimally as possible), type out 'each', 'map', 'filter', and 'reduce'.

### Exercise 2:
Repeat exercise 1 until you can do it without peeking ;)

## each
```javascript
function each(collection, callbackFunction) {

  var isArray = Array.isArray(collection);

  if (isArray) {
    for (var i = 0; i < collection.length; i++) {
      callbackFunction(collection[i]);
    }
  } else {
    for (var key in collection) {
      callbackFunction(collection[key]);
    }
  }

}
```

### Exercise 3

a. Use **your each** function to iterate over `myObj` and log each value but with an octothorpe before it:

```javascript
var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCM: 20.4
  exists: true
};
```

b. Use **your each** function to print all the values of `mySea` on a single line separated by a space.

```javascript
var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];
```

## map
```javascript
function map(collection, callbackFunction) {
  var results = [];

  each(collection, function(currentEl) {
    results.push(callbackFunction(currentEl));
  });

  return results;
}
```

### Exercise 4
a. Use **your map** function to create a new array containing the square root of each element in `numbersR`.

```javascript
var numbersR = [36, 81, 3481, 1681];
```

b. Use **your map** function to return an array with a 'Mr.', 'Ms.', or 'Mrs.' before the mouses name.

```javascript
var mice = [
  {name: "Longtail"},
  {name: "Sharpteeth"},
  {name: "Smellypee"},
  {name: "Twinkle Fingers"}
];
```

## filter
```javascript
function filter(collection, predicate) {
  var results = [];

  each(collection, function(currentEl) {
    if (predicate(currentEl)) {
      results.push(currentEl);
    }
  });

  return results;
}
```

### Exercise 5

a. Christoph and Gabriel are starting a club but the only people who are invited are people with names longer than 6 characters. Use **your filter** function to tell which `people` are allowed in their club.

```javascript
var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];
```

b. Tom and Neil got jealous that they couldn't get into Christoph and Gabriel's club so they decided to start their own club but only let people in whose names (in ascii numbers) are at most 400. 

Note: To translate a character to ascii: `"A".charCodeAt(0); // 65`

Note: To translate ascii number to character(s): `String.fromCharCode(97); // a`
`String.fromCharCode(74, 111, 121); // Joy`

Use your **your filter** function to tell which `people` are allowed in *their* club.

## reduce
```javascript
function reduce(collection, callbackFunction, initialValue) {
  var accumulator, index;

  // check if initialValue exists
  if (arguments.length >= 3) {
    accumulator = initialValue;
    index = 0;
  } else {
    accumulator = collection[0];
    index = 1;
  }

  while (index < collection.length) {
    accumulator = callbackFunction(accumulator, collection[index]);
    index++;
  }

  return accumulator;
}
```

a. Use **your reduce** function to find the factorial of a number.

b. Zoe and Jane want to conduct a test to see who at MakerPrep has the fastest laptop processor. Use **your reduce** function to figure out which student has the fastest processor, but in the end. Extra credit: Display it in GHz instead of Hz.

```javascript
var processorSpeedsInHZ = [
  2000000000, 2600000000, 2300000000, 2500000000, 2200000000, 10
];
```
