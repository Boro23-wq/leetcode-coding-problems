# Leetcode Problem 53: Maximum Subarray

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

## Approach-2

#### QUADRATIC TIME - O(n^2)

```java
class Solution {
  public int maxContiguousSubarraySum(int[] nums) {
    int n = nums.length;
    int maximumSubArraySum = Integer.MIN_VALUE;

    for (int left = 0; left < n; left++) {
      int runningWindowSum = 0;

      for (int right = left; right < n; right++) {
        runningWindowSum += nums[right];

        maximumSubArraySum = Math.max(maximumSubArraySum, runningWindowSum);
      }
    }

    return maximumSubArraySum;
  }
}
```
---

## Approach-3

#### LINEAR TIME - O(n)

```java
class Solution {
  public int maxContiguousSubarraySum(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];

    for (int i = 1; i < nums.length; i++) {

      maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

      // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
      maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
  }
}
```

