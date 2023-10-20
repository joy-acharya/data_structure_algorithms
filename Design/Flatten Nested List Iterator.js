/*
  341. Flatten Nested List Iterator
  Leet Code Link : https://leetcode.com/problems/flatten-nested-list-iterator/
  Company Asked : Google , Meta , Netflix , Twitter
*/

var NestedIterator = function(nestedList) {
    let n = nestedList.length;
    this.stack = [];
    
    for(let i = n-1; i >= 0; i--) {
        this.stack.unshift(nestedList[i]);
    }
};


NestedIterator.prototype.hasNext = function() {
    if(this.stack.length == 0)
        return false;
    while(this.stack.length > 0) {
        let curr = this.stack[0];
        if(curr.isInteger())
            return true;
        this.stack.shift();
        let vec = curr.getList();
        for(let i = vec.length - 1; i >= 0;i--) {
            this.stack.unshift(vec[i]);
        }
    }
    return false;
};

NestedIterator.prototype.next = function() {
    let num = this.stack.shift();
    return num.getInteger();
};
