# BinarySearch.io Problem #28: A unique string

## Problem Statement:

**Given a string s, determine whether it has all unique characters.**

**Example 1:**

```
Input: s = "abcde"
Output: true
```

> **Explanation:** All characters only occur once

**Example 2:**

```
Input: s = "aab"
Output: false
```

> **Explanation:** There's two a's

**Example 3:**

Input: s = ""
Output: true

> **Explanation:** All characters occur once (of which there are none)

---

## **SOLUTION:**

```javascript
const uniqueString = function(s){
  let result = new Set()
  for (let i = 0; i < s.length; i++){
      if (result.has(s[i])) return false
      result.add(s[i])
      }
   return true
}
```
