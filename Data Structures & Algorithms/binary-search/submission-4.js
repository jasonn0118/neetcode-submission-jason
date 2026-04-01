class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0;
        let r = nums.length - 1;

        let cIndx = Math.floor((r + l + 1) / 2);

        while (l < r) {
            console.log(cIndx);
            if (nums[cIndx] === target) {
                return cIndx;
            } else if (nums[cIndx] > target) {
                r = cIndx - 1;
            } else {
                l = cIndx;
            }
            
            cIndx = Math.floor((r + l + 1) / 2);
        }

        return nums[cIndx] === target ? cIndx : -1;
    }
}
