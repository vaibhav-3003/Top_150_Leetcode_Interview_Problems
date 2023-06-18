// Remove Element

var removeElement = function (nums, val) {
  let j = 0;

  while (j < nums.length) {
    if (nums[j] !== val) {
      j++;
    } else {
      let c = nums[j];
      nums[j] = nums[nums.length - 1];
      nums[nums.length - 1] = c;

      nums.pop();
    }
  }

  return nums.length;
};