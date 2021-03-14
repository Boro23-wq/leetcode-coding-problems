# Leetcode Problem 64. Minimum Path Sum

**Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.**

***Note:*** You can only move either down or right at any point in time.

**Example:**

```java
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
```

`Explanation: Because the path 1→3→1→1→1 minimizes the sum.`

---

## Solution (Time - O(m * n) | Space - O(1))

```java

//                         [                     [
//                           [1,3,1],              [1,4,5],        
//                           [1,5,1],     --->     [2,7,6],                   
//                           [4,2,1],              [6,8,7]         
//                         ]                     ]                

class Solution {
    public int minPathSum(int[][] grid) {
        int m = grid.length;
        int n = grid[0].length;
        
        for (int i = 0; i < m; i++){
            for (int j = 0; j < n; j++){
                int top = i - 1 < 0 ? Integer.MAX_VALUE : grid[i-1][j];
                int left = j - 1 < 0 ? Integer.MAX_VALUE : grid[i][j-1];
                int min = top == Integer.MAX_VALUE && left == Integer.MAX_VALUE ? 0 : Math.min(top, left);
                
                grid[i][j] += min;
            }
        }
        
        return grid[m-1][n-1];
    }
}              
```
