# Leetcode Problem #240. Search a 2D Matrix II

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

**Example:**

Consider the following matrix:

```
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
```

> Given, target = 5, return **true**.

> Given, target = 20, return **false**.

---
### Optimal Solution: 

**Time** - O(log(mn))  |   **Space** - O(1)

```javascript
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let length = matrix.length
    if (length === 0) return false
    let row = 0
    let col = matrix[0].length - 1
    
    while (row < length && col >= 0){
        let value = matrix[row][col]
        if (value === target) return true
        else if (target > value) row++
        else col--
    }
    
    return false
};
```
