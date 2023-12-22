function gemstones(arr) {
  // Write your code here
  let map = new Map();
  for (let i = 0; i < arr.length; i++) {
    let set = new Set();
    for (let j = 0; j < arr[i].length; j++) {
      set.add(arr[i][j]);
    }

    for (let value of set) {
      if (!map.has(value)) {
        map.set(value, 1);
      } else {
        map.set(value, map.get(value) + 1);
      }
    }
  }

  console.log(map);
  let count = 0;
  for (let [key, value] of map) {
    if (value === arr.length) {
      count++;
    }
  }

  return count;
}

// let answer = gemstones(["abcdde", "baccd", "eeabg"]);
let answer = gemstones(["abc", "abc", "bc"]);
console.log(answer);
