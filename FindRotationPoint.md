## Problem : I want to learn some big words so people think I'm smart.

I opened up a dictionary to a page in the middle and started flipping through, looking for words I didn't know. I put each word I didn't know at increasing indices in a huge array I created in memory. When I reached the end of the dictionary, I started from the beginning and did the same thing until I reached the page I started at.

Now I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet. In other words, this is an alphabetically ordered array that has been "rotated." For example:

```
const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];
```
Write a function for finding the index of the "rotation point," which is where I started working from the beginning of the dictionary. This array is huge (there are lots of words I don't know) so we want to be efficient here.

> To keep things simple, you can assume all words are lowercase.

## Gotchas

We can get O(lgn) time.

## Breakdown

The array is mostly ordered. We should exploit that fact.

What's a common algorithm that takes advantage of the fact that an array is sorted to find an item efficiently?

Binary search! We can write an adapted version of binary search for this.

In each iteration of our binary search, how do we know if the rotation point is to our left or to our right?

Try drawing out an example array!

```
  words = ['k', 'v', 'a', 'b', 'c', 'd', 'e', 'g', 'i'];
                                ^
```

If our "current guess" is the middle item, which is 'c' in this case, is the rotation point to the left or to the right? How do we know?

Notice that every item to the right of our rotation point is always alphabetically before the first item in the array.

<b>So the rotation point is to our <i>left</i> if the current item is less than the first item. Else it's to our right.</b>

## Solution

This is a modified version of binary search. ↴ At each iteration, we go right if the item we're looking at is greater than the first item and we go left if the item we're looking at is less than the first item.

We keep track of the lower and upper bounds on the rotation point, calling them floorIndex and ceilingIndex (initially we called them "floor" and "ceiling," but because we didn't imply the type in the name we got confused and created bugs). When floorIndex and ceilingIndex are directly next to each other, we know the floor is the last item we added before starting from the beginning of the dictionary, and the ceiling is the first item we added after.

```
let findRotationPoint = function (words) {

  let firstWord = words[0]; //ptolemaic

  let startIndex = 0; // 2
  let endIndex = words.length - 1; // 3

  while (startIndex < endIndex){
    let midIndex = Math.floor(endIndex + (startIndex-endIndex) / 2); // 3

    if (words[midIndex] <= firstWord){
      endIndex = midIndex;
    } else {
      startIndex = midIndex
    }

    if (startIndex + 1 === endIndex){
      break;
    }
  }
return endIndex;
}

let words = [ 'ptolemaic', 'retrograde', 'supplant', 'asymptote', 'babka',]

findRotationPoint(words)
```

## Complexity

Each time we go through the while loop, we cut our range of indices in half, just like binary search. So we have O(lgn) loop iterations.

In each loop iteration, we do some arithmetic and a string comparison. The arithmetic is constant time, but the string comparison requires looking at characters in both words—every character in the worst case. Here, we'll assume our word lengths are bounded by some constant so we'll say the string comparison takes constant time.

The longest word in English is `pneumonoultramicroscopicsilicovolcanoconiosis`, a medical term. It's 45 letters long.

Putting everything together, we do O(lgn) iterations, and each iteration is O(1) time. So our time complexity is O(lgn).

Some languages—like German, Russian, and Dutch—can have arbitrarily long words, so we might want to factor the length of the words into our runtime. We could say the length of the words is l, each string comparison takes O(ℓ) time, and the whole algorithm takes O(ℓ∗lgn) time.

We use O(1) space to store the first word and the floor and ceiling indices.
