# Leetcode Problem #65. Valid Number

**Validate if a given string can be interpreted as a decimal number.**

**Some examples:**

```java
"0" => true
" 0.1 " => true
"abc" => false
"1 a" => false
"2e10" => true
" -90e3   " => true
" 1e" => false
"e3" => false
" 6e-1" => true
" 99e2.5 " => false
"53.5e93" => true
" --6 " => false
"-+3" => false
"95a54e53" => false
```

***Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one. However, here is a list of characters that can be in a valid decimal number:***

- Numbers 0-9
- Exponent - "e"
- Positive/negative sign - "+"/"-"
- Decimal point - "."

Of course, the context of these characters also matters in the input.

---

## Solution (Time - O(n) | Space - O(1))

```java
class Solution {
    public boolean isNumber(String s) {
        if (s.length() == 0) return false;
        
        s = s.trim();
        
        boolean digitSeen = false;
        boolean decimalSeen = false;
        boolean expoSeen = false;
        
        for (int i = 0; i < s.length(); i++){
            char c = s.charAt(i);
            if (Character.isDigit(c)){
                digitSeen = true;
            } else if (c == '.'){
                // first check for multiple decimal -> false
                // second check for decimal after 'e' or exponential -> false
                if (decimalSeen || expoSeen) return false;
                decimalSeen = true;
            } else if (c == 'e'){
                // if 'e' is at the very end of the string
                // then it is invalid string
                // second check if 'e' appears more than once
                // it is an invalid string
                // third check if there are no digits before 'e'
                // then the string is invalid
                if (i == s.length() - 1 || expoSeen || !digitSeen) return false;
                expoSeen = true;
            } else if (c == '+' || c == '-'){
                // check if a sign is between digits ( 1 + 3)
                // but +12 is valid
                // 12e+34 is valid since + comes directly after 'e'
                if ((i != 0 && s.charAt(i - 1) != 'e') || i == s.length() - 1) return false;
            } else {
                return false;
            }
        }
        return digitSeen;
    }
}
```
