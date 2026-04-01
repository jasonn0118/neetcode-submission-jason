class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // Better solution
    hasDuplicate(nums) {
        const setValue = new Set();

        for(let i = 0; i < nums.length; i++){ 
            if(setValue.has(nums[i])){
                return true;
            }else{
                setValue.add(nums[i]);
            }
        }
        return false;
    }
}
