class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedObj = {};
        let arr = []
        let count = 0;
        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            let sortedStr = [...str].sort().join("");
            if (!sortedObj.hasOwnProperty(sortedStr)) {
                sortedObj[sortedStr] = count;
                arr[count] = [str];
                count++;
            } else {
                arr[sortedObj[sortedStr]].push(str);
            }
        }

        return arr;
    }
}
