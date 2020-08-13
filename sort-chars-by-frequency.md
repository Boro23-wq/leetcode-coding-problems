# Leetcode Problem #451. Sort Characters By Frequency

**Given a string, sort it in decreasing order based on the frequency of characters.**

**Example 1:**

```java
Input:
"tree"

Output:
"eert"
```
**Explanation:**
- 'e' appears twice while 'r' and 't' both appear once.
- So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

**Example 2:**

```java
Input:
"cccaaa"

Output:
"cccaaa"
```

**Explanation:**

- Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
- Note that "cacaca" is incorrect, as the same characters must be together.

**Example 3:**

```java
Input:
"Aabb"

Output:
"bbAa"
```

**Explanation:**

- "bbaA" is also a valid answer, but "Aabb" is incorrect.
- Note that 'A' and 'a' are treated as two different characters.

---
## Optimal Solution using MaxHeap and HashMap (Time - O(nlogn) | Space - O(n))

```java
class Solution {
    public String frequencySort(String s) {
        // create a stringbuilder (the stringbuilder will be returned eventually0
        StringBuilder sb = new StringBuilder();
        // check for edge case
        if (s == null || s.length() == 0) return sb.toString();
        // create a hashmap to store the count of the characters
        HashMap<Character, Integer> count = new HashMap<>();
        // loop through every character and store its count
        for (char c : s.toCharArray()){
            count.put(c, count.getOrDefault(c, 0) + 1);
        }
        // Generate a max heap so the character with the highest count appears in the root, and so on...
        // count.get(b) - count.get(a) --> arrange in decreasing order
        PriorityQueue<Character> maxHeap = new PriorityQueue<>((a, b) -> count.get(b) - count.get(a));
        // for every character in the hashmap add it to the max Heap
        for (char c : count.keySet()){
            maxHeap.add(c);
        }
        // remove the characters from the maxHeap
        while (!maxHeap.isEmpty()){
            // stores the current character
            char character = maxHeap.remove();
            // stores the count of the occurences of the character
            int times = count.get(character);
            // repeat the character for the number of times
            for (int i = 0; i < times; i++){
                sb.append(character);
            }
        }
        // finally return the string builder as a string.
        return sb.toString();
    }
}
```
