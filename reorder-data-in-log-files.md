# Leetcode Problem #937. Reorder Data in Log Files

**You have an array of logs.  Each log is a space delimited string of words.**

**For each log, the first word in each log is an alphanumeric identifier.  Then, either:**

- Each word after the identifier will consist only of lowercase letters, or;
- Each word after the identifier will consist only of digits.
- We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

**Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.**

**Return the final order of the logs.**

**Example 1:**

```java
Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
```

**Constraints:**

- 0 <= logs.length <= 100
- 3 <= logs[i].length <= 100
- logs[i] is guaranteed to have an identifier, and a word after the identifier.

---

## Solution (Time - O(NlogN)  | Space - O(logN))

```java
class Solution {
    public String[] reorderLogFiles(String[] logs) {
        
        Arrays.sort(logs, (log1, log2) -> {
            // log1 < log2 --> -1
            // log1 == log2 --> 0
            // log1 > log2 --> 1
            
            // index of the identifier
            int index1 = log1.indexOf(" ");
            // id
            String id1 = log1.substring(0, index1);
            // main part (log part)
            String main1 = log1.substring(index1 + 1);
            
            // index of the identifier
            int index2 = log2.indexOf(" ");
            // id
            String id2 = log2.substring(0, index2);
            // main part (log part)
            String main2 = log2.substring(index2 + 1);
            
            // check if digit
            boolean isDigit1 = Character.isDigit(main1.charAt(0));
            boolean isDigit2 = Character.isDigit(main2.charAt(0));
            
            // if not digits
            if (!isDigit1 && !isDigit2){
                int value = main1.compareTo(main2);
                
                // in case when both the strings are equal
                // sort by its id
                if(value == 0) return id1.compareTo(id2);
                
                return value;
            }
            
            // if both of them are digits, return 0
            // else log2 is not a digit log or if isDigit2 is false, return 1
            // else if log1 is a letter log or if isDigit1 is false, return -1
            return isDigit1 ? (isDigit2 ? 0 : 1) : -1;
        });
        
        return logs;
    }
}
```
