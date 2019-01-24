"use strict";


/******************Recursion :Fabonacci Implementation**************************/

function Fabonacci(n){
  if(n<=1){
    return 1;
  }else{
    return Fabonacci(n-1) + Fabonacci(n-2);
  }
}
console.log(Fabonacci(5));

//Reverse a string using functions

function reverseString(str){
  return str.split('').reverse().join('');
}
console.log(reverseString('shekhar'));

//Reverse a string using recursion

function reverseStringRecursion(str){
  if(str=== ''){
    return str;
  }else{
    return reverseStringRecursion(str.substr(1))+str[0];
  }
}

console.log(reverseStringRecursion('shukla'));


//Reverse a array using recursion

function reverseArrayRecursion(arr,newArr=[]){
  if(arr.length== 0){
    return newArr;
  }else{
    newArr.push(arr.pop());
    return reverseArrayRecursion(arr,newArr);
  }
}

console.log(reverseArrayRecursion([1,2,3,4,5]));
