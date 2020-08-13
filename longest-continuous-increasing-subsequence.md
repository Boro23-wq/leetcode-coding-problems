# Leetcode Problem #674. Longest Continuous Increasing Subsequence

**Given an unsorted array of integers, find the length of longest continuous increasing subsequence (subarray).**

**Example 1:**

```java
Input: [1,3,5,4,7]
Output: 3
```

`Explanation: The longest continuous increasing subsequence is [1,3,5], its length is 3.`

- ***Even though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4.***

**Example 2:**

```java
Input: [2,2,2,2,2]
Output: 1
```

**Explanation: The longest continuous increasing subsequence is [2], its length is 1.**

***Note:*** 
- Length of the array will not exceed 10,000.

---

## Solution (Time - O(n) | Space - O(1))

```java
class Solution {
    public int findLengthOfLCIS(int[] nums) {
        int max = 1, current = 1;
        
        if (nums == null || nums.length == 0){
            return 0;
        }
        
        for (int i = 1; i < nums.length; i++){
            current = nums[i] > nums[i - 1] ? current + 1 : 1;
            max = Math.max(max, current);
        }
        
        return max;
    }
    
}
```
