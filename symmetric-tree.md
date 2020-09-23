# Leetcode Problem #101. Symmetric Tree

**Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).**

**For example, this binary tree [1,2,2,3,4,4,3] is symmetric:**

```javascript
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following `[1,2,2,null,3,null,3]` is not:

```javascript
    1
   / \
  2   2
   \   \
   3    3
```

---

## Solution (Recursive Approach)

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
var isSymmetric = function(root) {
    // an empty tree is a mirror of itself (symmetric)
    if (root === null) return true;
    
    // pass in the left and right nodes of root
    // for comparision
    return isMirror(root.left, root.right);
};

var isMirror = function(tree1, tree2){
    // check if any of the node passed is a null
    if (tree1 === null  || tree2 == null){
        return tree1 === tree2;
    }
    
    // if the values are not equal then
    // they are not symmetric
    if (tree1.val !== tree2.val) return false;
    
    // else recursively call for the left and right 
    // of both the trees and check if they are equal
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};
```

### Results

***Runtime:*** 72 ms, faster than 99.40% of JavaScript online submissions for Symmetric Tree.
***Memory Usage:*** 39.1 MB, less than 8.87% of JavaScript online submissions for Symmetric Tree.
