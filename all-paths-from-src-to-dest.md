# Leetcode Problem #797. All Paths From Source to Target

**Given a directed acyclic graph of N nodes. Find all possible paths from node 0 to node N-1, and return them in any order.**

**The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.**

**Example:**

```java
Input: [[1,2],[3],[3],[]]
Output: [[0,1,3],[0,2,3]]
```
```
Explanation: The graph looks like this:

0--->1
|    |
v    v
2--->3

There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
``` 

***Constraints:***

- The number of nodes in the graph will be in the range [2, 15].
- You can print different paths in any order, but you should keep the order of nodes inside one path.

---

## Solution (BFS Approach) 
#### (Time Complexity - O(n^2 * 2^n)  | Space Complexity - O(2^n))

```java
class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        
        List<List<Integer>> result = new ArrayList<>();
        Queue<List<Integer>> queue = new LinkedList<>();
        
        // start at node-0 
        // add it to the queue
        queue.add(Arrays.asList(0));
        
        // find the destination node
        int destination = graph.length - 1;
        
        while (!queue.isEmpty()){
            // remove the path from the queue
            List<Integer> path = queue.poll();
            
            // check the last element in the path
            // the last element in the path is the node that
            // we need to continue our bfs on.
            int lastItem = path.get(path.size() - 1);
            
            if (lastItem == destination) result.add(new ArrayList(path));
            
            // check for all the vertices accessible from the current node
            for (int vertices : graph[lastItem]){
                // create a new path with the existing path
                List<Integer> newPath = new ArrayList(path);
                //add the new vertices into the path
                newPath.add(vertices);
                // and push it to the queue
                queue.add(newPath);
            }
        }
        
        return result;
    }
}
```
