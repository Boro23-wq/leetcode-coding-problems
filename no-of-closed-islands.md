# Leetcode Problem #1254. Number of Closed Islands

**Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.**

**Return the number of closed islands.**

**Example-1:**

![Example-1](https://assets.leetcode.com/uploads/2019/10/31/sample_3_1610.png)

```java
Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2

Explanation: Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

**Example-2:**

![Example-2](https://assets.leetcode.com/uploads/2019/10/31/sample_4_1610.png)

```java
Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Explanation: Islands in gray are closed because they are completely surrounded by water (group of 1s).
```

**Example-3:**

```java
Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
```

---

## Solution (Time - O(m*n) | Space - O(n))

```java
class Solution {
    public int closedIsland(int[][] grid) {
        
        // edge case (check if grid is null)
        if (grid == null || grid.length == 0) return 0;
        
        int closedIslands = 0, rows = grid.length, cols = grid[0].length;
        
        // ignoring the items on the perimeter
        // since they cannot form a closed island
        for (int i = 1; i < rows - 1; i++){
            for (int j = 1; j < cols - 1; j++){
                // we only consider 0 as
                // 0 is land in the matrix
                if (grid[i][j] == 0){
                    if (isClosedIsland(grid, i, j, rows, cols)){
                        closedIslands += 1;
                    }
                }
            }
        }
        
        return closedIslands;
    }
    
    private boolean isClosedIsland(int[][] grid, int i, int j, int rows, int cols){
        // check if the item is already visited 
        // if already visited or 1 retur true
        if (grid[i][j] == 1 || grid[i][j] == -1) return true;
        
        // check if its on perimeter
        if (isOnPerimeter(grid, i, j, rows, cols)) return false;
        
        // if we reach here the number is a 0 and 
        // not on a perimeter
        grid[i][j] = -1;
        
        boolean left = isClosedIsland(grid, i, j - 1, rows, cols);
        boolean right = isClosedIsland(grid, i, j + 1, rows, cols);
        boolean top = isClosedIsland(grid, i - 1, j, rows, cols);
        boolean bottom = isClosedIsland(grid, i + 1, j, rows, cols);
        
        return left && right && top && bottom;
        
    }
    
    private boolean isOnPerimeter(int[][] grid, int i, int j, int rows, int cols){
        return i == 0 || j == 0 || i == rows-1 || j == cols-1;
    }
}
```
