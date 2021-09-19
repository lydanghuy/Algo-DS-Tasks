// https://leetcode.com/problems/binary-watch/
// #Backtracking

/**
 * @param {number} turnedOn
 * @return {string[]}
 */
const readBinaryWatch = (turnedOn) => {
  // i <= 3 -> hours
  // i > 3 -> minutes
  const values = [1, 2, 4, 8, 1, 2, 4, 8, 16, 32];
  const selections = new Array(10);
  const validValues = [0, 1];
  const results = [];

  // currentCount = number of 1's appear
  const backtracking = (index, currentCount, h, m) => {
    for (let i = 0; i < validValues.length; i++) {
      selections[i] = validValues[i];
      if (selections[i] == 1) {
        currentCount++;
        if (index <= 3) {
          h += values[index];
        } else {
          m += values[index];
        }
      }

      if (index === values.length - 1) {
        if (currentCount === turnedOn && h < 12 && m < 60) {
          let minutes = m > 9 ? m : `0${m}`;
          let time = h + ':' + minutes;
          results.push(time);
        }
      } else {
        backtracking(index + 1, currentCount, h, m);
      }
    }
  };

  backtracking(0, 0, 0, 0);

  return results;
};


console.log(readBinaryWatch(1));