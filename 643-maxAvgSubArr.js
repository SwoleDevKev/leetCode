// Instructions

/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/
// Answer

var findMaxAverage = function(nums, k) {

    if (nums.length === 1) return nums[0]
   
    let rightPtr = k
    let avg = -Infinity
    let i =0
    let sum = 0

    for (let i=0 ; i<k; i++){
        sum += nums[i]
    }

    while (rightPtr <= nums.length){
      const max =  sum/k
      if (max > avg ) avg = max 
      sum = sum - nums[i] + nums[rightPtr];
      rightPtr++;i++
    }

 return avg
};