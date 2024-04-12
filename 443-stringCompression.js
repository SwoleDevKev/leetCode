// Instruction 


/*

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of consecutive repeating characters in chars:

If the group's length is 1, append the character to s.
Otherwise, append the character followed by the group's length.
The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done modifying the input array, return the new length of the array.

You must write an algorithm that uses only constant extra space.

*/


// Answer

const compress = function(chars) {
    let i = 0, len = 0

    while (i < chars.length) {
        let curChar = chars[i]
        chars[len++] = curChar

        let count = 0
        while (i < chars.length && curChar == chars[i]) {
            count++
            i++
        }
        if (count > 1) {
            count = count.toString().split('')
            for (let c of count) {
                chars[len++] = c
            }
        }
    }
    return len

}
const compress2 = function(chars) {
    let count = 1
    const length = chars.length
    let i = 0
    let index = 0

    while(i < length){
       let j = i+1

      while (length && chars[i] === chars[j]){
        count++
        j++
       } 
       
        chars[index++] = chars[i];

        if (count > 1) {
            let countStr = count.toString();
            for (let k = 0; k < countStr.length; k++) {
                chars[index++] = countStr[k];
            }
        }

        i = j
        count = 1
    }

    return index;
        
};