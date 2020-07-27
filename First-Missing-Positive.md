# Leetcode Problem #41: First Missing Positive

## Problem Statement:

**Given an unsorted integer array, find the smallest missing positive integer.**

**Example 1:**

```
Input: [1,2,0]
Output: 3
```

**Example 2:**

```
Input: [3,4,-1,1]
Output: 2
```

**Example 3:**

```
Input: [7,8,9,11,12]
Output: 1
```

> **Note:** Your algorithm should run in O(n) time and uses constant extra space.
---

**APPROACH-1 (Inefficient Solution - O(n) Time and O(n) Space):**

```javascript
 var firstMissingPositive = function(nums){
      let set = new Set(nums)
      let i = 0
      while(++i){
          if(!set.has(i)) return i
      }
 }
```

**APPROACH-2 (Efficient Solution - O(n) Time and O(1) Space):**

```javascript
var firstMissingPositive = function(nums){
     let numsLength = nums.length
     let index = 0
     
     while (index < numsLength){
         
         const currentNumber = nums[index]
         const targetIndex = nums[index] - 1
         
         //check for edge cases
         //check if the number is greater than the length or if the number is a non negative number or if the number is zero
         if(currentNumber > numsLength || currentNumber <= 0){
             index++
             continue
         }
         
         //check if the number is in its target position
         //if it is continue or if it is not than swap or rearrange the numbers
         if (index !== targetIndex && nums[targetIndex] !== currentNumber){
             let temp = currentNumber
             nums[index] = nums[targetIndex]
             nums[targetIndex] = temp
         } else {
             index++
         }
     }
     
     index = 0
     while (index < numsLength){
         if(nums[index] !== index + 1){
             return index + 1
         }
         index++
     }
     return numsLength + 1  
 }
```
