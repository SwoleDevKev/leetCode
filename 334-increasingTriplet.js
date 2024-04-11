// Instructions
/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 */
//Answer 

const increasingTriplet = function(nums) {
    let a = Infinity, b = Infinity ;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= a) a = nums[i];
        else if (nums[i] <= b) b = nums[i];
        else  return true;
    }
    return false;
};