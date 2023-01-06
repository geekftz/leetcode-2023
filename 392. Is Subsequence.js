// Example 1:

// Input: s = "abc", t = "ahbgdc"
// Output: true
// Example 2:

// Input: s = "axc", t = "ahbgdc"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;

  for (let k = 0; k < t.length; k++) {
    const tk = t[k];

    if (s[i] === tk) {
      i++;
    }
  }

  return i === s.length;
};

// const s = "abc",
//   t = "ahbgdc";
const s = "axc",
  t = "ahbgdc";

const res = isSubsequence(s, t);
console.log("🚀 --> file: 392. Is Subsequence.js:33 --> res", res);
