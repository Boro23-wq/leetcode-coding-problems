# Leetcode Problem 118: Pascal's Triangle

**Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.**

***In Pascal's triangle, each number is the sum of the two numbers directly above it.***

![pascal](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

```java
Example:

Input: 5

Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

---

## Solution (JAVA) - Time(O(n^2)) | Space(O(n^2))

```java
class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> resultTriangle = new ArrayList<>();
        
        for (int i = 0; i < numRows; i++){
            List<Integer> list = new ArrayList<>(Arrays.asList(1));
            for (int j = 1; j < i; j++){
                List<Integer> prev = resultTriangle.get(i - 1);
                list.add(prev.get(j-1) + prev.get(j));
            }
//             for every row excluding the first row add a '1'
            if (i > 0) list.add(1);
            resultTriangle.add(list);
        }
        
        return resultTriangle;
    }
}
```
---

## Solution (JAVASCRIPT) - Time(O(n^2)) | Space(O(n^2))

```javascript
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let resultTriangle = []
    
//     if no rows than return empty array
//     we cannot form a pascals triangle
    if (numRows === 0){
        return resultTriangle
    }
    
//     add '1' to the perimeter
    resultTriangle.push([1])
    
    for (let i = 1; i < numRows; i++){
        let prevRow = resultTriangle[i - 1]
        let newRow = []
        
        newRow.push(1)
        
        for (let j = 1; j < prevRow.length; j++){
            newRow[j] = prevRow[j - 1] + prevRow[j]
        }
        
        newRow.push(1)
        resultTriangle.push(newRow)
    }
    
    return resultTriangle
};
```

