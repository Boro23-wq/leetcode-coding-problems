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
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
let isSymmetric = function(root) {
    if (root === null) {
        return true;
    }
    
    // pass in the left and right child nodes
    return isMirror(root.left, root.right);
};

let isMirror = function(tree1, tree2) {
    // if either node is null, we are at a leaf node. either they are the same, in which case we can return true
    // if one is null and the other is not, we can return false
    if (tree1 === null || tree2 === null) {
        return tree1 === tree2;
    }
    
    // check the values of the nodes. if they are not the same, we can return false. otherwise, skip this if statement
    if (tree1.val !== tree2.val) {
        return false;
    }
    
    // since we got past the first two if statements, make two recursive calls to test if the children are mirror images
    // the left node of the right child should be the same as the right node of the left child
    // likewise, the left node of the left child should be the same as the right node of the right child
    return isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
};
```

### Results

***Runtime:*** 72 ms, faster than 99.40% of JavaScript online submissions for Symmetric Tree. </br>
***Memory Usage:*** 39.1 MB, less than 8.87% of JavaScript online submissions for Symmetric Tree.
