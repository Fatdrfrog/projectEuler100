function fiboEvenSum(n) {
  let fib = [1,2];
  for(let i=2;i<n;i++){
    fib[i] = fib[i-1]+fib[i-2];
  }
      const fibDivideByTwo=fib.filter((a)=>(a%2)===0)
    const fibSumOfDivisions=fibDivideByTwo.reduce((a,b)=>a+b)
  return fibSumOfDivisions;
}

fiboEvenSum(10);
