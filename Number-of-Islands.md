# Leetcode Problem #200: Number of Islands
## Problem Statement:
### Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

**Example 1:**
```
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

**Example 2:**
```
Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
```

---

**APPROACH 1: DFS SOLUTION (LEETCODE ACCEPTED)**
```javascript
const numIslands =  (grid) => {
	let count = 0
	for(let i = 0; i < grid.length; i++){
	    for(let j = 0; j < grid[i].length; j ++){
	        if(grid[i][j] == '1'){
		        count ++
		        dfs(i,j, grid)
            }
        }
    }
    return count
}

function dfs(i, j, grid){

     if (i < 0 || j < 0 || i >= grid.length  || j >= grid[i].length || grid[i][j] === '0')  {
        return
    }
    //grid[i][j] = '0' so we don't visit the same grid again
    grid[i][j]='0'
   
	dfs(i, j+1, grid)   
	dfs(i, j-1, grid)  
	dfs(i+1, j, grid) 
	dfs(i-1, j, grid)   

}
```

**APPROACH 2: BFS SOLUTION (DOESN'T PASS ALL LEETCODE TEST CASES)**
_But works with [binarysearch.io](https://binarysearch.io/) test cases!_

```javascript
const numIslands =  (grid) => {
    let rows = grid.length
    let cols = grid[0].length
    let visited = Array.from(new Array(grid.length), () => (new Array(grid[0].length)).fill(0))
    let islands = 0
    
    var bfs = (r, c) => {
        
        if (grid[r][c] === 0) return
        if (visited[r][c]) return
        
        visited[r][c] = 1
        
         if (r + 1 < grid.length) {
            bfs(r + 1, c)
        }
        
         if (r - 1 >= 0) {
            bfs(r - 1, c)
        }
        
         if (c + 1 < grid[r].length) {
            bfs(r, c + 1)
        }
        
        if (c - 1 >= 0) {
            bfs(r, c - 1)
        }
    }
    
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < cols; j++){
            if (visited[i][j] === 1 || grid[i][j] === 0)
                continue
            
            bfs(i, j)
            islands += 1
        }
    }
    
    return islands
}
```

_[Binary Search](https://binarysearch.io/) is another coding platform for coding enthusiasts where people can form rooms with friends and work on a coding problem. It is fun and interactive._
