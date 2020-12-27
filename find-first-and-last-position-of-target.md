# Leetcode Problem 34. Find First and Last Position of Element in Sorted Array

**Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.**

**Your algorithm's runtime complexity must be in the order of O(log n).**

**If the target is not found in the array, return [-1, -1].**

**Example 1:**

```java
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
```

**Example 2:**

```java
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
```

***Constraints:***

- 0 <= nums.length <= 10^5
- -10^9 <= nums[i] <= 10^9
- nums is a non decreasing array.
- -10^9 <= target <= 10^9

---

## Solution (Time - O(logN) | Space - O(1))

```java
class Solution {
    public int[] searchRange(int[] nums, int target) {
        int first = findFirst(nums, target);
        if (first == -1) return new int[] {-1, -1};
        int last = findLast(nums, target, first);
        

        
        return new int[] {first, last};
    }
    
    private int findFirst (int[] nums, int target){
        int left = 0, right = nums.length - 1;
        int firstIndex = -1;
        
        while (left <= right){
            int mid = left + (right - left) / 2;
            
            if (nums[mid] >= target){
                if (nums[mid] == target) firstIndex = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return firstIndex;
    }
    
    
    private int findLast (int[] nums, int target, int first){
        int left = first, right = nums.length - 1;
        int lastIndex = first;
        
        while (left <= right){
            int mid = left + (right - left) / 2;
            
            if (nums[mid] <= target){
                if (nums[mid] == target) lastIndex = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return lastIndex;
    }
}
```
