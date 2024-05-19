// Instructions

/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.
Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.
Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.


*/

// Answer

var maxVowels = function(s, k) {
    let count = 0
    let max = 0
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    
       for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            count++;
        }
    }

    max = count;

    for (let i=k ; i<s.length; i++){
        if (vowels.has(s[i - k])){
            count--
        }
        if (vowels.has(s[i])){
            count++
        }
        max = Math.max(max,count)
    }

return max
};