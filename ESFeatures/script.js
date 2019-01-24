"use strict";


/*****************************Arrow/Fat arrow functions Functions******************************* */
//Scenario 1 , when we use arrow func in the callbacks it gives the reference of outer env

document.addEventListener('click',function(){
  console.log(this); //output document object
})

document.addEventListener('click',()=>{
  console.log(this); //output windows object
})

/* function binding can't work with the arrow functions */

var invoice = {
  val:'123',
  print:function(){
    console.log(this.val);
  }
}
invoice.print.bind({val:321})(); // output= 123

var invoice = {
  val:'123',
  print:() => {
    console.log(this);
  }
}
invoice.print.bind({val:321})(); //output - undefined, bcoz this points to windows and we can't use bind for
// arrow functions

//Scenario 3, Arrow functions does not have prototype

var obj1 = {a:1};
var fn1 = function(){return 1;}
var fn2 = () => 1;
Object.setPrototypeOf(obj1,{b:2})
console.log(obj1.hasOwnProperty('prototype')); //false
console.log(fn1.hasOwnProperty('prototype')); //true
console.log(fn2.hasOwnProperty('prototype')); //false

/***********************Default Params *******************/

//Passing default params to the functions if no arguments are passed it will take default one

// example 1 with argument length

function sum(a,b,c=3){
  console.log(arguments.length);//output - 2 because only 2 args passed in the function call
  return (a+b+c);
}

sum(1,2);

// example2 with param from outer context via variable or function

var cParam = () => Math.random(1,2,3,4,5);
var bParam = 2;
function sum1(a ,b=bParam ,c = cParam()){
  return a+b+c;
}

console.log(sum1(1));

/***********************Default Params *******************/

class parentClass{
  constructor(){
    this.job = 'Engineer';
  }
}


class childClass extends parentClass{
  constructor(){
    super();
    this.name = 'shekhar';
  }
  print(){
    console.log('"ES6 Print - ', this.name,this.job);
  }
}

var childObj = new childClass();
childObj.print();

//Example - Static keyword is the class based attribute not object based

// class Abc {
//   static count = function(){return 10};
// }

// console.log(Abc.count());

/***********************************Symbols*********************************/

//Symbols are the new datatype in ES6 used to create unique identifier each time.
//which we can't access or see.its a unique in its own term.

var UNIQUE_ID_1 = Symbol('event1');
var UNIQUE_ID_2 = Symbol('event1');
console.log(UNIQUE_ID_1.toString());
console.log(UNIQUE_ID_1===UNIQUE_ID_2); //false


//example 2- using symbol "for" which create new symbol if it doesnt exists.

var s1 = Symbol.for('event');
var s2 = Symbol.for('event');
console.log(s1===s2);


/*****************************Object methods added***************************/

/*
1 - Object.setPrototypeOf(child,parent); is method to make the prototype/parent

2 - Object.assign(targetObj,objA,objB);  all object merge and overrite the targetObject

3 - Object.is(obj1,obj2); it compares 2 values with "==="
e.g. - var amount = NaN;var a = 0,b= -0;
(amount === amount) // returns false
Object.is(amount,amount) returns true
(a === b) // returns true
Object.is(a,b) returns false
*/


/************************String added methods************************** */

/*

1 - String.startsWith()
e.g. var str = 'santa claus';
str.startsWith('santa'); true
str.endsWith('claus'); true
str.includes('ta'); true
  */


/************************Number added methods************************** */

/*

1 - Number.parseInt()
2 - Number.isNaN()
e.g. var num = 'NaN';
      isNan(num); true because it typecast it to NaN
      Number.isNan(num); false because it typecast it to string and check.
  */

/************************Function extension added methods************************** */

/*
  It returns the name of the function added.
  let fn = function calc(){

  }
  console.log(fn.name); //calc

  let fn = function (){

  }
  console.log(fn.name); //fn , it returns the var name in case of anonymous functions

*/


/**************************************Promises***************************** */
/*
Promises are the object which is waiting for an async operation to complete.Once its completed
promises are either resolved(return response) or rejected(throw error).
*/

