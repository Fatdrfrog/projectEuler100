function longestCollatzSequence(limit) {
  let collatz = 0;
  let jt = 0;
  let st = 0;
  let iIterations = [];
  for (let k = 0; k <= 100000; k++) {
    iIterations[k] = 0;
  }
  for (let i = 3; i <= limit; i++) {
    let j = 0;
    collatz = i;
    while (collatz !== 1 && collatz >= i) {
      if (collatz % 2 === 0) {
        collatz = collatz / 2;
      } else if (collatz % 2 !== 0) {
        collatz = 3 * collatz + 1;
      }
      j++;
    }

    iIterations[i] = j + iIterations[collatz];

    if (iIterations[i] > jt) {
      jt = iIterations[i];
      st = i;
    }
  }
  return st;
}

longestCollatzSequence(46500);
