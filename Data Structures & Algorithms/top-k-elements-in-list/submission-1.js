class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const bucket = [];
        let countObj = new Map();

        for (const num in nums) {
            if (countObj.has(nums[num])) {
                let temp = countObj.get(nums[num]);
                countObj.set(nums[num], temp + 1)
            } else {
                countObj.set(nums[num], 1);
            }
        }
        for (let [num, count] of countObj) {
            bucket[count] = (bucket[count] || new Set()).add(num);
        }

        let result = []

        for (let i = bucket.length; i >= 0; i--) {
            if (bucket[i]) {
                result.push(...bucket[i]);
            }
            if (result.length === k) break;


        }
        return result;


    }
}
