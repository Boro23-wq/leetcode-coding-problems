# Leetcode Problem 74: Search a 2D Matrix

## Problem Statement:

**Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:**

- _Integers in each row are sorted from left to right._
- _The first integer of each row is greater than the last integer of the previous row._

**Example 1:**

```
Input:
      matrix = [
        [1,   3,  5,  7],
        [10, 11, 16, 20],
        [23, 30, 34, 50]
      ]

target = 3
```
> Output: true (3 is present in the matrix)

**Example 2:**

```
Input:
      matrix = [
          [1,   3,  5,  7],
          [10, 11, 16, 20],
          [23, 30, 34, 50]
       ]
       
target = 13 
```
> Output: false (13 is not present in the matrix)

---
### Optimal Solution: Binary Search on a Matrix

**Time** - O(log(n))  |   **Space** - O(1)

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, value){
  if(matrix.length === 0) return false

  let row_len = matrix.length
  let col_len = matrix[0].length

  let low = 0
  let high = row_len * col_len

  while (low < high){
    mid = Math.floor((low + high) / 2)
    if (matrix[Math.floor(mid / col_len)][Math.floor(mid % col_len)] === value){
      return true
    } else if (matrix[Math.floor(mid / col_len)][Math.floor(mid % col_len)] < value){
      low = mid + 1
    } else {
      high = mid
    }
  }

  return false
}
```
