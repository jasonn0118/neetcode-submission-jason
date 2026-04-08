class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0, r = heights.length - 1;
        let max = 0;
        while (l < r) {
            let min = Math.min(heights[l], heights[r])
            let candidate = min * (r - l);
            if (max < candidate) {
                max = candidate;
            }
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
    }
}
