class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const numStack = [];


        for (let i = 0; i < tokens.length; i++) {
            let val = Number(tokens[i])
            if (!Number.isNaN(val)) {
                numStack.push(val)
            }
            else {
                numStack.push(this.isOperator(tokens[i], numStack.pop(), numStack.pop()));
            }
        }

        return numStack.pop();



    }

    isOperator(oper, val1, val2) {

        switch (oper) {
            case "+":
                return val2 + val1;
            case "-":
                return val2 - val1;
            case "*":
                return val2 * val1;
            case "/":
                return Math.trunc(val2 / val1);
            default:
                return;
        }
    }
}
