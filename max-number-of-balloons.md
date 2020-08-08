# Leetcode Problem #1189. Maximum Number of Balloons

## Problem Statement:

**Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.**

***You can use each character in text at most once. Return the maximum number of instances that can be formed.***

**Example 1:**

![nlaebolko](https://assets.leetcode.com/uploads/2019/09/05/1536_ex1_upd.JPG)

```java
Input: text = "nlaebolko"
Output: 1
```

**Example 2:**

![loonbalxballpoon](https://assets.leetcode.com/uploads/2019/09/05/1536_ex2_upd.JPG)

```java
Input: text = "loonbalxballpoon"
Output: 2
```

**Example 3:**

```java
Input: text = "leetcode"
Output: 0
```

**Constraints:**

- 1 <= text.length <= 10^4
- text consists of lower case English letters only.
---

## SOLUTION {Time - O(n)  | Space - O(1)}

```java
class Solution {
    public int maxNumberOfBalloons(String text) {
        int[] charArray = new int[26];
        
        for (int i = 0; i < text.length(); i++){
            charArray[text.charAt(i) - 'a']++;
        }
        
//         b --> 1
        int minimum = charArray[1];
            
//         a --> 0
        minimum = Math.min(minimum, charArray[0]);
        
//         l --> 11 (/2 because 'l' appears twice in the word 'balloon')
        minimum = Math.min(minimum, charArray[11] / 2); 

//         o --> 14 (/2 because 'o' appears twice in the word 'balloon')
        minimum = Math.min(minimum, charArray[14] / 2); 
        
//         n --> 13
        minimum = Math.min(minimum, charArray[13]); 
        
        return minimum;
        
    }
}
```
