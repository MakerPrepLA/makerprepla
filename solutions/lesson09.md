### Exercise 1:
```javascript
// 1. Create a variable called myCat and assign to it an empty object
var myCat = {};

// 2. Assign myCat a name property, which should hold a string value
myCat["name"] = "Garfield";

// 3. Add an age property holding an integer value
myCat.age = 19;

// 4. Add an isAlive property holding a boolean value
myCat["isAlive"] = true;
// 5. Add at least four more properties such as favoriteToy, and nappingSpot
myCat.favoriteToy = "food";
myCat["nappingSpot"] = "table";
myCat.eyeColor = "black";
myCat["furColor"] = "orange";
```

### Exercise 2:
```javascript
// 1. Create a variable called `myDreamLife` and assign to it an empty object
var myDreamLife = {};

//2. Create a variable called `propertyKey` and assign to it the string value `"job"`
var propertyKey = "job";

// 3.  Use the `propertyKey` variable, not the literal string `"job"` to add a `job` property to your dream life object. Hint: `myDreamLife[propertyKey] = 'some job'`
myDreamLife[propertyKey] = "Chocolatier";

// 4.  Create a variable `anotherPropertyKey` and give it a value "salary".
var anotherPropertyKey = "salary";

// 5.  Use `anotherPropertyKey`, not the literal string `"salary"`, to quantify the value of human life.
myDreamLife[anotherPropertyKey] = 100000;

// 6.  What does `myDreamLife[propertyKey]` return?
console.log(myDreamLife[propertyKey]); // Chocolatier

// 7.  What does `myDreamLife["job"]` return?
console.log(myDreamLife["job"]); // Chocolatier

// 8.  Assign a string `"car"` to the variable `nextProperty`
var nextProperty = "car";

// 9.  Use the variable `nextProperty` to add your dream car to your dream life object.
myDreamLife[nextProperty] = "Tesla";

// 10.  What does `myDreamLife[nextProperty]` return?
console.log(myDreamLife[nextProperty]); // Tesla

// 11.  What does `myDreamLife["car"]` return?
console.log(myDreamLife["car"]); // Tesla

// 12.  Assign `myDreamLife` three more properties (with values) using variables rather than literal strings and access them each using variables as well.
var key1 = "house";
var value1 = "beach crib";
console.log(myDreamLife[key1] = value1);
var key2 = "computer";
var value2 = "XDNA Aurum 24K";
console.log(myDreamLife[key2] = value2);
var key3 = "pool";
var value3 = "infinity pool";
console.log(myDreamLife[key3] = value3);    
```

### Exercise 3:
```javascript
var car = {
  make: "Toyota"
}
var prop = 'year'

// 1. Which should we use above: `car[prop] = 1992` or `car.prop = 1992`? Try both ways!
car[prop] = 1992;

// 2. What happens when you ask for a property that is not registered to the object? i.e. to what value does the expression `car['nothingHere']` resolve to? what about `car.nothingHere`?
console.log(car['nothingHere']); // undefined

// 3. Create your own `dreamCar` object.
var dreamCar = {};

// 4. Use dot notation to add properties `make`, `model`, and `color` with values of type string, `year` with a value of type number, and `registered` with a value of type boolean.
dreamCar.make = "Fiat";
dreamCar.model = "Multipla";
dreamCar.color = "silver";
dreamCar.year = 2010;
dreamCar.registered = true;
```

### Exercise 4:
```javascript
var demo_object = {
    one: 1,
    two: 2,
    three: 3
};
var one = "three";

demo_object['two']; // 2
demo_object[one]; // 3

var state_capitals = {
    California: 'Sacramento',
    Texas: 'Austin'
};

var place = 'California';

state_capitals['place'] // undefined
state_capitals.place   // undefined
state_capitals[place] // Sacramento

state_capitals['California']; // Sacramento
state_capitals.California;   // Sacramento
state_capitals[California]; // error
```

