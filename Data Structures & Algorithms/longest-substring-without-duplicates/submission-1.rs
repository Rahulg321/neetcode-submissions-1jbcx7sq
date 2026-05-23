impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {

        let s  = s.as_bytes();
        let mut char_set = HashSet::new();
        let mut l = 0;
        let mut result = 0;


        for r in 0..s.len(){

            while char_set.contains(&s[r]) {
                char_set.remove(&s[l]);
                l += 1;
            }


            char_set.insert(s[r]);
            result = result.max(r- l + 1);
        }

        result as i32

    }
}
