//Trap Rain water
var maxProfit = function (prices,fee) {
  let maxProfit = 0;
  let profit = 0;
  
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit = (prices[i] - prices[i - 1]) - 2;
      if(profit > 0){
        maxProfit += profit;
      }
    }
  }
  return maxProfit;
};

let ans = maxProfit([1, 3, 2, 8, 4, 9],2);
console.log(ans);
