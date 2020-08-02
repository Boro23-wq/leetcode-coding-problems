# Leetcode Problem #21: Merge Two Sorted Lists

## Problem Statement:
**Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.**

**Example:**
```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```
---

### Solution Code:

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
