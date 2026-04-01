class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let p1 = 0;
        let p2 = numbers.length - 1;
        let result = [];

        for(let i = 0; i < numbers.length; i++){
            if(numbers[p1] + numbers[p2] === target){
                result.push(p1+1, p2+1)
                break;
            }
          if(numbers[p1] + numbers[p2] > target){
            p2--;
          } else if(numbers[p1] + numbers[p2] < target){
            p1++;
          }
        }
        return result;
    }
}
