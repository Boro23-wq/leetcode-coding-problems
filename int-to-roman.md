# Leetcode Problem 12. Integer to Roman

**Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.**

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, 
- two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

**Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:**

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

**Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.**

**Example 1:**

```java
Input: 3
Output: "III"
```

**Example 2:**

```java
Input: 4
Output: "IV"
```

**Example 3:**

```java
Input: 9
Output: "IX"
```

**Example 4:**

```java
Input: 58
Output: "LVIII"
```

`Explanation: L = 50, V = 5, III = 3.`

***Example 5:***

```java
Input: 1994
Output: "MCMXCIV"
```

`Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.`

---

## Solution

```java
class Solution {
    
    private Numeral[] numerals = {
       new Numeral("M", 1000),
       new Numeral("CM", 900),
       new Numeral("D", 500),
       new Numeral("CD", 400),
       new Numeral("C", 100),
       new Numeral("XC", 90),
       new Numeral("L", 50),
       new Numeral("XL", 40),
       new Numeral("X", 10),
       new Numeral("IX", 9),
       new Numeral("V", 5),
       new Numeral("IV", 4),
       new Numeral("1", 1),
    };
    
    public String intToRoman(int num) {
        String result = "";
        
        for (Numeral numeral : numerals){
            int noOfSymbols = num / numeral.value;
            if (noOfSymbols != 0) result += numeral.symbol.repeat(noOfSymbols);
            num %= numeral.value;
        }
        
        return result;
    }
    
    class Numeral {
        public String symbol;
        public int value;
        
        public Numeral (String symbol, int value){
            this.symbol = symbol;
            this.value = value;
        }
    }
}
```

---

```java
class Solution {
    public String intToRoman(int num) {
        String units[]={"","I","II","III","IV","V","VI","VII","VIII","IX"};
        String tens[]={"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
        String hundreds[]={"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
        String thousands[]={"","M","MM","MMM"};
        
        return thousands[num/1000]+
                hundreds[(num%1000)/100]+
                tens[(num%100)/10]+
                units[num%10];
    }
}
```
