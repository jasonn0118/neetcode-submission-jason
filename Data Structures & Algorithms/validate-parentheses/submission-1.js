class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = new Array();


        for(let i =0; i < s.length; i++){
            switch(s[i]){
                case "[":
                case "{":
                case "(":
                    stack.push(s[i]);
                    break;
                case "}":
                    if(stack.pop() !== "{") return false;
                    break;
                case "]":
                    if(stack.pop() !== "[") return false;
                    break;
                case ")":
                    if(stack.pop() !== "(") return false;
                    break;
            }

        }
        if(stack.length !== 0) {
            return false;
        }
        return true;
    }
}
