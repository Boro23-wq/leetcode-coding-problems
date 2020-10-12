# Leetcode Problem #169. Majority Element

**Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.**

- You may assume that the array is non-empty and the majority element always exist in the array.

**Example 1:**

```java
Input: [3,2,3]
Output: 3
```

**Example 2:**

```java
Input: [2,2,1,1,1,2,2]
Output: 2
```

---

## Solution (Time - O(N) | Space - O(1))

```java
class Solution {
    public int majorityElement(int[] nums) {
        int count = 0; int candidate = 0;
        
        for (int element : nums){
            if (count == 0) candidate = element;
            if (candidate == element) ++count;
            else --count;
        }
        
        return candidate;
    }
}

```
