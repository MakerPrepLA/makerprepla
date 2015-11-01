### Exercise 1:
```javascript
// 1.  Create a person object to represent yourself.
var me = {
    // 2.  Give yourself properties of name and location.
    name: "Bob the builder",
    location: "Sunflower Valley, Bobsville",
    // 3.  Give yourself an array of hobbies
    hobbies: ["building", "constructing", "assembling"],
    // 4.  Give yourself a pet object
    pet: {
        name: "Pilchard",
        color: "orange"
    },
    // 5.  Give yourself a `party` method and then invoke it.
    party: function () {
        console.log("We can fix it!");
    }
};

me.party();
```

### Exercise 2:
```javascript
var me = {
    name: "Bob the builder",
    location: "Sunflower Valley, Bobsville",
    hobbies: ["building", "constructing", "assembling"],
    pet: {
        name: "Pilchard",
        color: "orange"
    },
    party: function () {
        console.log("We can fix it!");
    },
    // 1.  Give yourself a `work` method that references one or more other properties of your object using the `this` keyword
    work: function () {
        console.log("I like to take my pet " + this.pet.name + " to work in " + this.location + ".");
    }
};

me.work();

// 2.  Add another method `workout` to your object after it has been created- as we did with `person.work()` not `person.party()`
// 3.  Have the `workout` method reference one or more other properties of your object.
me.workout = function() {
	console.log("Aside from " + me.hobbies[1] + ", I like to workout.");
};

me.workout();

// 4.  Create a `float_through_life_on_autopilot` method that calls the `work`, `party` and `workout` methods using the `this` keyword.
me.floatThroughLifeOnAutopilot = function() {
    this.work();
    this.party();
    this.workout();
};

me.floatThroughLifeOnAutopilot();
```

### Exercise 3:
```javascript
var car = {
  type: "Honda Civic",
  position: 1,
  move: function(){
    var prev = this.position
    this.position = this.position + 1
    console.log(this.type + " is moving from " + prev + " to " + this.position)
  }
};

// 1.  Invoke car's `move` method and see what happens.
car.move(); // Honda Civic is moving from 1 to 2

// 2.  Invoke it a few more times. Then check its `position` property.
car.move(); // Honda Civic is moving from 2 to 3
car.move(); // Honda Civic is moving from 3 to 4
car.move(); // Honda Civic is moving from 4 to 5
console.log(car.position); // 5

// 3.  Add a `speed` property (an integer) to car.
car.speed = 4;

// 4.  When a car moves, adjust its position by adding its speed.
car.move = function() {
    var prev = this.position;
    this.position = this.position + this.speed;
    console.log(this.type + " is moving from " + prev + " to " + this.position);
};

car.move(); // Honda Civic is moving from 5 to 19
```

### Exercise 4:
```javascript
// 1.  Create a new object `dog`. Give it a name and location.
var dog = {
    name: "Scooby Dooby Doo",
    location: "Coolsville"
};

// 2.  Give the dog a `party` method.
dog.party = function () {
    // 3.  Reference the dog's name inside the `party` method (i.e. when you invoke dog.party it should say "rufus dances wildly").
    console.log(this.name + " dances like a wild animal!");

};
dog.party();

// 4.  Give the dog a `favorite_food` property (a string, 'kibble') and an `eat` method.
dog.favoriteFood = "kibble";
dog.eat = function () {
    // 5.  Reference the `favorite_food` inside the eat method.
    console.log(this.name + "'s favorite food is " + this.favoriteFood + ".");

    // 7.  When your dog eats, set its `hungry` property to `false`, referencing it via `this`
    this.hungry = false;
};

dog.eat();

// 6.  Give the dog a `hungry` property, a boolean set to `true`
dog.hungry = true;

dog.eat();


// 8.  Add a `go_to_park` method which references the dog's `location` and when invoked changes the `hungry` property back to `true`.
dog.goToPark = function() {
    console.log("It's time to go to the park in " + this.location + ".");
    this.hungry = true;
};

dog.goToPark();
```

