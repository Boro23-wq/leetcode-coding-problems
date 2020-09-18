# Leetcode Problem #189. Rotate Array

**Given an array, rotate the array to the right by k steps, where k is non-negative.**

***Follow up:***

- Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
- Could you do it in-place with O(1) extra space?
 
**Example 1:**

```javascript
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
```

***Explanation:***

- rotate 1 steps to the right: [7,1,2,3,4,5,6]
- rotate 2 steps to the right: [6,7,1,2,3,4,5]
- rotate 3 steps to the right: [5,6,7,1,2,3,4]

**Example 2:**

```javascript
Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
```

***Explanation:***

- rotate 1 steps to the right: [99,-1,-100,3]
- rotate 2 steps to the right: [3,99,-1,-100]

***Constraints:***

- 1 <= nums.length <= 2 * 10^4
- It's guaranteed that nums[i] fits in a 32 bit-signed integer.
- k >= 0

---

## Solution (Inefficient Approach) - (Time - O(n)  |  Space - O(1))

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // we are only going to rotate k % length of nums times
    // since rotating twice = rotating 6 times
    // we will only rotate twice and avoid the extra rotations
    let rotate = k % nums.length;
    
    // rotate it rotate number of times
    for (let i = 1; i <= rotate; i++){
        // pop the last element from the nums array
        let popped = nums.pop();
        // push it to the front of the nums array
        nums.unshift(popped)
    }
    
    // finally return the modified array
    return nums;
};
```

## Solution (Efficient Approach using Reverse) - (Time - O(n)  |  Space - O(1))

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let rotate = k % nums.length;
    
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, rotate - 1);
    reverse(nums, rotate, nums.length - 1);
};

let reverse = (nums, start, end) => {
    while (start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++;
        end--;
    }
}
```
