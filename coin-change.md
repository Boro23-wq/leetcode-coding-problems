# Leetcode Problem #322. Coin Change

**You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.**

**Example 1:**

Input: coins = [1, 2, 5], amount = 11
Output: 3 

`Explanation: 11 = 5 + 5 + 1`

**Example 2:**

```
Input: coins = [2], amount = 3
Output: -1
```

_Note:_ 
You may assume that you have an infinite number of each kind of coin.
---

## Solution: (Bottom-up Approach)
### Time - O(A * C)| Space - O(A)

```javascript
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const memo = new Array(amount + 1)
    memo.fill(amount + 1)
    memo[0] = 0
    
    for (let i = 1; i <= amount; i++){
        for (let j = 0; j < coins.length; j++){
            if (coins[j] <= i ){
                memo[i] = Math.min(memo[i], 1 + memo[i - coins[j]])
            }
        }
    }
    
    return memo[amount] > amount ? -1 : memo[amount] 
};
```

