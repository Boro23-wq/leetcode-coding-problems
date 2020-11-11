## Problem Statement:

Given a string, determine if there is a way to arrange the string such that the string is a palindrome. If such arrangements exists, return the palindrome (there may be many arrangements - return just one). Otherwise return false if no such palindrome exists.

**Example-1:**

```javascript
Input: racecar
Output: racecar
```

> Since 'racecar' is a palindrome.

**Example-2:**

```javascript
Input: racecara
Output: false
```

> Since 'racecara' can't be arranged to form a palindrome.
---

## Solution Code:

**Time Complextiy**: O(n)  |   **Space Complexity**: O(n)

```javascript
var findPalindrome = function (s) {
  let set = [...s].reduce((acc, curr) => {
    acc[curr] = acc[curr] ? (acc[curr] += 1) : 1
    return acc
  }, {})

  let odd_char = ""
  let palindrome = ""

  for (let c in set) {
    // if even count add it to palindrome
    if (set[c] % 2 === 0) {
      palindrome += c.repeat(Math.floor(set[c] / 2))
      //if odd add to the odd_char and also to the palindrome,
      //and add the extra letter to the palindrome
    } else if (odd_char === "") {
      odd_char += c
      palindrome += c.repeat(Math.floor(set[c] / 2))
    } else {
      return false
    }
  }
  return palindrome + odd_char + palindrome.split("").reverse().join("")
}

findPalindrome("nolemonnomelon") // nnoolemameloonn
// findPalindrome("racecar") // racecar
// findPalindrome("mygym") //mygym
// findPalindrome("nogymn") // false
// findPalindrome("racecara") // false
```
