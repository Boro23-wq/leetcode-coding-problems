# Leetcode Problem #268. Missing Number

**Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.**

**Example 1:**

```javascript
Input: [3,0,1]
Output: 2
```

**Example 2:**

```javascript
Input: [9,6,4,2,3,5,7,0,1]
Output: 8
```

***Note:***

- Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

---

## Solution (Time - O(n) | Space - O(1))

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // [3, 0, 1]
    let sumIfNoneMissing = nums.length; // 3
    let sumAfterMissing = 0;
    
    for (let i = 0; i < nums.length; i++){
        sumIfNoneMissing += i;
        sumAfterMissing += nums[i];
    }
    
    return sumIfNoneMissing - sumAfterMissing;
};
```
