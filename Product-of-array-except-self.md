# Leetcome Problem 238: Product of Array Except Self

## Problem Statement:

**Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].**

**Example:**

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Constraint:** _It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer._

**Note:** _Please solve it without division and in O(n)._

> Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
---

**EFFICIENT SOLUTION :** 

#### Time: O(n) | Space: O(1), since it is given the output array doesn't count as extra space.

```javascript
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums){
        let temp = 1
        let hash = []  
        //hash[i] represents the cumulative product of the indices to the left of i
        //to put value of hash[i] consider the values of nums[i] and not hash[i] itself
        //nums --> [1,2,3,4,5]
        //hash --> [1,1,2,6,24]
        //hash[0] = 1 (no cumulative product on left of nums[0] - starting element is always '1')
        //hash[1] = 1 (only one index on left of nums[1] i.e. nums[0]===1)
        //hash[2] = 2 (two indices on left of nums[2] hence cumulative product will be nums[0] * nums[1] = 2)
        //hash[3] = 6 (three indices on left of nums[3] hence cumulative product will be nums[0] * nums[1] * nums[2] = 6)
        //hash[4] = 24 (four indices on left of nums[4] hence cumulative product will be i.e. nums[0] * nums[1] * nums[2] * nums[3] = 24)
        for (let i=0; i < nums.length; i++){
            hash[i] = temp
            temp *= nums[i]
        }
        // nums         ---> [1,2,3,4,5 ]
        // hash(before) ---> [1,1,2,6,24]
        // hash(after)  ---> [120,60,40,30,24]
                                                                 
        temp = 1
        
        for (let i=0; i < nums.length; i++){                      
            hash[nums.length-1-i] *= temp
            temp *= nums[nums.length-1-i]
        }
        return hash
   }
```
