/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!map.has(a[i])) {
      map.set(a[i], 1);
    } else {
      map.set(a[i], map.get(a[i]) + 1);
    }
  }

  let res;
  for (let [key, value] of map) {
    if (value === 1) {
      res = key;
    }
  }
  return res;
}

let answer = lonelyinteger([1, 2, 3, 4, 3, 2, 1]);
console.log(answer);
