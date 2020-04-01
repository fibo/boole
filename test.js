import assert from 'assert'
import boole from './index.js'

const x = 3

assert.ok(boole(x < 4).or(x > 10).isTrue() === true, 'x is smaller then 4 OR greater then 10')
assert.ok(boole(x < 4).and(x > 10).isFalse() === true, 'x is smaller then 4 AND greater then 10')
assert.ok(boole().not(x > 10).isTrue() === true, 'x is NOT greater then 10')
assert.ok(boole().not(x > 10).and(x < 4).isTrue() === true, 'x is NOT greater then 10 AND is smaller then 4')
assert.ok(boole(x < 4).and(x > 1).or(x > 10).isTrue() === true, 'x is smaller that 4 AND x is greater then 1 OR greater than 10 is TRUE')
