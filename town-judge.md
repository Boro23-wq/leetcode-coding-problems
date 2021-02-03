# Leetcode Problem 997. Find the Town Judge

**In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.**

**If the town judge exists, then:**

- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.

**You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.**

**If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.**

**Example 1:**

```javascript
Input: N = 2, trust = [[1,2]]
Output: 2
```

**Example 2:**

```javascript
Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
```

**Example 3:**

```javascript
Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
```

**Example 4:**

```javascript
Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
```

**Example 5:**

```javascript
Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
```

***Constraints:***

- 1 <= N <= 1000
- 0 <= trust.length <= 10^4
- trust[i].length == 2
- trust[i] are all different
- trust[i][0] != trust[i][1]
- 1 <= trust[i][0], trust[i][1] <= N

---

## Solution (Time - O(n) |   Space - O(n))

```javascript
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    
    // array of size N+1 since there
    // wouldnt be any person '0'
    let count = new Array(N + 1).fill(0);
    
    // for [i, j] of trust
    // i -> person who trusts
    // j -> person who is trusted
    for(let [i, j] of trust){
        // decrease the count of person trusting
        count[i] -= 1;
        // increase the count of person trusted
        count[j] += 1;
    }
    
    // run through the count array and check
    // if there is a person with count trusts === total people - 1
    // -1 would be himself as the town judge trusts nobody
    for (let i = 1; i < count.length; i++){
        if (count[i] === (N-1)){
            // if a town judge is found
            // return him
            return i;
        }
    }
    
    // if not found return -1
    return -1;
};
```
