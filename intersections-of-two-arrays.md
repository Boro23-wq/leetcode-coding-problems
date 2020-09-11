# Leetcode Problem #349. Intersection of Two Arrays

**Given two arrays, write a function to compute their intersection.**

**Example 1:**

```javascript
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
```

**Example 2:**

```javascript
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
```

***Note:***

- Each element in the result must be unique.
- The result can be in any order.

---

## Solution (Time - O(n) | Space - O(n))

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let firstSet = new Set();
    let secondSet = new Set();
    
    for (let nums of nums1){
        firstSet.add(nums);
    }
    
    for (let nums of nums2){
        if (firstSet.has(nums)){
            secondSet.add(nums)
        }
    }
    
    return Array.from(secondSet);
};
```
