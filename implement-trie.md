## Leetcode Proplem 208. Implement Trie (Prefix Tree)

**Implement a trie with insert, search, and startsWith methods.**

**For Example:**

```java
Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
```

***Note:***

- You may assume that all inputs are consist of lowercase letters a-z.
- All inputs are guaranteed to be non-empty strings.

---

## Solution (Time Complexity - O(n) | Space Complexity - O(n))

```java
class Trie {

    private Node root;
    
    /** Initialize your data structure here. */
    public Trie() {
        // Initialise the root to a dummy node
        root = new Node('\0');
    }
    
    /** Inserts a word into the trie. */
    public void insert(String word) {
        Node curr = root;
        // run over the word
        for (int i = 0; i < word.length(); i++){
            char c = word.charAt(i);
            // check if the node already exists, if not
            // create the node with the character 'c'
            if (curr.children[c - 'a'] == null) curr.children[c - 'a'] = new Node(c);
            
            // move the current element to the next children
            curr = curr.children[c - 'a'];
        }
        
        // set the isWord to true
        // as we now have successfully pushed a word
        // into the trie
        curr.isWord = true;
    }
    
    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        Node node = getNode(word);
        
        return node != null && node.isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        return getNode(prefix) != null;
    }
    
    private Node getNode(String word){
        Node curr = root;
        
        for (int i = 0; i < word.length(); i++){
            char c = word.charAt(i);
            if(curr.children[c - 'a'] == null) return null;
            curr = curr.children[c - 'a'];
        }
        
        return curr;
    }
    
    // initialise the node that holds all the character
    // this nodes will form a trie
    class Node {
        // every node has a character involved
        public char c;
        public boolean isWord;
        public Node[] children;
        
        // constructor for node
        public Node(char c){
            this.c = c;
            isWord = false;
            // create an array of nodes with 26 letters
            // of english lowercase alphabets
            children = new Node[26];
        }
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */
 ```
