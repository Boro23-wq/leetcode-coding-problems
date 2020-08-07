# Leetcode Problem #42. Trapping Rain Water

## Problem Statement

**Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.**

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

**Example:**

```javascript
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
```
---

## Solution: 
Time - O(n) | Space - O(n)

```javascript
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(height === 0) return 0
    
    let leftMax = []
    let rightMax = []
    let length = height.length
    let totalWater = 0
    
    leftMax[0] = height[0]
    
    //find max-height from left to right
    for (let i = 1; i < length; i++){
        leftMax[i] = Math.max(height[i], leftMax[i - 1])
    }
    
    rightMax[length - 1] = height[length - 1]
    
    //find max-height from right to left
     for (let i = length - 2; i >= 0; i--){
        rightMax[i] = Math.max(height[i], rightMax[i + 1])
    }
    
    //find the total potential level of water by substracting the level of water
    //with the height of the building if a building exists
    for (let i = 1; i < length-1; i++){
        totalWater += Math.min(leftMax[i], rightMax[i]) - height[i]
    }
    
    return totalWater
};

```
