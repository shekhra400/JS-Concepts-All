"use strict";

/***********************************Measure performance of Program*******************************************/

function printNemo(data) {
  const t0 = performance.now();
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "shekhar") {
      console.log("found name");
    }
  }
  const t0 = performance.now();
  console.log("performance time: ", t1 - t0);
}

printNemo(["pank", "shekhar"]); // it show the performance time for this program in milliseconds

/***********************************Merge 2 sorted arrays(pending)*******************************************/

// --- Directions
/* Given two sorted arrays, return the merged sorted arrays,if one of the arr is empty return the courterpart

input - var arr1=[1,2,5];var arr2=[1,3,8];
output - [1,2,3,5,8]
When 2 array merge or concat, try using while loop and increment till array ends
*/

function mergeSortedArray(arr1, arr2) {
  const mergerArray = [];
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length || j < arr2.length) {
    if (!arr2[j] || arr1[i] < arr2[j]) {
      mergerArray.push(arr1[i++]);
    } else {
      mergerArray.push(arr2[j++]);
    }
  }

  return mergerArray;
}

//mergeSortedArray([1, 2, 5], [2, 3, 8]);
mergeSortedArray([1, 2, 5, 43, 222, 3221, 4321], [2, 3, 8, 32, 123]);

mergeSortedArray([1, 2, 5], [2, 3, 8]);

/***********************************First Recurring Character*******************************************/

function findRecurringChar(arr) {
  recurringMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (recurringMap[arr[i]]) {
      return arr[i];
    } else {
      recurringMap[arr[i]] = (recurringMap[arr[i]] || 0) + 1;
    }
  }
  return false;
}

findRecurringChar([1, 2, , 324, 5, 2, 34, 3, 2, 11, 3, 4, 6, 7]);

/***********************************LinkedList simple core operations (basis)*******************************************/

/***********************************Dynamic Programming using Memoization*******************************************/

/*
Memoization technique using closure implemented
*/

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
console.log(memoize(2)); // second output will be cached -> 4

/***********************************Dynamic Programming for fabonnaci******************************************/

/*
For DP follow:
-bottom up processing
*/

/*
Using dynamic programming we can reduce the time complexity from O(2^n) -> O(n)
*/
let calculation = 0;
function fibonacciMemoized() {
  const cache = {};
  return function fib(n) {
    calculation++;
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fibMemoized = fibonacciMemoized();
console.log("calculation output ->", fibMemoized(10));
console.log("calculation ->", calculation); // fib(10)-> 55 with exponentially lesser calculations

/***********************************Popular DP questions*******************************************/
/*
1. House Robber    
2. Best Time to Buy and Sell Stock  
3. Climbing Stairs    
*/
/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************AAAAA*******************************************/

/***********************************Measure performance of Program*******************************************/

/***********************************Measure performance of Program*******************************************/

/***********************************Measure performance of Program*******************************************/

/***********************************Measure performance of Program*******************************************/

/***********************************Measure performance of Program*******************************************/

/***********************************Measure performance of Program*******************************************/