### Exercise 5:
```javascript
// Refactor your dog object so that its methods reference free-standing functions `eat_fn`, `party_fn`, and `go_to_park_fn`.

var eatFn = function () {
    console.log(this.name + "'s favorite food is " + this.favoriteFood + ".");
    this.hungry = false;
};

var partyFn = function () {
    console.log(this.name + " dances like a wild animal!");
};

var goToParkFn = function() {
    console.log("It's time to go to the park in " + this.location + ".");
    this.hungry = true;
};

var dog = {
    name: "Scooby Dooby Doo",
    location: "Coolsville"
};

dog.party = partyFn;

dog.party();

dog.favoriteFood = "kibble";
dog.eat = eatFn;

dog.eat();

dog.hungry = true;

dog.eat();

dog.goToPark = goToParkFn;

dog.goToPark();
```

### Exercise 6:
```javascript
var eatFn = function () {
    console.log(this.name + "'s favorite food is " + this.favoriteFood + ".");
    this.hungry = false;
};

var partyFn = function () {
    console.log(this.name + " dances like a wild animal!");
};

var goToParkFn = function () {
    console.log("It's time to go to the park in " + this.location + ".");
    this.hungry = true;
};

var dog = {
    name: "Scooby Dooby Doo",
    location: "Coolsville"
};

dog.party = partyFn;

dog.favoriteFood = "kibble";
dog.eat = eatFn;

dog.hungry = true;

dog.goToPark = goToParkFn;

// 1.  Create a second dog and have it reference the same free-standing functions as the first dog.
var dog2 = {
    name: "Garfield",
    location: "Fallbrooks",
    favoriteFood: "anything",
    eat: eatFn,
    party: partyFn,
    goToPark: goToParkFn
};

// 2.  Experiment with calling the functions on each dog in turn.
dog.eat();
dog2.eat();
dog.party();
dog2.party();
dog.goToPark();
dog2.goToPark();

// 3.  Appreciate that we only have to change one function instead of two.
console.log("I appreciate that we only have to change one function instead of two.");

// 5.  When `meow` is invoked it should log 'charlie meowed' or 'mr. snuggles meowed' per their correct names.
var meowFn = function () {
    console.log(this.name + " meowed!");
};

// 4.  Create two cat objects that have their own names, but share an free-standing function with their `meow` method.
var littleCat = {
    name: "Promethius",
    meow: meowFn
};

var bigCat = {
    name: "Ted",
    meow: meowFn
};

littleCat.meow();
bigCat.meow();
```

### Exercise 7:
```javascript
// 1.  Create a `fetch_adder` function that adds fetching functionality to any dog that is passed in as an argument.
var fetchAdder = function(dog) {
  dog.fetch = function() {
    console.log(this.name + " can now fetch!");  
  };
};

// 2.  Create a `nap_adder` function that adds napping functionality to any cat that is passed in as an argument.
var napAdder = function(cat) {
  cat.nap = function() {
    console.log(this.name + " can now nap.");  
  };
};

var myDog = {
    name: "Floof",
};

fetchAdder(myDog);
myDog.fetch();

var myCat = {
    name: "Cookie",
};

napAdder(myCat);
myCat.nap();
```

### Exercise 8:
```javascript
// 1.  Create a warrior factory that take arguments of a name and a weapon.
var warriorFactory = function (name, weapon) {

    // 2.  It should return a warrior with those properties as well as...
    var warrior = {};

    warrior.name = name;
    warrior.weapon = weapon;

    // 3.  Each warrior should have an attack method that references the name and weapon.
    warrior.attack = function () {
        console.log(this.name + " attacks with his/her " + this.weapon + "!");
    };

    // 4.  Add an adventure method that calls the attack method multiple times among other things.
    warrior.adventure = function () {
        this.attack();
        this.attack();
        console.log("My " + this.weapon + " will destroy you!");
    };

    return warrior;

};

var henry = warriorFactory("Henry", "rail gun");

henry.attack();
henry.adventure();
```

### Exercise 9:
```javascript
// Refactor the car_factory function into a single expression (i.e. create a new object, add all its properties and return it in one fell swoop).

var car_factory = function (type, speed) {

    return {
        position: 0,
        type: type,
        speed: speed,

        move: function () {
            this.position += this.speed
        }
    };

};

var new_toyota = car_factory('Toyota Hilux', 3);
var new_honda = car_factory('Honda Accord', 5);

console.log("Position: " + new_toyota.position);
console.log("Speed: " + new_toyota.speed);
console.log("move method invoked");
new_toyota.move();
console.log("Position: " + new_toyota.position);
```
