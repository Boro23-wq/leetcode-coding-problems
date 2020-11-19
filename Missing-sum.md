# Leetcode Problem 268. Missing Number

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

## Solution 
#### Time Complexity - O(n) |  Space Complexity - O(1)

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // [0,1,2,3,5]
    // sum if none of the elements were missing
    // length + indices will give sum of elements
    // in an array without missing elements
    let sumIfNoneMissing = nums.length; // 5 + 10 = 15
    // missing numbers can be found
    // by adding the elements in the array
    let sumAfterMissing = 0;
    
    for (let i = 0; i < nums.length; i++){
        sumIfNoneMissing += i;
        sumAfterMissing += nums[i];
    }
    
    // substracting sumAfterMissing from sumIfNoneMissing
    // gives us the missing number
    return sumIfNoneMissing - sumAfterMissing;
};
```
