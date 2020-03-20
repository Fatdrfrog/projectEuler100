function countingSundays(firstYear, lastYear) {
  let months = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
  let monthsLeap = [3, 1, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3];
  let twentiethCentury = 0;
  let temp = 0;
  let range = lastYear - firstYear;
  let last = lastYear - 1900;
  let monthsTemp = [];
  let newArr = [];

  for (let m = 0; m < last; m++) {
    if (m % 4 === 0) {
      monthsTemp.push(monthsLeap);
    } else monthsTemp.push(months);
  }

  monthsTemp[0] = months;

  for (var i = 0; i < monthsTemp.length; i++) {
    newArr = newArr.concat(monthsTemp[i]);
  }

  for (let i = 0; i <= 12 * range; i++) {
    temp = temp + newArr[i];
    if ((temp + 1) % 7 === 0) {
      twentiethCentury += 1;
    }
  }

  return twentiethCentury;
}

countingSundays(1943, 1946);
