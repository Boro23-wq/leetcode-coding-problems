## Problem: Write an efficient function that checks whether any permutation ↴ of an input string is a palindrome. 

You can assume the input string only contains lowercase letters.

Examples:

```
"civic" should return true
"ivicc" should return true
"civil" should return false
"livci" should return false
"But 'ivicc' isn't a palindrome!"
```
> If you had this thought, read the question again carefully. We're asking if any permutation of the string is a palindrome. Spend some extra time ensuring you fully understand the question before starting. Jumping in with a flawed understanding of the problem doesn't look good in an interview.

## Solution

Our approach is to check that each character appears an even number of times, allowing for only one character to appear an odd number of times (a middle character). This is enough to determine if a permutation of the input string is a palindrome.

We iterate through each character in the input string, keeping track of the characters we’ve seen an odd number of times using a set unpairedCharacters.

As we iterate through the characters in the input string:

- If the character is not in unpairedCharacters, we add it.
- If the character is already in unpairedCharacters, we remove it.
Finally, we just need to check if less than two characters don’t have a pair.

```
function permutationPalindrome(string) {

  let oddCharacter = new Set();

  for (let item of string) {
    if(oddCharacter.has(item)){
      oddCharacter.delete(item);
    } else {
      oddCharacter.add(item);
    }
  }

  return oddCharacter.size <= 1;
}

permutationPalindrome('racecar')
```

## Complexity

O(n) time, since we're making one iteration through the nn characters in the string.

Our unpairedCharacters set is the only thing taking up non-constant space. We could say our space cost is O(n) as well, since the set of unique characters is less than or equal to nn. But we can also look at it this way: there are only so many different characters. How many? The ASCII character set has just 128 different characters (standard english letters and punctuation), while Unicode has 110,000 (supporting several languages and some icons/symbols). We might want to treat our number of possible characters in our character set as another variable kk and say our space complexity is O(k). Or we might want to just treat it as a constant, and say our space complexity is O(1).
