# Leetcode Problem 75: Sort Colors

## Problem Statement

**Given an array with 'n' objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.**

> Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

***Note:*** You are not suppose to use the library's sort function for this problem.

**Example:**

```
Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
```

**Follow up:**

- A rather straight forward solution is a two-pass algorithm using counting sort.
- First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

> Could you come up with a one-pass algorithm using only constant space?

---

### APPROACH-1 (Inefficient Solution - O(nlogn) Time and O(1) Space):
> uses in-built function sort(), which we are not supposed to use

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var sortColors = function(nums) {
  nums.sort(function(a, b){return a-b});
};

```


### APPROACH-2 (Efficient Solution - O(n) Time and O(1) Space):
> uses counting sort, but this takes atleast two-passes.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var sortColors = function(nums) {
    let count_0 = 0, count_1 = 0, count_2 = 0
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === 0){
            count_0 += 1
        } else if (nums[i] === 1){
            count_1 += 1
        } else {
            count_2 += 1
        }
    }
    
    for (let i = 0; i < count_0; i++){
        nums[i] = 0
    }
    
    for (let i = count_0; i < count_0 + count_1; i++){
        nums[i] = 1
    }
    
    for (let i = count_0 + count_1; i < count_0 + count_1 + count_2; i++){
        nums[i] = 2
    }
    
    console.log(nums)
}
```

### APPROACH-3 (Efficient Solution - O(n) Time and O(1) Space):
> uses Dutch National Flag Algorithm, takes one-pass.

```javascript
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 
var sortColors = function(nums) {
    //Approach 3
    let n = nums.length -1
    let low = 0, mid = 0, high = n
    
    while(mid <= high){
        //if mid === 0
        if(nums[mid] === 0){
            let temp = nums[low] //0
            nums[low] = nums[mid] //2
            nums[mid] = temp //0
            low += 1
            mid += 1
        }
        
        //if mid === 1
        else if(nums[mid] === 1){
            mid += 1
        }
        
        //if mid === 2
        else {
            let temp = nums[mid] //0
            nums[mid] = nums[high] //2
            nums[high] = temp //0
            high -= 1
        }
    }
    return nums
};
```
