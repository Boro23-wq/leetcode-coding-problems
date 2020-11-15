# Leetcode Problem #287: Find the Duplicate Number

## Problem Statement:

**Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.**

**Example 1:**

```
Input: [1,3,4,2,2]
Output: 2
```

**Example 2:**

```
Input: [3,1,3,4,2]
Output: 3
```

***Note:***

- You must not modify the array (assume the array is read only).
- You must use only constant, O(1) extra space.
- Your runtime complexity should be less than O(n2).
- There is only one duplicate number in the array, but it could be repeated more than once.
---

### APPROACH-1 (Inefficient Solution) - Takes extra space

#### Time Complexity- O(n)

```javascript
var findDuplicate = function(nums) {
    let set = new Set()
    
    for (let i=0; i < nums.length; i++){
        if (!set.has(nums[i])) {
            set.add(nums[i])
        }
        else {
            return nums[i]
        }
    }
};
```

---

### APPROACH-2 (Inefficient Solution) - Manipulates the array

_Time-O(n) | Space-O(1)_

```javascript
var findDuplicate = function(nums) {
    
    for (let i = 0; i < nums.length; i++){      
        if(nums[Math.abs(nums[i])] > 0){
            nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
        } else
            return Math.abs(nums[i])
    }
    
    return 0

};
```

### APPROACH-3 (Optimised Solution) - Floyd's Cycle Detection Algorithm / Tortoise and Hare 

_Time-O(n) | Space-O(1)_

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    
    let tortoise = nums[0]
    let hare = nums[tortoise]
    
    while (tortoise != hare){
        tortoise = nums[tortoise]
        hare = nums[nums[hare]]
    }
    
    tortoise = 0
    
    while (tortoise != hare){
        tortoise = nums[tortoise]
        hare = nums[hare]
    }
    
    return hare
};

```
