// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let objS = {};
  let objT = {};
  let i = 0;

  while (i < s.length) {
    if (objS[s[i]]) {
      if (objS[s[i]] !== t[i]) {
        return -1;
      }
    } else {
      objS[s[i]] = t[i];
    }

    if (objT[t[i]]) {
      if (objT[t[i]] !== s[i]) {
        return -1;
      }
    } else {
      objT[t[i]] = s[i];
    }

    i++;
  }

  return true;
};

const s = "egg",
  t = "add";

const res = isIsomorphic(s, t);
console.log("🚀 --> file: 205. Isomorphic Strings.js:25 --> res", res);
