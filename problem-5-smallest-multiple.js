
function gcf(a, b) {
  if (b === 0) return a;
  return gcf(b, a % b);
}


function lcm(a,b){
  return (a*b)/gcf(a,b);
}

function smallestMult(n) {

  let lcmTotal = 2;
  
  for (let a = 3; a <= n; a++) {
    lcmTotal = lcm(lcmTotal,a)
  }
    console.log(lcmTotal)
  return lcmTotal;
}

smallestMult(13);
