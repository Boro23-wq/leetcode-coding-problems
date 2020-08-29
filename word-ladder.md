# Leetcode Problem #127. Word Ladder

**Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:**

- Only one letter can be changed at a time.
- Each transformed word must exist in the word list.

***Note:***

- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume beginWord and endWord are non-empty and are not the same.

**Example 1:**

```java
Input:
beginWord = "hit",
endWord = "cog",

wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5
```

`Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5.`

**Example 2:**

```java
Input:
beginWord = "hit"
endWord = "cog"

wordList = ["hot","dot","dog","lot","log"]

Output: 0
```

`Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.`

---

## Solution (Time - O()  | Space - O())

```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> set = new HashSet<>(wordList);
        
        if (!set.contains(endWord)) return 0;
        
        Queue<String> queue = new LinkedList<>();
        queue.add(beginWord);
        
        Set<String> visited = new HashSet<>();
        visited.add(beginWord);
        
        int changes = 1;
        
        while (!queue.isEmpty()){
            int size = queue.size();
            
            for (int i = 0; i < size; i++){
                String word = queue.poll();
                if (word.equals(endWord)) return changes;
                
                // loop through every character in the word
                // and find the right combination of the word 
                // that exists in the dictionary of word lists
                
                for (int j = 0; j < word.length(); j++){
                    // check for all combinations from 'a' to 'z'
                    for (int k = 'a'; k <= 'z'; k++){
                        char[] arr = word.toCharArray();
                        arr[j] = (char) k;
                        
                        String str = new String(arr);
                        
                        if (set.contains(str) && !visited.contains(str)){
                            queue.add(str);
                            visited.add(str);
                        }
                    }
                }
                
            }
            
            ++changes;
        }
        
        return 0;
    }
}
```
