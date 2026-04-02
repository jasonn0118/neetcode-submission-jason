class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        /**
         * 1. Find a row range first.(need to be binary search as well)
         * 2. Find a target in that row column.
         */
        let top = 0, bottom = matrix.length - 1;
        while (top <= bottom) {
            let mRow = top + Math.floor((bottom - top) / 2);
            if (matrix[mRow][0] <= target && matrix[mRow][matrix[mRow].length - 1] >= target) {
                let l = 0, r = matrix[mRow].length - 1;
                while (l <= r) {
                    let m = l + Math.floor((r - l) / 2);
                    if (matrix[mRow][m] === target) return true;
                    matrix[mRow][m] < target ? l = m + 1 : r = m - 1;
                }
                return false;
            }

            matrix[mRow][0] > target ? bottom = mRow - 1 : top = mRow + 1;
        }
        return false;
    }
}
