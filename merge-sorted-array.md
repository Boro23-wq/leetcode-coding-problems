# Leetcode Problem #88: Merge Sorted Array

## Problem Statement:

**Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.**

Note:

The number of elements initialized in nums1 and nums2 are m and n respectively.
You may assume that nums1 has enough space (size that is equal to m + n) to hold additional elements from nums2.

**Example:**

```
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
```

> Output: [1,2,2,3,5,6]
 

***Constraints:***

- -10^9 <= nums1[i], nums2[i] <= 10^9
- nums1.length == m + n
- nums2.length == n

---
### APPROACH-1 (Sorting the Array)
Time - O(nlogn) | Space O(1)

```javascript
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let merge = function(arr1, m, arr2, n){
  for (let i = m; i < m+n; i++){
    arr1[i] = arr2[i - m]
  }
  return arr1.sort((a, b) => a - b)
}
```

---
### APPROACH-2 (Insertion Sort, In-place)
Time - O(n) | Space O(1)

```javascript
let merge = function(arr1, m, arr2, n) {
  let left = m - 1;
  let right = n - 1;

  for (let i = m + n - 1; i >= 0; i--) {
    if (right < 0) {
      break;
    }
      
    if (left >= 0 && arr1[left] > arr2[right]) {
      arr1[i] = arr1[left];
      left--;
    } else {
      arr1[i] = arr2[right];
      right--;
    }
  }
};
```
