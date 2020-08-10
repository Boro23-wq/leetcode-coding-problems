# Leetcode Problem #3: Longest Substring Without Repeating Characters

**Given a string, find the length of the longest substring without repeating characters.**

**Example 1:**

```
Input: "abcabcbb"
Output: 3 
```

`Explanation: The answer is "abc", with the length of 3.`

**Example 2:**

```
Input: "bbbbb"
Output: 1
```

`Explanation: The answer is "b", with the length of 1.`

**Example 3:**

```
Input: "pwwkew"
Output: 3
```

`Explanation: The answer is "wke", with the length of 3.`

_Note that the answer must be a substring, "pwke" is a subsequence and not a substring._

---
## Javascript Solution (Time - O(n) | Space - O(n))

```javascript
let lengthOfLongestSubstring = (s) => {
    let hashSet = new Set()
    let left = 0
    let result = 0
    
    for (let right = 0; right < s.length; right++){
        while (hashSet.has(s[right])){
            hashSet.delete(s[left])
            left += 1
        }
        hashSet.add(s[right])
        result = Math.max(result, right - left + 1)
    }
    
    return result
}
```

## Java Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> charSet = new HashSet<>();
        int i = 0, j = 0, result = 0;
        
        while (i < s.length()){
            char c = s.charAt(i);
            while (charSet.contains(c)){
                charSet.remove(s.charAt(j));
                ++j;
            }
            charSet.add(c);
            result = Math.max(result, i - j + 1);
            ++i;
        }
        
        return result;
    }
}
```
