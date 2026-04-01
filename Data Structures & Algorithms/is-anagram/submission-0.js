class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length !== t.length) return false;

        const newSortS = s.split('').sort();
        const newSortT = t.split('').sort();

        for(let i = 0; i < s.length; i++){
            if(newSortS[i] !== newSortT[i]){
                return false;
            }
        }
        return true;

    }
}
