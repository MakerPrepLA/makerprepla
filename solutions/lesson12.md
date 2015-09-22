## Exercise 1
```
function answer_logger(callback){
  console.log(callback());
}
```
## Exercise 2
```
function answer_collector(callbackArr){
  var results_array = [];

  for(var i = 0; i < callbackArr.length; i++){
      results_array.push(callbackArr[i]());
  }

  return results_array;
}
```
## Exercise 3
```
function add_five(){
  return function(num){
    return num + 5;
  };
}
```
## Exercise 4
```
function secret_keeper(string1, string2){
  var secret = " hail hydra ";

  console.log(string1 + secret + string2 );
}

console.log(secret); //undefined
secret_keeper("captain","america");
```
## Exercise 5
```
var number = 0;

function adds_10(){
  console.log(number + 10);
}

function leaky_adds_10(){
  number += 10;
  console.log(number);
}
```
## Exercise 6
```
function multiplies_by(num){
  return function(num2){
    return num * num2;
  };
}
```
