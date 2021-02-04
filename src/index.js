
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {return [];}
  return matrix.reduce((prev,itm, i) => {
    if ((i % 2) != 0) {itm.reverse()}
    prev.push(...itm);
    return prev;
  },[]); //.sort((a,b) => a-b);
}
