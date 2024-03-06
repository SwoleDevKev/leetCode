// Instructions

/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


*/

// Answer

const reverseVowels = function(s) {
    const letters = s.split('')
    const vowels = ['a','e','i','o','u']
 
  const foundVowels = letters.filter((letter) => vowels.includes(letter.toLowerCase()))
       
    
        letters.forEach((letter,indx)=>{
           if (vowels.includes(letter.toLowerCase())){
               letters[indx] = foundVowels[foundVowels.length-1]
               foundVowels.pop()
           }
        })
        return letters.join('')
 };