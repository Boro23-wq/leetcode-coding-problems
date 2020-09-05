# Leetcode Problem #412. Fizz Buzz

**Write a program that outputs the string representation of numbers from 1 to n.**

**But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.**

**Example:**

```javascript
n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
```
---

## Solution (Approach - 1)

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz")
    } else if (i % 5 === 0) {
      result.push("Buzz")
    } else if (i % 3 === 0) {
      result.push("Fizz")
    } else {
      result.push(i.toString())
    }
  }

  return result
}
```
---

## Solution (Optimized Approach)

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = []

  for (let i = 1; i <= n; i++) {
    let string = ""

    if (i % 3 === 0) {
      string += "Fizz"
    }

    if (i % 5 === 0) {
      string += "Buzz"
    }

    if (string.length === 0) {
      string += i
    }

    result.push(string)
  }

  return result
}
```

## Solution (Optimized using Map)

```javascript
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let result = []

  let mappings = {
    3: "Fizz",
    5: "Buzz",
  }

  for (let i = 1; i <= n; i++) {
    let string = ""

    for (let key in mappings) {
      if (i % parseInt(key, 10) === 0) {
        string += mappings[key]
      }
    }

    if (string.length === 0) {
      string += i
    }

    result.push(string)
  }

  return result
}
```




