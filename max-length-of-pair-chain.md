# Leetcode Problem 646. Maximum Length of Pair Chain

**You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.**

**Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.**

**Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.**

**Example 1:**

```java
Input: [[1,2], [2,3], [3,4]]
Output: 2
```

`Explanation: The longest chain is [1,2] -> [3,4]`

***Note:***

- The number of given pairs will be in the range [1, 1000].

---

## Solution (Time - O(nlogn)  | Space - O(1))

```java
class Solution {
    public int findLongestChain(int[][] pairs) {
        
        // sort the 2-d array
        Arrays.sort(pairs, (a, b) -> a[1] - b[1]);
        
        int n = pairs.length;
        int max = pairs[0][1];
        int count = 1;
        
        for (int i = 1; i < n; i++){
            if (pairs[i][0] > max){
                max = pairs[i][1];
                count++;
            }
        }
        return count;
    }
}
```
