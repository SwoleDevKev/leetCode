const mergeAlternately = function(word1, word2) {
    const longerWord = word1.length >= word2.length ? word1 : word2;
    const shorterWord = word1.length >= word2.length ? word2 : word1;
    let newStr = '';

    for (let i = 0; i < shorterWord.length; i++) {
        newStr += word1[i] + word2[i];
    }

    newStr += longerWord.substring(shorterWord.length);

    return newStr;
};