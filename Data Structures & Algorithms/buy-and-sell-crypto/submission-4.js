class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let left = 0;

        let maxProfit  = 0;

        for(let right = 0; right < prices.length; right++){

            if(prices[right] < prices[left]){
                left = right
            }
            maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        }
        return maxProfit;
    }
}
