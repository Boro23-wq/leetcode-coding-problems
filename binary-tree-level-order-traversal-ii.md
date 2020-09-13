# Leetcode Problem #107. Binary Tree Level Order Traversal II

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

## Solution (Time - O(n) | Space - O(n))

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
    let result = [];
    
    if (root === null) return result;
    
    let queue = [];
    queue.push(root);
    
    while (queue.length != 0){
        let nodeCount = queue.length;
        let helperRowArray = []
        
        while (nodeCount > 0){
            let currentNode = queue.shift();
            
            if (currentNode.left !== null) queue.push(currentNode.left)
            if (currentNode.right !== null) queue.push(currentNode.right)
            
            helperRowArray.push(currentNode.val)
            nodeCount--           
        }
        
        result.unshift(helperRowArray)
    }
    
    return result
};
```