### Exercise 5:
```javascript
var dreamCar = {};
dreamCar.make = "Fiat";
dreamCar.model = "Multipla";
dreamCar.color = "silver";
dreamCar.year = 2010;
dreamCar.registered = true;

var obj = {
    greeting: 'howdy',
    direction: 'down',
    color: 'red',
    'spaces-and-dashes can be used': ' but need to have quotes'
}

// 1. Use a `for in` loop to iterate over your `cat`, `dreamCar` and `dreamLife` objects. Re-write the loop from scratch each time and use a variable name other than `key` for each one.
for (var property in dreamCar) {
	console.log(dreamCar[property]);   
}

// 2. Use a `for in` loop to search `obj` for the key `color` and print its value to the console.
for (key in obj) {
	if (key === "color") {
     	console.log(obj[key]);   
    }
}

// 3. Create a variable `targetKey` and assign it a string `"greeting"`. Use the `targetKey` variable and `for in` to find the `greeting` property and log its value.
var targetKey = "greeting";
for (var key in obj) {
    if (key === targetKey) {
     	console.log(obj[key]);   
    }
}
```

### Exercise 6:
```javascript
var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

// 1.  Loop through the politicos object and concatenate everyones names together, separated by a space. Final result should look something like this: 'hillary clinton barack obama michelle obama joe biden jerry brown'
var allNames = "";
for (var job in politicos) {
  allNames += politicos[job] + " ";
}
// console.log(allNames);

// 2.  Loop through the politicos object again, but this time print the data in the following format: `position: name`.
// The end result should look like this:
// `secretary_of_state: hillary clinton`
// `potus: barack obama`
// `flotus: michelle obama`
// `vice_prez: joe biden`
// `gov_of_california: jerry brown`
for (var job in politicos) {
   console.log(job +": " + politicos[job]);

}
```

### Exercise 7:
```javascript
// 1.  Create a new empty object called `reverse_politico_lookup` by iterating over the politicos object and adding each person to the `reverse_politico_lookup` object with their name as a key and their job title as the value. The final object should look something like this:
// var reverse_politico_lookup = {
    // 'hillary clinton': 'secretary_of_state',
    // 'barack obama': 'potus',
    // 'michelle obama': 'flotus',
    // 'joe biden': 'vice_prez',
    // 'jerry brown': 'gov_of_california'
// };
var politicos = {
    secretary_of_state: 'hillary clinton',
    potus: 'barack obama',
    flotus: 'michelle obama',
    vice_prez: 'joe biden',
    gov_of_california: 'jerry brown'
};

var reversePoliticoLookup = {};
for (var job in politicos) {
   reversePoliticoLookup[politicos[job]] = job;
}
console.log(reversePoliticoLookup);
```

### Exercise 8:
```javascript
var complex_object = {
  string: "I'm a string!",
  number: 42,
  //don't worry about this too much yet, just accept thats its a different data type
  array: ["all sorts of stuff", 10, true, undefined, function(){console.log('beepity-beep');}],
  //we haven't covered functions yet either, just accept that they too can be stored in objects
  fn: console.log,
  //Now THIS is interesting, an object INSIDE of an object!?
  simple_object: {name: 'bob', location: 'basement', happy: 'false'},
};

// 1. Try console logging all of the values in `complex_object`
for (var key in complex_object) {
   console.log(complex_object[key]);
}

// 2. `simple_object` is an object inside of an object. How might we access its properties? Try to console log the value of the "name" property inside of simple_object (which is nested inside of complex_object)
console.log(complex_object.simple_object.name);

// 3. Try to use a `for in` loop to console log all of the properties inside of `simple_object`
for (var key in complex_object.simple_object) {
   console.log(key + ": " + complex_object.simple_object[key]);
}

// 4.  Create your own complex object. How deep can you nest objects inside of each other? Are you still able to access the properties of the nested object?
var superComplexObject = {
   innerObj1: {
      innerObj2: {
         innerObj3: {
            innerObj4: {
               name: "Gandalf"
            }
         }
      }
   }
};

console.log(superComplexObject.innerObj1.innerObj2.innerObj3.innerObj4.name);
// you can go as deep as you want! (provided you have enough memory)
```
