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

_This approach is inefficient because it uses a Set that has a linear space complexity (because in the worst case we may have to store all the items in the Set_).

```javascript
 var firstMissingPositive = function(nums){
      //copy all the items in nums to the Set
      let set = new Set(nums)
      let i = 0
      //loop through the set and check existence of a number
      while(++i){
          if(!set.has(1)) return i
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
         //and bring into its original position
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
         // nums --> [1,2,0]
         //check if the number matches its index
         //nums[0] === 1 (this means the number is present)
         //nums[1] === 2 (number present again)
         //nums[2] === 0 (since the number should have been 3 and not 0, hence we return the number 3 itself)
         if(nums[index] !== index + 1){
             return index + 1
         }
         index++
     }
     //if none of the conditions above are met
     //that means the array has to look something like this where nums -> [1,2,3]
     //this means all the number is in its own position
     //therefore just return the number next to 3 which is 4
     return numsLength + 1  
 }
```
