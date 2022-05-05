"use strict";

/*--------------------------------Closures-----------------------------------*/

/*
  Closures are the combination of functions bundled together, where inner
  function has access to the props of outer function even after outer function
  is returned and removed from the execution stack.
 */

// function greet(welcomeMsg){
//   return function(name){
//     console.log(welcomeMsg+ ' ' + name);
//   }
// }
/* after greet objis created all the variables and props of greet are removed
    once its execution context is removed,  but in closures we can use them.
*/
//  var sayHi = greet('Hello');
//  sayHi('Ram'); // Hello Ram

//  example 2

function buildArray() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log(i);
    });
  }
  return arr;
}

// to make loop available in the execution context we use iife and create its
// own execution context
function buildArray2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}
var fs = buildArray();
var fs2 = buildArray2();

/*
  output - 3 in all the 3 cases because the functions above are initialized
  only not invoked and when they are invoked the value of i = 3
  if we use let instead of var we get the intended output - 0,1,2
  let is block scoped so in every loop it reinitialized and intact in the scope
  hence we will get the value of i in every loop intact in the exe. context.
*/
// fs[0](); // 3
// fs[1](); // 3
// fs[2](); // 3
// fs2[0](); // 1
// fs2[1](); // 2
// fs2[2](); // 3

/*********************Singleton Class/function using closures*****************/

var createSingletonObject = (function () {
  var instance;
  function createInstance(name) {
    this.name = name;
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = new createInstance("name");
      }
      return instance;
    },
  };
})();

var instance1 = createSingletonObject.getInstance();
var instance2 = createSingletonObject.getInstance();
console.log(instance1 === instance2); //true

/*********************Closures Real world scenario- memoization*****************/

function memoization() {
  const cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("not cached");
      cache[n] = n * n;
      return cache[n];
    }
  };
}
const memoize = memoization();
console.log(memoize(2)); // -> 4
console.log(memoize(2)); //
