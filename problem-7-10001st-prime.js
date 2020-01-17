function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++)
        if(num % i === 0) return false; 
    return num > 1;
}


function nthPrime(n) {

let arr =[];
for(let i=0;i<=n*n;i++){
  if(isPrime(i)){
    arr.push(i);
  }
}

  return arr[n-1];
}

nthPrime(13);
