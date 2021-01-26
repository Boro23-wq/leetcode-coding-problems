# Leetcode Problem 107. Binary Tree Level Order Traversal II

**Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).**

**For example:**

Given binary tree [3,9,20,null,null,15,7],

```javascript
    3
   / \
  9  20
    /  \
   15   7
```
return its bottom-up level order traversal as:

```javascript
[
  [15,7],
  [9,20],
  [3]
]
```
---

## Solution (Time - O(V+E) | Space - O(V))

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    // array that stores the final result
    // after bottom-up level order traversal
    let result = [];
    
    if (root === null) return result;
    
    // BFS approach, we use a queue
    // for this approach
    let queue = [];
    // push the root node to the queue
    queue.push(root);
    
    // continue until queue is empty
    while (queue.length != 0){
        // we take the count of total nodes inside the queue
        // since for the later part we might have left and right
        // child since we need to push all the nodes in a level 
        // at a time
        let nodeCount = queue.length;
        // helperRowArray helps us with
        // storing nodes in a level
        let helperRowArray = []
        
        while (nodeCount > 0){
            // remove elements from the start of the queue
            let currentNode = queue.shift();
            
            // and check if current node has left and right nodes
            // if yes, push them to the queue
            if (currentNode.left !== null) queue.push(currentNode.left)
            if (currentNode.right !== null) queue.push(currentNode.right)
            
            // finally push all the nodes in a level
            // to the helperRowArray that later gets pushed
            // to the resultant array
            helperRowArray.push(currentNode.val)
            nodeCount--           
        }
        // push items to the start of the queue
        // so they stack up reverserd (bottom-up) 
        result.unshift(helperRowArray)
    }
    
    return result
};
```
