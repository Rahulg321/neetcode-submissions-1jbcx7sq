class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;

        let profit;

        while (right < prices.length){
            if(prices[left] < prices[right]){
            profit = prices[right] - prices[left]
            maxProfit = Math.max(maxProfit, profit)
            }else{
                left = right
            }
            right += 1
        }

        return maxProfit
    }
}
