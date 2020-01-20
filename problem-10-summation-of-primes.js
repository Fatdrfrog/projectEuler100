function primeSummation(n) {
  let sum = 0;
  let array = [false, false];

  for (let i = 2; i < n; i++) {
    array.push(true);
  }

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (array[i]) {
      for (let j = i * i; j < n; j += i) {
        array[j] = false;
      }
    }
  }

  for (let i = 2; i < n; i++) {
    if (array[i]) {
      sum = sum + i;
    }
  }

  return sum;
}

primeSummation(17);
