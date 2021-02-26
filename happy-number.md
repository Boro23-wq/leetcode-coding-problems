# Leetcode Problem 202. Happy Number

**Write an algorithm to determine if a number n is "happy".**

***A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.***

Return **True** if n is a happy number, and **False** if not.

**Example:**

```java
Input: 19
Output: true

Explanation: 
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
```

---

## Solution (Time - O(logN) | Space - O(1))

```java
class Solution {
    private int next(int n){
        int sum = 0; // 4
        while (n != 0){ //82
            sum += (n % 10) * (n % 10);
            n /= 10;
        }
        return sum;
    }
    
    public boolean isHappy(int n) {
       int tortoise = n;
        int hare = next(n); // curr = curr.next
        
        while (tortoise != hare){
            tortoise = next(tortoise);
            hare = next(next(hare));
        }
        
        return tortoise == 1;
    }
}
```
