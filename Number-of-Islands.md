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

**DFS SOLUTION:**
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
