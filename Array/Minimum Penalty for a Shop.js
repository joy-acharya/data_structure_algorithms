/*
  2483. Minimum Penalty for a Shop
  Leet code link : https://leetcode.com/problems/minimum-penalty-for-a-shop/
*/


/* Approach 1 : O(n^2) This solution will exceed time limit */

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let n = customers.length;
    let panalty = Number.MAX_SAFE_INTEGER;
    let hour = 0;
    for(let i = 0; i < n;  i++) {
        let j = i - 1;
        let k = i;
        
        let openPanalty = 0;
        while(j >= 0) {
            if(customers[j] == 'N')
                openPanalty++;
            j--;
        }
        
        let closePanalty = 0;
        
        while(k < n) {
            if(customers[k] == 'Y')
                closePanalty++;
            k++;
        }
        
        let totalPanalty = openPanalty + closePanalty;
        if(totalPanalty < panalty) {
            panalty = totalPanalty;
            hour = i;
        }
        
    }
    
    let lastPanalty = 0;
    for(let i = 0; i <= n; i++) {
        if(customers[i] == 'N') {
            lastPanalty++;
        }
    }
    
    if(lastPanalty < panalty) {
        return n;
    }
    
    return hour;
    
};






/*  Approach 2 : o(n) , space (n^2)  : It will excepted*/


/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let n = customers.length;
    let panalty = Number.MAX_SAFE_INTEGER;
    let hour = 0;
    let prefixN = new Array(n+1).fill(0);
    let suffixY = new Array(n+1).fill(0);
    
    for(let i = 1; i <= n;  i++) {
        if(customers[i - 1] == 'N') {
            prefixN[i] = prefixN[i - 1] + 1;
        } else {
            prefixN[i] = prefixN[i - 1];
        }
    }
    
    for(let i = n -1; i >= 0; i--) {
        if(customers[i] == 'Y') {
            suffixY[i] = suffixY[i + 1] + 1;
        } else {
            suffixY[i] = suffixY[i+1];
        }
    }
    
    for(let i = 0; i <=n; i++) {
        let curPanalty = prefixN[i] + suffixY[i];
        if(curPanalty < panalty) {
            panalty = curPanalty;
            hour = i;
        }
    }
    
    return hour;
    
};




/* Approach 3. Best solution o(n), space(1) */


/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let n = customers.length;
    let panalty = 0;
    let hour = 0;
    
    for(let i = 0; i < n; i++) {
        if(customers[i] == 'Y') {
            panalty++;
        }
    }

    let minPanalty = panalty;
    
    for(let i = 0; i < n; i++) {
        if(customers[i] == 'Y') {
            panalty--;
        } else {
            panalty++;
        }
        
        if(panalty < minPanalty) {
            minPanalty = panalty;
            hour = i + 1;
        }
    }
    
    return hour;
    
    
    
};






