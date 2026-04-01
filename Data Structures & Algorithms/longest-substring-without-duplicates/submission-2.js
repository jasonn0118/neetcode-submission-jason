class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let lc = 0;
        for (const i in s) {
            let sub = new Set();
            for (let j = i; j < s.length; j++) {
                if (sub.has(s[j])) {
                    break;
                }
                sub.add(s[j]);
            }
            lc = Math.max(lc, sub.size)
        }
        return lc;
    }
}
