/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i == nums.length){
    return 1;
  };
  return nums[i]*product(nums, i+1);
};

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestWord = 0) {
  if (i == words.length){
    return longestWord;
  };
  longestWord = Math.max(words[i].length, longestWord);
  return longest(words, i+1, longestWord);
};

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length ==0){
    return '';
  }else{
    return str.charAt(0) + everyOther(str.substring(2));
  };
};

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  let lI = i;
  let rI = str.length - i - 1;
  if (lI >= rI){
    return true;
  }if(str[lI] !== str[rI]){
    return false;
  };
  return isPalindrome(str, i+1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx == arr.length){
    return -1;
  }if(arr[idx] === val){
    return idx;
  };
  return findIndex(arr, val, idx+1);
};

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = 0, newStr = '') {
  if (newStr.length === str.length) return newStr;
  newStr += str[str.length - 1 - i];
  return revString(str, i + 1, newStr);
};

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strings = [];
  for(let key in obj){
    if(typeof obj[key] === 'string'){
      strings.push(obj[key]);
    }if(typeof obj[key] === 'object'){
      strings.push(...gatherStrings(obj[key]));
    };
  };
  return strings;
};

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

// function binarySearch(arr, val) {

// }

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
};
