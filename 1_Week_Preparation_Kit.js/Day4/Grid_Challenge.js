/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
  // Write your code here
  let rowSorted = [];
  for (let i = 0; i < grid.length; i++) {
    let arr = grid[i].split("").sort().join("");
    rowSorted.push(arr);
  }
  //   console.log(rowSorted);

  for (let j = 0; j < rowSorted.length; j++) {
    let k = 1;
    while (k < rowSorted.length) {
      if (rowSorted[k - 1][j] > rowSorted[k][j]) {
        return "NO";
      }
      k++;
    }
  }
  return "YES";
}

// let answer = gridChallenge(["abc", "ade", "efg"]);
let answer = gridChallenge(["fbc", "ade", "efg"]);
console.log(answer);
