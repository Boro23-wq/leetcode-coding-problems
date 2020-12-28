# Leetcode Problem 127. Word Ladder

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

## Solution (Time - O(M^2 * N)  | Space - O(M * N))

**M -> Size of our dequed word**
**N -> Size of the word list**

```java
class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        // convert the wordList to a set
        // because we need to loop through the words
        // and set has a constant time lookup
        Set<String> set = new HashSet<>(wordList);
        
        // if set don't contain the word 
        // there is no possible transition
        // and we need to return 0
        if (!set.contains(endWord)) return 0;
        
        // keep track of words using a queue
        // typical BFS implementation
        Queue<String> queue = new LinkedList<>();
        queue.add(beginWord);
        
        // keep track of all the visited words
        Set<String> visited = new HashSet<>();
        visited.add(beginWord);
        
        int changes = 1;
        
        // loop through until the queue is empty
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
                        // convert the string of words to char array
                        // so we can loop through individual char at a time and modify them
                        char[] arr = word.toCharArray();
                        arr[j] = (char) k;
                        
                        // convert them back to string to form the word
                        String str = new String(arr);
                        
                        // if the word list set has the word 'str' 
                        // and the visited set doesn't already contain the word 'str'
                        // add it to the queue
                        // and the visited set as well
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

---

## Complete Code:

```java
import java.util.HashSet;
import java.util.LinkedList;
import java.util.Queue;

class Main {

  public static int WordLadder(String beginWord, String endWord, HashSet<String> wordDictionary){

    if (!wordDictionary.contains(endWord)) return 0;

    Queue<String> queue = new LinkedList<>();
    queue.add(beginWord);

    HashSet<String> visited = new HashSet<>();
    visited.add(beginWord);

    int changes = 1;

    while (!queue.isEmpty()){
      int queueSize = queue.size();

      for ( int i = 0; i < queueSize; i++){
        String word = queue.poll();

        if (word.equals(endWord)) return changes;

        for (int j = 0; j < word.length(); j++){
          for (int k = 'a'; k <= 'z'; k++){

            char[] arrayOfChars = word.toCharArray();
            
            arrayOfChars[j] = (char) k;

            String str = new String(arrayOfChars);

            if (wordDictionary.contains(str) && !visited.contains(str)){
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

  public static void main(String[] args) {
    HashSet<String> wordDictionary = new HashSet<String>();
    // "hot","dot","dog","lot","log","cog"

    // wordDictionary.add("hot");
    // wordDictionary.add("dot");
    // wordDictionary.add("dog");
    // wordDictionary.add("lot");
    // wordDictionary.add("log");
    // wordDictionary.add("cog");

    // String beginWord = "hit";
    // String endWord = "cog";

    // Expected Output -> 5

    // -----------------------------

    // ["hot","dot","dog","lot","log"]

    wordDictionary.add("hot");
    wordDictionary.add("dot");
    wordDictionary.add("dog");
    wordDictionary.add("lot");
    wordDictionary.add("log");

    String beginWord = "hit";
    String endWord = "cog";

    // Expected Output -> 0

    System.out.print("Length of shortest chain is: " + WordLadder(beginWord, endWord, wordDictionary)); 
  }
}
```
