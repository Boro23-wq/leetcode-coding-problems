## Problem: I like parentheticals (a lot).

"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.

Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).

## Gotchas

We can do this in O(n) time.

We can do this in O(1) additional space.

## Breakdown

How would you solve this problem by hand with an example input?

Try looping through the string, keeping a count of how many open parentheses we have.

## Solution

We simply walk through the string, starting at our input opening parenthesis position. As we iterate, we keep a count of how many additional "(" we find as openNestedParens. When we find a ")" we decrement openNestedParens. If we find a ")" and openNestedParens is 0, we know that ")" closes our initial "(", so we return its position.

```
function getClosingParenthesisIndex(sentence, openingParenthesisIndex){

let totalOpenParenthesis = 0;

  for (let i = openingParenthesisIndex + 1; i < sentence.length; i++){
    let char = sentence[i]; 
    if (char === "("){
      totalOpenParenthesis += 1;
    } else if (char === ")"){
      if (totalOpenParenthesis === 0){
        return i;
      }
      totalOpenParenthesis -= 1;
    }
  }

  return "No closing parentheticals found!"
}

const sentence = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."

const openingParenthesisIndex = 10;

getClosingParenthesisIndex(sentence, openingParenthesisIndex)
```

## Complexity

O(n) time, where nn is the number of chars in the string. O(1) space.
