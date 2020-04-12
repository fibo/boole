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
          return (...args) => boole(b(...args))
        } else {
          return boole(!Boolean(b))
        }
      }
    }
  }

  return {
    isFalse: () => !Boolean(a),
    isTrue: () => Boolean(a),
    and: (b) => boole(Boolean(a) && Boolean(b)),
    or: (b) => boole(Boolean(a) || Boolean(b)),
    xor: (b) => boole((Boolean(a) && !Boolean(b)) || (!Boolean(a) && Boolean(b))),
    not: () => boole(!Boolean(a)),
  }
}

module.exports = boole
