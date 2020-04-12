# boole

> chained logical conditions: and, or, not, xor

## Usage

The following logical operators are available:

* `and`
* `or`
* `not`
* `xor`

A `boole` chain should **always end** with `isTrue()` or `isFalse()`

```javascript
import boole from 'boole'

const x = 3

if (boole(x < 4).and(x > 10).isFalse()) {
  console.log('x is smaller than 4 AND greater than 10 is FALSE')
}

if (boole(x < 4).or(x > 10).isTrue()) {
  console.log('x is smaller than 4 OR greater than 10 is TRUE')
}

if (boole.not(x > 10).isTrue()) {
  console.log('x is NOT greater than 10 is TRUE')
}

if (boole(x < 4).xor(x > 10).isTrue()) {
  console.log('if x is smaller then 4 is true, then x is greater than 10 is false, and viceversa')
}
```

Operators can be chained.

```javascript
if (boole(x < 4).and(x > 1).or(x > 10).isTrue()) {
  console.log('x is smaller that 4 AND x is greater than 1 OR greater than 10 is TRUE')
}
```

If first argument is omitted, expression can start with a negation.

```javascript
if (boole().not(x > 10).and(x < 4).isTrue()) {
  console.log('x is NOT greater than 10 AND is smaller than 4 is TRUE')
}
```

It is possible to create *truthy* and *falsy* functions.

```javascript
// Start from a given function.
const lowerThanFour = (x) => x < 4

// Create a truthy function.
const isLowerThanFour = boole(lowerThanFour).isTrue()

if (isLowerThanFour(3).isTrue()) {
  console.log('isLowerThanFour is a truthy function, 3 is lower than 4 is TRUE')
}

if (isLowerThanFour(10).isFalse()) {
  console.log('isLowerThanFour is a truthy function, 10 is lower than 4 is FALSE')
}

// Create a falsy function.
const isNotLowerThanFour = boole(lowerThanFour).isFalse()

if (isNotLowerThanFour(10).isTrue()) {
  console.log('isNotLowerThanFour is a falsy function, 10 is NOT lower than 4 is TRUE')
}

if (isNotLowerThanFour(3).isFalse()) {
  console.log('isNotLowerThanFour is a falsy function, 3 is NOT lower than 4 is FALSE')
}
```

## License

[MIT](http://g14n.info/mit-license/)

