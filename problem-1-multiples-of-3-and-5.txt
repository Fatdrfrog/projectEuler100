function multiplesOf3and5(number) {
  let t = 3;
  let f = 5;
  let arr=[];
  let arr1=[];
  for(let i = 1;i<=number;i++){
    if((t*i)<number){
      arr[i-1] = t*i;
    }
    if((f*i)<number){
      arr1[i-1] = f*i;
    }
  }
  const items=[...arr,...arr1]
  const uniqueItems = [...new Set(items)]
  const addItems = uniqueItems.reduce((a,b) => a+b,0)
  return addItems;
}

multiplesOf3and5(49);
