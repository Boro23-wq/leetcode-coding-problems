## Problem: My cake shop is so popular, I'm adding some tables and hiring wait staff so folks can have a cute sit-down cake-eating experience.

I have two registers: one for take-out orders, and the other for the other folks eating inside the cafe. All the customer orders get combined into one list for the kitchen, where they should be handled first-come, first-served.

Recently, some customers have been complaining that people who placed orders after them are getting their food first. Yikes—that's not good for business!

To investigate their claims, one afternoon I sat behind the registers with my laptop and recorded:

- The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
- The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
- Each customer order (from either register) as it was finished by the kitchen. (servedOrders)

Given all three arrays, write a function to check that my service is first-come, first-served. All food should come out in the same order customers requested it.

We'll represent each customer order as a unique integer.

As an example,

```
Take Out Orders: [1, 3, 5]
Dine In Orders: [2, 4, 6]
Served Orders: [1, 2, 4, 6, 5, 3]
would not be first-come, first-served, since order 3 was requested before order 5 but order 5 was served first.
```
but,

```
Take Out Orders: [17, 8, 24]
Dine In Orders: [12, 19, 2]
Served Orders: [17, 8, 12, 19, 24, 2]
would be first-come, first-served.
```

> Note: Order numbers are arbitrary. They do not have to be in increasing order.

## Solution

We walk through servedOrders, seeing if each customer order so far matches a customer order from one of the two registers. To check this, we:

1. Keep pointers to the current index in takeOutOrders, dineInOrders, and servedOrders.
2. Walk through servedOrders from beginning to end.
3. If the current order in servedOrders is the same as the current customer order in takeOutOrders, increment takeOutOrdersIndex and keep going. This can be thought of as "checking off" the current customer order in takeOutOrders and servedOrders, reducing the problem to the remaining customer orders in the arrays.
4. Same as above with dineInOrders.
5. If the current order isn't the same as the customer order at the front of takeOutOrders or dineInOrders, we know something's gone wrong and we're not serving food first-come, first-served.
6. If we make it all the way to the end of servedOrders, we'll check that we've reached the end of takeOutOrders and dineInOrders. If every customer order checks out, that means we're serving food first-come, first-served.

```
let firstComeFirstServe = (takeOutOrders, dineInOrders, servedOrders) => {

let currentTakeOutOrderIndex = 0;
let currentDineInOrderIndex = 0;

let takeOutOrdersMax = takeOutOrders.length - 1;
let dineInOrdersMax = dineInOrders.length - 1;

  for (let i = 0; i < servedOrders.length; i++){
    let currentOrder = servedOrders[i];

    if (currentTakeOutOrderIndex <= takeOutOrdersMax && currentOrder === takeOutOrders[currentTakeOutOrderIndex]) {
      currentTakeOutOrderIndex++;
    } else if (currentDineInOrderIndex <= dineInOrdersMax && currentOrder === dineInOrders[currentDineInOrderIndex]) {
      currentDineInOrderIndex++;
    } else {
      return false;
    }
  }

  if (currentTakeOutOrderIndex != takeOutOrders.length || currentDineInOrderIndex != dineInOrders.length){
    return false;
  } 

  return true;
}

const takeOutOrders = [1, 3, 5]
const dineInOrders = [2, 4, 6]
const servedOrders = [1, 2, 4, 6, 5, 3]

firstComeFirstServe(takeOutOrders, dineInOrders, servedOrders)

// return true or false
```

## Complexity

O(n) time and O(1) additional space.
