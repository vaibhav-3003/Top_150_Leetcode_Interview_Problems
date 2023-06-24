//Minimum Size Subarray Sum

var minSubArrayLen = function (target, nums) {
  let l = 0,
    total = 0;
  let res = Infinity;

  for (let r = 0; r < nums.length; r++) {
    total += nums[r];
    while (total >= target) {
      res = Math.min(r - l + 1, res);
      total -= nums[l];
      l += 1;
    }
  }

  return res === Infinity ? 0 : res;
};
