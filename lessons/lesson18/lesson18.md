# Lesson 18: Object Oriented Javascript

Organizing code structures around objects rather than functions is called [Object Oriented](//en.wikipedia.org/wiki/Object-oriented_programming) programming.

Objects properties have keys which are strings, and values which can be any data type: strings, numbers, arrays, objects... even functions!

Try the following in a REPL:

```javascript
var person = {
  name: 'Bob',
  location: 'Los Angeles',
  age: 56,
  hobbies: ['working', 'partying'],
  cat: {
    name: "mr fuzzles",
    hobbies: [ "being inert", "nudging things off tables" ]
  },
  party: function(){
    console.log('dance, dance, dance!')
  }
};

person.name;
person.age;

person.hobbies[0];
person.cat.name;

person.party; // what does this do?
person.party(); // how about this?
```

#### Exercise

1.  Create a person object to represent yourself.
2.  Give yourself properties of name and location.
3.  Give yourself an array of hobbies
4.  Give yourself a pet object
5.  Give yourself a `party` method and then invoke it.


Review the following in your console:

```javascript
var freestanding_fn = function(){
  console.log(arguments, this)
};

freestanding_fn("These are the arguments...", "What is the calling context? -->");
```

Now what happens when we call a function _in the context of_ an object?

    var obj = {
      key1: 'value 1',
      key2: 'value 2',
      method: function(){
        console.log("I'm being invoked in the context of...", this)
      }
    }

    obj.method()

So how is this useful?

    person.work = function(){
      console.log("Welcome to McDonald's, I'm " + this.name + ". May I take your order?")
      console.log("Enjoy this beautiful day in " + this.location)
      console.log("Would you like to hear a story about " + this.cat.name + " and his " + this.cat.hobbies[1])
    }
    person.work()

#### Exercise:

1.  Give yourself a `work` method that references one or more other properties of your object using the `this` keyword
2.  Add another method `workout` to your object after it has been created- as we did with `person.work()` not `person.party()`
3.  Have the `workout` method reference one or more other properties of your object.
4.  Create a `float_through_life_on_autopilot` method that calls the `work`, `party` and `workout` methods using the `this` keyword.

<code-submission-form id="object_oriented-person_methods">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

* * *

We can also change our object properties by referencing them with `this`:

    var car = {
      type: "Honda Civic",
      position: 1,
      move: function(){
        var prev = this.position
        this.position = this.position + 1
        console.log(this.type + " is moving from " + prev + " to " + this.position)
      }
    }

#### Exercise:

1.  Invoke car's `move` method and see what happens.
2.  Invoke it a few more times. Then check its `position` property.
3.  Add a `speed` property (an integer) to car.
4.  When a car moves, adjust its position by adding its speed

<code-submission-form id="object_oriented-car">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

#### Exercise:

1.  Create a new object `dog`. Give it a name and location.
2.  Give the dog a `party` method.
3.  Reference the dog's name inside the `party` method <small>(i.e. when you invoke dog.party it should say "rufus dances wildly")</small>
4.  Give the dog a `favorite_food` property (a string, 'kibble') and an `eat` method.
5.  Reference the `favorite_food` inside the eat method.
6.  Give the dog a `hungry` property, a boolean set to `true`
7.  When your dog eats, set its `hungry` property to `false`, referencing it via `this`
8.  Add a `go_to_park` method which references the dog's `location` and when invoked changes the `hungry` property back to `true`.

<code-submission-form id="object_oriented-dog">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

* * *

Instead of defining the method inline, it can be useful to have it defined first and referenced as a variable in the object instantiation. <small>(this will allow us to share the function between multiple objects later)</small>

    var move_fn = function(){
      var prev = this.position
      this.position = this.position + 1
      console.log(this.type + " is moving from " + prev + " to " + this.position)
    }

    var car = {
      type: "Honda Civic",
      position: 1,
      move: move_fn
    }

How will this change things? Test it out.

**Exercise:** Refactor your dog object so that its methods reference free-standing functions `eat_fn`, `party_fn`, and `go_to_park_fn`.

<code-submission-form id="object_oriented-dog_2">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

* * *

So we've moved from this world:

    var car = {
      type: "Honda Civic",
      position: 1,
      move: function(){
        this.position++
      }
    }

To this one, which allows us to define a function once, and use it multiple places:

    var move_fn = function(){
      this.position++
    }

    var car1 = {
      type: "Honda Civic",
      speed: 5,
      position: 1,
      move: move_fn
    }

    var car2 = {
      type: "Toyota Corolla",
      speed: 3,
      position: 6,
      move: move_fn
    }

When we invoke `car1.move()` change both cars' positions? How about when we invoke `car2.move()`? How does the `move_fn` know which position to increment?

**Memorize this sentence:** `this` refers to the object to the left of the dot when you invoke the function.

#### Exercise

1.  Create a second dog and have it reference the same free-standing functions as the first dog.
2.  Experiment with calling the functions on each dog in turn.
3.  Rewrite the move_fn to change a car's position based on its speed property.
4.  Appreciate that we only have to change one function instead of two.
5.  Create two cat objects that have their own names, but share an free-standing function with their `meow` method.
6.  When `meow` is invoked it should log 'charlie meowed' or 'mr. snuggles meowed' per their correct names.

<code-submission-form id="object_oriented-cat">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

* * *

### Decorator Pattern

When we pass an object as an input to a function which adds functionality to it, we call this code structure the [Decorator pattern](//en.wikipedia.org/wiki/Decorator_pattern)

    var reverse_adder = function(car){
        car.reverse = function() {
          this.position = this.position - this.speed
        }
    }

    reverse_adder(car1)
    reverse_adder(car2)

#### Exercise

1.  Create a `fetch_adder` function that adds fetching functionality to any dog that is passed in as an argument.
2.  Create a `nap_adder` function that adds napping functionality to any cat that is passed in as an argument.

<code-submission-form id="object_oriented-decorator">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

* * *

### Factory Pattern

When we use a function to instantiate new objects of a certain type, we call this code structure the [Factory pattern](//en.wikipedia.org/wiki/Factory_pattern)

    var car_factory = function (type, speed) {
      var car = {}

      car.position = 0
      car.type = type
      car.speed = speed

      car.move = function () {
        this.position += this.speed
      }

      return car
    }

    var new_toyota = car_factory('Toyota Hilux', 3)
    var new_honda = car_factory('Honda Accord', 5)

#### Exercise:

1.  Create a warrior factory that take arguments of a name and a weapon
2.  It should return a warrior with those properties as well as...
3.  Each warrior should have an attack method that references the name and weapon
4.  and also an adventure method that calls the attack method multiple times among other things

**Exercise:** Refactor the `car_factory` function into a single expression (i.e. create a new object, add all its properties and return it in one fell swoop).

<code-submission-form id="object_oriented-factory">

<form class="student_code">

#### Submit Your Code

<textarea name="code" id="code_sample" rows="10"></textarea>  
<input type="submit" value="Send"></form>

</code-submission-form>

Take a moment to appreciate all the hard work you've put in to become a programmer. You're doing a great job! Here [this is for you](http://goo.gl/ot0L1o)...

</section>

</div>