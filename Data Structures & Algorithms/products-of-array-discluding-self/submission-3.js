class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let output = new Array(nums.length).fill(1);
        let pre = 1, post = 1;

        for (let i = 0; i < nums.length; i++) {
            output[i] *= pre;
            pre = pre * nums[i];
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            output[i] *= post;
            post = post * nums[i];
        }

        return output;

    }
}
