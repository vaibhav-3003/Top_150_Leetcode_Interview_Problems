// Integer to Roman
var intToRoman = function (num) {
  const map = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let res = "";
  //Iterate in the reverse order
  for (let i of Object.keys(map).reverse()) {
    if (Math.floor(num / map[i])) {
      let count = Math.floor(num / map[i]);
      for (let j = 0; j < count; j++) {
        res += i;
      }
      num = num % map[i];
    }
  }
  return res;
};