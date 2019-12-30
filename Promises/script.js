"use strict";


/*-----------------------------HOISTING--------------------------------------*/

/*
All variables and function declarations are moved at the top of the current scope
or current function.It basically assign the memory space for a variable.
*/

// Scenario 1 (when function is direct definition type)
console.log(a); // output  - undefined
abc();  // output  - abc
function abc(){
  console.log('abc');
}
var a = 2;

// Scenario 1 (when function is declaration type only function var is hoisted not its definition)
abcd();  // output  - abcd is not a function
var abcd = () => {
  console.log('abcd');
}

//Scenario 3 (when using let keyword) using let it assign memory on declaration
// no hoisting appies on it
function abcde(){
  console.log(xyz);
  let xyz = 'shekhar';
}
abcde(); // output - xyz is not defined

/*-----------------------------SCOPING----------------------------------------*/

/*
  scoping determines the accessibility of the var, function
  Global scope - var declare in window scope
  Local scope - var declare in functionall scope
  Lexical scope - var declare and its value derived once code gets compiled or
  ececuted it determines the scope of it.
*/

function b(){
  console.log(myVar);
}
var myVar = 1;
b();// output - 1


function a(){
  function b (){
    console.log(myVar2);
  }
  var myVar2 = 2;
  b();
}
a(); // output - 2

/*-----------------------------IIFE----------------------------------------*/

/*
  Function created the way that it executes where its created.They are self
  running functions.It creates its own execution context and nothing goes in
  global level.Hence security and integrity maintained.All he libraries use iife
  to wrap their code.
*/

(function(name){
  console.log(this);
  console.log('iife function executed by-', name);
}('shekhar'));


/*-----------------------------Call,Apply,Bind--------------------------------*/

/*
  Call, Apply and Bind the special functions which are used to set "this"
  value explicitly
*/

function abc(a,b,c){
  console.log(a+b+c+this.d);
}
var objD = {
  d:10,
  dPrint: function(){
    console.log(this.d);
  }
}
//  Implementing Bind - it creates a copy of function and then we can execute
 var out = abc.bind(objD);
 out(1,2,3);

//  implementing Call and Apply - Call and apply directly execute the function, the
//  only diff is in call we supply comma seperated arguments and in apply array of
//  arguments.

abc.call(objD,1,2,4);
abc.apply(objD,[1,2,5]);

//It does function currying also

function add(a,b){
  console.log('sum', a+b);
}

var outABC = add.bind(this,1); //here 1 is 1st param of func => a=1
outABC(2); // and 2 is the 2nd param , b=>2


/*--------------------------Prototypal Inheritence---------------------------*/

/*
  Prototype is an object attached to each and every object we create in the
  memory.Which again has another protoype object attached and so on.this is
  called prototypal chain/inheritence.
  Object can access all the props of the parent prototype

 */

 var person = {
   firstname:'default',
   lastname:'default',
   getfullname(){
     console.log(this.firstname, this.lastname );
   }
 }

 var john = {
   firstname: 'john',
   lastname: 'doe'
 }

 Object.setPrototypeOf(john,person); //function to add prototype of obj
 john.getfullname();

function Person(name,age){
  this.name = name;
  this.age = age;
}

//Adding a method is prototype saves memory as it is attached in prototype of
// the object, not in all the object created.Also if we create 100 instances of
// the function constructor it will only create 1 method in prototype.
Person.prototype.getFullName = function(){
  console.log(this.name);
}
// Assigning method after creating obj is also applicatble. we can use that
// method  even after object is being created
var user  = new Person('shekhar',29);
Person.prototype.getAge = function(){
  console.log(this.age);
}
user.getAge();



/*-------------------------------Callback functions--------------------------*/

/*
  Callback functions are the func you give to another function, to be run when
  function is finished.
*/

function tellMeWhenDone(callBack){
  var a = 1;
  var b = 2;
  callBack(); // this runs the callback which i give to this function as param.
}
tellMeWhenDone(function(){
  console.log('i am done');
})


tellMeWhenDone(function(){
  console.log('i am done again');
})

/*------------------------------functional Programming--------------------------*/

//implementing filter function

function filterCustom(arr,fn) {
  var resultArr = [];
  for (let i = 0; i < arr.length; i++) {
      if(fn(arr[i])){
        resultArr.push(arr[i]);
      }

  }
  return resultArr;
}

//implementing map function

function filterCustom(arr,fn) {
  var resultArr = [];
  for (let i = 0; i < arr.length; i++) {
        resultArr.push(fn(arr[i]));

  }
  return resultArr;
}

var abc = [1,2,3,4,5];
var outputArray = filterCustom(abc,function(item){
  return item!=3;
})
console.log(outputArray)


/**
 * Creating the function in the js core default method
 */

 String.prototype.isLengthGreaterThan = function(limit=5){
   return this.length > limit;
 }
var  data = new String('john');
data.isLengthGreaterThan()
 console.log('john'.isLengthGreaterThan(6));

//  isLengthGreaterThan , this method is being added in the library and all
// strings can use it


/*********************Javascript Object and Prototype------------------------*/

