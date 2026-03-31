class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }


        const hashMap = new Map()

        for(let i = 0; i < s.length; i ++){

            if(hashMap.has(s[i])){
                const currentValue = hashMap.get(s[i]);
                hashMap.set(s[i], currentValue + 1)
            }else{
            hashMap.set(s[i], 1)

            }
            
        }

        for(let i = 0; i < t.length; i ++){
            if(!hashMap.has(t[i]) || hashMap.get(t[i]) === 0){
                return false
            }
            const currentValue = hashMap.get(t[i])
            hashMap.set(t[i], currentValue - 1);
        }

        return true


    }
}
