# Leetcode Problem #735. Asteroid Collision

**We are given an array asteroids of integers representing asteroids in a row.**

**For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.**

**Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.**

**Example 1:**

```java
Input: asteroids = [5, 10, -5]
Output: [5, 10]
```
```
Explanation: 
The 10 and -5 collide resulting in 10.  The 5 and 10 never collide.

**Example 2:**

```java
Input: asteroids = [8, -8]
Output: []
```
```
Explanation: 
The 8 and -8 collide exploding each other.
```

**Example 3:**

```java
Input: asteroids = [10, 2, -5]
Output: [10]
```
```
Explanation: 
The 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.
```

**Example 4:**

```java
Input: asteroids = [-2, -1, 1, 2]
Output: [-2, -1, 1, 2]
```
```
Explanation: 
The -2 and -1 are moving left, while the 1 and 2 are moving right.
Asteroids moving the same direction never meet, so no asteroids will meet each other.
```

***Note:***

- The length of asteroids will be at most 10000.
- Each asteroid will be a non-zero integer in the range [-1000, 1000]..

---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public int[] asteroidCollision(int[] asteroids) {
        
        // Step-1 : in the first iteration if asteroid is +ve add it to the stack
        // Step-2 : while stack is not empty & top of the stack is a positive number &
        // asteroid > top of the stack, pop from the stack
        // Step-3 : if top of the stack is negative, push the asteroid it to the stack
        // Step-4 : if the current asteroid and the top of the stack is same then pop from 
        // the stack
        
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < asteroids.length; i++){
            int currentAsteroid = asteroids[i];
            
            // handles positive number
            if (currentAsteroid > 0){
                stack.push(currentAsteroid);
            }
            
            // handles negative number
            while (!stack.isEmpty() && stack.peek() > 0 && -currentAsteroid > stack.peek()){
                stack.pop();
            }
            
            if (stack.isEmpty() || stack.peek() < 0) stack.push(currentAsteroid);
            else if (stack.peek() == -currentAsteroid) stack.pop();
        }
        
        int[] result = new int[stack.size()];
        
        for(int i = result.length - 1; i >= 0; i--) {
            result[i] = stack.pop();
        }
            return result;
        
    }
}
```
