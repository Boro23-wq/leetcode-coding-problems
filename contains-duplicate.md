# Leetcode Problem 217. Contains Duplicate

## Problem Statement

**Given an array of integers, find if the array contains any duplicates.**

<u>Note:</u> Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

--- 

**Example 1:**

```bash
Input: [1,2,3,1]
Output: true
```

**Example 2:**

```bash
Input: [1,2,3,4]
Output: false
```

**Example 3:**

```bash
Input: [1,1,1,3,3,4,3,2,4,2]
Output: true
```

---

## **SOLUTION:**

#### Inefficient (uses Sorting)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    
   let sortedArray = nums.sort()
   
   for (let i = 0; i < nums.length; i++){
       if (nums[i] === nums[i+1]){
           return true
       }
   }
    
    return false
};
```

#### Efficient (uses Map)

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    
    let hashMap = new Map()
    
    for (let i = 0; i < nums.length; i++){
        if (hashMap.has(nums[i])){
            return true
        }
        
        hashMap.set(nums[i], nums[i].toString())
        
    }
    
    return false;
};
```
