Leecode Problem 56. Merge Intervals

**Given a collection of intervals, merge all overlapping intervals.**

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
```

`Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].`

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
```

`Explanation: Intervals [1,4] and [4,5] are considered overlapping.`

***Constraints:***

- intervals[i][0] <= intervals[i][1]

---

## Solution:
### Time - O(nlogn) | Space - O(n)

```javascript
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
 
    if (intervals.length === 0){
        return []
    } else if (intervals.length === 1){
        return intervals
    }
    
    intervals.sort((a, b) => a[0] - b[0]);
    
    let results = []
    results[0] = intervals[0]
    
    // [[0,4],[1,4]]
    for (let [start, end] of intervals){
        //check if there is an overlap
        if (start <= results[results.length - 1][1]){
            const [prevStart, prevEnd] = results.pop()
            results.push([prevStart, Math.max(end, prevEnd)]);
        } else {
            results.push([start, end])
        }
    }
    
    return results
}
```
