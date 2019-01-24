"use strict";

/*-----------------------Implementing Call & Apply---------------------------*/

// Function.prototype.myApply = function(thirdObject,args){
// this = thirdObject;

// }


/*****************Swap 2 numbers*********************************** */

function swap(x,y){
  x = x + y;  // x now becomes 15
  y = x - y;  // y becomes 10
  x = x - y;
}
swap(2,3) //output - 3,2

/*****************implement palidrome*********************************** */

//Scenario 1 using JS string core functions

function palidrome(str){
  var lhs = str.toLowerCase().replace(/\s/g,'');
  var rhs = lhs.split('').reverse().join('');
  return (lhs === rhs);
}

console.log(palidrome('A man a plan a canal Panama'));


//Scenario 2

function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g,'');
  var len = str.length;
  for (var i = 0; i < len/2; i++) {
    if (str[i] !== str[len - 1 - i]) {
        return false;
    }
  }
  return true;
 }
 console.log(palindrome("A man a plan a canal Panama"));

/*****************implement Factorial*********************************** */

// Scenario 1 using recursion

 function factorialize(num) {
  if (num < 0)
        return -1;
  else if (num == 0)
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
factorialize(5);


// Scenario 1 using for loop

function factorialize(num) {
  var result = 1
  if (num === 0 || num === 1)
    return 1;
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorialize(5));

/*****************************Longest word in String**************************/

//Scenario 1 - converting into array and using for loop.
function longestWord(str){
  var strArr = str.split(' ');
  var longestWord = '';
  for(var i=0;i<strArr.length;i++){
    if(strArr[i].length > longestWord.length){
      longestWord = strArr[i];
    }
  }
  return longestWord;
}

var lw = longestWord('this is the longest wordsss');
console.log(lw);


//Scenario 2 - using array sort.

function longestWordSort(str){
  var strArr = str.split(' ');
  var sortArr = strArr.sort((a,b) => a.length-b.length);
  // console.log(sortArr[sortArr.length-1]);
  return sortArr[sortArr.length-1];
}
longestWordSort('this is the words'); //output - words

//Scenario 2 - using reduce method.


function longestWordReduce(str){
  var strArr = str.split(' ');
  return strArr.reduce(function(result,item){
    if(item.length>result.length){
      result = item;
    }
    return result;
  },'')
}
console.log(longestWordSort('shekhar shukla pankhuri')); //output - pankhuri


/********************Find largest element in array************************** */

// scenario 1 - using reduce method of array

function findLargest(arr){
  return arr.reduce(function(largest,item){
    if(item>largest){
      largest = item;
    }
    return largest;
  },0)
}

console.log(findLargest([32,32,24,5,6,4]));

/***********************Find a word/substr in a string************************/

// scenario 1- Using ES6 method includes
function searchSubstrIncludes(){
  var str = 'this is a word';
  var searchTerm = 'word';
  console.log('substr using includes - ',str.includes(searchTerm));
}
searchSubstrIncludes();

// scenario 2- using indexof
function searchSubstrIndexof(){
  var str = 'this is a word';
  var searchTerm = 'word';
  console.log('substr using indexof - ',(str.indexOf(searchTerm)!=-1));
}
searchSubstrIndexof();

// scenario 3-
function searchSubstrSearch(){
  var str = 'this is a word';
  var searchTerm = 'word';
  console.log('substr using search - ',(str.search(searchTerm)!=-1));
}
searchSubstrSearch();


/*************************Find element in an array****************************/

// scenario 1- Using ES6 method includes
function searchArrayIncludes(){
  var arr = [1,3,45,6,23,'abc'];
  var searchElement = 45;
  console.log('Array search using includes - ',arr.includes(searchElement));
}
searchArrayIncludes();

// scenario 2- using indexof
function searchArrayIndexof(){
  var arr = [1,3,45,6,23,'abc'];
  var searchElement = 45;
  console.log('Array search using indexof - ',(arr.indexOf(searchElement)!=-1));
}
searchArrayIndexof();

/*************************Remove duplicates from array****************************/


// scenario 1 - using Set from ES6

const names = ['John', 'Paul', 'George', 'Ringo', 'John', 'George'];

let unique = [...new Set(names)];
console.log(unique); // 'John', 'Paul', 'George', 'Ringo'

// scenario 2 using filter

let uniqueFilter = names.filter((item,i) => {
  return (names.indexOf(item)==i)
});

console.log(uniqueFilter);


// scenario 3 - using foreach

function removeDups(names) {
  let unique = {};
  names.forEach(function(item) {
    if(!unique[item]) {
      unique[item] = true;
    }
  });
  return Object.keys(unique);
}

console.log(removeDups(names)); // // 'John', 'Paul', 'George', 'Ringo'
