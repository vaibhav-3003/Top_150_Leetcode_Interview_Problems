// Gas Station
var canCompleteCircuit = function (gas, cost) {
  let gasSum = gas.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  let costSum = cost.reduce(function (acc, curr) {
    return acc + curr;
  }, 0);

  if (gasSum < costSum) {
    return -1;
  }
  let total = 0;
  let res = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];

    if (total < 0) {
      total = 0;
      res = i + 1;
    }
  }
  return res;
};