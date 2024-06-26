// Instructions 
/*

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]

*/

// Answer

var moveZeroes = function(nums) {
    let size = nums.length;
     for (let i = 0; i < size; i++) {
         if (nums[i] === 0) {
             nums.splice(i, 1);
             nums.push(0);
             i--;
             size--;
         }
     }
    return nums;
};