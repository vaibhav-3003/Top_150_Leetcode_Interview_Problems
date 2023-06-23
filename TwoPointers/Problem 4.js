//Container With Most Water

var maxArea = function (height) {
  let res = 0;
  let l = 0;
  r = height.length - 1;

  while (l < r) {
    let area = (r - l) * Math.min(height[l], height[r]);
    res = Math.max(res, area);

    if (height[l] < height[r]) {
      l += 1;
    } else {
      r -= 1;
    }
  }
  return res;
};