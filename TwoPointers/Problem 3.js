// Two Sum II - Input Array Is Sorted

var twoSum = function (numbers, target) {
  let l = 0;
  r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum === target) {
      return [l + 1, r + 1];
    } else if (sum > target) {
      r -= 1;
    } else if (sum < target) {
      l += 1;
    }
  }
};
