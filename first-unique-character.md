# Leetcode Problem #387. First Unique Character in a String

**Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.**

**Examples:**

```java
s = "leetcode"
return 0.
```
```java
s = "loveleetcode"
return 2.
java

***Note:*** 
- You may assume the string contains only lowercase English letters.

---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public int firstUniqChar(String s) {
        // STEP: 1
        // loop through the string and record their occurences 
        // into the hashmap
        HashMap<Character, Integer> countMap = new HashMap<>();
        
        for (int i = 0; i < s.length(); i++){
            char letter = s.charAt(i);
            
            if (countMap.containsKey(letter)){
                countMap.put(letter, countMap.get(letter) + 1);
            } else {
                countMap.put(letter, 1);
            }
        }
        
        // STEP: 2
        // loop through the string for the second time
        // and find the key with the value '1'
        // the first key with the value '1'
        // is our required number
        for(int i = 0; i < s.length(); i++){
            char letter = s.charAt(i);
            
            if (countMap.get(letter) == 1) return i;
        }
        
        return -1;    
    }
}
```
