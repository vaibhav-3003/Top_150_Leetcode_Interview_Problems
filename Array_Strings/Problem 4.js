// Remove Duplicates from Sorted Array II

let arr = [1, 1, 2, 3, 2, 3, 4, 3, 2, 5, 4, 3, 1, 2, 3];

let count = {};

for (let i = 0; i < arr.length; i++) {
  count[arr[i]] = (count[arr[i]] || 0) + 1;
}

arr.length = 0;

for (let i of Object.keys(count)) {
  if(count[i]>=2){
    for(j=0;j<2;j++){
        arr.push(parseInt(i));
    }
  }else{
      arr.push(parseInt(i));
  }
}

arr.sort((a, b) => a - b);

console.log(count,arr);