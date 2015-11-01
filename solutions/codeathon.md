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

### Exercise 1: Holes in the text
```javascript
var input = prompt("Please enter your string.");
var arrInput = input.split("");

function hasHole(letter) {
  return letter === 'a' || letter === 'A' || letter === 'b' || letter === 'B' || letter === 'd' || letter === 'D' || letter === 'e' || letter === 'g' || letter === 'o' || letter === 'O' || letter === 'p' || letter === 'P' || letter === 'q' || letter === 'Q';
}

var filtered = filter(arrInput, hasHole);

console.log("There are " + filtered.length + " hole(s) in your input: " + filtered.join(", "));
```

### Exercise 2: Sidekicks & Super Heroes
```javascript
// a. Use _your_ filter function on the 'sidekicks' array and return any sidekick whose hero is 'Batman'.
console.log(filter(sidekicks, function(currentEl) {
  return currentEl.hero === "Batman";
}));

// b. Use _your_ map function combined with _your_ filter function to return only the names of the sidekicks whose heroes are 'Green Lantern'.
console.log(map(filter(sidekicks, function(currentEl) {
  return currentEl.hero === "Green Lantern";
}), function(currentEl) {
  return currentEl.name;
}));
```

### Exercise 3: Contains?
```javascript
function contains(collection, target){
  return reduce(collection,function(accum, currentEl){
    if(currentEl === target){
      return true;
    } else {
      return accum;
    }
  }, false);
}
```

### Exercise 4: MakerSquare gold coins
```javascript
var coins = prompt("Enter the MKS coins you wish to convert to USD separated by spaces.");
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

### Exercise 5: The Next Palindrome
```javascript
var numbers = prompt("Please enter your numbers separated by spaces");

numbers = numbers.split(' ');

var palindromes = map(numbers, getPalindrome);

function getPalindrome(num) {
  num++;

  while (!isPalindrome(num)) {
    num++;
  }
  return num;

}

function isPalindrome(input) {
  return input === parseInt(input.toString().split("").reverse().join(""));
}

for (var i = 0; i < numbers.length; i++) {
  console.log("The smallest palindrome larger than " + numbers[i] + " is " +  palindromes[i] + ".");
}
```

### Exercise 6: Closing the Tweets
```javascript
var numberOfTweets = prompt("How many tweets are there?");
var postClicks = prompt("Please enter the tweets you would like to click on separated by spaces. Enter 'c' to 'close all' or 'o' to 'open all'");

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


### Exercise 7:
```javascript
function alphabetSoup(str) {

  return reduce(str, function(accum, currentEl){

    // for the first iteration
    if (accum === "") {
      return currentEl;
    }

    for (var i = 0; i < accum.length; i++) {
      if (currentEl < accum[i]) { // insert currentEl before accum[i]
        accum = [accum.slice(0, i) + currentEl + accum.slice(i)].join("");
        return accum;
      }
    }

    // if currentEl is > any letter in accum append it to the end of accum
    return accum += currentEl;

  }, "");

}

var soup = alphabetSoup("hello");
console.log(soup); // ehllo
```
