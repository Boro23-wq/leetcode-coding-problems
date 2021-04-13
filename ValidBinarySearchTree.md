## Problem: Write a function to find the 2nd largest element in a binary search tree.

Here's a sample binary tree node class:

```
class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}
```

## Gotchas

Our first thought might be to do an in-order traversal of the BST and return the second-to-last item. This means looking at every node in the BST. That would take O(n) time and O(h) space, where hh is the max height of the tree (which is lg(n) if the tree is balanced, but could be as much as n if not).

We can do better than O(n) time and O(h) space.

We can do this in one walk from top to bottom of our BST. This means O(h) time (again, that's O(lgn) if the tree is balanced, O(n) otherwise).

A clean recursive implementation will take O(h) space in the call stack, but we can bring our algorithm down to O(1) space overall.

## Breakdown

Let's start by solving a simplified version of the problem and see if we can adapt our approach from there. How would we find the largest element in a BST?

A reasonable guess is to say the largest element is simply the "rightmost" element.

So maybe we can start from the root and just step down right child pointers until we can't anymore (until the right child is null). At that point the current node is the largest in the whole tree.

Is this sufficient? We can prove it is by contradiction:

If the largest element were not the "rightmost," then the largest element would either:

1. be in some ancestor node's left subtree, or
2. have a right child.

But each of these leads to a contradiction:

1. If the node is in some ancestor node's left subtree it's smaller than that ancestor node, so it's not the largest.
2. If the node has a right child that child is larger than it, so it's not the largest.

So the "rightmost" element must be the largest.

**How would we formalize getting the "rightmost" element in code?**

We can use a simple recursive approach. At each step:

1. If there is a right child, that node and the subtree below it are all greater than the current node. So step down to this child and recurse.
2. Else there is no right child and we're already at the "rightmost" element, so we return its value.

```
function findLargest(rootNode) {
  if (!rootNode) {
    throw new Error('Tree must have at least 1 node');
  }
  if (rootNode.right) {
    return findLargest(rootNode.right);
  }
  return rootNode.value;
}
```

Okay, so we can find the largest element. **How can we adapt this approach to find the second largest element?**

Our first thought might be, "it's simply the parent of the largest element!" That seems obviously true when we imagine a nicely balanced tree like this one:

```
         ( 5 )
        /     \
      (3)     (8)
     /  \     /  \
   (1)  (4) (7)  (9)
```

But what if the largest element itself has a left subtree?

```
         ( 5 )
        /     \
      (3)     (8)
     /  \     /  \
   (1)  (4) (7)  (12)
                 /
               (10)
               /  \
             (9)  (11)
```
Here the parent of our largest is 8, but the second largest is 11.

Drat, okay so the second largest isn't necessarily the parent of the largest...back to the drawing board...

Wait. No. The second largest is the parent of the largest if the largest does not have a left subtree. If we can handle the case where the largest does have a left subtree, we can handle all cases, and we have a solution.

So let's try sticking with this. **How do we find the second largest when the largest has a left subtree?**

***It's the largest item in that left subtree!*** Whoa, we freaking just wrote a function for finding the largest element in a tree. We could use that here!

How would we code this up?

```
class BinaryTreeNode {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value){
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

   insertRight(value){
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function findLargest(root) {
  if (!root){
    throw new Error('Tree must have at least 1 node!');
  }
  if (root.right) {
    return findLargest(root.right);
  }
  return root.value;
}

function findSecondLargest(root){
  if(!root || (!root.left && !root.right)){
    throw new Error('Tree must have at least 2 node!');
  }

  // if we are at largest and the largest has a left subtree
  if(root.left && !root.right){
    return findLargest(root.left);
  }

  // if we are at parent of the largest and the largest doesn't have a left/right subtree
  if(root.right && !root.right.left && !root.right.right){
    return root.value;
  }

  // there's still to traverse
  return findSecondLargest(root.right);

}

let root = new BinaryTreeNode(5);
let left = root.insertLeft(3);
let right = root.insertRight(8);
left.insertLeft(1);
left.insertRight(4);
right.insertLeft(7);
right.insertRight(9);

findSecondLargest(root)

```

Okay awesome. This'll work. It'll take O(h) time (where h is the height of the tree) and O(h) space.

But that hh space in the call stack is avoidable. How can we get this down to constant space?

## Solution

We start with a function for getting the largest value. The largest value is simply the "rightmost" one, so we can get it in one walk down the tree by traversing rightward until we don't have a right child anymore:

```
function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}
```
With this in mind, we can also find the second largest in one walk down the tree. At each step, we have a few cases:

1. **If we have a left subtree but not a right subtree**, then the current node is the largest overall (the "rightmost") node. The second largest element must be the largest element in the left subtree. We use our findLargest() function above to find the largest in that left subtree!
2. **If we have a right child, but that right child node doesn't have any children**, then the right child must be the largest element and our current node must be the second largest element!
3. **Else, we have a right subtree with more than one element**, so the largest and second largest are somewhere in that subtree. So we step right.

```
  function findLargest(rootNode) {
  let current = rootNode;
  while (current) {
    if (!current.right) return current.value;
    current = current.right;
  }
}

function findSecondLargest(rootNode) {
  if (!rootNode || (!rootNode.left && !rootNode.right)) {
    throw new Error('Tree must have at least 2 nodes');
  }

  let current = rootNode;

  while (current) {

    // Case: current is largest and has a left subtree
    // 2nd largest is the largest in that subtree
    if (current.left && !current.right) {
      return findLargest(current.left);
    }

    // Case: current is parent of largest, and largest has no children,
    // so current is 2nd largest
    if (
      current.right
      && !current.right.left
      && !current.right.right
    ) {
      return current.value;
    }

    current = current.right;
  }
}
```

## Complexity

We're doing one walk down our BST, which means O(h) time, where h is the height of the tree (again, that's O(lgn) if the tree is balanced, O(n) otherwise). O(1) space.
