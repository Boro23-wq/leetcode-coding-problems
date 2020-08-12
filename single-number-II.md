# Leetcode Problem #137. Single Number II

**Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.**

***Note:***

_Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?_

**Example 1:**

```java
Input: [2,2,3,2]
Output: 3
```

**Example 2:**

```java
Input: [0,1,0,1,0,1,99]
Output: 99
```
---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public int singleNumber(int[] nums) {
     HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
        for (int num : nums){
            if(!map.containsKey(num)) map.put(num, 1);
            else if (map.get(num) == 1) map.put(num, 2);
            else if (map.get(num) == 2) map.remove(num);
        }
        return map.keySet().iterator().next();
    }
}
```

---

## Solution (Time - O(n) | Space - O(1))

```java
class Solution {
    public int singleNumber(int[] nums) {
      int ones = 0, twos = 0;
        for (int i = 0; i < nums.length; i++){
            ones = (ones ^ nums[i]) & ~twos;
            twos = (twos ^ nums[i]) & ~ones;
        }
        return ones;
    }
}
```
