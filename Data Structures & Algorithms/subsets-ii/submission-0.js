class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b)

        const res = []

        const backtrack = (i, subset) => {
            res.push([...subset])

            for(let j = i; j < nums.length; j ++){
                if(j > i && nums[j] === nums[j - 1]){
                    continue
                }

                subset.push(nums[j])
                backtrack(j + 1, subset)
                subset.pop()

            }
        }

        backtrack(0, []);

        return res;

    }
}
