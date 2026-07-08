class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        let res = 0;

        const backtrack = (i, subset) => {
            let xor = 0;
            for(let num of subset) xor ^= num;
            res += xor;

            for(let j = i; j < nums.length; j ++){
                subset.push(nums[j]);
                backtrack(j + 1, subset);
                subset.pop();
            }

        }
        
        backtrack(0, [])
        return res;
    }
}
