class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const obj = new Array(26).fill(0)

        for(let i = 0; i<s.length; i++){
            obj[s.charCodeAt(i) - 'a'.charCodeAt()]++;
            obj[t.charCodeAt(i) - 'a'.charCodeAt()]--;
        }

        return obj.every((x) => x===0)
    }
}
