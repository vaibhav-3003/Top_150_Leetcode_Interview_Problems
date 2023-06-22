//Reverse words in a string
var reverseWords = function (s) {
  let arr = s.trim().split(" ");
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== "") {
      ans.push(arr[i]);
    }
  }
  return ans.reverse().join(" ");
};