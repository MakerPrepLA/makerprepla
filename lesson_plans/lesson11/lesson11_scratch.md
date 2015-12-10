# Lesson Plan 11

Make sure you go over the difference between **parameters** and **arguments**


make sure to go over how arrays are objects:

    
    #### Exercise:

1.  Using the below as a starting point, write a function that takes any value and tells you what type it is.
2.  Make sure this handles Arrays correctly!

```javascript
var type_tester = function(input) {
    console.log(input)
}

type_tester(3)
type_tester('hello')
type_tester({})
type_tester([])
```


Examine the unexpected behavior regarding arrays and objects...

    numbers[0]
    numbers["0"]

    doubled_numbers[0]
    doubled_numbers["0"]

    typeof 37 // 'number'
    typeof "hello" // 'string'
    typeof undefined // 'undefined'
    typeof function() {} // 'function'

    typeof { a: 1 } // 'object'
    typeof [ 1, 2, 3 ] // 'object' (?!?! not useful)

    Array.isArray({ a: 1 }) // false
    Array.isArray([ 1, 2, 3 ]) // true


    * * *

Arrays and objects are often used in combination

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
    }]

#### Exercises

1.  Iterate over `them_dogs` and log each dog's name
2.  Iterate over `them_dogs` and add all the toys to a new `all_toys` array
3.  Write a function that takes an array of dogs and a toy as an input and returns the name of the dog that owns that toy.
4.  Using jQuery, place the pictures of each dog on a web page with its name underneath.
5.  Create "Dogbook" (which is of course Facebook for dogs) and populate it using the above