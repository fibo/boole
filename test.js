import assert from 'assert'

import boole from './boole.js'

const x = 3

// Operators: and, or, not, xor.
assert.ok(boole(x < 4).or(x > 10).isTrue() === true, 'x is smaller than 4 OR greater than 10')
assert.ok(boole(x < 4).and(x > 10).isFalse() === true, 'x is smaller than 4 AND greater than 10')
assert.ok(boole().not(x > 10).isTrue() === true, 'x is NOT greater than 10')
assert.ok(boole(x < 4).xor(x > 10).isTrue(), 'if x is smaller than 4 is true, than x is greater than 10 is false, and viceversa')

// Operators can be chained.
assert.ok(boole(x < 4).and(x > 1).or(x > 10).isTrue() === true, 'x is smaller that 4 AND x is greater than 1 OR greater than 10 is TRUE')

// If first argument is omitted, expression can start with a negation.
assert.ok(boole().not(x > 10).and(x < 4).isTrue() === true, 'x is NOT greater than 10 AND is smaller than 4')

// It is possible to create *truthy* and *falsy* functions.

const lowerThanFour = (x) => x < 4

const isLowerThanFour = boole(lowerThanFour).isTrue()
assert.ok(isLowerThanFour(3).isTrue() === true, 'isLowerThanFour is a truthy function, 3 is lower than 4 is TRUE')
assert.ok(isLowerThanFour(10).isFalse() === true, 'isLowerThanFour is a truthy function, 10 is lower than 4 is FALSE')

const isNotLowerThanFour = boole(lowerThanFour).isFalse()
assert.ok(isNotLowerThanFour(10).isTrue() === true, 'isNotLowerThanFour is a falsy function, 10 is NOT lower than 4 is TRUE')
assert.ok(isNotLowerThanFour(3).isFalse() === true, 'isNotLowerThanFour is a falsy function, 3 is NOT lower than 4 is FALSE')

// TODO chainable falsy/truthy functions
//
// const  greaterThanTen  = (x) => x > 10

// const isLowerThanFourOrGreaterThanTen = boole(lowerThanFour).or(greaterThanTen).isTrue()
// assert.ok(isLowerThanFourOrGreaterThanTen(2).isTrue() === true, 'isLowerThanFourOrGreaterThanTen is a truthy function, 2 is lower than 4 OR greater then 10 is TRUE')
// assert.ok(isLowerThanFourOrGreaterThanTen(4).isFalse() === true, 'isLowerThanFourOrGreaterThanTen is a truthy function, 2 is lower than 4 OR greater then 10 is FALSE')
