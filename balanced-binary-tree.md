# Leetcode Problem 110: Balanced Binary Tree

**Given a binary tree, determine if it is height-balanced.**

**For this problem, a height-balanced binary tree is defined as:**
 - _a binary tree in which the left and right subtrees of every node differ in height by no more than 1._

**Example 1:**

```
Given the following tree [3,9,20,null,null,15,7]:

    3
   / \
  9  20
    /  \
   15   7
```

`Return true.`

**Example 2:**

```
Given the following tree [1,2,2,3,3,null,null,4,4]:

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

`Return false.`

---
## Solution: (Time - O(n) | Space - O(1))

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (root === null || root.length === 0){
        return true
    }
    
    return getHeight(root) !== -1
};

let getHeight = function(node){
    if (node === null){
        return 0;
    }
    
    let left = getHeight(node.left);
    let right = getHeight(node.right);
    
    if(left === -1 || right === -1 || Math.abs(left - right) > 1){
        return -1
    }
    
    return Math.max(left, right) + 1
    
}
```
