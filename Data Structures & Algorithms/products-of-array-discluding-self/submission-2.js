class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);
        let pointer = 0;

        while (pointer < nums.length) {
            for(let i = 0; i < output.length; i++){
                if(i === pointer) continue;
                output[pointer] *= nums[i];
            }
            pointer++;
        }

        return output;

    }
}
