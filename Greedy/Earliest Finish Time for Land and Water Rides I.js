/*
  3633. Earliest Finish Time for Land and Water Rides I
  Leetcode link: https://leetcode.com/problems/earliest-finish-time-for-land-and-water-rides-i
  T.C : O(n+m)
  S.C : O(1)
*/

/**
 * @param {number[]} landStartTime
 * @param {number[]} landDuration
 * @param {number[]} waterStartTime
 * @param {number[]} waterDuration
 * @return {number}
 */
var earliestFinishTime = function(landStartTime, landDuration, waterStartTime, waterDuration) {
    const n = landStartTime.length;
    const m = waterStartTime.length;

    // Step 1: Find the absolute minimum finish times for both categories independently
    let minLandEnd = Infinity;
    for (let i = 0; i < n; i++) {
        const end = landStartTime[i] + landDuration[i];
        if (end < minLandEnd) minLandEnd = end;
    }

    let minWaterEnd = Infinity;
    for (let j = 0; j < m; j++) {
        const end = waterStartTime[j] + waterDuration[j];
        if (end < minWaterEnd) minWaterEnd = end;
    }

    // Step 2: Evaluate both sequences (Land -> Water vs Water -> Land)
    let landThenWater = Infinity;
    for (let j = 0; j < m; j++) {
        const total = Math.max(waterStartTime[j], minLandEnd) + waterDuration[j];
        if (total < landThenWater) landThenWater = total;
    }

    let waterThenLand = Infinity;
    for (let i = 0; i < n; i++) {
        const total = Math.max(landStartTime[i], minWaterEnd) + landDuration[i];
        if (total < waterThenLand) waterThenLand = total;
    }

    // Step 3: Return the best global outcome
    return Math.min(landThenWater, waterThenLand);
};
