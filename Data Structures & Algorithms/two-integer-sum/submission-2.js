class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let p1 = 0;
        let p2 = p1+1;

        while(p1 <= p2){
            if(nums[p1] + nums[p2] === target){
                return [p1,p2];
            }
            if(p2 < nums.length){
                p2++;
            } else{
                p1++;
                p2 = p1+1;
            }
        }

    }
}
