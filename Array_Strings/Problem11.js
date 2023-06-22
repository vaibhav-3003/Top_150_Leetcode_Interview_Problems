// H-index
var hIndex = function (citations) {
  citations.sort((a, b) => b - a);

  for (i = 0; i < citations.length; i++) {
    if (i >= citations[i]) {
      return i;
    }
  }
  return citations.length;
};