/*
 * Complete the 'anagram' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function anagram(s) {
  // Write your code here
  if (s.length % 2 !== 0) {
    return -1;
  }
  let half = s.length / 2;
  let left = s.slice(0, half);
  let right = s.slice(half);
  console.log(left);
  console.log(right);

  let newLeft = left.split("");
  let newRight = right.split("");
  for (let i = 0; i < newLeft.length; i++) {
    for (let j = 0; j < newRight.length; j++) {
      if (newLeft[i] === newRight[j]) {
        newRight.splice(j, 1);
        break;
      }
    }
  }
  return newRight.length;
}

// let answer = anagram("abccde");
let answer = anagram("aaabbb");
// let answer = anagram("ab");
// let answer = anagram("abc");
// let answer = anagram("mnop");
// let answer = anagram("xyyx");
// let answer = anagram("xaxbbbxx");
// let answer = anagram("fdhlvosfpafhalll");
console.log(answer);
