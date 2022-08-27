
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) return [];
  for (let i = 1; i < matrix.length; i += 2) {
    matrix[i] = matrix[i].sort((a, b) => b - a);
  }
  return arr = [].concat(...matrix);
}
