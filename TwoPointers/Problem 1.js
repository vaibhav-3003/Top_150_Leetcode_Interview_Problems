// Valid Palindrome
let removeNonAlphaNumeric = (s) => {
  const alphaNumeric = "abcdefghijklmnopqrstuvwxyz0123456789";
  const chars = s.split("");
  const filteredChars = chars.filter((char) => alphaNumeric.includes(char));
  return filteredChars.join("");
};
var isPalindrome = function (s) {
  let inLower = s.toLowerCase();
  let filteredString = removeNonAlphaNumeric(inLower);
  let array = filteredString.split("");

  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let c = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = c;
  }
  let palindromeString = array.join("");

  if (palindromeString === filteredString) {
    return true;
  } else {
    return false;
  }
};