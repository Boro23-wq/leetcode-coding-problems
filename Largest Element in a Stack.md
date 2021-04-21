## Problem : You want to be able to access the largest element in a stack.

## Gotchas

What if we push several items in increasing numeric order (like 1, 2, 3, 4...), so that there is a new max after each push()? What if we then pop() each of these items off, so that there is a new max after each pop()? Your algorithm shouldn't pay a steep cost in these edge cases.

You should be able to get a runtime of O(1)O(1) for push(), pop(), and getMax().

## Breakdown

A just-in-time approach is to have getMax() simply walk through the stack (popping all the elements off and then pushing them back on) to find the max element. This takes O(n) time for each call to getMax(). But we can do better.

To get O(1) time for getMax(), we could store the max integer as a member variable (call it max). But how would we keep it up to date?

For every push(), we can check to see if the item being pushed is larger than the current max, assigning it as our new max if so. But what happens when we pop() the current max? We could re-compute the current max by walking through our stack in O(n) time. So our worst-case runtime for pop() would be O(n). We can do better.

What if when we find a new current max (newMax), instead of overwriting the old one (oldMax) we held onto it, so that once newMax was popped off our stack we would know that our max was back to oldMax?

What data structure should we store our set of maxes in? We want something where the last item we put in is the first item we get out ("last in, first out").

We can store our maxes in another stack!

## Solution

We define two new stacks within our MaxStack class—stack holds all of our integers, and maxesStack holds our "maxima." We use maxesStack to keep our max up to date in constant time as we push() and pop():

1. Whenever we push() a new item, we check to see if it's greater than or equal to the current max, which is at the top of maxesStack. If it is, we also push() it onto maxesStack.
2. Whenever we pop(), we also pop() from the top of maxesStack if the item equals the top item in maxesStack.

```
  class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

  class MaxStack {
  constructor() {
    this.stack = new Stack();
    this.maxesStack = new Stack();
  }

  // Add a new item to the top of our stack. If the item is greater
  // than or equal to the last item in maxesStack, it's
  // the new max! So we'll add it to maxesStack.
  push(item) {
    this.stack.push(item);
    if (this.maxesStack.peek() === null || item >= this.maxesStack.peek()) {
      this.maxesStack.push(item);
    }
  }

  // Remove and return the top item from our stack. If it equals
  // the top item in maxesStack, they must have been pushed in together.
  // So we'll pop it out of maxesStack too.
  pop() {
    const item = this.stack.pop();
    if (item === this.maxesStack.peek()) {
      this.maxesStack.pop();
    }
    return item;
  }

  // The last item in maxesStack is the max item in our stack.
  getMax() {
    console.log(this.maxesStack.peek());
  }
}

const stack = new MaxStack();

stack.push(20);
stack.push(25);
stack.push(15);

stack.getMax();
```

## Complexity

O(1)O(1) time for push(), pop(), and getMax(). O(m)O(m) additional space, where mm is the number of operations performed on the stack.
