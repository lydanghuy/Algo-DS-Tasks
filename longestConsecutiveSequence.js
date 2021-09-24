// https://leetcode.com/problems/longest-consecutive-sequence/

var longestConsecutive = function (nums) {
  let m = new Set(nums),
    maxLen = 0;
  console.log(m);
  for (let i = 0; i < nums.length; i++) {
    let currLen = 1,
      currNum = nums[i];
      
    /* this if check is to increase the execution speed as we dont want the loop to run 
   for a number which is already a part of the sequence */
    if (!m.has(nums[i] - 1)) {
      while (m.has(currNum + 1)) {
        currLen += 1;
        currNum += 1;
      }
    }
    maxLen = Math.max(currLen, maxLen);
  }

  return maxLen;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));