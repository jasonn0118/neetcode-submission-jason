class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sortedObj = {};
        for (const s of strs) {
            const sortedStr = s.split('').sort().join('');
            if(!sortedObj[sortedStr]){
                sortedObj[sortedStr] = [];
            }
            sortedObj[sortedStr].push(s)
        }
            console.log(Object.values(sortedObj))
        return Object.values(sortedObj)
    }
}
