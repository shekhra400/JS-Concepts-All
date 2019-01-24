"use strict";


/*************Scoping of let in multiple function calls***********************/

//Scenario 1 where we execute the function in its own exec. context
function MultipleCall(){
	let count = 0;
		return (count++);
}
MultipleCall();
MultipleCall();
MultipleCall();
console.log('"result scenario 1 - "',MultipleCall());


//Scenario 2 where we execute the function in IIFE to make closure for creating
// another execution context

var MultipleCallInIIfeObj = (function MultipleCallInIIfe(){
	let count = 0;
	return function(){
		return (count++);
	}
})();

MultipleCallInIIfeObj();
MultipleCallInIIfeObj();
MultipleCallInIIfeObj();
console.log('"result scenario 2 - "',MultipleCallInIIfeObj());


/*************Scoping of let and var in ForLoop/SettTimeOut***************************/

/* When we declare the function it doesnot create its own execution context, only when we run it it creates the
 same.So in case of var, for loop is executed completely but for let it creates closure for each loop.
 */

//Scenario 1 using var which gets updated with the loop and returns 3
var myArray = [];
for (var i = 0; i < 3; i++) {
  myArray.push(function(){console.log(i);});
  setTimeout(function() {
      console.log('Value of i  with var: ' + i);
  },500);
}
console.log('"result scenario with var - "',myArray[0]());


//Scenario 2 using let which gets updated with the loop and returns index = 0
var myArray = [];
for (let i = 0; i < 3; i++) {
  myArray.push(function(){return i;});
  setTimeout(function() {
      console.log('Value of i  with let: ' + i);
  },500);
}
console.log('"result scenario with let - "',myArray[0]());
