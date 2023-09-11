/*
  1282. Group the People Given the Group Size They Belong To
  Leet Code Link : https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/
  Company Asked : LYFT
*/

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let map = {};
    
    for(let i = 0; i < groupSizes.length; i++) {
        if(map[groupSizes[i]] != undefined) {
            map[groupSizes[i]] = map[groupSizes[i]] + ',' + i
        } else {
            map[groupSizes[i]] = i;
        } 
    }
    let result = [];
    for(let i in map) {
        let a = map[i].toString();
        let b = i;
        let ary = a.split(',');
        let cur = [];
        for(let j = 0; j < ary.length; j++) {
            cur.push(ary[j]);
            if(cur.length == b) {
                result.push(cur);
                cur=[];
            }
        }
        
    }
    return result;
};
