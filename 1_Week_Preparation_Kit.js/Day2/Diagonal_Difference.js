/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
  // Write your code here
  let principal = 0;
  let secondary = 0;
  for (let i = 0; i < arr.length; i++) {
    principal += arr[i][i];
    secondary += arr[i][arr.length - i - 1];
  }
  return Math.abs(principal - secondary);
}

let answer = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
console.log(answer);
