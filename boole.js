export default function boole (a) {
  const result = Boolean(a)

  if (typeof a === 'undefined') {
    return {
      not: (b) => boole(!Boolean(b)),
    }
  } else {
    return {
      isFalse: () => !Boolean(a),
      isTrue: () => Boolean(a),
      and: (b) => boole(Boolean(a) && Boolean(b)),
      or: (b) => boole(Boolean(a) || Boolean(b)),
      xor: (b) => boole((Boolean(a) && !Boolean(b)) || (!Boolean(a) && Boolean(b))),
      not: () => boole(!Boolean(a)),
    }
  }

  return result
}
