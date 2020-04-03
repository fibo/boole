import assert from 'assert'

import boole from './boole.js'

const x = 3

// Operators: and, or, not, xor.
assert.ok(boole(x < 4).or(x > 10).isTrue() === true, 'x is smaller than 4 OR greater than 10')
assert.ok(boole(x < 4).and(x > 10).isFalse() === true, 'x is smaller than 4 AND greater than 10')
assert.ok(boole().not(x > 10).isTrue() === true, 'x is NOT greater than 10')
assert.ok(boole(x < 4).xor(x > 10).isTrue(), 'if x is smaller then 4 is true, then x is greater than 10 is false, and viceversa')

// Operators can be chained.
assert.ok(boole(x < 4).and(x > 1).or(x > 10).isTrue() === true, 'x is smaller that 4 AND x is greater than 1 OR greater than 10 is TRUE')

// If first argument is omitted, expression can start with a negation.
assert.ok(boole().not(x > 10).and(x < 4).isTrue() === true, 'x is NOT greater than 10 AND is smaller than 4')
