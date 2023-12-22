/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  let plus = 0;
  let minus = 0;
  let zero = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zero++;
    } else if (arr[i] > 0) {
      plus++;
    } else {
      minus++;
    }
  }
  let positives = (plus / arr.length).toFixed(6);
  let negatives = (minus / arr.length).toFixed(6);
  let zeros = (zero / arr.length).toFixed(6);
  console.log(positives);
  console.log(negatives);
  console.log(zeros);
}

let answer = plusMinus([-4, 3, -9, 0, 4, 1]);
console.log(answer);
