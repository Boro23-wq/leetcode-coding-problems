# Leetcode Problem 21: Merge Two Sorted Lists

## Problem Statement:
**Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.**

**Example:**
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
---

### Solution Code: (JAVA)

Time - O(m + n) | Space - O(n)

```java
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        //create a dummy node
        ListNode dummy = new ListNode('\0');
        // assign the head node to the dummy node
        ListNode head = dummy;
        
        // continue till nodes present
        while (l1 != null && l2 != null){
            if(l1.val <= l2.val){
                dummy.next = l1;
                l1 = l1.next;
            } else {
                dummy.next = l2;
                l2 = l2.next;
            }
            dummy = dummy.next;
        }
        
        // if one of the links has nodes exhausted
        if(l1 == null){
            dummy.next = l2;
        } else {
            dummy.next = l1;
        }
        
        // head.next because head is 
        // pointing to the dummy node
        return head.next;
    }
}
```
---

### Solution Code: (JAVASCRIPT)

Time - O(m + n) | Space - O(n)

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let dummy = new Node(-1)
    let head = dummy
    
    while (l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            dummy.next = l1
            l1 = l1.next
        } else {
            dummy.next = l2
            l2 = l2.next
        }
        dummy = dummy.next
    }
    
    if(l1 === null){
        dummy.next = l2
    } else {
        dummy.next = l1
    }
    return head.next

}
    
class Node {
    constructor(value = null, next = null){
        this.value == value
        this.next = next
    }
}
```
