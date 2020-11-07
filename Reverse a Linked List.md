# Leetcode Problem #206: Reverse a singly linked list.

**Example:**

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

***Follow up:***

A linked list can be reversed either iteratively or recursively. Could you implement both?

**APPROACH: 1 **
#### (ITERATIVE APPROACH)
----

 ```javascript
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 

 var reverseList = function(head, previous = null) {
     if (!head) return null
     let prev = null
     let next = null
     while (head){
     // store the current's next value in a temporary variable
     temp = head.next
     //swap the curr.next and previous value
     head.next = prev         
     prev = head
     head= temp
    }
    return prev
 };
```

**APPROACH: 2**
---


 ```javascript
 /**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
    
var reverseList = function(head, previous = null) {
    if (head === null) return previous;
    let next = head.next;
    head.next = previous;
    return reverseList(next, head);
};
```
    
    
    
