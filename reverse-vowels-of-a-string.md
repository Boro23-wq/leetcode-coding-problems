# Leetcode Problem #345. Reverse Vowels of a String

**Write a function that takes a string as input and reverse only the vowels of a string.**

**Example 1:**

```java
Input: "hello"
Output: "holle"
```

**Example 2:**

```java
Input: "leetcode"
Output: "leotcede"
```

***Note:***
- The vowels does not include the letter "y".

---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public String reverseVowels(String s) {
        char[] arr = s.toCharArray();
        int left = 0, right = arr.length - 1;
        
        while (left < right){
            boolean leftIsVowel = isVowel(arr[left]);
            boolean rightIsVowel = isVowel(arr[right]);
            
            // if both left and right pointers are vowels
            // swap it
            if(leftIsVowel && rightIsVowel){
                swap(arr, left, right);
                ++left;
                --right;
            }
            
            // if left pointer is not a vowel
            // increase left pointer
            if(!leftIsVowel){
                ++left;
            }
            
            // if right pointer is not a vowel
            // decrease right pointer
            if(!rightIsVowel){
                --right;
            }
        }
        
        // convert char of arrays to string
        return String.valueOf(arr);
    }
    
    // swap the values at left and right pointers
    private void swap(char[] arr, int i, int j){
        char temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    // check if letter at left and right pointer is a vowel
    private boolean isVowel(char letter){
        char c = Character.toLowerCase(letter);
        
        return c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u';
    }
}
```
