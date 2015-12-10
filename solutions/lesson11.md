#### Exercise 1:
```javascript
// 1.  Instantiate a new array and save it to a variable `recipe`
var recipe = [];
// 2.  Use bracket notation to add the steps to create your favorite meal. Each index in the array should be a step.
recipe[0] = "take out a bowl, spoon, Lucky Charms, and whole milk";
recipe[1] = "pour Lucky Charms into bowl";
recipe[2] = "pour whole milk into bowl";
recipe[3] = "use the spoon to place Lucky Charms into your mouth";

// 3.  Access the first step of your recipe using bracket notation.
console.log(recipe[0]);

// 4.  Create variable called `lastStep` and assign to it a number which represents the index of the last item of your array
var lastStep = recipe.length-1;

// 5.  Access the last step of your recipe using the `lastStep` variable. **Hint:** It should look something like this: `recipe[lastStep]`
console.log(recipe[lastStep]);
```

#### Exercise 2:
```javascript
// 1.  Instantiate a new array and save it to a variable `bucketList`
var bucketList = [];

// 2.  Use bracket notation with the assignment operator to add two life goals to your array.
bucketList[0] = "master JavaScript";
bucketList[1] = "get accepted into MakerSquare";

// 3.  .push() two goals onto the end of your list.
bucketList.push("get a 100k job");
bucketList.push("find someone who will marry me");

// 4.  .unshift() two goals onto the beginning.
bucketList.unshift("master HTML and CSS");
bucketList.unshift("stop crying myself to sleep");

// 5.  What is the array's length at this point?
console.log(bucketList.length); // 6

// 6.  .pop() off one goal and save it to a variable `dyingWish`
var dyingWish = bucketList.pop();

// 7.  .shift() off one goal and save it to a variable `doItNow`
var doItNow = bucketList.shift();

// 8.  What is the array's length at this point?
console.log(bucketList.length); // 4
```

#### Exercise 3:
```JavaScript
// 1.  Use a while loop to console log each item in your recipe and bucket list.
var recipe = [];
recipe[0] = "take out a bowl, spoon, Lucky Charms, and whole milk";
recipe[1] = "pour Lucky Charms into bowl";
recipe[2] = "pour whole milk into bowl";
recipe[3] = "use the spoon to place Lucky Charms into your mouth";

var bucketList = [];
bucketList[0] = "master JavaScript";
bucketList[1] = "get accepted into MakerSquare";
bucketList.push("get a 100k job");
bucketList.push("find someone who will marry me");
bucketList.unshift("master HTML and CSS");
bucketList.unshift("stop crying myself to sleep");

// print recipe array
var i = 0;
while (i < recipe.length) {
  console.log(recipe[i]);
  i++;
}

// print bucketList array
i = 0;
while (i < bucketList.length) {
  console.log(bucketList[i]);
  i++;
}


// 2.  Refactor your code such that the while loop lives inside a function called `logArray` that takes an array as an input (argument)
function logArray(inputArray) {
  var i = 0;
  while (i < inputArray.length) {
    console.log(inputArray[i]);
    i++;
  }
}
logArray(recipe);
logArray(bucketList);
```
#### Exercise 4:
```JavaScript
// 1.  Write a function `reverser` which will take an array of values as an input and return a new array of the same values in reverse order.
// 2.  Inside `reverser` instantiate a new array `reversedArray`, use a `for` loop to populate it, then return it from the function.
function reverser(inputArray) {
  var reversedArray = [];
  for (var i = 0; i < inputArray.length; i++) {
    reversedArray[i] = inputArray.pop();
  }
  return reversedArray;
}
```

#### Exercise 5:
```JavaScript
// Write a function `biggestSmallest` that takes an array of numbers as an input, and using a `for` loop, returns an array containing the smallest number in the zeroth position and the largest number in the first position.
function biggestSmallest(arr) {
  var returnArr = [];
  var smallest = arr[0];
  var largest = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    } else if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  returnArr.push(smallest, largest);
  return returnArr;
}

// For example, given the input `[1,-10,33,16,4,25,106]`, `biggestSmallest` should return `[-10,106]`
console.log(biggestSmallest([1,-10,33,16,4,25,106]));
```

#### Exercise 6:
```javascript
// Create a function arrayDuplicator, that takes an array as an input, and returns a copy as the output.

var arrayDuplicator = function(inputArray) {
  var outputArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    outputArray[i] = inputArray[i];
  }

  return outputArray;
};

console.log(arrayDuplicator([4,2,6, "24"]));
```

