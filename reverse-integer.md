**7. Reverse Integer**

**Given a 32-bit signed integer, reverse digits of an integer.**

**Example 1:**

```java
Input: 123
Output: 321
```

**Example 2:**

```java
Input: -123
Output: -321
```

**Example 3:**

```java
Input: 120
Output: 21
```

***Note:***
- Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
- For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

---

# Solution (Time - O(n)  | Space - O(1))
```java
class Solution {
    public int reverse(int x) {
       boolean negative = false;
        
        if (x < 0){
            negative = true;
            x *= -1;
        }
        
        long reversed = 0;
        
        while (x > 0){
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }
        
        if (reversed > Integer.MAX_VALUE) return 0;
        
        return negative ? (int)(-1 * reversed) : (int)(reversed);
    }
}
```
