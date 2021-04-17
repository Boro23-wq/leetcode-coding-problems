## Problem : You are a renowned thief who has recently switched from stealing precious metals to stealing cakes because of the insane profit margins. You end up hitting the jackpot, breaking into the world's largest privately owned stock of cakes—the vault of the Queen of England.

While Queen Elizabeth has a limited number of types of cake, she has an unlimited supply of each type.

Each type of cake has a weight and a value, stored in an object with two properties:

1. weight: the weight of the cake in kilograms.
2. value: the monetary value of the cake in British shillings.

For example:

```
// Weighs 7 kilograms and has a value of 160 shillings
{ weight: 7, value: 160 }

// Weighs 3 kilograms and has a value of 90 shillings
{ weight: 3, value: 90 }
```

You brought a duffel bag that can hold limited weight, and you want to make off with the most valuable haul possible.

Write a function maxDuffelBagValue() that takes an array of cake type objects and a weight capacity, and returns the maximum monetary value the duffel bag can hold.

For example:

```
const cakeTypes = [
  { weight: 7, value: 160 },
  { weight: 3, value: 90 },
  { weight: 2, value: 15 },
];

const capacity = 20;

maxDuffelBagValue(cakeTypes, capacity);

// Returns 555 (6 of the middle type of cake and 1 of the last type of cake)
```

Weights and values may be any non-negative integer. Yes, it's weird to think about cakes that weigh nothing or duffel bags that can't hold anything. But we're not just super mastermind criminals—we're also meticulous about keeping our algorithms flexible and comprehensive.

## Solution

This is a classic computer science puzzle called "the unbounded knapsack problem."

We use a bottom-up ↴ approach to find the max value at our duffel bag's weightCapacity by finding the max value at every capacity from 0 to weightCapacity.

We allocate an array maxValuesAtCapacities where the indices are capacities and each value is the max value at that capacity.

For each capacity, we want to know the max monetary value we can carry. To figure that out, we go through each cake, checking to see if we should take that cake.

The best monetary value we can get if we take a given cake is simply:

1. that cake's value, plus
2. the best monetary value we can carry in our remaining duffel bag capacity after taking the cake—which we'll already have stored in maxValuesAtCapacities

To handle weights and values of zero, we return infinity only if a cake weighs nothing and has a positive value.

```
  function maxDuffelBagValue(cakeTypes, weightCapacity) {

  // We make an array to hold the maximum possible value at every
  // duffel bag weight capacity from 0 to weightCapacity
  // starting each index with value 0
  const maxValuesAtCapacities = new Array(weightCapacity + 1).fill(0);

  for (let currentCapacity = 0; currentCapacity <= weightCapacity; currentCapacity++) {

    // Set a variable to hold the max monetary value so far for currentCapacity
    let currentMaxValue = 0;

    // We use a for loop here instead of forEach because we return infinity
    // If we get a cakeType that weighs nothing and has a value. but forEach
    // loops always return undefined and you can't break out of them without
    // throwing an exception
    for (let j = 0; j < cakeTypes.length; j++) {
      const cakeType = cakeTypes[j];

      // If a cake weighs 0 and has a positive value the value of our duffel bag is infinite!
      if (cakeType.weight === 0 && cakeType.value !== 0) {
        return Infinity;
      }

      // If the current cake weighs as much or less than the current weight capacity
      // it's possible taking the cake would get a better value
      if (cakeType.weight <= currentCapacity) {

        // So we check: should we use the cake or not?
        // If we use the cake, the most kilograms we can include in addition to the cake
        // We're adding is the current capacity minus the cake's weight. we find the max
        // value at that integer capacity in our array maxValuesAtCapacities
        const maxValueUsingCake = cakeType.value
          + maxValuesAtCapacities[currentCapacity - cakeType.weight];

        // Now we see if it's worth taking the cake. how does the
        // value with the cake compare to the currentMaxValue?
        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    // Add each capacity's max value to our array so we can use them
    // when calculating all the remaining capacities
    maxValuesAtCapacities[currentCapacity] = currentMaxValue;
  }

  return maxValuesAtCapacities[weightCapacity];
}
```

## Complexity

O(n*k) time, and O(k) space, where nn is number of types of cake and kk is the capacity of the duffel bag. We loop through each cake (n cakes) for every capacity (k capacities), so our runtime is O(n*k), and maintaining the array of k+1 capacities gives us the O(k) space.

Congratulations! Because of dynamic programming, you have successfully stolen the Queen's cakes and made it big.

Keep in mind: in some cases, it might not be worth using our optimal dynamic programming solution. It's a pretty slow algorithm—without any context (not knowing how many cake types we have, what our weight capacity is, or just how they compare) it's easy to see O(n*k) growing out of control quickly if n or k is large.

If we cared about time, like if there was an alarm in the vault and we had to move quickly, it might be worth using a faster algorithm that gives us a good answer, even if it's not always the optimal answer. Some of our first ideas in the breakdown were to look at cake values or value/weight ratios. Those algorithms would probably be faster, taking O(nlgn) time (we'd have to start by sorting the input).

Sometimes an efficient, good answer might be more practical than an inefficient, optimal answer.
