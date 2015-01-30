//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

console.log(inner());


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

var inner = callFriend();
console.log(inner('435-215-9248'));



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

var makeCounter = function() {
    var counter = 1;
    return function() {
        console.log(counter++);
    };
};

var count = makeCounter();
count() // 1
count() // 2
count() // 3
count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

// First rendition of the problem
var firstFunction = function(cb){
    var limit = 1;
    return function() {
        if(limit === 1) {
            limit++;
            cb();
        }
    };
};

var secondFunction = function() {
    console.log('Second Function done');
};

var innerFunction = firstFunction(secondFunction);
innerFunction();
innerFunction();


// Second portion of the problem.
var firstFunction = function(iterations, cb){
    var limit = 1;
    return function() {
        if (limit < iterations) {
            limit++;
            cb();
        } else if (limit === iterations) {
            limit++;
            cb();
            console.log('STAHHP!');
        }
    };
};

var secondFunction = function() {
    console.log('Second Function run.');
};

var innerFunction = firstFunction(5, secondFunction);
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();
innerFunction();






