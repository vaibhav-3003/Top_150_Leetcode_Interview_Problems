// Rotate Array
let nums = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

for(let i=0;i<k;i++){
    nums.unshift(nums[nums.length-1]);
    nums.pop();
}

console.log(nums);


