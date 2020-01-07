function largestPrimeFactor(number) {
  
for(let i=3;i<=Math.sqrt(number);i+=2){
    while(number%i===0)
    {
      number = number/i;
      }     
}
  return number;
}

largestPrimeFactor(13195);
