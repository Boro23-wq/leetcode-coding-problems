# Leetcode Problem 367: Valid Perfect Square

**Given a positive integer num, write a function which returns True if num is a perfect square else False.**

_Follow up: Do not use any built-in library function such as sqrt._

**Example 1:**

```
Input: num = 16
Output: true
```

**Example 2:**

```
Input: num = 14
Output: false
```

**Constraints:**
- 1 <= num <= 2^31 - 1
---

## Solution - Using SQRT in-built function.

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
Using sqrt function
var isPerfectSquare = function(num) {
    return num > 0 && Math.sqrt(num) % 1 === 0
};

```
---

## Solution - (Time - O(logN) | Space - O(1))

```javascript
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num === 0){
        return false
    }
    
    let left = 1
    let right = num
    
    while (left <= right){
        let mid = left + Math.floor((right - left) / 2)
        if (mid * mid === num){
            return true
        } else if (mid * mid > num){
            right = mid - 1
        } else if (mid * mid < num){
            left = mid + 1
        } 
    }
    
    return false
};
```
