## Problem: In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders and enter as one unit.

Each order is represented by an "order id" (an integer).

We have our lists of orders sorted numerically already, in arrays. Write a function to merge our arrays of orders into one sorted array.

For example:

```
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]
```

## Solution

First, we allocate our answer array, getting its size by adding the size of myArray and alicesArray.

We keep track of a current index in myArray, a current index in alicesArray, and a current index in mergedArray. So at each step, there's a "current item" in alicesArray and in myArray. The smaller of those is the next one we add to the mergedArray!

But careful: we also need to account for the case where we exhaust one of our arrays and there are still elements in the other. To handle this, we say that the current item in myArray is the next item to add to mergedArray only if myArray is not exhausted AND, either:

1. alicesArray is exhausted, or
2. the current item in myArray is less than the current item in alicesArray

```
// Test cases:
// 1. First array exhausted?
// 2. Second array exhausted?
// 3. Element at first array is smaller than element at the second array

function mergeArrays(array1, array2){
  let mergedArray = [];
  let mergeLength = array1.length + array2.length;

  let firstIndexArray1 = 0;
  let firstIndexArray2 = 0;
  let firstIndexMerged = 0;

  while(firstIndexMerged < mergeLength) {

    const firstArrayExhausted = firstIndexArray1 >= array1.length;
    const secondArrayExhausted = firstIndexArray2 >= array2.length;

    if (!firstArrayExhausted && (secondArrayExhausted || array1[firstIndexArray1] < array2[firstIndexArray2])) {
      mergedArray[firstIndexMerged] = array1[firstIndexArray1];
      firstIndexArray1 += 1
    } else {
      mergedArray[firstIndexMerged] = array2[firstIndexArray2];
      firstIndexArray2 += 1
    }

    firstIndexMerged += 1
  }

  return mergedArray;
}

const firstArray = [3, 4, 6, 10, 11];
const secondArray = [1, 5, 8, 12, 14, 19];

mergeArrays(firstArray, secondArray)
```

The if statement is carefully constructed to avoid indexing past the end of an array, because JavaScript would give us undefined and we don't want to compare undefined with an integer. We take advantage of JavaScript's short circuit evaluation and check first if the arrays are exhausted.

## Complexity

O(n) time and O(n) additional space, where nn is the number of items in the merged array.

The added space comes from allocating the mergedArray. There's no way to do this " in place" ↴ because neither of our input arrays are necessarily big enough to hold the merged array.

But if our inputs were linked lists, we could avoid allocating a new structure and do the merge by simply adjusting the next pointers in the list nodes!

In our implementation above, we could avoid tracking currentIndexMerged and just compute it on the fly by adding currentIndexMine and currentIndexAlices. This would only save us one integer of space though, which is hardly anything. It's probably not worth the added code complexity.
