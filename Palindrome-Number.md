# Leetcode Problem #9: Palindrome Number

## **Problem Statement:**

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
---

**Example 1:**

```Input: 121
Output: true
```

**Example 2:**

```Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
```

**Example 3:**

```
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
```
_Follow up:_

> Coud you solve it without converting the integer to a string?
---

## **APPROACH 1:** (Converting to string)

```javascript
var isPalindrome = function(x) {
    let string = x.toString()
    let array = [...string]
    let reversed = array.reverse().join('')
    return string === reversed
};
```

## **APPROACH 2:** (Without string conversion)
_(Takes up less space)_

```javascript
var isPalindrome = function(x) {
     if(x<0) return false;
     if(x<10) return true;
     let reversed=0, num=x;
     while(num>0){
         //num%10 pulls out the digit from end && reversed*10 will keep adding the digits to form the number again
         reversed=reversed*10 + num%10;
         //here the number gets decremented (121 becomes 12 for next iteration)
         num=Math.floor(num/10);
     }
 return reversed===x;
};
```
