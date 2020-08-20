# Leetcode Problem #415. Add Strings

**Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.**

***Note:***

- The length of both num1 and num2 is < 5100.
- Both num1 and num2 contains only digits 0-9.
- Both num1 and num2 does not contain any leading zero.
- You must not use any built-in BigInteger library or convert the inputs to integer directly.

---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public String addStrings(String num1, String num2) {
        
        // start from the last digit of num1
        int i = num1.length() - 1;
        // starting from the last digit of num2
        int j = num2.length() - 1;
        // storing the carry
        int carry = 0;
        // final result string...
        StringBuilder result = new StringBuilder();
        
        
        while(i >= 0 || j >= 0){
            // extract the character from num1
            // check if the index is < 0 
            // if yes default it to '0'
            int d1 = i >= 0 ? num1.charAt(i) - '0' : 0;
            // extract the character from num2
            int d2 = j >= 0 ? num2.charAt(j) - '0' : 0;
            
            //n , b
            // calculate the sum
            int sum = d1 + d2 + carry;
            // append the first digit to the sum
            result.append(sum % 10);
            // append the last digit to carry
            carry = sum / 10;
            // decrement counters
            i--; j--;
        }
        
        // for 99 + 1, result will have 00
        // while carry will have 1
        // append the carry to the result
        if (carry == 1) result.append(1);
    
        return result.reverse().toString();
    }
}
```
