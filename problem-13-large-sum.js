function largeSum(arr) {
let sum =0;
for(let i=0;i<=arr.length-1;i++){
sum = sum+parseInt(arr[i].substr(0,10))


}
sum=parseInt((""+sum).substr(0,10))+1
  return sum;
}


// only change code above this line

const testNums = [
  '37107287533902102798797998220837590246510135740250',
  '46376937677490009712648124896970078050417018260538'
];


largeSum(fiftyDigitNums);
