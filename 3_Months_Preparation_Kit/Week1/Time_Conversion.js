/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  // Write your code here
  let res;
  let hour = s[0] + s[1];
  let minutes = s[3] + s[4];
  let seconds = s[6] + s[7];
  if (s.includes("PM")) {
    hour = parseInt(hour);
    if (hour < 12) {
      hour += 12;
    }
    res = `${hour}:${minutes}:${seconds}`;
  } else {
    if (hour >= 12) {
      hour -= 12;
      hour = `0${hour}`;
    }
    res = `${hour}:${minutes}:${seconds}`;
  }
  return res;
}

// let answer = timeConversion("10:05:45PM");
let answer = timeConversion("12:05:45AM");
console.log(answer);
