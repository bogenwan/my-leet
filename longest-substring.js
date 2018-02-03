/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}
 */

let str = 'pwwkew'

// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) {
//     return s.length;
//   }

//   let left, right, maxLength = 0;
//   for (left = 0, right = 1; r < s.length; r++) {
//             i = s.lastIndexOf(s[r], r-1);
//         if (i >= 0) {
//             maxLen = Math.max(maxLen, r - l);
//             l = Math.max(l, i + 1);
//         }
//   }
//       return Math.max(maxLen, r - l);
// };
// var lengthOfLongestSubstring = function(s) {
//     var maxLen,
//         l,
//         r;

//     if (s.length < 2) {
//         return s.length;
//     }

//     maxLen = 0;

//     for (l = 0, r = 1; r < s.length; r++) {
//         k = s.lastIndexOf(s[r], r-1);
//         if (k >= 0) {
//             maxLen = Math.max(maxLen, r - l);
//             l = Math.max(l, k + 1);
//         }
//     }
//     return Math.max(maxLen, r - l);
// };
// console.log(lengthOfLongestSubstring(str));


const add = (num) => {
  let test = 1
  for (i = 0; i < num; i++){
    total = test + i
  }
  return total
}
aj = 'johnny'
console.log(aj)
console.log(add(10))

// var lengthOfLongestSubstring = function(s) {
//   if (s.length < 2) {
//     return s.length;
//   }
//   let hash = {};
//   let result = [];
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i; j < s.length; j++) {
//       let currVal = s[j];
//       if (!hash[currVal]) {
//         hash[currVal] = currVal;
//         count++;
//       } else {
//         result.push(count);
//         count = 0;
//         hash = {};
//         break;
//       }
//     }
//   }
//   return Math.max(...result);
// };
