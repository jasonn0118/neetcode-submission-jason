class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyC = prices[0]
        let sellC;
        let max = 0;
        for (let i = 1; i < prices.length; i++) {
            if (buyC >= prices[i]) {
                buyC = prices[i];
            } else {
                sellC = prices[i];
                if (max < (sellC - buyC)) {
                    max = sellC - buyC;
                }
            }
            console.log({buyC, sellC, max})
        }
        return max;
    }
}
