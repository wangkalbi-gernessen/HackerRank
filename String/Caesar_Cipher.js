/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  let res = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
      res += String.fromCharCode(((char.charCodeAt(0) + k - 97) % 26) + 97);
    } else if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
      res += String.fromCharCode(((char.charCodeAt(0) + k - 65) % 26) + 65);
    } else {
      res += char;
    }
  }
  return res;
}

// let answer = caesarCipher("middle-Outz", 2);
let answer = caesarCipher("There's-a-starman-waiting-in-the-sky", 3);
console.log(answer);