#### Exercise 7:
```javascript
// Write a function `arrayCombiner` that takes two arrays as inputs and returns the two of them smooshed together as an output

var arrayCombiner = function(array1, array2) {
  var toReturn = [];
  for (var i = 0; i < array1.length; i++) {
    toReturn[i] = array1[i];
  }
  for (var i = 0; i < array2.length; i++) {
    toReturn.push(array2[i]);
  }
  return toReturn;
};

var combinedArray = arrayCombiner([1, 2, 3], [4, 5, 6]);

console.log(combinedArray);
```

#### Exercise 8:
```javascript
// Write a function `arrayPlucker` that takes an array and an index as inputs and destructively removes the single value at that index. **Return that value.**

var arrayPlucker = function(array1, indexToRemove) {
  var removedValue;
  removedValue = array1.splice(indexToRemove, 1);
  return removedValue[0];
};

// Make sure your arrayPlucker function works properly with the following example:

var daysOfSchool = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

var dayOff = arrayPlucker(daysOfSchool, 4);

console.log("I'll go to school on: ", daysOfSchool);
console.log("but I'm taking vacation on ", dayOff);
```
#### Exercise 9: Magic 8-ball

```javascript
// define array called words and fill it with vague responses
var words = ["yes", "no", "try again later", "only time will tell", "it appears so"];

// prompt the user to ask a question
prompt("What is your question?");

// generates a random index number between 0 and the length of the array
var rand = Math.floor(Math.random() * words.length);

// alert the value in the words array that corresponds to the randomly generated index
alert(words[rand]);

// 1.  Create a Magic 8-ball that prompts the user to ask a question.

// 2.  When the user enters a request, randomly select a reply from an array of appropriately vague stock phrases, and alert it to the user
```

#### Exercise 10: More exercises
```javascript
// 1.  Write a function that takes an array of values and returns an boolean representing if the word "hello" exists in the array.
function doesExist(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "hello") {
      return true;
    }
  }
  return false;
}
console.log(doesExist(["hey", "yo", "HELLO", "see yah!"])); // false
console.log(doesExist(["hey", "yo", "hello", "bye"])); // true

// 2.  Write a function that takes an array of values and a target value and returns how many times that target value exists in the array.
function counter(arr, target) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }
  return count;
}
console.log(counter([32, 5, 34, 23, 1], 68)); // 0
console.log(counter([32, 68, 34, 68, 68], 68)); // 3

// 3.  Write a function that takes an array and returns a new array containing only the values at odd indexes in that array.
function oddIndices(arr) {
  var toReturn = [];

  for (var i = 0; i < arr.length; i += 2) {
    toReturn.push(arr[i]);
  }

  return toReturn;
}
console.log(oddIndices([1, 2, 3, 4, 5, 6]));

// 4.  Write a function called `sumArray` that takes an array of numbers and returns the sum of all of those numbers added together.
function sumArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("sum: " + sumArray([1, 2, 3, 4, 5]));

// 5.  Write a function called `arrayMath` that takes an array of numbers and a string with a mathmatical operator and applies that operator to all the numbers together. `arrayMath([4,2,3], "*")` should return `24`
function arrayMath(arr, string) {
  var toReturn;
  if (string === "+") {
    toReturn = 0;
    for (var i = 0; i < arr.length; i++) {
      toReturn += arr[i];
    }

  } else if (string === "-") {
    toReturn = arr[0];
    for (var i = 1; i < arr.length; i++) {
      toReturn -= arr[i];
    }

  } else if (string === "*") {
    toReturn = 1;
    for (var i = 0; i < arr.length; i++) {
      toReturn *= arr[i];
    }

  } else if (string === "/") {
    toReturn = arr[0];
    for (var i = 1; i < arr.length; i++) {
      toReturn /= arr[i];
    }

  } else if (string === "%") {
    toReturn = arr[0];
    for (var i = 1; i < arr.length; i++) {
      toReturn %= arr[i];
    }

  } else {
    console.log("Unknown mathematical operator.");
  }

  return toReturn;
}
console.log(arrayMath([4, 2, 3], "+")); // 4 + 2 + 3 = 9
console.log(arrayMath([4, 2, 3], "-")); // 4 - 2 - 3 = -1
console.log(arrayMath([4, 2, 3], "*")); // 4 * 2 * 3 = 24
console.log(arrayMath([4, 2, 3], "/")); // 4 / 2 / 3 = 0.66...
console.log(arrayMath([4, 2, 3], "%")); // 4 % 2 % 3 = 0

// 6.  Write a `zipper` function that combines two arrays in alternating order, `zipper([1,2,3],['a','b','c'])` should return `[1, 'a', 2, 'b', 3, 'c']`. Make sure to handle cases where one array is longer than the other.
function zipper(arr1, arr2) {
  var zippedArray = [];
  var larger = arr1.length > arr2.length ? arr1.length : arr2.length;
  for (var i = 0; i < larger; i++) {
    if (arr1[i]) { // checks if value is "truthy"
    zippedArray.push(arr1[i]);
  }
  if (arr2[i]) {
    zippedArray.push(arr2[i]);
  }
}
return zippedArray;
}
console.log(zipper([1,2,3],['a','b','c', 'd']));

// 7.  Write a function that merges two sorted lists into a new list. `mergeSorted([1, 2, 5, 9], [3, 7, 19])` should return `[1, 2, 3, 5, 7, 9, 19]`
function mergeSorted(arr1, arr2) {
  var combinedArr = [];
  for (var i = 0; i < arr1.length; i++) {
    combinedArr[i] = arr1[i];
  }
  for (var i = 0; i < arr2.length; i++) {
    combinedArr.push(arr2[i]);
  }

  // function that sorts arrays numerically
  function sortNumber(a,b) {
    return a - b;
  }
  combinedArr.sort(sortNumber);

  return combinedArr;
}
console.log("mergeSorted: " + mergeSorted([1, 2, 5, 9], [3, 7, 19])); // [1, 2, 3, 5, 7, 9, 19]

// 8. Create a function `shuffler` that takes an array as input and returns a new array of the same elements, but in a random order. **How will you keep track of which elements have already been put into the new array? An object may come in handy...**
function shuffler(arr) {
  var counter = arr.length;
  var temp;
  var index;

  // while there are elements in the array
  while (counter > 0) {
    // pick a random index
    index = Math.floor(Math.random() * counter);

    // decrease counter by 1
    counter--;

    // swap the last element with random index
    temp = arr[counter];
    arr[counter] = arr[index];
    arr[index] = temp;
  }

  return arr;
}

console.log("shuffler: " + shuffler([1, 2, 3, 4, 5]));
```

