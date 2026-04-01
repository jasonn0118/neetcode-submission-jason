class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let objs = {};
        let objt = {};
        if(s.length !== t.length) return false;

        for(let i = 0; i < s.length; i++){
            objs[s[i]] = (objs[s[i]] || 0) + 1;
            objt[t[i]] = (objt[t[i]] || 0) + 1;
        }

        for(const key in objs){
            if(objs[key]!== objt[key]){
                return false
            }
        }
        return true;

    }
}
