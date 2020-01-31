function divisibleTriangleNumber(n) {
  let flag = false;
  let counter = 2;
  let i = 3;
  let triangleNumber = 3;
  while (!flag) {
    triangleNumber = triangleNumber + i;
    for (let j = 2; j < Math.sqrt(triangleNumber); j++) {
      if (triangleNumber % j === 0) {
        counter += 2;
      }
    }
    if (counter > n) {
      flag = true;
    } else if (counter <= n) {
      flag = false;
    }
    counter = 2;
    i++;
  }
  return triangleNumber;
}

divisibleTriangleNumber(23);
