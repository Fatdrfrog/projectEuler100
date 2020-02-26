function numberLetterCounts(limit) {
  const nums = [0, 3, 3, 5, 4, 4, 3, 5, 5, 4, 3, 6, 6, 8, 8, 7, 7, 9, 8, 8];
  const sums = [];

  nums[20] = 6;
  nums[30] = 6;
  nums[40] = 5;
  nums[50] = 5;
  nums[60] = 5;
  nums[70] = 7;
  nums[80] = 6;
  nums[90] = 6;

  for (let tw = 21; tw < 100; tw++) {
    if (tw % 10 !== 0) {
      nums[tw] = nums[parseInt(tw / 10) * 10] + nums[tw % 10];
    }
  }

  nums[100] = 10;
  nums[200] = 10;
  nums[300] = 12;
  nums[400] = 11;
  nums[500] = 11;
  nums[600] = 10;
  nums[700] = 12;
  nums[800] = 12;
  nums[900] = 11;

  for (let j = 101; j < 1000; j++) {
    if (j % 100 !== 0) {
      nums[j] = nums[parseInt(j / 100)] + 10 + nums[j % 100];
    }
  }

  nums[1000] = 11;

  let sum = 0;
  for (let l = 1; l <= limit; l++) {
    sum = sum + nums[l];
  }

  return sum;
}

numberLetterCounts(1000);
