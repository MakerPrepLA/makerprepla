## Exercise 3

a.
```javascript
var myObj = {
  name: "object",
  shape: "squircle",
  color: "coquelicot",
  heightInCm: 20.4,
  exists: true
};
each(myObj, function(currentEl){
  console.log("#" + currentEl);
});
```
b.
```javascript
var mySea = ["What's", "a", "pirate's", "favorite", "letter?"];
var oneLineSea = "";
each(mySea, function(currentEl) {
  oneLineSea += (currentEl + " ");
});
console.log(oneLineSea);
```

## Exercise 4

a.
```javascript
var numbersR = [36, 81, 3481, 1681];
var numbersSqR = map(numbersR, Math.sqrt);
console.log(numbersSqR);
```

b.
```javascript
var mice = [
  {name: "Longtail"},
  {name: "Sharpteeth"},
  {name: "Smellypee"},
  {name: "Twinkle Fingers"}
];
var formalMice = map(mice, function(currentEl) {
  return "Mr. " + currentEl.name;
});
console.log(formalMice);
```

## Exercise 5

a. 
```javascript
var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];
var coolPeople = filter(people, function(name) {
  return name.length > 6;
});
console.log(coolPeople);
```

b.
```javascript
var people = ["Monica", "Erica", "Rita", "Tina", "Sandra", "Mary", "Jessica"];

var coolerPeople = filter(people, function(name) {
  var asciiTotal = 0;
  for (var i = 0; i < name.length; i++) {
    asciiTotal += name.charCodeAt(i);
  }
  return asciiTotal <= 400;

});
console.log(coolerPeople);
```

## Exercise 6

a.
```javascript
var n = 5;
var nArr = [];
for (var i = 1; i <= n; i++) {
  nArr.push(i);
}
var factorial = reduce(nArr, function(previousEl, currentEl) {
  if (nArr[0] === 0) return 1;
  return previousEl * currentEl;
});
console.log(factorial);
```

b.
```javascript
var processorSpeedsInHZ = [
  200000000, 2600000000, 2300000000, 2500000000, 2200000000, 10
];
var fastestProcessor = reduce(processorSpeedsInHZ, function(previousEl, currentEl) {
  if(currentEl > previousEl) return currentEl;
  return previousEl;
});
console.log(fastestProcessor/1000000000 + " GHz");
```