/*
    146. LRU Cache
    leet code link : https://leetcode.com/problems/lru-cache/
*/


/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let val = this.map.get(key);
    if(val === undefined)
        return -1;
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return v;
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
      this.map.delete(key);
    }
    this.map.set(key,value);
    if(this.map.size > this.capacity )
        this.map.delete(this.map.keys().next().value)
};

