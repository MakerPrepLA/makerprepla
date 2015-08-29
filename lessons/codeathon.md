# MakerPrep Codeathon
This codeathon will prepare you for the MakerSquare immersive interview. If you can complete all of these exercises then you are well on your way to becoming accepted into MakerSquare.

## Prep:

### each
 * Implement JavaScript’s native ‘forEach’ method that takes two arguments (a collection and a callback function) and iterates over the collection using a ‘for’ loop and ‘for in’ loop and applies the callback function. This time we will call the function ‘each’ instead of ‘forEach’ and be sure to check if the collection is an array or an object. Use this as a template:
```javascript
function each(collection, callback) {
    // insert code here
}
```
Test it with:
```javascript
var logger = function (input) {
  console.log(input);
};
each([1, 2, 3], logger); // output: 1, 2, 3
```

### map
* Implement JavaScript’s native ‘map’ method that  takes two arguments (a collection and a callback function) and iterates over the collection using the ‘each’ function you wrote earlier and returns the resultant array. Use this as a template:
```javascript
function map(collection, callback) {
    // insert code here
}
```
	Test it with:
```javascript
var incrementor = function(currentEl){
    return currentEl + 1;
};
console.log([1, 2, 3].map(incrementor)); // output: [2, 3, 4]
```

### filter
* Implement JavaScript’s native ‘filter’ method that  takes two arguments (a collection and a predicate (a function that returns either a ‘true’ or a ‘false’)) and iterates over the collection using the ‘each’ function you wrote earlier and returns the resultant array. Use this as a template:
```javascript
function filter(collection, predicate) {
    // insert code here
}
```
Test it with:
```javascript
function returnOdds(currentEl) {
	 return currentEl % 2 !== 0;
}
console.log(filter([1, 2, 3], returnOdds)); // output: 1, 3
```

### reduce
* Implement JavaScript’s native ‘reduce’ method that  takes three arguments (a collection, a callback, and a start value) and returns the accumulatedValue. Use this as a template:
```javascript
function reduce(collection, callback, startValue) {
    // insert code here
}
```
Test it with:
```javascript
function summer(previousValue, currentValue) {
    return previousValue + currentValue;  
}
console.log(reduce([1, 2, 3], summer, 0)); // output: 6
```
## Exercises:

### Exercise 1: MakerSquare gold coins
In MakerSquare they have a very strange monetary system.
Each MakerSquare gold coin has an integer number written on it. A coin n
can be exchanged in a bank into three coins: n/2, n/3 and n/4 (a coin n can be turned into n/2 + n/3 + n/4 or 13n/12).
But these numbers are all rounded down (the banks have to make a profit).
You can also sell MakerSquare coins for American dollars. The exchange
rate is 1:1. But you can not buy MakerSquare coins.
You have one MakerSquare gold coin. What is the maximum amount of American dollars
you can get for it?

#### Sample Input:
How many MakerSquare gold coins would you like to trade in? // 2

What is your next coin worth? // 12

What is your next coin worth? // 2

#### Sample Output:
Your 12 MakerSquare coin translates to 13 American dollar(s).

Your 2 MakerSquare coin translates to 1 American dollar(s).

#### Explanation:
You can change 12 into 6, 4 and 3, and then change these into
$6+$4+$3 = $13.

If you try changing the coin 2 into 3 smaller coins, you will get
1, 0 and 0, and later you can get no more than $1 out of them.

It is better just to change the 2 coin directly into $2.

#### Implementation:
* Use a prompt to ask the user how many coins they wish to exchange.
* Prompt the user to enter the coins they wish to exchange and save these in an array.
* Use ‘map’ (the one you created earlier) to iterate over the array and produce a new array of the converted values of the coins.
* Tell the user what their MakerSquare gold coins convert to.

---
### Exercise 2: Holes in the text
Johnny wrote some text on a piece of paper and now he wants to know how many holes are in the text. What is a hole? If you think of the paper as the plane and a letter as a curve on the plane, then each letter divides the plane into regions. For example letters "A", "D", "O", "P", "R" divide the plane into two regions so we say these letters each have one hole. Similarly, letter "B" has two holes and letters such as "C", "E", "F", "K" have no holes. Today we will be treating “B” as if it only had one hole. We say that the number of holes in the text is equal to the total number of holes in the letters of the text. Help Johnny to determine how many holes are in the text.

