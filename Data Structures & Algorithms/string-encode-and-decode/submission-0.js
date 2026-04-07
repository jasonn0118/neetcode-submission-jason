class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let arr = new Array();
        let res = "";

        for (const str of strs) {
            arr.push(str.length)
            arr.push(",")
        }
        arr.push("#");
        for (const str of strs) {
            arr.push(str);
        }

        for (let i = 0; i < arr.length; i++) {
            res += arr[i];
        }

        return res;


    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let subStr;
        let counter = []
        let number = ""

        for (let i = 0; i < str.length; i++) {
            if (str[i] === "#") {
                subStr = str.slice(i + 1, str.length)
                break;
            }
            if (str[i] === ",") {
                counter.push(Number(number))
                number = "";
                continue;
            }
            number += str[i];
        }
        let pointer = 0;
        for (let i = 0; i < counter.length; i++) {
            res.push(subStr.substring(pointer, pointer + counter[i]));
            pointer += counter[i];
        };

        return res

    }
}
