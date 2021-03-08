# Leetcode Problem 58. Length of Last Word

**Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word (last word means the last appearing word if we loop from left to right) in the string.**

**If the last word does not exist, return 0.**

***Note:*** 
- A word is defined as a maximal substring consisting of non-space characters only.

**Example:**

```javascript
Input: "Hello World"
Output: 5
```
---

## Solution (Time - O(n) | Space - O(1))

```javascript
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // counter variable to store the 
    // count of the last word
    let lengthOfLastWord = 0;
    // boolean to store if we are before 
    // the first nonEmpty Char
    // or before the last word
    let beforeFirstNonEmptyChar = true;
    
    if (s.length === 0) return 0;
    
    for (let i = s.length - 1; i >= 0; i--){
        // if there is a char
        // increment the counter
        // and set the boolean to false 
        // since we have encountered the last word
        if(s.charAt(i) !== ' '){
            beforeFirstNonEmptyChar = false;
            lengthOfLastWord += 1;
        // if no char check
        // if we are still ahead of the lastWord
        // if not than break out of the loop and return the count
        } else {
            if (!beforeFirstNonEmptyChar){
                break;
            } 
        }
    }
    return lengthOfLastWord;
};
```
