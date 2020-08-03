# Leetcode Problem# 53: Maximum Subarray

## Problem Statement:

**Given an integer array 'nums', find the contiguous subarray **(containing at least one number)** which has the largest sum and return its 'sum'.**

_Example:_

```java
Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.
```

> **_Follow up:_** If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

---

## Approach-1

#### CUBIC TIME - O(n^3)

```java
    for (int left = 0; left < n; left++) {
      for (int right = left; right < n; right++) {
        int windowSum = 0;

        for (int k = left; k <= right; k++) {
          windowSum += nums[k];
        }
        maximumSubArraySum = Math.max(maximumSubArraySum, windowSum);
      }
    }

    return maximumSubArraySum;
  }
}
```
---

