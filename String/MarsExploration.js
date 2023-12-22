/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i += 3) {
    if (s[i] !== "S") {
      count++;
    }
    if (s[i + 1] !== "O") {
      count++;
    }
    if (s[i + 2] !== "S") {
      count++;
    }
  }
  return count;
}

// let answer = marsExploration("SOSTOT");
let answer = marsExploration("SOSSPSSQSSOR");
console.log(answer);
