//Roman to integer
let s = "MCMXCIV";
const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

let ans = 0;

for(let i=0;i<s.length;i++) {
    if(map[s[i]] < map[s[i+1]]){
        ans-=map[s[i-1]];

    }else{
        ans+=map[s[i]];
    }    
}
console.log(ans);
