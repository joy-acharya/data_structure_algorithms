/*
  1665. Minimum Initial Energy to Finish Tasks
  Leetcode link: https://leetcode.com/problems/minimum-initial-energy-to-finish-tasks/description/?envType=daily-question&envId=2026-05-12
  T.C : O(nlogn)
  S.C : O(1)
*/

/**
 * @param {number[][]} tasks
 * @return {number}
 */

function isPossible(tasks, mid) {

    console.log(tasks);

    for(let i = 0; i < tasks.length; i++) {
        let item = tasks[i];

        if(item[1] > mid) return false;
        mid = mid - item[0];
    }

    return true;
}

var minimumEffort = function(tasks) {
    let l = 0;
    let r = 1000000000;
    let result = 0;

    tasks.sort((a, b) => {
        let diffA = a[1] - a[0];
        let diffB = b[1] - b[0];
        return diffB - diffA;
    });

    while(l <= r) {
        mid = Math.floor(l + (r-l) / 2);
        if(isPossible(tasks, mid)) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1
        }
    }

    return result;
};