//e.g- 1 withe settimeout aysnc operation

var setTimePromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    var dummyAsyncData = 123;
    console.log('resolving...');
    resolve(dummyAsyncData);
  }, 3000);
})
setTimePromise.then(function(data){
  console.log('"resolved Promise Data - "',data)
})


// e.g. 2 promise resolve/reject in a function

function demoPromise(){
  var data = '';
  return new Promise(function(resolve,reject){
    if(data){
      resolve(data);
    }else{
      reject('not a number');
    }
  })
}
var PromiseFunc = demoPromise();
PromiseFunc.then(function(data){
  console.log('Promise Func resolved',data);
},function(error){
  console.log('Promise Func rejected',error);
})

//e.g. 3  chaining of Promises

var chainPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
    console.log('resolving...');
    resolve('first promise');
  }, 3000);
})
chainPromise.then(function(data){
  console.log('"resolved chain Promise 1 - "',data)
  return 'shekhar';
}).then(function(data){
  console.log('"resolved chain Promise 2 - "',data)
  throw 'some error 1'; // throws error here only goes into catch and stop execution.
}).then(function(data){
  console.log('"resolved chain Promise 3 - "',data)
}).catch(function(error){
  console.log('"Chain Promise error"',error);
});


// else.g. 4 Promise.all implementation
var prom1 = new Promise((resolve,reject) => {
    throw 'some error';
    resolve('prom1 return value');
});
var prom2 = new Promise((resolve,reject) => {
  resolve('prom2 return value');
})
var prom3 = new Promise((resolve,reject) => {
  resolve('prom3 return value');
})

Promise.all([prom1,prom2,prom3]).then(function(data){
  console.log('"Promise All resolved - ',data);
},function(error){
  console.log('"Promise All error - ',error);

})



/**************************************Iterators***************************** */
/*
Iterators are the object which let us iterate through array, string,objects.


/************************************Generators**************************** */
/*
Generators are the special functions which yields(return) values multiple times until
the last return statement is executed.It stops the executions for async calls to yield the
return values from yield function
-It is build on top of iterator, works with next function call
*/

function* process(){
  var abc = yield 1000;
  yield 2000;
}

let itr = process()
console.log(itr.next()); //output -  { value: 1000, done: false }
console.log(itr.next()); //output -  { value: 2000, done: false }
console.log(itr.next()); //output -  { value: undefined, done: true }


//e.g2. return value passed from next()

function* show(){
  var arr = [yield,yield,yield];
  console.log('arr yield',arr);
}

var iter = show();
iter.next(1);
iter.next(2);
iter.next(3);
iter.next(30);


//e.g.3 - yield expanded array, this is known as iteration delegation

function* expandedArray(){
  yield* [1,2,3]; // this will let it yield multiple times inside the array
}

var itr1 = expandedArray();
console.log('expandedArray',itr1.next()); // { value: 1, done: false }
console.log('expandedArray',itr1.next()); // { value: 2, done: false }
console.log('expandedArray',itr1.next()); // { value: 3, done: false }

// e.g 3 throwing error in generator in try catch block

function* checkError(){
  try {
    yield 1;
    yield 2;
  } catch (error) {
    console.log(error);// custom error
  }
}

var errorObj = checkError();
console.log('errorObj',errorObj.next());
console.log('errorObj',errorObj.throw('custom error'));
console.log('errorObj',errorObj.next());


/***********************Map and WeakMaps************************** */

// Maps are used to create object of key-value pair where we can assign object for keys

let employee1 = {name:'jake'};
let employee2 = {name:'janet'};

var employee = new Map();
employee.set(employee1,'1234');
employee.set(employee2,'4321');
console.log('map example',employee.get(employee2));


/***********************Sets and Weaksets************************** */

//A Set is a collection of values, where each value may occur only once.
// Weaksets are the sets which only takes objects not any other type
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };

set.add(john);
set.add(pete);
set.add(pete);
console.log('sets', set.values());


