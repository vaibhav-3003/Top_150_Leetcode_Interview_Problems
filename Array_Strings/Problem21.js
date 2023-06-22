//Find the first occurence
var strStr = function (haystack, needle) {
  let n = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let window = haystack.slice(i, i + n);
    if (window === needle) {
      return i;
    }
  }
  return -1;
};
