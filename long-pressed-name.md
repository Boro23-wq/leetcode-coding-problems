# Leetcode Problem #925. Long Pressed Name

**Your friend is typing his name into a keyboard.  Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.**

**You examine the typed characters of the keyboard.  Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.**

**Example 1:**

```javascript
Input: name = "alex", typed = "aaleex"
Output: true
```

`Explanation: 'a' and 'e' in 'alex' were long pressed.`

**Example 2:**

```javascript
Input: name = "saeed", typed = "ssaaedd"
Output: false
```

`Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.`

**Example 3:**

```javascript
Input: name = "leelee", typed = "lleeelee"
Output: true
```

**Example 4:**

```javascript
Input: name = "laiden", typed = "laiden"
Output: true
```

`Explanation: It's not necessary to long press any character.`
 

***Constraints:***

- 1 <= name.length <= 1000
- 1 <= typed.length <= 1000
- The characters of name and typed are lowercase letters.

---

## Solution (Time - O (m + n) | Space - O(1))

```java
class Solution {
    public boolean isLongPressedName(String name, String typed) {
        int m = name.length(), n = typed.length();
        
        // if typed string is less than name string, return false
        if (n < m) return false;
        
        int i = 0, j = 0;
        
        while (i < m && j < n){
            char nameChar = name.charAt(i);
            char typedChar = typed.charAt(j);
            
            if(nameChar != typedChar) return false;
            
            int nameIndex = i + 1;
            int typedIndex = j + 1;
            
            while(nameIndex < m && name.charAt(nameIndex) == nameChar) ++nameIndex;
            while(typedIndex < n && typed.charAt(typedIndex) == typedChar) ++typedIndex;
            
            if((typedIndex - j) < (nameIndex - i)) return false;
            
            i = nameIndex;
            j = typedIndex;
        }
        
        return i >= m && j >= n;
    
    }
}
```
