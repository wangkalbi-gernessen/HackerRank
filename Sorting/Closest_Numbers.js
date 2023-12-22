/*
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a - b);
  let smallestDiff = sorted[arr.length - 1];
  for (let i = 1; i < sorted.length; i++) {
    let diff = Math.abs(sorted[i] - sorted[i - 1]);
    smallestDiff = diff < smallestDiff ? diff : smallestDiff;
  }
  console.log(smallestDiff);

  let output = [];
  for (let j = 1; j < sorted.length; j++) {
    if (Math.abs(sorted[j] - sorted[j - 1]) === smallestDiff) {
      output.push(sorted[j - 1], sorted[j]);
    }
  }
  return output;
}

let answer = closestNumbers([5, 2, 3, 4, 1]);
// let answer = closestNumbers([5, 4, 3, 2]);
// let answer = closestNumbers([
//   -20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594,
//   266854,
// ]);
console.log(answer);
