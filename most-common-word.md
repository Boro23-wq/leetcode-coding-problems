## Leetcode Problem #819. Most Common Word

**Given a paragraph and a list of banned words, return the most frequent word that is not in the list of banned words.  It is guaranteed there is at least one word that isn't banned, and that the answer is unique.**

**Words in the list of banned words are given in lowercase, and free of punctuation.  Words in the paragraph are not case sensitive.  The answer is in lowercase.**

***Example:***

```bash
Input: 

paragraph = "Bob hit a ball, the hit BALL flew far after it was hit."

banned = ["hit"]

Output: "ball"

Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
```

***Note:***

- 1 <= paragraph.length <= 1000.
- 0 <= banned.length <= 100.
- 1 <= banned[i].length <= 10.
- The answer is unique, and written in lowercase (even if its occurrences in paragraph may have uppercase symbols, and even if it is a proper noun.)
- paragraph only consists of letters, spaces, or the punctuation symbols !?',;.
- There are no hyphens or hyphenated words.
- Words only consist of letters, never apostrophes or other punctuation symbols.

---

## Solution - Time-O(n) | Space-O(n)
```javascript
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    // object to store all the valid words that are not banned
    let validWordFrequency = {};
    // Set to store the banned words
    // so that the lookup is constant
    let bannedWords = new Set();
    // the word with most frequency will be returned eventually
    let mostCommonWord = '';
    
    // regex to trim any unneccessary chars off the word
    let words = paragraph.split(/\W+/);

    // moved all the words from banned to the 'bannedWords' set
    for (let word of banned){
        bannedWords.add(word);
    }
    
    // for all the words in paragraph
    for (let word of words){
        // convert them to lowercase since, we are comparing
        // them to lowercase words in the bannedWords set
        let lowerCaseWord = word.toLowerCase();
        
        // into this loop only if the word is not in the banned set
        if(!bannedWords.has(lowerCaseWord)){
            // if the word is not already in the map
            if(validWordFrequency[lowerCaseWord] === undefined){
                validWordFrequency[lowerCaseWord] = 0;
            } 
            // increment the count for every word (if it appears multiple times)
            validWordFrequency[lowerCaseWord]++
            
            // put the first word as the mostCommonWord since no other
            // words have appeared before that
            if(mostCommonWord === ''){
                mostCommonWord += lowerCaseWord;
            }
            
            // check in the map the freq of the word and the mostCommonWord
            // replace mostCommonWord if the word has higher frequency
            if(validWordFrequency[lowerCaseWord] > validWordFrequency[mostCommonWord]){
                mostCommonWord = lowerCaseWord;
            }
        }
    }
    return mostCommonWord;
};
```
