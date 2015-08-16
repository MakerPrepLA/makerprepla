# Lesson 7: Conditional Logic Flow

## Booleans & Comparators

The Boolean data type has two possible values: true or false. We can type them in literally. Follow along in the console:

*   `> true`
*   `> false`

...but more typically we encounter them as the resultant value produced by evaluating [expressions](javascript:void(0)). Type out the following expressions, comprised of number values and comparator [operators](javascript:void(0)), and determine what **boolean** value each evaluates to:

*   `5 > 3`
*   `5 < 3`
*   `5 >= 5`
*   `10 <= 100`
*   `5 === 5`
*   `5 !== 5`
*   `5 === "5"`

What is the difference between 5 and "5"? Perhaps the `typeof` operator can help us out:

*   `> typeof "hello"`
*   `> typeof true`
*   `> typeof 5`
*   `> typeof "5"`

A piece of data of type `string` and another of type `number` will never truly be equivalent, no matter how similar they look to mushy, imprecise human brains.

#### Exercise:

1.  Use the console to write an expression which compares two strings and produces a true value.
2.  Write an expression comparing two strings which produces a false value.
3.  Determine whether string comparison is case sensitive
4.  Determine whether string comparison is space sensitive (does adding extra spaces change the outcome?)
5.  Write an expression that considers the equivalency of a string and a number and produces a false value
6.  Write an expression that considers the equivalency of a number and a string and produces a true value

## Conditional Statements

The `if` statement runs a series of lines of code (a **code block**) depending on whether a programmer-specified boolean condition evaluates to `true` or `false`. Since these are multi-line statements, they'll be hard to type into the console. Luckily, we can use a tool like [repl.it](http://repl.it/) which is much nicer than using the Chrome Console when working with large blocks of code. **Remember to save your work in Sublime when you're done with it!**

### Exercise

Now try out some of the following in a new JavaScript document. **Don't copy and paste!**

```javascript
if (true) {
  console.log('oh yeeeeahhhhh!!')
}

if (false) {
  console.log('wait, where am I??')
}

if (5 > 4) {
  console.log('Makes sense..')
}

if (2 === 5) {
  console.log("if you are seeing this message, something's gone terribly wrong")
}

if ( prompt("How you doing?") === "good" ) {
  console.log("Well, I'm very glad to hear that...")
}
``` 

### Exercise

1.  Write an if statement that always runs its code block
2.  Write an if statement that never runs its code block
3.  Write a statement that logs a message of encouragement if a visitor, when prompted, responds that they are sad.
4.  Write a statement that alerts a warning if a visitor, when prompted, does not guess that the secret number is 3.
5.  Prompt the visitor to enter a password when they visit your site. If it is correct, welcome them. Otherwise, direct them elsewhere using this line of code:

`window.location = "http://www.google.com"` 

