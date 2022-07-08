/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.indexOf(" ")=== -1) {
        return s.length;
    }
    let lastLetter=s.length-1
    while (s[lastLetter]=== " ") {
        lastLetter--
    }
    if (lastLetter===0) {
        return 1
    }
    let firstLetter=lastLetter
    while (s[firstLetter]!==" "&& firstLetter>0) {
        firstLetter--
    }
    
    let wordLength = s.slice(firstLetter, lastLetter).length
    if (firstLetter===0&& s[0]!== " ") {
        wordLength += 1
    }
    return wordLength
};