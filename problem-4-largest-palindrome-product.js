// kinda weird solution to this problem, but anyways... it works.

//comparing two arrays between each other 
function compareArrays(arr1,arr2){
    if(JSON.stringify(arr1)===JSON.stringify(arr2)){
      return true;
    }
    else{
      return false;
    }
}

//function to check if input value is palindrome or not by dividing this input by two as array. Then reversing second array and compare with first one in other function.
function isPolindrome(p){
let arr = (""+p).split("");
  if(arr.length===1){
    console.log(true);
    return;
  }
  else if(arr.length%2===0){
    let arr1 = arr.slice(0,arr.length/2);
    let arr2 = arr.slice(arr.length/2,arr.length)
    arr2 =arr2.reverse();
    
    return compareArrays(arr1,arr2);
  }
  else{
    let arr1 = arr.slice(0,arr.length/2);
    let arr2 = arr.slice(arr.length/2+1,arr.length);
    arr2 = arr2.reverse();
    return compareArrays(arr1,arr2);
  }
}

//creating two variables to multiply different iterations to each other starting from 91++++ and 99---- and then compare them and stuff in other function. Returning expected result.
function largestPalindromeProduct(n) {
  let nines =9;
  let zeroes = 91;
  for(let i = 2;i<=n;i++){
     nines =""+nines+9;
  } 
  for(let i = 2;i<n;i++){
     zeroes= ""+zeroes+0;
  }
  let poli = 0;
  for(let j=nines;j>=zeroes;j--){
    for(let k=zeroes;k<=j;k++){
      poli = j*k;
      if(isPolindrome(poli)){
        return poli;
      }
    }
  }
}

largestPalindromeProduct(3);
