# Leetcode Problem 66. Plus One

**Given a non-empty array of digits representing a non-negative integer, increment one to the integer.**

**The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.**

***You may assume the integer does not contain any leading zero, except the number 0 itself.***

**Example 1:**

```java
Input: [1,2,3]
Output: [1,2,4]
```

`Explanation: The array represents the integer 123.`

**Example 2:**

```java
Input: [4,3,2,1]
Output: [4,3,2,2]
```

`Explanation: The array represents the integer 4321.`
---

## Solution (Time Complexity - O(n)  | Space - O(n))

```java
class Solution {
    public int[] plusOne(int[] digits) {
        
        for (int i = digits.length - 1; i >= 0; --i){
            if (digits[i] < 9){
                ++digits[i];
                return digits;
            }
//             this must be the number 9
            digits[i] = 0;
        }
        
//         all 9's
        int[] newArray = new int[digits.length + 1];
        newArray[0] = 1;
        
        return newArray;
    }
}
```
