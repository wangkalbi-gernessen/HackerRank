/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function findMedian(arr) {
  // Write your code here
  let sorted = arr.sort((a, b) => a - b);
  //   console.log(sorted);
  let low = 0;
  let high = sorted.length - 1;
  let mid = low + (high - low) / 2;
  //   console.log(mid);
  return arr[mid];
}

// let answer = findMedian([0, 1, 2, 4, 6, 5, 3]);
let answer = findMedian([5, 3, 1, 2, 4]);
console.log(answer);
