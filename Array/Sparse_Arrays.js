/*
 * Complete the 'matchingStrings' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY stringList
 *  2. STRING_ARRAY queries
 */

function matchingStrings(stringList, queries) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < stringList.length; i++) {
    if (map.has(stringList[i])) {
      map.set(stringList[i], map.get(stringList[i]) + 1);
    } else {
      map.set(stringList[i], 1);
    }
  }
  //   console.log(map);
  let output = [];
  for (let j = 0; j < queries.length; j++) {
    if (map.has(queries[j])) {
      output.push(map.get(queries[j]));
    } else {
      output.push(0);
    }
  }
  return output;
}

// let answer = matchingStrings(["ab", "ab", "abc"], ["ab", "abc", "bc"]);
// let answer = matchingStrings(
//   ["aba", "baba", "aba", "xzxb"],
//   ["aba", "xzxb", "ab"]
// );
// let answer = matchingStrings(["def", "de", "fgh"], ["de", "lmn", "fgh"]);
let answer = matchingStrings(
  [
    "abcde",
    "sdaklfj",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
    "na",
    "asdjf",
    "na",
    "basdn",
    "sdaklfj",
    "asdjf",
  ],
  ["abcde", "sdaklfj", "asdjf", "na", "basdn"]
);
console.log(answer);
