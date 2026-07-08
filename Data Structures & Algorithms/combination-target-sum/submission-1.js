class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {

        let res = []

        const backtrack = (i, subset, total) =>{
           
            if(total === target){
                res.push([...subset])
                return 
            }

            if(total > target){
                return 
            }

            for(let j = i; j < nums.length; j ++){
                subset.push(nums[j])
                backtrack(j, subset, total + nums[j])
                subset.pop();
            }

        }

        backtrack(0, [], 0)

        return res;

    }


}
