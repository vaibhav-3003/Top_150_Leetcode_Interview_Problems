//Product except self

var productExceptSelf = function (nums) {
  let product = 1;
  let ans = [];

  nums.forEach((e) => {
    product *= e;
  });

  nums.forEach((e, index) => {
    if (e === 0) {
      let p = 1;
      for (let i = 0; i < nums.length; i++) {
        if (i !== index) {
          p *= nums[i];
        }
      }
      ans.push(p);
    } else {
      let a = product / e;
      ans.push(a);
    }
  });

  return ans;
};


