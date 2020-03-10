function maximumPathSumI(triangle) {
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (triangle[i][j] > triangle[i][j + 1]) {
        triangle[i - 1][j] = triangle[i][j] + triangle[i - 1][j];
      } else {
        triangle[i - 1][j] = triangle[i][j + 1] + triangle[i - 1][j];
      }
    }
  }

console.log(triangle);
console.log(triangle[0][0]);
  return triangle[0][0];
}

const testTriangle = [
  [3, 0, 0, 0],
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3]
];

//maximumPathSumI(numTriangle);
