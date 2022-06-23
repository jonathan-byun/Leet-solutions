/**
 * @param {number[]} piles
 * @return {number}
 */
var maxCoins = function(piles) {
    let answer=0
    piles.sort((a,b)=>a-b);
    let runTime = piles.length/3
    for (let i=0; i<runTime; i++) {
        answer+= piles[piles.length-(2+2*i)]
    }
    return answer;
};