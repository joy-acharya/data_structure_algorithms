/*
  49. Group Anagrams
  Leet code link : https://leetcode.com/problems/group-anagrams/
*/

var groupAnagrams = function(strs) {
    let map = {};
    for(let i = 0; i < strs.length; i++) {
        let tmp = strs[i].split('').sort().join();
        if(map[tmp] !== undefined) {
            map[tmp] += ',' + strs[i];
        } else {
            map[tmp] = strs[i];
        }
    }
    let ans = [];
    Object.keys(map).forEach(function(key) {
        ans.push(map[key].split(','));
    });
    
    return ans;
    
};
