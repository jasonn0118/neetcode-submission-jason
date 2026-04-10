class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        let obj = {};
        let stack = [];
        let result = [];

        for (const i in nums2) {
            while (stack.length && stack[stack.length - 1] < nums2[i]) {
                obj[stack.pop()] = nums2[i];
            }
            stack.push(nums2[i]);
        }
        if (stack.length) {
            for (const i of stack) {
                obj[i] = -1;
            }
        }
        
        for(const i of nums1){
            result.push(obj[i])
        }

        return result;

    }
}
