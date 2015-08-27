## Functional Programming with Underscore

Underscore is a JavaScript Library (like jQuery). It provides a bunch of pre-written code for solving common programming challenges. While jQuery helps web developers interact with the DOM, Underscore focuses on providing useful helpers for [Functional-style programming](//en.wikipedia.org/wiki/Functional_programming).

Include the [Underscore library](http://underscorejs.org/) in an empty HTML document, along with an array of products (you can use your own from the e-commerce exercise or use [this one](students/products.js)) and try the following:

**first:** Pass `_.first()` the array of products and display the returned object in a "featured" section of your site.

**last:** Pass `_.last()` the array of products and display the returned object in a "clearance" section of your site.

**filter:** Use `_.filter()` to display only products that belong to the "books" category.

**reject:** Use `_.reject()` to display only products that are priced below $20.

**uniq:** Use `_.uniq()` to ensure that their are no duplicate selling points in any products before displaying them.

**map:** Use `_.map()` to grab the `picture_url` of all products for sale, assign each to the `src` property of a new `<img>` tag and return that DOM element. Pass the result of calling `_.map()` directly into a `$('#container').append()` expression to create a photo montage.

**pluck:** Use `_.pluck()` to quickly retrieve a list of the names of all products for sale to list them in an index

**reduce:** Pass a shopping cart (array of objects) to `_.reduce()` and use it to add up the total price of the order.

**contains:** Determine if the order `_.contains()` a copy of 'Twilight'. If so, display a drastic message to the user asking them to re-evaluate their life choices.

**every:** Use `_.every()` to determine if every item in the order has a price tag less than $10\. If so, call the user a cheapskate!

**some:** Use `_.some()` to determine if any item in the order has a price tag of $100 or more. If so, chide the user for their profligacy!

**extend:** Use `_.extend()` to merge two objects together. What would this be good for?

### Reimplementing Underscore

Ok, now that we've tried them all out, let's try rebuilding a few from scratch. Download [the following HTML document](students/underbar.html) and open it in your code editor to get started.