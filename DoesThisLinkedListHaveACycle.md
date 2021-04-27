## Problem: You have a singly-linked list and want to check if it contains a cycle.

A singly-linked list is built with nodes, where each node has:

node.next—the next node in the list.
node.value—the data held in the node. 

For example, if our linked list stores people in line at the movies, node.value might be the person's name.

For example:

```
class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```

A cycle occurs when a node’s next points back to a previous node in the list. The linked list is no longer linear with a beginning and end—instead, it cycles through a loop of nodes.

Write a function `containsCycle()` that takes the first node in a singly-linked list and returns a boolean indicating whether the list contains a cycle.

## Gotchas
Careful—a cycle can occur in the middle of a list, or it can simply mean the last node links back to the first node. Does your function work for both?

We can do this in O(n) time and O(1) space!

## Breakdown

Because a cycle could result from the last node linking to the first node, we might need to look at every node before we even see the start of our cycle again. So it seems like we can’t do better than O(n) runtime.

How can we track the nodes we’ve already seen?

Using a set, we could store all the nodes we’ve seen so far. The algorithm is simple:

1. If the current node is already in our set, we have a cycle. Return true.
2. If the current node is null we've hit the end of the list. Return false.
3. Else throw the current node in our set and keep going.
4. 
What are the time and space costs of this approach? Can we do better?

Our runtime is O(n), the best we can do. But our space cost is also O(n). Can we get our space cost down to O(1) by storing a constant number of nodes?

Think about a looping list and a linear list. What happens when you traverse one versus the other?

A linear list has an end—a node that doesn’t have a next node. But a looped list will run forever. We know we don’t have a loop if we ever reach an end node, but how can we tell if we’ve run into a loop?

We can’t just run our function for a really long time, because we’d never really know with certainty if we were in a loop or just a really long list.

Imagine that you're running on a long, mountainous running trail that happens to be a loop. What are some ways you can tell you're running in a loop?

One way is to look for landmarks. You could remember one specific point, and if you pass that point again, you know you’re running in a loop. Can we use that principle here?

Well, our cycle can occur after a non-cyclical "head" section in the beginning of our linked list. So we'd need to make sure we chose a "landmark" node that is in the cyclical "tail" and not in the non-cyclical "head." That seems impossible unless we already know whether or not there's a cycle...

Think back to the running trail. Besides landmarks, what are some other ways you could tell you’re running in a loop? What if you had another runner? (Remember, it’s a singly-linked list, so no running backwards!)

A tempting approach could be to have the other runner stop and act as a "landmark," and see if you pass her again. But we still have the problem of making sure our "landmark" is in the loop and not in the non-looping beginning of the trail.

What if our "landmark" runner moves continuously but slowly?

If we sprint quickly down the trail and the landmark runner jogs slowly, we will eventually "lap" (catch up to) the landmark runner!

But what if there isn't a loop?

Then we (the faster runner) will simply hit the end of the trail (or linked list).

So let's make two variables, slowRunner and fastRunner. We’ll start both on the first node, and every time slowRunner advances one node, we’ll have fastRunner advance two nodes.

If fastRunner catches up with slowRunner, we know we have a loop. If not, eventually fastRunner will hit the end of the linked list and we'll know we don't have a loop.

This is a complete solution! Can you code it up?

Make sure the function eventually terminates in all cases!

## Solution

We keep two pointers to nodes (we'll call these “runners”), both starting at the first node. Every time slowRunner moves one node ahead, fastRunner moves two nodes ahead.

1. If the linked list has a cycle, fastRunner will "lap" (catch up with) slowRunner, and they will momentarily equal each other.
2. If the list does not have a cycle, fastRunner will reach the end.

```
class SinglyLinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const doesThisLinkedListHaveACycle = function(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer && fastPointer.next){
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next

    if(slowPointer === fastPointer){
      return true;
    }
  }
  return false;
}

const a = new SinglyLinkedList('A');
const b = new SinglyLinkedList('B');
const c = new SinglyLinkedList('C');
const d = new SinglyLinkedList('D');
const e = new SinglyLinkedList('E');
const f = new SinglyLinkedList('F');
const g = new SinglyLinkedList('G');
const h = new SinglyLinkedList('H');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = a;

doesThisLinkedListHaveACycle(a)
```

## Complexity

O(n) time and O(1) space.

The runtime analysis is a little tricky. The worst case is when we do have a cycle, so we don't return until fastRunner equals slowRunner. But how long will that take?

First, we notice that when both runners are circling around the cycle fastRunner can never skip over slowRunner. Why is this true?

Suppose fastRunner had just skipped over slowRunner. fastRunner would only be 1 node ahead of slowRunner, since their speeds differ by only 1. So we would have something like this:

```

  [ ] -> [s] -> [f]
  
```
What would the step right before this "skipping step" look like? fastRunner would be 2 nodes back, and slowRunner would be 1 node back. But wait, that means they would be at the same node! So fastRunner didn't skip over slowRunner! (This is a proof by contradiction.)

Since fastRunner can't skip over slowRunner, at most slowRunner will run around the cycle once and fastRunner will run around twice. This gives us a runtime of O(n).

For space, we store two variables no matter how long the linked list is, which gives us a space cost of O(1).
