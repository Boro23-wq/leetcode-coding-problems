## Problem: You've built an inflight entertainment system with on-demand movie streaming.

Users on longer flights like to start a second movie right when their first one ends, but they complain that the plane usually lands before they can see the ending. So you're building a feature for choosing two movies whose total runtimes will equal the exact flight length.

Write a function that takes an integer flightLength (in minutes) and an array of integers movieLengths (in minutes) and returns a boolean indicating whether there are two numbers in movieLengths whose sum equals flightLength.

When building your function:

- Assume your users will watch exactly two movies
- Don't make your users watch the same movie twice
- Optimize for runtime over memory

## Solution
We make one pass through movieLengths, treating each item as the firstMovieLength. At each iteration, we:

- See if there's a matchingSecondMovieLength we've seen already (stored in our movieLengthsSeen set) that is equal to flightLength - firstMovieLength. If there is, we short-circuit and return true.
- Keep our movieLengthsSeen set up to date by throwing in the current firstMovieLength.

```
function inflightEntertainment(flightLength, movies) {

  let moviesSeen = new Set();

  for (let i = 0; i < movies.length; i++){
    let firstMovie = movies[i];
    let secondMovie = flightLength - firstMovie;

    if (moviesSeen.has(secondMovie)){
      return true;
    }

    moviesSeen.add(firstMovie);
  }

  return false;
}
```

## Complexity

O(n) time, and O(n) space. Note while optimizing runtime we added a bit of space cost.
