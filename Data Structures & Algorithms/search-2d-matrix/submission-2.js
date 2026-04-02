class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /**
         * 1. Find a row range first.
         * 2. Find a target in that row column.
         */

        for (let i = 0; i < matrix.length; i++) {
            let rowLength = matrix[i].length;
            if (matrix[i][0] <= target && matrix[i][rowLength - 1] >= target) {
                console.log("I'm here")
                let l = 0, r = rowLength - 1;
                while (l <= r) {
                    let m = l + Math.floor((r - l) / 2);
                    console.log({ l, r, m }, '>>>>>>M?')
                    if (matrix[i][m] === target) {
                        return true;
                    }

                    if (matrix[i][m] < target) {
                        l = m + 1;
                    } else {
                        r = m - 1;
                    }
                }
                return false;
            }
        }
        return false;
    }
}
