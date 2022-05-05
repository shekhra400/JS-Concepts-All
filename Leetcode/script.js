"use strict";

/***********************************Dynamic Programming -House Robber(leetcode-198)*******************************************/

/*
Rob house which are not adjacent and rob max amount
Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

link for explanation: https://www.youtube.com/watch?v=xlvhyfcoQa4
*/

function houseRobber(houses = []) {
  //if no house or empty
  if (houses === null || houses.length === 0) {
    return 0;
  }
  // for only 1 house return that house
  if (houses.length === 1) {
    return houses[0];
  }

  //if houses =2 return the max one. For more than 2 houses calculate max(n-1,n-2+n)

  const runningTotal = [];
  runningTotal[0] = houses[0];
  runningTotal[1] = Math.max(houses[0], houses[1]);
  for (let i = 2; i < houses.length; i++) {
    runningTotal[i] = Math.max(
      runningTotal[i - 1],
      runningTotal[i - 2] + houses[i]
    );
  }
  return runningTotal[runningTotal.length - 1];
}

console.log("Max houseRobber ->", houseRobber([8, 1, 3, 10, 7]));

/***********************************Dynamic Programming -Coin Change Problem Leetcode*******************************************/

/***********************************Two sum problem - Leetcode*******************************************/
/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
Input: nums = [3,2,4], target = 6
Output: [1,2]

*/

/* Solution1 -basic solution-nonefficient */

var twoSumBasic = function (nums, target) {
  var result = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j]) {
        result = [i, j];
        break;
      }
      if (result.length > 0) {
        break;
      }
    }
  }
  return result;
};
twoSum([2, 7, 11, 15], 9); // output - [0, 1]

/* Solution-2 -improved solution efficient 0(n) by using maps technique*/

function twoSumAdvance(nums, target) {
  const sumMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (sumMap[target - nums[i]] !== undefined) {
      //  if ((target - nums[i]) in sumMap) {
      return [sumMap[target - nums[i]], i];
    } else {
      sumMap[nums[i]] = i;
    }
  }
}
twoSum([2, 7, 11, 15], 9); // output - [0, 1]

/***********************************Implement Array flatten function*******************************************/

/***********************************Implement min buy max sell problem- leetcode*******************************************/
/* Solution-1 -brute force using 2 loops*/
var maxProfitStock = function (prices) {
  var a = prices;
  max = 0;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] < a[j]) {
        max = Math.max(max, a[j] - a[i]);
      }
    }
  }
  return max;
};

maxProfitStock([5, 2, 6, 1, 4]); // 4

/* Solution-2 -2 pointer technique
 * use 2 pointer and understand till where we should have loop (implement later)
 */

function maxProfitStock(stocks) {
  let left = 0,
    right = 1;
  let maxProfit = 0;
  while (right < stocks.length) {
    if (stocks[left] < stocks[right]) {
      const profit = stocks[right] - stocks[left];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      l = r;
    }
    r = r + 1;
  }
  return maxProfit;
}

maxProfitStock([5, 2, 6, 1, 4]); // 4
/* Solution-2 -using minsofar and maxprofit approach*/

function maxProfitStock(stocks) {
  let min = stocks[0];
  let maxProfit = 0;
  for (let i = 1; i < stocks.length; i++) {
    if (stocks[i] < min) {
      min = stocks[i];
    } else {
      maxProfit = Math.max(maxProfit, stocks[i] - min);
    }
  }
  return maxProfit;
}

maxProfitStock([5, 2, 6, 1, 4]); // 4

/***********************************53. Maximum Subarray- leetcode*******************************************/

/**
 * Given an integer array nums, find the contiguous subarray (containing at least one number)
 *  which has the largest sum and return its sum.
 * @param {number[]} nums
 * @return {number}
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: [4,-1,2,1] has the largest sum = 6.
 */
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let curSum = 0;
  nums.forEach((item) => {
    if (curSum < 0) {
      curSum = 0;
    }
    curSum = curSum + item;
    maxSum = Math.max(curSum, maxSum);
  });
  return maxSum;
};

/*Sol 2*/
var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let partialSum = 0;

  for (let item of nums) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
};

maxSubArray([[-2, 1, -3, 4, -1, 2, 1, -5, 4]]); // output -6

/******************************************************************************/

/******************************************************************************/

/******************************************************************************/
