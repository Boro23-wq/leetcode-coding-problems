# Leetcode Problem #169. Majority Element

**Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.**

**You may assume that the array is non-empty and the majority element always exist in the array.**

**Example 1:**

```java
Input: [3,2,3]
Output: 3
```

**Example 2:**

```java
Input: [2,2,1,1,1,2,2]
Output: 2
```

---

## JAVA Solution (Time - O(n) |  Space - O(n))

```java
class Solution {
    public int majorityElement(int[] nums) {
        
        // if only one element in the array
        if(nums.length == 1){
            return nums[0];
        }
        
        HashMap<Integer, Integer> count = new HashMap<>();
        
        for (int i : nums){
            // check if already exists in the hashmap and,
            // check if after incrementing the count
            // its value exceeds more than the half of the array
            if (count.containsKey(i) && count.get(i) + 1 > nums.length / 2){
                return i;
            } else {
                count.put(i, count.getOrDefault(i, 0) + 1);
            }
        }
        
        return -1;
    }
}
```

---

## JAVASCRIPT Solution (Time - O(n) |  Space - O(n))

```javascript
function majorityElement(nums){
  let map = {}
  for(let i of nums){
    map[i] ? map[i]++ : map[i] = 1
  }
  return Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
}
```
