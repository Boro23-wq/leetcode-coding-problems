# Leetcode Problem #242. Valid Anagram

**Given two strings s and t , write a function to determine if t is an anagram of s.**

**Example 1:**

```java
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```java
Input: s = "rat", t = "car"
Output: false
```

***Note:***
- You may assume the string contains only lowercase alphabets.

***Follow up:***
- What if the inputs contain unicode characters? How would you adapt your solution to such case?

---

# Solution (Time - O(n)  | Space - O(n))

```java
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] alphas = new int[26];
        char[] string1 = s.toCharArray();
        char[] string2 = t.toCharArray();
        
        for (int i = 0; i < string1.length; i++){
            alphas[string1[i] - 'a'] += 1;
        }
        
        for (int j = 0; j < string2.length; j++){
            alphas[string2[j] - 'a'] -= 1;
        }
        
        for (int alpha : alphas ){
            if(alpha != 0){
                return false;
            }
            
        }
        
         return true;
    }
}
```
