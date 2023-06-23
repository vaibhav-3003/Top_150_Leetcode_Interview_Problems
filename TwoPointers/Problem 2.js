// Is Subsequence

var isSubsequence = function (s, t) {
  let j = 0,
    count = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[j]) {
      count += 1;
      j += 1;
    }
  }
  return count === s.length ? true : false;
};
