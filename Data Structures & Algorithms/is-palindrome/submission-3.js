class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let filteredStr = s.toLowerCase().replaceAll(' ', '');
        let signs = ['?', ',', '.',"'",":"];
        let p1 = 0;
        let p2 = filteredStr.length - 1;

        while (p1 <= p2) {
            if(filteredStr[p1] === filteredStr[p2]){
                p1++;
                p2--;
            } else if(signs.includes(filteredStr[p1])){
                p1++;
            } else if(signs.includes(filteredStr[p2])){
                p2--;
            } else{
                return false;
            }
        }

        return true;
    }
}