#### Sample Input:
Bonanza.

Sally caught crabs.

#### Sample Output:
There are 4 hole(s) in your input: B, o, a, a

There are 5 hole(s) in your input: a, a, g, a, b

#### Implementation:
* Prompt the user to enter a string.
* Create a ‘hasHole’ function that has a ‘letter’ parameter and returns the letter if it contains a ‘hole’.
* Use filter (the function you created earlier) in combination with your ‘hasHole’ function to create a new array containing the letters with ‘holes’ in them.
* Print the number of holes in the string as well as what these ‘holy’ letters are.

---

### Exercise 3: The Next Palindrome
A positive integer is called a palindrome if its representation in the decimal system is the same when read from left to right and from right to left. For a given positive integer K of not more than 1000000 digits, write the value of the smallest palindrome larger than K to output. Numbers are always displayed without leading zeros.

#### Implementation:
* Prompt the user for the number of test cases.
* Prompt the user to enter their test numbers and save these in an array.
* Use your 'map' function (the one you created earlier) to iterate over the elements of the array and return the smallest palindrome larger than the current number.
* It may help to create a function to test if a number is a palindrome or return the smallest palindrome larger than the number.

#### Sample Input:
How many numbers will you test? // 2

Please enter the next number to test. // 808

Please enter the next number to test. // 2133

#### Sample Output:

The smallest palindrome larger than 808 is 818.

The smallest palindrome larger than 2133 is 2222.

---

### Exercise 4: Closing the Tweets
Little kids, Jack and Evan like playing their favorite game Glass-and-Stone. Today they want to play something new and came across Twitter on their father's laptop.
They saw it for the first time but were already getting bored to see a bunch of sentences having at most 140 characters each. The only thing they liked to play with it is, closing and opening tweets.

There are N tweets on the page and each tweet can be opened by clicking on it, to see some statistics related to that tweet. Initially all the tweets are closed. Clicking on an open tweet closes it and clicking on a closed tweet opens it. There is also a button to close all the open tweets. Given a sequence of K clicks by Jack, Evan has to guess the total number of open tweets just after each click. Please help Evan in this game.

#### Sample Input:
How many tweets are there? // 3

How many clicks will be made? // 6

Which tweet would you like to click on? Enter 'c' for 'close all' or 'o' for 'open all'

// 1

// 2

// 3

// 2

// c

// 1

#### Sample Output:
Tweets: 1, 0, 0

1 tweet(s) are open


#### Explanation:
Let open[x] = 1 if the xth tweet is open and 0 if its closed.

Initially open[1..3] = { 0 , 0 , 0 }. Here is the state of open[1..3] after each click and corresponding count of open tweets.

CLICK 1 : { 1, 0, 0 }, open count = 1

CLICK 2 : { 1, 1, 0 }, open count = 2

CLICK 3 : { 1, 1, 1 }, open count = 3

CLICK 2 : { 1, 0, 1 }, open count = 2

CLOSEALL : { 0, 0, 0 }, open count = 0

CLICK 1 : { 1, 0, 0 }, open count = 1

#### Implementation:

* Prompt the user for the number of tweets there will be and store it in `numberOfTweets`.

* Prompt the user for how many clicks will be made and store it in `numberOfClicks`.

* Prompt the user for the tweets they would like to click, or have them enter ‘o’ to open all of them or ‘c’ to close all of them (store these in an array called `postClicks`.

* Create a `createEmptyArray` function that takes a number as input and returns an array of that size and enters ‘0’ for each value of the array.

* Create an `allOpen` function that takes an array as a parameter and using ‘map’ (the function you created earlier) returns that array filled with the number 1. This is for when the user enters an 'o'.

* Create an `allClosed` function that takes an array as a parameter and using ‘map’ (the function you created earlier) returns that array filled with the number 0. This is for when the user enters a 'c'.

* Use your ‘each’ function (the function you created earlier) to iterate over your `postClicks` array that either opens/closes all the tweets or toggles specific tweets.

* Create a function `getCount` that takes an array as a parameter and using `reduce` (the function you created earlier) returns the sum of the array. This is to find out how many tweets are open.

* Log which tweets are open (in array format).
