/*
    1870. Minimum Speed to Arrive on Time
    Leet Code Link : https://leetcode.com/problems/minimum-speed-to-arrive-on-time/
*/

/**
 * @param {number[]} dist
 * @param {number} hour
 * @return {number}
 */
var minSpeedOnTime = function(dist, hour) {
    let low = 1;
    let high = 10000000;
    let speed = 0;
    let mid = 0;
    while(low <= high) {
        mid = low + parseInt((high -low) / 2);
        speed = findSpeed(dist,mid);
        if(speed <= hour) {
            high = mid -1;
        } else {
            low = mid + 1;
        }
    }
    
    return low > 10000000 ? -1 : low;
    
};

var findSpeed = function(dist,speed) {
    let total = 0;
    for(let i = 0; i < dist.length; i++) {
        let s = dist[i] / speed;
        if(i == dist.length -1) {
            total += s
        } else {
            total += Math.ceil(s);
        }
    }
    return total;
}
