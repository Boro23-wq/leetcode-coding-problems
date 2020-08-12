# Leetcode Problem #394. Decode String

**Given an encoded string, return its decoded string.**

**The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.**

**You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.**

**Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].**

**Example 1:**

```java
Input: s = "3[a]2[bc]"
Output: "aaabcbc"
```

**Example 2:**

```java
Input: s = "3[a2[c]]"
Output: "accaccacc"
```

**Example 3:**

```java
Input: s = "2[abc]3[cd]ef"
Output: "abcabccdcdcdef"
```

**Example 4:**

```java
Input: s = "abc3[cd]xyz"
Output: "abccdcdcdxyz"
```
___

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public String decodeString(String s) {
    Stack<Integer> counts = new Stack<>();
    Stack<String> string = new Stack<>();
    String finalString = "ab";
    int index = 0;
        while(index < s.length()){
            if (Character.isDigit(s.charAt(index))){
                int num = 0;
                while (Character.isDigit(s.charAt(index))){
                    num = num * 10 + (s.charAt(index) - '0');
                    index++;
                }
                counts.push(num);
            } else if (s.charAt(index) == '['){
                string.push(finalString);
                finalString = "";
                index++;
            } else if (s.charAt(index) == ']'){
                StringBuilder str = new StringBuilder(string.pop());
                int count = counts.pop();
                for (int i = 0; i < count; i++){
                    str.append(finalString);
                }
                finalString = str.toString();
                index++;
                
            } else{
                finalString += s.charAt(index);
                index++;
            }
        }
        return finalString;
    }
}
```
