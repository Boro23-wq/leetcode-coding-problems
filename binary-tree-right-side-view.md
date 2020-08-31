# Leetcode Problem #199. Binary Tree Right Side View

**Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.**

**Example:**

```java
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]

Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```  
  ---
  
  ## Solution (Time - O(n) | Space - O(n))
  
  ```java
  /**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> rightSideView(TreeNode root) {
        List<Integer> result = new ArrayList<>();
        
        // edge case
        if (root == null) return result;
        
        // BFS Approach using Queue
        Queue<TreeNode> queue = new LinkedList<>();
        // add the root to the queue
        queue.add(root);
        
        while(!queue.isEmpty()){
            // store the size of the queue
            // to pop size no of times
            int size = queue.size();
            
            for (int i = 1; i <= size; i++){
                TreeNode node = queue.poll();
                
                // to add the rightmost element 
                // to the queue 
                // i == size (since 'i' is 0-indexed based)
                // that means rightmost node element
                // add it to the result list
                if (i == size) result.add(node.val);
                
                // typical BFS implementation
                // add the right and left nodes
                // of current node if exists
                if (node.left != null) queue.add(node.left);
                if (node.right != null) queue.add(node.right);
            }
        }
        
        return result;
    }
}
  ```
