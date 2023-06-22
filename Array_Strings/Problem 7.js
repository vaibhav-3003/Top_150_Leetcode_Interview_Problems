// Best time to sell and buy stock
let prices = [2, 1, 2, 1, 0, 1, 2];
let l=0,maxProfit = 0;

for(r=1;r<prices.length;r++){
    while(prices[r]<prices[l]){
        l+=1
    }
    maxProfit = Math.max(maxProfit,prices[r]-prices[l]);
}

console.log(maxProfit)