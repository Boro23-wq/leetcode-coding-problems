## Problem: You have a linked list and want to find the kkth to last node.

Write a function kthToLastNode() that takes an integer kk and the headNode of a singly-linked list, and returns the kkth to last node in the list.

For example:

```
  class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new LinkedListNode('Angel Food');
const b = new LinkedListNode('Bundt');
const c = new LinkedListNode('Cheese');
const d = new LinkedListNode("Devil's Food");
const e = new LinkedListNode('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

kthToLastNode(2, a);
// Returns the node with value "Devil's Food" (the 2nd to last node)
```

## Breakdown

It might be tempting to iterate through the list until we reach the end and then walk backward k nodes.

But we have a singly linked list! We can’t go backward. What else can we do?

What if we had the length of the list?

Then we could calculate how far to walk, starting from the head, to reach the kkth to last node.

If the list has n nodes:

A linked list represented by circles and arrows, with the distance from the first to the last node labelled n.
And our target is the kth to last node:

A linked list represented by circles and arrows, with the distance from the first to the last node labelled n. The third-to-last node is the kth to last node, with its distance to the last node labelled k.
The distance from the head to the target is n−k:

A linked list represented by circles and arrows, with the distance from the first to the last node labelled n. The third-to-last node is the kth to last node, with its distance to the last node labelled k and its distance to the first node labelled n minus k.
Well, we don't know the length of the list (n). But can we figure it out?

Yes, we could iterate from the head to the tail and count the nodes!

Can you implement this approach in code?

```
  function kthToLastNode(k, head) {

  // STEP 1: get the length of the list
  // Start at 1, not 0
  // else we'd fail to count the head node!
  let listLength = 1;
  let currentNode = head;

  // Traverse the whole list,
  // counting all the nodes
  while (currentNode.next) {
    currentNode = currentNode.next;
    listLength += 1;
  }

  // STEP 2: walk to the target node
  // Calculate how far to go, from the head,
  // to get to the kth to last node
  const howFarToGo = listLength - k;

  currentNode = head;
  for (let i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;
}
```

What are our time and space costs?

O(n) time and O(1) space, where n is the length of the list.

More precisely, it takes nn steps to get the length of the list, and another n-k steps to reach the target node. In the worst case k=1, so we have to walk all the way from head to tail again to reach the target node. This is a total of 2n steps, which is O(n).

Can we do better?

Mmmmaaaaaaybe.

The fact that we walk through our whole list once just to get the length, then walk through the list again to get to the kkth to last element sounds like a lot of work. Perhaps we can do this in just one pass?

What if we had like a "stick" that was kk nodes wide. We could start it at the beginning of the list so that the left side of the stick was on the head and the right side was on the kkth node.

A linked list represented by circles and arrows. The third node is labelled "kth," and a linear "stick" k nodes long extends from above the first node to above the kth node.
Then we could slide the stick down the list...

A linked list represented by circles and arrows. The third node is labelled "kth," and a linear "stick" k nodes long extends from above the second node to above the fourth node.
until the right side hit the end. At that point, the left side of the stick would be on the kkth to last node!

A linked list represented by circles and arrows. The third-to-last node is labelled "kth to last," and a linear "stick" k nodes long extends from above the kth-to-last node to above the last node.
How can we implement this? Maybe it'll help to keep two pointers?

We can allocate two variables that'll be references to the nodes at the left and right sides of the "stick"!

```
  function kthToLastNode(k, head) {

  let leftNode = head;
  let rightNode = head;

  // Move rightNode to the kth node
  for (let i = 0; i < k - 1; i++) {
    rightNode = rightNode.next;
  }

  // Starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // Since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode;
}
```
