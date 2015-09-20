### Prep
### each

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

To test each:

```javascript
var logger = function (input) {
  console.log(input);
};
each([1, 2, 3], logger); // result: 1 \n 2 \n 3
```

### map

```javascript
function map(collection, callbackFunction) {
  var results = [];

  each(collection, function(currentEl) {
    results.push(callbackFunction(currentEl));
  });

  return results;
}
```

To test map:

```javascript
var incrementor = function(currentEl){
  return currentEl + 1;
};
console.log(map([1, 2, 3], incrementor)); // result: 2, 3, 4
```

### filter
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

To test filter:

```javascript
function returnOdds(currentEl) {
  return currentEl % 2 !== 0;
}
console.log(filter([1, 2, 3], returnOdds)); // result: 1, 3
```

### reduce
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

To test reduce:

```javascript
function summer(accumulatedValue, currentValue) {
  return accumulatedValue + currentValue;  
}
console.log(reduce([1, 2, 3], summer, 0)); // result: 6
```


### Exercise 1: MakerSquare gold coins
```javascript
var coins = prompt("Enter the MKS coins you wish to convert to USD separated by  spaces.");
coins = coins.split(' ');

var sum;
var dollars = map(coins, function (coin) {
  var half = Math.floor(coin / 2);
  var third = Math.floor(coin / 3);
  var fourth = Math.floor(coin / 4);
  sum = half + third + fourth;
  return sum;
});

for (var i = 0; i < coins.length; i++) {
  console.log("Your " + coins[i] + " MakerSquare coin translates to " + dollars[i] + " American dollar(s).");
}
```

### Exercise 2: Holes in the text
```javascript
var input = prompt("Please enter your string.");
var arrInput = input.split("");

function hasHole(letter) {
  return letter === 'a' || letter === 'A' || letter === 'b' || letter === 'B' || letter === 'd' || letter === 'D' || letter === 'e' || letter === 'g' || letter === 'o' || letter === 'O' || letter === 'p' || letter === 'P' || letter === 'q' || letter === 'Q';
}

var filtered = filter(arrInput, hasHole);

console.log("There are " + filtered.length + " hole(s) in your input: " + filtered.join(", "));
```

### Exercise 3: The Next Palindrome
```javascript
var number = prompt("How many numbers will you test?");

var numbers = [];
for (var i = 0; i < number; i++) {
  numbers.push(parseInt(prompt("Please enter the next number.")));
}

var results = map(numbers, function(number) {
  return getPalindrome(number);
});

function getPalindrome(number) {
  number++;
  while (true) {
    if (isPalindrome(number)) {
      return number;
    } else {
      number++;
    }
  }
}

function isPalindrome(number) {
  return number == number.toString().split("").reverse().join("");
}

for (var i = 0; i < numbers.length; i++) {
  console.log("The smallest palindrome larger than " + numbers[i] + " is " + results[i] + ".");
}
```

### Exercise 4: Closing the Tweets
```javascript
var numberOfTweets = prompt("How many tweets are there?");
var numberOfClicks = prompt("How many clicks will be made?");

var postClicks = [];
for (var i = 0; i < numberOfClicks; i++) {
  postClicks.push(prompt("Which tweet would you like to click on? Enter 'c' for 'close all' or 'o' for 'open all'"));
}

var tweets = createEmptyArray(numberOfTweets);

each(postClicks, function (click) {
  if (click === "o") {
    tweets = allOpen(tweets);
  } else if (click === "c") {
    tweets = allClosed(tweets);
  } else {
    if (tweets[click - 1] === 0) {
      tweets[click - 1] = 1;
    } else {
      tweets[click - 1] = 0;
    }
  }
});

function getCount(arr) {
  var count = reduce(arr, function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0);
  return count;
}

function allOpen(arr) {
  var toReturn = map(arr, function (post) {
    return 1;
  });
  return toReturn;
}

function allClosed(arr) {
  var toReturn = map(arr, function (post) {
    return 0;
  });
  return toReturn;
}

function createEmptyArray(sizeOfArray) {
  var toReturn = [];
  for (var i = 0; i < sizeOfArray; i++) {
    toReturn[i] = 0;
  }
  return toReturn;
}

console.log("Tweets: " + tweets);
console.log(getCount(tweets) + " tweet(s) are open");
```