#### Exercise 11:

```javascript
// Create a function that takes any value and tells you what type it is. **Make sure it handles arrays correctly!**

// You can test your function using the following code snippet:

var type_tester = function(input) {
  if (Array.isArray(input)) {
    return "array";
  } else {
    return typeof input;
  }
};

console.log(type_tester(3)); // number
console.log(type_tester('hello')); // string
console.log(type_tester(true)); // boolean
console.log(type_tester({})); // object
console.log(type_tester([])); // array
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

// 1.  Iterate over `them_dogs` and log each dog's name
for (var i = 0; i < them_dogs.length; i++) {
  console.log(them_dogs[i].name);
}

// 2.  Iterate over `them_dogs` and add all the toys to a new `all_toys` array
var allToys = [];
for (var i = 0; i < them_dogs.length; i++) {

  for (var j = 0; j < them_dogs[i].toys.length; j++) {
    allToys.push(them_dogs[i].toys[j]);
  }

}
console.log("allToys: " + allToys);


// 3.  Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.
function toyToName(arr, toy) {

  for (var i = 0; i < arr.length; i++) {

    for (var j = 0; j < arr[i].toys.length; j++) {
      if (arr[i].toys[j] === toy) {
        return toy + " belongs to " + arr[i].name;
      }
    }  
  }

  return "no dog has that toy";
}

console.log(toyToName(them_dogs, "kong"));
```

#### Exercise 13:

```javascript
var scrambledPoem = "roses red are bacon crispy i bacon love and is blue violets are";

// 1.  use `.split(' ')` on `scrambledPoem` and save the result as an array `scrambledArray`
var scrambledArray = scrambledPoem.split(' ');
console.log(scrambledArray);

// 2.  Create a new array `unscrambledArray`
var unscrambledArray = [];

// 3.  While the length of `scrambledArray` is greater than 0, remove the FIRST and LAST value and add them to `unscrambledArray`.
while (scrambledArray.length > 0) {
  var first = scrambledArray.shift();
  var last = scrambledArray.pop();
 unscrambledArray.push(first);
 unscrambledArray.push(last);
}

// 4.  Turn the values in `unscrambledPoem` into a string by using the array's native `.join()` method.
console.log(unscrambledArray.join(' '));
```
