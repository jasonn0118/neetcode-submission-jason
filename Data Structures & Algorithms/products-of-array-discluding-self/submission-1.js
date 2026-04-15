class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = [];

        for (let i = 0; i < nums.length; i++) {
            let result = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i === j) continue;

                result = result * nums[j]
            }
            output[i] = result;
        }
        return output;
    }
}
