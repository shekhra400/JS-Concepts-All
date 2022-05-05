"use strict";

/***********************************Anagram Problem*******************************************/

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*Solution 1- easy one with converting to object map and check*/
/*
function anagrams(stringA, stringB) {
  stringAMap = createCleanMap(stringA);
  stringBMap = createCleanMap(stringB);
  if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length)
    return false;
  for (const char in stringAMap) {
    if (stringAMap[char] !== stringBMap[char]) {
      return false;
    }
    return true;
  }
}

function createCleanMap(str) {
  const cleanStr = str.replace(/[^\w\s]/gi, "").toLowerCase();
  const strMap = {};
  for (const char of cleanStr) {
    strMap[char] = (strMap[char] || 0) + 1;
  }
  return strMap;
}
*/

function anagrams(stringA, stringB) {
  const stringAClr = createCleanStr(stringA);
  const stringBClr = createCleanStr(stringB);
  return stringAClr === stringBClr;
}

function createCleanStr(str) {
  return str
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
}

anagrams("rail safety", "fairy tales"); // true

/***********************************Capitalize Problem*******************************************/

// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/* Solution 1 - extract first character and capitalize and concat with rest of word */
/* function capitalize(str) {
  const strMap = str.split(" ");
  const words = [];
  for (const word of strMap) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  //console.words(words);
  return words.join(" ");
}

*/

/* solution 2- direct loop on string and change to uppercase*/
function capitalize(str) {
  let capStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || str[i - 1] === " ") {
      capStr += str[i].toUpperCase();
    } else {
      capStr += str[i];
    }
  }
  return capStr;
}

capitalize("a lazy fox"); // 'A Lazy Fox'

/***********************************Chunk Problem*******************************************/
// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

/*Solution 1 by pushing at end */
/* function chunk(array, size) {
  const chunkedArray = [];

  for (const item of array) {
    const lastChildArr = chunkedArray[chunkedArray.length - 1];
    if (!lastChildArr || lastChildArr.length === size) {
      chunkedArray.push([item]);
    } else {
      lastChildArr.push(item);
    }
  }
  return chunkedArray;
}
*/

/*Solution 2 by slicing at index and push in another array */

function chunk(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index = index + size;
  }
  return chunkedArray;
}

chunk([1, 2, 3, 4, 5], 2); // [[ 1, 2], [3, 4], [5]]

/***********************************Max char Problem*******************************************/
// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

/* Solution 1 - When count char/numbers in array use mapping objects*/

function maxChar(str) {
  const charSet = {};
  let maxChar = "";
  let maxCount = 0;
  str.split("").forEach((char) => {
    charSet[char] = (charSet[char] || 0) + 1;
  });
  console.log(str, charSet);
  for (const char in charSet) {
    if (maxCount < charSet[char]) {
      max = char;
      maxCount = charSet[char];
    }
  }
  return max;
}

maxChar("abcccccccd"); // "c"

/***********************************Palindrome Problem*******************************************/

// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* Solution 1*/

/* function palindrome(str) {
  return str === str.split("").reverse().join("");
}
*/
/* Solution 2 - use Array.every when exit on false condition*/

function palindrome(str) {
  return str.split("").every((item, i, arr) => {
    return item === arr[arr.length - i - 1];
  });
}
/* Solution 1*/

palindrome("abba"); // true

/***********************************Reverse int Problem*******************************************/
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverseNum = n.toString().split("").reverse().join("");
  return parseInt(reverseNum) * Math.sign(n);
}

module.exports = reverseInt;

/***********************************Reverse string Problem*******************************************/
// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/* My solution & solution 1*/
/* function reverse(str) {
  return str.split("").reverse().join("");
}
*/

/* Solution 2 */
/* function reverse(str) {
  let reversedString = "";
  for (const char of str) {
    reversedString = char + reversedString;
  }
  return reversedString;
} */

/* Solution 3 - best to showcase the knowledge of JS helper method */
function reverse(str) {
  debugger;
  return str.split("").reduce((reversedString, char) => char + reversedString);
}

reverse("hello"); //'olleh'

/***********************************Step/Pattern Problem*******************************************/
// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* Solution 1 - using for loop and print

*/
function steps(n) {
  for (let i = 0; i < n; i++) {
    let star = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        star += "#";
      } else {
        star += " ";
      }
    }
    console.log(star);
  }
}

/***********************************Find Vowel Problem*******************************************/
// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* Solution 1- using array.include method to check */
/* function vowels(str) {
  const vowelsList = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of str.toLowerCase()) {
    if (vowelsList.includes(char)) {
      count++;
    }
  }
  return count;
}
*/

/* Solution 2- using regex match method */
function vowels(str) {
  //const vowelList = /^[aeiou]$/i.test(str);
  const vowelList = str.match(/[aeiou]/gi) ?? [];
  console.log(vowelList);
  return vowelList.length;
}

module.exports = vowels;

/***********************************End Problem*******************************************/
