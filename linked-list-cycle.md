# Leetcode Problem #141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

**Example-1**

![example-1](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

```javascript
Input: head = [3,2,0,-4], pos = 1
Output: true

Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
```

**Example-2**

![example-2](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

```javascript
Input: head = [1,2], pos = 0
Output: true

Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.
```

**Example-3**

![example-3](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

```javascript
Input: head = [1], pos = -1
Output: false

Explanation: There is no cycle in the linked list.
```

***Constraints:***

- The number of the nodes in the list is in the range [0, 104].
- -105 <= Node.val <= 105
- pos is -1 or a valid index in the linked-list.

---

## Solution (Time - O(n)  |   Space - O(1))

 ```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    // two pointer technique
    let fastPointer = head;
    let slowPointer = head;
    
    // if fastPointer ever gets null
    // that means there are no cycle
    while (fastPointer !== null && fastPointer.next !== null){
        // move fastPointer two steps ahead
        fastPointer = fastPointer.next.next;
        // move slowPointer two steps ahead

        slowPointer = slowPointer.next;
        // if there is a cycle eventually
        // the two pointers will meet at a position
        if (fastPointer === slowPointer) return true;
    }
    
    return false;
};
 ```
