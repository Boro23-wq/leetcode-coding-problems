# Leetcode Problem #23. Merge k Sorted Lists

**Given an array of linked-lists lists, each linked list is sorted in ascending order.**

**Merge all the linked-lists into one sort linked-list and return it.**

**Example 1:**

```java
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]

Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list: 1->1->2->3->4->4->5->6
```

**Example 2:**

```java
Input: lists = []
Output: []
```

**Example 3:**

```java
Input: lists = [[]]
Output: []
```

***Constraints:***

- k == lists.length
- 0 <= k <= 10^4
- 0 <= lists[i].length <= 500
- -10^4 <= lists[i][j] <= 10^4
- lists[i] is sorted in ascending order.
- The sum of lists[i].length won't exceed 10^4.

---

## Solution (Time - O(NlogK) | Space - O(N))

```java
class Solution {
    public ListNode mergeKLists(ListNode[] lists) {

        if (lists == null || lists.length == 0) return null;
        
        PriorityQueue<ListNode> minHeap = new PriorityQueue<>((a,b) -> a.val - b.val);
        ListNode dummy = new ListNode ('\0');
        ListNode head = dummy;
        
        for (ListNode node : lists){
            if (node != null){
                minHeap.add(node);
            }
        }
        
        while(!minHeap.isEmpty()){
            ListNode smallest = minHeap.remove();
            dummy.next = smallest;
            dummy = smallest;
            if (smallest.next != null){
                minHeap.add(smallest.next);
            }
            
        }
        return head.next;
    }
}
```
