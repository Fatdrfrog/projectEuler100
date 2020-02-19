//Actually I didn't search for appropriate tips how to handle big sums, but obviously, there are many simpler solutions to add two numbers. Please feel free to comment problematic places of my code. Thanks in advance.
function simpleSum(num) {
  let temp = num;
  let exponent = 15;
  let tempStr = "" + temp;
  let tempArr = [];
  let sumArr = [];
  let memo = 0;
  for (let i = tempStr.length - 1; i >= 0; i--) {
    tempArr[i] = tempStr.substr(i, 1);
    
    let sum = parseInt(tempArr[i]) + parseInt(tempArr[i]);
    if (sum >= 10) {
      if (memo === 0) {
        if (i === 0) {
          sumArr.push(sum);
          memo = 1;
        } else {
          sumArr.push(sum - 10);
          memo = 1;
        }
      } else if (memo === 1) {
        if (i === 0) {
          sumArr.push(sum + 1);
          memo = 1;
        } else {
          sumArr.push(sum - 9);
          memo = 1;
        }
      }
    } else if (sum < 10) {
      if (memo === 0) {
        sumArr.push(sum);
        memo = 0;
      } else if (memo === 1) {
        sumArr.push(sum + 1);
        memo = 0;
      }
      memo = 0;
    }
  }
  
  sumArr.reverse();
  let newSum = "";
  sumArr.forEach(e => {
    newSum = newSum + e;
  });
  
  return newSum;
}

function powerDigitSum(exponent) {

  let e = 2;
  for (let i=1;i<exponent;i++){
    e = simpleSum(e);
  }
  console.log(e);

  let numLength=""+ e;
  let sum = 0;
  let sumArr=[];
  for(let j=0;j<numLength.length;j++){
    sum = parseInt(numLength.substr(j,1))
    sumArr.push(sum)
  }
   let answer = sumArr.reduce((a,b)=>{
      return a+b;
    })
   return answer;
}

powerDigitSum(1000);
