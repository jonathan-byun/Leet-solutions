/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let total =0;
    const sorted = boxTypes.sort((a,b)=>a[1]-b[1])
    while (truckSize>0 && boxTypes.length > 0) {
        total += boxTypes[boxTypes.length-1][1];
        boxTypes[boxTypes.length-1][0]--;
        truckSize--;
        if (boxTypes[boxTypes.length-1][0]===0) {
            boxTypes.pop()
        }
    }
    return total;
};