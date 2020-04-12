function boole (a) {
  if (typeof a === 'function') {
    return  {
      isFalse: () => (...args) => boole().not(a(...args)),
      isTrue: () => (...args) => boole(a(...args)),
    }
  }

  if (typeof a === 'undefined') {
    return {
      not: (b) => {
        if (typeof b === 'function') {
          return (...args) => boole().not(b(...args))
        } else {
          return boole(!b)
        }
      }
    }
  }

  return {
    isFalse: () => !a,
    isTrue: () => !!a,
    and: (b) => boole(!!a && !!b),
    or: (b) => boole(!!a || !!b),
    xor: (b) => boole((!!a && !b) || (!a && !!b)),
    not: () => boole(!a),
  }
}

module.exports = boole
