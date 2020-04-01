# boole

> chained logical conditions

## Usage

```javascript
import boole from 'boole'

const x = 3

if (boole(x < 4).and(x > 10).isFalse()) {
  console.log('x is smaller then 4 AND greater then 10 is FALSE')
}

if (boole(x < 4).or(x > 10).isTrue()) {
  console.log('x is smaller then 4 OR greater then 10 is TRUE')
}

if (boole.not(x > 10).isTrue()) {
  console.log('x is NOT greater then 10 is TRUE')
}

if (boole().not(x > 10).and(x < 4).isTrue()) {
  console.log('x is NOT greater then 10 AND is smaller then 4 is TRUE')
}

if (boole(x < 4).and(x > 1).or(x > 10).isTrue()) {
  console.log('x is smaller that 4 AND x is greater then 1 OR greater than 10 is TRUE')
}
```
