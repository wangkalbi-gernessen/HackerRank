/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
  // Write your code here
  // Finding the maximum element of arr
  //   let max = Math.max(...arr);
  //   console.log(max);

  // Initializing count_array with 0
  let count_array = new Array(100).fill(0);
  console.log(count_array);
  // Mapping each element of input_array as an index of count_array
  for (let num of arr) {
    count_array[num] += 1;
  }
  return count_array;
}

let answer = countingSort([4, 3, 12, 1, 5, 5, 3, 9]);
console.log(answer);
