// https://leetcode.com/problems/sum-of-all-subset-xor-totals/

/**
 * @param {number[]} nums
 * @return {number}
 */

const subsetXORSum = (nums) => {
  const selections = new Array(nums.length);
  const validValues = [0, 1];
  let resultSum = 0;

  const backtrack = (index, currentSum) => {
    for (let i = 0; i < validValues.length; i++) {
      selections[index] = validValues[i];
      if (selections[index] === 1) {
        currentSum = currentSum ^ nums[index];
      }
      if (index === nums.length - 1) {
        resultSum += currentSum;
      } else {
        backtrack(index + 1, currentSum);
      }
    }
  }
  backtrack(0, 0);

  return resultSum;
};

console.log(subsetXORSum([1, 3]));