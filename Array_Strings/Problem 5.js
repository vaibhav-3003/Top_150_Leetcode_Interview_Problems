// Majority Element

let arr = [1,1,2,2];

let count = {},maxValue=0,ans=0;

for(let i of arr){
    count[i] = (count[i] || 0) + 1;
}

maxValue = Math.max(...Object.values(count));

Object.keys(count).map((e)=>{
    if(count[e]===maxValue){
        ans = parseInt(e);
    }
})

console.log(ans);