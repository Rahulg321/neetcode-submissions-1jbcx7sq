class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b);

        let minBoats = 0
        let left = 0;
        let right = people.length - 1;


        while(left <= right){
            if(people[left] + people[right] <= limit){
                minBoats += 1;
                left ++;
                right--;
            }else if(people[left] + people[right] > limit){
                minBoats += 1
                right --;
            }else if(left === right){
                minBoats+= 1;
                left++
            }
        }


        return minBoats;


    }





}
