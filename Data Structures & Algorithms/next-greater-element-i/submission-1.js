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

        for (const i in nums1) {
            result[i] = obj[nums1[i]] || -1;
        }

        return result;

    }
}
