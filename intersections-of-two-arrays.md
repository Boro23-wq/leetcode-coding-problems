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
    // two sets to keep track of intersected numbers
    let firstSet = new Set();
    let secondSet = new Set();
    
    // run through nums1
    // and store all of its values in a set
    for (let nums of nums1){
        firstSet.add(nums);
    }
    
    // run through nums2 and add its values in
    // the secondSet if and only if the number
    // is available in the firstSet
    // we use set to make sure the repeated numbers 
    // only appear once in the set
    for (let nums of nums2){
        if (firstSet.has(nums)){
            secondSet.add(nums)
        }
    }
    
    // convert the set to an array 
    return Array.from(secondSet);
};
```
