// Instructions

/*

For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

*/


const gcdOfStrings = function(str1, str2) {

    if (str1 + str2 !== str2 + str1) {

        return "";
    }

    const firstWordLength = str1.length
    const secondWordLength = str2.length


    const findGCD = (x,y) => {
        if (!y){
            return x
        }
        return findGCD(y, x % y)
    }

   const GCD = findGCD(firstWordLength, secondWordLength)

   return str1.slice(0,GCD)
};
