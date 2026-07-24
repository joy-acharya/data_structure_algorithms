/*
  3514. Number of Unique XOR Triplets II
  LeetCode Link: https://leetcode.com/problems/number-of-unique-xor-triplets-ii
  T.C: O(n^2 + n*MaxElement)
  S.C: O(MaxElement)
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;
    
    // Max value 1500, so max possible XOR value will be < 2048
    const MAX_XOR = 2048;

    const pairXorExist    = new Uint8Array(MAX_XOR);
    const tripletXorExist = new Uint8Array(MAX_XOR); 


    for(let i = 0; i < n; i++) {
        for(let j = i; j < n; j++) {
            pairXorExist[nums[i] ^ nums[j]] = 1;
        }
    }   


    const uniqueNum = Array.from(new Set(nums));

    const n1 = uniqueNum.length;
    let count = 0;


    for(let i = 0; i < MAX_XOR; i++) {
        if(!pairXorExist[i]) continue;

        for(let j = 0; j < n1; j++) {
            const tXor = i ^ uniqueNum[j];

            if(!tripletXorExist[tXor]) {
                tripletXorExist[tXor] = 1;
                count++;
            }
        }
    }

    return count;

};
