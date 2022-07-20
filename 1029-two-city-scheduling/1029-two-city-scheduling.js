/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let cost = 0
    let cityA = 0
    let cityB = 0
    const deficit = [];
    for (let i=0; i<costs.length;i++) {
        let newBlock = [i,Math.abs(costs[i][0]-costs[i][1])]
        deficit.push(newBlock);
    }
    deficit.sort((a,b)=>b[1]-a[1]);
    for (let i=0;i<costs.length;i++) {
        let costA = costs[deficit[i][0]][0]
        let costB = costs[deficit[i][0]][1]
        if (cityA < costs.length/2 && cityB < costs.length/2){
        if (costA< costB) {
            cityA++;
            cost +=costA
        } else {
            cityB++
            cost +=costB
        }
        }
        else if (cityA<costs.length/2 && cityB >= costs.length/2) {
            cityA++;
            cost+=costA
        }
        else if (cityB<costs.length/2 && cityA >= costs.length/2) {
            cityB++;
            cost += costB
        }
    }
    return cost
};