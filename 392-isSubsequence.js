// Instructions
/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/
// Answer

const isSubsequence = function(s, t) {
    const result = []
    let count = 0
    let leftPtr = s[0]

    t.split('').forEach((letter)=>{
        if (letter === leftPtr){
            result.push(letter)
            count ++
            leftPtr = s[count]
        }
       
    })

   return result.join('') === s ? true : false
};