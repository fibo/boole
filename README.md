# boole

> chained logical conditions: and, or, not, xor

## Usage

The following logical operators are available:

* `and`
* `or`
* `not`
* `xor`

A `boole` chain should end always with `isTrue()` or `isFalse()`

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
