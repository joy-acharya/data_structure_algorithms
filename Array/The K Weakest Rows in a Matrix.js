/**
  1337. The K Weakest Rows in a Matrix
  Leet code link: https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
  Company Asked: Amazon
  T.C : O(mlogn) +  O(mlogm) + O(k)
 */
var kWeakestRows = function(mat, k) {
    let map = {};
    
    for(let i = 0; i < mat.length; i++) {
        let cnt = 0;
        cnt = binarySearch(mat[i]);
        map[i] = cnt;
    }
    
    let result = [];
    const keysSorted = Object.keys(map).sort((a, b) => map[a] - map[b]);
    for(let i = 0; i < k; i++) {
        result.push(keysSorted[i]);
    }
    return result;
};

var binarySearch = function(arr) {
    let l = 0;
    let r = arr.length -1;
    let result = -1;
    while(l <= r) {
        let mid = l + Math.floor((r-l)/2);
        if(arr[mid] == 1) {
            result = mid;
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return result + 1;
}
