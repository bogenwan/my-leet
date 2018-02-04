/*
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

 * @param {string} s
 * @return {number}
 */

let string = 'pwwkew';

function substring (s) {
  let start = 0, end;
  let seen = {};
  let maxLength = 0;
  for (end = 0; end < s.length; end++) {
    if (!seen.hasOwnProperty([s[end]])) {
      seen[s[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    } else {
      start = Math.max(start, seen[s[end]] + 1);
      seen[s[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }
  return maxLength;
}
// console.log(substring(string));
