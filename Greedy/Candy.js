/*
  135. Candy
  Leet Code Link : https://leetcode.com/problems/candy/
  Company Asked : Amazon
  T.C : O(n)
*/

var candy = function(ratings) {
    let n = ratings.length;
    let count = new Array(n).fill(1);
    
    for(let i = 1; i < n; i++) {
        if(ratings[i] > ratings[i-1])
            count[i] = Math.max(count[i],count[i-1] + 1);
    }
    
    for(let i = n - 1; i >= 0; i--) {
        if(ratings[i] > ratings[i+1])
            count[i] = Math.max(count[i], count[i+1] + 1);
    }
    
    let result = 0;
    for(let i = 0; i < n; i++) {
        result += count[i];
    }
    
    return result;
};
