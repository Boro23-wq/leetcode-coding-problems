# Leetcode Problem #11. Container With Most Water

**Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.**

***Note:***

- You may not slant the container and n is at least 2.

![container-graph](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)

`The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.`

**Example:**

```java
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

---

## SOlution (Time - O(n)  | Space - O(1))

```java
class Solution {
    public int maxArea(int[] height) {
        int maxArea = Integer.MIN_VALUE;
        
        // left pointer
        int left = 0;
        //right pointer
        int right = height.length - 1;
        
        while(left < right){
            // calculate the minHeight
            // since the min decides how much water can be stored in the
            // container
            int minHeight = Math.min(height[left], height[right]);
            
            // maxArea = height * width
            // width --> j - i
            maxArea = Math.max(maxArea, minHeight * (right - left));
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;    
            }
        }
        
        return maxArea;
    }
}
```
