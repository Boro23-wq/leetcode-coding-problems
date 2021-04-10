## Problem: 

### You're working on a secret team solving coded transmissions. Your team is scrambling to decipher a recent message, worried it's a plot to break into a major European National Cake Vault. The message has been mostly deciphered, but all the words are backward! Your colleagues have handed off the last step to you.

Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.

> Why an array of characters instead of a string?
> The goal of this question is to practice manipulating strings in place. Since we're modifying the message, we need a mutable type like an array, instead of JavaScript's immutable strings.

For example:

```
const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseWords(message);

console.log(message.join(''));
// Prints: 'steal pound cake'
```

When writing your function, assume the message contains only letters and spaces, and all words are separated by one space.

## Solution

We'll write a helper function reverseCharacters() that reverses all the characters between a leftIndex and rightIndex. We use it to:

1. Reverse all the characters in the entire message, giving us the correct word order but with each word backward.
2. Reverse the characters in each individual word.

```
 function reverseWords(message) {

  reverseCharacters(message, 0, message.length - 1);

  // [ 't', 'a', 'h', 'w', ' ', 'p', 'u' ]

  let currentWordStartIndex = 0;

  for (let i = 0; i <= message.length; i++) {
    if (i === message.length || message[i] === ' ') {
      reverseCharacters(message, currentWordStartIndex, i - 1);
      currentWordStartIndex = i + 1;
    }
  }

  return message;
}

function reverseCharacters(message, leftIndex, rightIndex) {
  while (leftIndex < rightIndex) {
    const temp = message[leftIndex];
    message[leftIndex] = message[rightIndex];
    message[rightIndex] = temp;
    leftIndex++;
    rightIndex--;
  }
}

let message = [ 'u', 'p', ' ', 'w', 'h', 'a', 't' ];

reverseWords(message)
```

## Complexity

O(n) time and O(1) space!
