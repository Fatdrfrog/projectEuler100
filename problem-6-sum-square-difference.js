


function sumSquareDifference(n) {
let sumOfSquares=0;
let squareOfSums=0;
for(let i=1;i<=n;i++){
  sumOfSquares= sumOfSquares+i*i;
  squareOfSums= squareOfSums+i;
}
let result = squareOfSums*squareOfSums-sumOfSquares; 
  return result;
}

sumSquareDifference(10);
