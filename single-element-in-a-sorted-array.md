# Leetcode Problem #540. Single Element in a Sorted Array

**You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.**

***Follow up:*** 
- Your solution should run in O(log n) time and O(1) space.

**Example 1:**

```java
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
```

**Example 2:**

```java
Input: nums = [3,3,7,7,10,11,11]
Output: 10
```

***Constraints:***

- 1 <= nums.length <= 10^5
- 0 <= nums[i] <= 10^5

---

## Solution (Time - O(logN) | Space - O(1))

```java
class Solution {
    public int singleNonDuplicate(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int n = nums.length;
        int left = 0;
        int right = n - 1;
        
        
        while (left < right){
            int mid = left + (right-left) / 2;
            boolean isEven = (right - mid) % 2 == 0;
            
            if (nums[mid] == nums[mid - 1]){
                
                if (isEven){
                    // ignore the duplicate element to the left of mid
                    right = mid - 2;
                } else{
                    // if odd move towards right
                    left = mid + 1;
                }
                
                
            } else if (nums[mid] == nums[mid + 1]){
                
                if (isEven){
                    // ignore the duplicate number directly to the right of mid
                    left = mid + 2;
                } else{
                    right = mid - 1;
                }
            }
            else {
                return nums[mid];
            }
        }
        
        return nums[left];
    }
}
```
