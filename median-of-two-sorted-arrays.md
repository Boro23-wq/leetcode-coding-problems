# Leetcode Problem #4. Median of Two Sorted Arrays

**Given two sorted arrays nums1 and nums2 of size m and n respectively.**

**Return the median of the two sorted arrays.**

**Follow up:** 
- The overall run time complexity should be O(log (m+n)).

**Example 1:**

```java
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
```

`Explanation: merged array = [1,2,3] and median is 2.`

**Example 2:**

```java
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
```

`Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.`

**Example 3:**

```java
Input: nums1 = [0,0], nums2 = [0,0]
Output: 0.00000
```

**Example 4:**

```java
Input: nums1 = [], nums2 = [1]
Output: 1.00000
```

**Example 5:**

```java
Input: nums1 = [2], nums2 = []
Output: 2.00000
```
 
***Constraints:***

- nums1,length == m
- nums2,length == n
- 0 <= m <= 1000
- 0 <= n <= 1000
- 1 <= m + n <= 2000

---

# Solution (Time - O(m+n) | Space - O(m+n))

```java
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {

        int i1 = 0;
        int i2 = 0;
        int x = 0;
        
        int len1 = nums1.length;
        int len2 = nums2.length;
        
        
        int[] result = new int[len1 + len2]; 
        
        while (i1 < len1 && i2 < len2){
            if (nums1[i1] < nums2[i2]){
                result[x++] = nums1[i1++];
            } else {
                result[x++] = nums2[i2++];
            }
        }
        
        while (i1 < len1){
            result[x++] = nums1[i1++];
        }
        
        while (i2 < len2){
            result[x++] = nums2[i2++];
        }
        
        if((len1 + len2) % 2 != 0){
            return (double)result[(len1 + len2) / 2];
        } else {
            return (double)(result[(len1 + len2 - 1) / 2] + result[(len1 + len2) / 2]) / 2.0;   
        }
    }
}
```
