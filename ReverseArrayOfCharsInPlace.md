## Problem: Reverse an array of characters in place.

### Write a function that takes an array of characters and reverses the letters in place. 

Why an array of characters instead of a string?

The goal of this question is to practice manipulating strings in place. Since we're modifying the input, we need a mutable type like an array, instead of JavaScript's immutable strings.

## Solution

We swap the first and last characters, then the second and second-to-last characters, and so on until we reach the middle.

```
function reverseCharacters(arrayOfChars) {
  // console.log(arrayOfChars)

  let leftIndex = 0
  let rightIndex = arrayOfChars.length - 1

  // ['a', 'b', 'c', 'd', 'e']
  while (leftIndex < rightIndex) {
    let temp = arrayOfChars[leftIndex];
    arrayOfChars[leftIndex] = arrayOfChars[rightIndex];
    arrayOfChars[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }

  return arrayOfChars;
}

let arrayOfChars = ['a', 'b', 'c', 'd', 'e']

reverseCharacters(arrayOfChars)
```

## Complexity

### O(n) time and O(1) space.
