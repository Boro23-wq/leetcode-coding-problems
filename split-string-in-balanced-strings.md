# Leetcode Problem #1221. Split a String in Balanced Strings.

**Given a balanced string s split it in the maximum amount of balanced strings. Return the maximum amount of splitted balanced strings.**

_Balanced strings are those who have equal quantity of 'L' and 'R' characters._

---

**Example 1:**

```javascript
Input: s = "RLRRLLRLRL"
Output: 4
```
`Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.`

**Example 2:**

```javascript
Input: s = "RLLLLRRRLR"
Output: 3
```
`Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.`

**Example 3:**

```javascript
Input: s = "LLLLRRRR"
Output: 1
```
`Explanation: s can be split into "LLLLRRRR".`

**Example 4:**

```javascript
Input: s = "RLRRRLLRLL"
Output: 2
```

`Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'`
 

_**Constraints:**_

- 1 <= s.length <= 1000
- s[i] = 'L' or 'R'

---

## Easy and clean solution:
### Time - O(n) | Space - O(1)

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(S) {
    let balanced = 0, result = 0
    
    for (let s of S){
        s === 'R' ? balanced++ : balanced--
        if (balanced === 0){
            result++
        }
    }
    
    return result
};
```
