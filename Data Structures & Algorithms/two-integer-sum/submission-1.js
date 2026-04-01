class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // Naive solution O(n^2)
        let firstPointerIndex, secondPointerIndex;

        for(let i = 0; i < nums.length; i++){
            firstPointerIndex = i;
            for(let j = i+1; j < nums.length; j++){
                if(nums[j] === target - nums[firstPointerIndex])
                {
                    secondPointerIndex = j;
                    return [firstPointerIndex, secondPointerIndex]
                }
            }
        }
    
    }
}
