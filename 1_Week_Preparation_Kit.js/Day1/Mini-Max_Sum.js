/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a - b);
  let smallest = sorted
    .slice(0, 4)
    .reduce((accumlator, currentValue) => accumlator + currentValue, 0);
  let largest = sorted
    .slice(1)
    .reduce((accumlator, currentValue) => accumlator + currentValue, 0);
  console.log(smallest, largest);
}

// let answer = miniMaxSum([1, 3, 5, 7, 9]);
let answer = miniMaxSum([1, 2, 3, 4, 5]);
console.log(answer);
