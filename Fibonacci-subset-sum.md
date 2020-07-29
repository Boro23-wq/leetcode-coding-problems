# Leetcode Problem #1414: Find the Minimum Number of Fibonacci Numbers Whose Sum Is K

## Problem Statement
Given the number k, return the minimum number of Fibonacci numbers whose sum is equal to k, whether a Fibonacci number could be used multiple times.

```
The Fibonacci numbers are defined as:

F1 = 1
F2 = 1
Fn = Fn-1 + Fn-2 , for n > 2.
```
> It is guaranteed that for the given constraints we can always find such fibonacci numbers that sum k.
 
**Example 1:**

```javascript
Input: k = 7
Output: 2 
```
> Explanation: The Fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, ... For k = 7 we can use 2 + 5 = 7.
---
**Example 2:**

```javascript
Input: k = 19
Output: 3 
```
> Explanation: For k = 19 we can use 1 + 5 + 13 = 19.
---
**Example 3:**

```javascript
Input: k = 10
Output: 2 
```
> Explanation: For k = 10 we can use 2 + 8 = 10.
---
***Constraints:***
- 1 <= k <= 10^9
---

## Solution

```javascript
/**
 * @param {number} k
 * @return {number}
 */

let findMinFibonacciNumbers = (T) => {
    
    let A = [0, 1]
    let count = 0
    
    while (A[A.length-2] + A[A.length-1] <= T){
        A.push(A[A.length-2] + A[A.length-1])
    }
    
    //console.log(A)
    
    for (let i = A.length-1; i > 0; i--){
        if(T >= A[i]){
            T -= A[i]
            count++
        }
    }
    return count
  };  
    
```
