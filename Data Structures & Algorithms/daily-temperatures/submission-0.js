class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        let res = new Array(temperatures.length).fill(0);
        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
                const [stackT, stackInd] = stack.pop();
                res[stackInd] = i - stackInd;
            }
            stack.push([temperatures[i], i]);
        }
        return res;

    }
}
