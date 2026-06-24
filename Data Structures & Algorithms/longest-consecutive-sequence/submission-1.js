class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length === 0) return 0
        
        const hashSet = new Set(nums)
        let result = 1

        for(let num of nums){
            let lengthofSequence = 1; 
            if(!hashSet.has(num - 1)){
                let curr = num;
                while(hashSet.has(curr + 1)){
                    lengthofSequence += 1;
                    curr += 1;
                }
            }

            result = Math.max(lengthofSequence, result); 

        }

        return result

    }
}
