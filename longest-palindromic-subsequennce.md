# Leetcode Problem #516. Longest Palindromic Subsequence

**Given a string s, find the longest palindromic subsequence's length in s. You may assume that the maximum length of s is 1000.**

**Example 1:**

```java
Input: "bbbab"
Output: 4
```

`One possible longest palindromic subsequence is "bbbb".`

**Example 2:**

```java
Input: "cbbd"
Output: 2
```

`One possible longest palindromic subsequence is "bb".`

***Constraints:***

- 1 <= s.length <= 1000
- s consists only of lowercase English letters.

---

```java
class Solution {
    public int longestPalindromeSubseq(String s) {
        // create a 2d array of rows and cols
        // equal to the length of the string
        int[][] dp = new int[s.length()][s.length()];
        
        // start from the bottom right corner
        for(int i=s.length()-1; i >= 0; i--){
            //diagonals of the 2d matrix
            // is set to 1
            dp[i][i] = 1;
            
            // moving from bottom-right to left and 
            // then further right
            for (int j = i + 1; j < s.length(); j++){
                if (s.charAt(i) == s.charAt(j)){
                    dp[i][j] = 2 + dp[i+1][j-1];
                    
                } else {
                    dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1]);
                }
            }
        }
        
        return dp[0][s.length()-1];
    }
}

```
