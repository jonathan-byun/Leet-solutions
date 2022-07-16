/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    const trusts = Array(n).fill(0);
    const trusted = Array(n).fill(0);
    for (let i=0; i<trust.length;i++) {
        let [a,b] = trust[i];
        a--;
        b--;
        trusts[a]++;
        trusted[b]++;
    }
    for (let i=0;i<n;i++) {
        if (trusts[i]===0 && trusted[i]===n-1) {
            return i+1
        }
    }
    return -1
};