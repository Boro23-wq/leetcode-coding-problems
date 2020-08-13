# Leetcode Problem #1. Two Sum

**Given an array of integers, return indices of the two numbers such that they add up to a specific target.**

**You may assume that each input would have exactly one solution, and you may not use the same element twice.

**Example:**

```
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,

return [0, 1].
```

---

## Solution (Time - O(n) | Space - O(n))

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int[] result = new int[2];
        
        for (int i = 0; i < nums.length; i++){
            int difference = target - nums[i];
            
            if (map.containsKey(difference)){
                result[0] = map.get(difference);
                result[1] = i;
            } else {
                map.put(nums[i], i);
            }
        }
        return result;
    }
}
```

---

# Leetcode Problem #167. Two Sum II - Input array is sorted

**Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.**

**The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.**

***Note:***

- Your returned answers (both index1 and index2) are not zero-based.
- You may assume that each input would have exactly one solution and you may not use the same element twice.

**Example:**

```java
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
```

`Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.`

## Solution (Time - O(n) | Space - O(1))

```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        
        int left = 0, right = numbers.length - 1;
        
       while(left < right) {
           int sum = numbers[left] + numbers[right];
           if (sum == target) return new int[] {left + 1, right + 1};
           else if (sum > target) --right;
           else ++left;
        }
        return null;
    }
}
```
