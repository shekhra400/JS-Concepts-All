"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", function() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

// keyboard interaction keyup, keydown, keypress;

document.addEventListener("keydown", closeModal);

// two sum : return 2 indices whose sum is equal to a target: single loop
console.log(
  "**************************Two Sum*************************************"
);
function add(arr, target) {
  let obj = {};
  for (let i = 0; i <= arr.length; i++) {
    const diff = Math.abs(target - arr[i]);
    if (obj[diff]) {
      return [obj[diff], i];
    } else {
      obj[arr[i]] = i;
    }
  }
}

console.log(add([1, 3, 5], 8));

console.log(
  "**************************Two Array reverse Sum*************************************"
);

function SumReverse(arr1, arr2) {
  const newArr1 = arr1.reverse().join("");
  const newArr2 = arr2.reverse().join("");
  const newSum = (+newArr1 + +newArr2).toString();
  const newArr = newSum.split("");
  const FinalArr = newArr.reverse();
  return FinalArr;
}

console.log(SumReverse([2, 4, 3], [5, 6, 4]));

console.log(
  "**************************Palindrome*************************************"
);

function isPalindrome(x) {
  var arrX = x.toString().split("");
  var arrRev = arrX.reverse();
  var newArrx = arrRev.join("");
  return x == newArrx;
}

const pal = "refer";
console.log(pal + " is palindrome is " + isPalindrome(pal));

console.log(
  "**************************Implementation of Bind/ Polyfill*************************************"
);

//*************************implementation of Bind/ Polyfill *//

let name = {
  firstname: "Pankhuri",
  lastname: "Srivastava"
};

let printName = function(city, state) {
  console.log(
    this.firstname + " " + this.lastname + ", " + city + ", " + state
  );
};

let printMyName = printName.bind(name, "Lucknow");
printMyName("UP");

// implement Your own myBind function

Function.prototype.myBind = function(...args) {
  const obj = this;
  const params = args.slice(1); // remove first param from args array and remaining will be our otherargs
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2]); // apply because second argument we want in array
  };
};

let printMyName2 = printName.myBind(name, "Lucknow");
printMyName2("UP");

//

// it will print 3, 3, 3
console.log("*************** will print 3,3,3**************");
for (var i = 0; i < 3; i++) {
  let x = i;
  const log = () => {
    console.log("i's value ", x);
  };
  setTimeout(log, 100);
}

// it will print 0, 1, 2
console.log("*************** will print 0,1,2**************");
for (let j = 0; j < 3; j++) {
  const log = () => {
    console.log("j's value ", j);
  };
  setTimeout(log, 100);
}

// it will print 3, 3, 3
console.log("*************** will print 3, 3, 3**************");
let k;
for (k = 0; k < 3; k++) {
  const log = () => {
    console.log("k's value ", k);
  };
  setTimeout(log, 100);
}

console.log(
  "*************************Polyfill for Map*************************"
);

console.log("*****original MAP****");
const arrMap = [1, 2, 3];
let result = arrMap.map(item => item * 2);
console.log("map method gives " + result);

console.log("*****custom MAP****");

Array.prototype.customMap = function(callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) newArr.push(callback(arr[i], i, arr));

  return newArr;
};

let resultNew = arrMap.customMap(item => item * 2);
console.log("custom Map method gives " + resultNew);

console.log(
  "*************************Polyfill for Filter*************************"
);

console.log("*****original Filter****");
const arrFilter = [9, 1, 2, 3, 0, 7, 6];
let resultF = arrFilter.filter(item => item > 2);
console.log("Filter method gives " + resultF);

console.log("*****custom Filter****");

Array.prototype.customFilter = function(callback) {
  let arr = this;
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) newArr.push(arr[i]);
  }

  return newArr;
};

let resultFNew = arrFilter.customFilter(item => item > 2);
console.log("custom Filter method gives " + resultFNew);

console.log(
  "*************************Polyfill for Reduce*************************"
);

console.log("*****original Reduce****");
const arrReduce = [1, 2, 3, 4];
let resultR = arrReduce.reduce((a, b) => a + b, 5);
console.log("Reduce method gives " + resultR);

console.log("*****custom Reduce****");

Array.prototype.customReduce = function(callback, initialValue) {
  var accumulator = initialValue === undefined ? undefined : initialValue;
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    if (accumulator !== undefined) {
      //console.log(accumulator);
      accumulator = callback(accumulator, arr[i], i, arr);
    } else {
      accumulator = arr[i];
    }
  }

  return accumulator;
};

let resultRNew = arrReduce.customReduce((a, b) => a + b, 5);
console.log("custom Reduce method gives " + resultRNew);

console.log(
  "*************************Polyfill for ForEach*************************"
);

console.log("*****original ForEach****");
const arrFE = [1, 2, 3, 4];
console.log("ForEach method gives ");
arrFE.forEach(item => console.log(item));

console.log("*****custom ForEach****");

Array.prototype.customforEach = function(callback) {
  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
};

console.log("custom forEach method gives ");
arrFE.customforEach(item => console.log(item));

console.log("******************");

function two() {
  var isvalid = 1;
}
function one() {
  var isvalid = true;
  two();
}

var isvalid = false;
var a = one();

console.log(a);

console.log("******************");
