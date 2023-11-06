/*
  1845. Seat Reservation Manager
  Leet Code Link : https://leetcode.com/problems/seat-reservation-manager/
  Compny Asked : Meta
  T.C : O(m*log(n))
*/

/**
 * @param {number} n
 */
var SeatManager = function(n) {
    this.minHeap = new MinPriorityQueue();
    this.marker = 1;
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
    if(this.minHeap.size() > 0) {
        return this.minHeap.dequeue().element;
    }

    return this.marker++;
    
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
    this.minHeap.enqueue(seatNumber);
};

/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