Why do you think that worked? Look it up [online](https://developer.mozilla.org/en-US/docs/Web/API/Window/location)!

### Exercise

1.  Type out each of the following examples. **No copy & paste.**
2.  Some of the examples below will require additional HTML or JavaScript in order to work. Figure out whats needed and add it yourself! Try changing the values of things and activating different conditional branches.
3.  Write your own version of each conditional statement structure (from scratch) and test its behavior

```javascript
var hero, bad_guy

if (hero === "strong") {
  if (bad_guy === "weak") {
    console.log('Ah-ha, an easy victory!')
  }
  console.log("Let us battle to the death!")
}
```

```javascript
var response, image_path,
    secret_saying = document.querySelector('#message').textContent

if (secret_saying === "An Eagle Flies at Midnight") {
  response = "You may pass"
  image_path = "images/open_door.png"
} else {
  response = "Release the hounds!"
  image_path = "images/attack.png"
}

document.querySelector('#result').textContent = response
document.querySelector('img').src = image_path
```

```javascript
var user_input = prompt('What would you like to search for?'),
    output_el = document.querySelector('#output')

if (user_input !== "happiness") {
  if (!user_input) { // this tells us something important about empty strings
    // What would happen if we tried to use?     user_input =
    alert('Hey! You were supposed to type something.');
  } else {
    output_el.textContent = "You're searching for the wrong thing"
  }
} else {
  output_el.textContent = "ahh, the enlightened one!"
}
```

```javascript
// another approach
if (user_input === "happiness") {
  output_el.textContent = "ahh, the enlightened one!"
} else if (!user_input) {
  alert('Hey! You were supposed to type something.');
} else {
  output_el.textContent = "You're searching for the wrong thing"
}

if (age < 21) {
  output_el.textContent = "sorry, son"
} else if ( !(age > 35) ) {
  output_el.textContent = "id please"
} else if (name === "Bob") {
  output_el.textContent = "you're banned, bob!"
} else {
  output_el.textContent = "come on in!"
}
```

What would happen if Bob was 35 or younger? How can we fix this?

## Logical And `&&` , Logical Or `||`, Ternary Operator

### Exercise

Type each of the following into the console. What do they each evaluate to?

*   `> !true`
*   `> !false`
*   `> !!false`
*   `> !!true`
*   `> !!"type coercion"`
*   `> !!"all strings are 'truthy' except for..."`
*   `> !!""`

*   `> true && true`
*   `> true && false`
*   `> false && true`
*   `> false && false`
*   `> true || true`
*   `> true || false`
*   `> false || true`
*   `> false || false`

*   `> true && "what does this evalute to?"`
*   `> false && "and this?"`
*   `> true || "sigh, i'm not needed"`
*   `> false || "default value"`

`[SHIFT + ENTER]` let's you type multiple lines into a single console input.

```javscript
> if ( !name || !email || !phone ) {
 form_message = "Please enter all required fields"
} else {
 form_message = "Form accepted, thank you!"
}
```

## Pseudocode:

As your logical formulations get more complex, it can be helpful to write out your plan-of-attack in comments and then turn each piece into code.

    // If asked on a date, I'll be excited to go if
    // they are both financially stable and not a jerk

    // Additionally, if I have less than three dates this week or don't have weekend
    // plans, I'll still go, but not be as enthusiastic

    // Otherwise I'll politely turn them down

    if (financial_status === "stable"  && personality !== 'jerk') {
      console.log("Absolutely, I'm free on Sunday!")
    } else if ( dates_this_week < 3 || !weekend_plans ) {
      console.log('meh, why not...')
    } else {
      console.log("Oh, so nice of you to think of me, but my friend is in town and...")
    }

**Exercise:** In a script tag, create variables `name`, `age`, `gender`, and `is_member`, `thirsty` and `drink_of_choice` and assign them appropriate values or no values at all. Then compose a paragraph in a div#greeting according to the following rules: (**Write it in pseudocode first, then JavaScript**)

1.  If they are not a member or if they are under the age of 21, address them as sir or ma'am as appropriate and apologetically deny them access to the club.
2.  Otherwise, greet them as Mr. or Mrs. (as appropriate by gender) and their name, and welcome them. If they are thirsty, prompt them as to what drink they would like.
3.  If their favorite drink is anything but "Coors Light", tell them "yes" (name) "one" (drink_name) "coming right up!". If they ask for a Coors, kick them out.

## More logic!

The `logical or` can be used as a **Default Operator** to provide a fallback in case a particular value is undefined or an empty string.

*   `> var greeting = "Hello there, " + (prompt("What's your name?") || "anonymous")`

The `logical and` can be used as a **Guard Operator** which only reveals its second value if the first value is truthy.

*   `> var secret_code = admin && "The password is 'cheese'"`

The `ternary operator` is structured _conditional ? value_if_true : value_if_false_.

    var response = user_input ? "Response Received" : "Empty string, please type in a value"

    document.querySelector('#message').textContent = (name === 'Bob') ?
      "Damnit Bob, I've told you " + (++number_of_rejections) + " times..."
      : "Oh hello, " + name + ". Welcome!"

### Final Exercise

Create a "choose your own adventure" style text adventure game by using multiple prompts and branching if/ else conditional statements. Write a story into the HTML document on the basis of the user's responses to the prompts.

## Extra Credit

1. Learn to use the [switch statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

2. Learn to use [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch) statements for error handling. How does `finally` work? Write some code that throws an exception/error, catches it, and then "finally" does something. Why might this pattern be useful?

3. Learn about [events](http://eloquentjavascript.net/14_event.html) and implement some in your code. **Note:** Events rely on callbacks, which we haven't covered yet, so if you struggle with this topic don't worry, *it's ok.*