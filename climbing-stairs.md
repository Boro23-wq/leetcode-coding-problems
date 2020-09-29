# Leetcode Problem #70. Climbing Stairs

**You are climbing a stair case. It takes n steps to reach to the top.**

**Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?**

**Example 1:**

```javascript
Input: 2
Output: 2
```

```
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
**Example 2:**

```javascript
Input: 3
Output: 3
```

```
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
``` 

***Constraints:***

- 1 <= n <= 45

---

## Solution Code 

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    
    // recursive function
    let countingFunc = (stairsRemaining, storedResult) => {
        // edge case if there are negative remaining staircases
        // do not add it to the result
        if (stairsRemaining < 0) return 0;
        // if stairs remaining === 0
        // we have reached our destination
        if (stairsRemaining === 0) return 1;
        
        // memoization, check if the result
        // is already computed (in the map)
        if (storedResult[stairsRemaining]){
            return storedResult[stairsRemaining];
        }
        
        // add the result to the map
        storedResult[stairsRemaining] = countingFunc(stairsRemaining - 1, storedResult) + countingFunc(stairsRemaining - 2, storedResult);
        
        return storedResult[stairsRemaining];
    }
    
    return countingFunc(n, {});
};
```

## Submission Details

***Runtime:*** 72 ms, faster than 80.09% of JavaScript online submissions for Climbing Stairs. <br/>
***Memory Usage:*** 38.7 MB, less than 5.03% of JavaScript online submissions for Climbing Stairs.

