function latticePaths(gridSize) {
  // (k+n)/n    
  let numeratorBefore=gridSize*2;
    let numeratorAfter=1;
  let denominatorBefore = gridSize; 
    let denominatorAfter = 1;   

  for(let i=2;i<=numeratorBefore;i++){
    numeratorAfter = numeratorAfter*i
  }
  console.log(numeratorAfter)

    for(let i=2;i<=denominatorBefore;i++){
    denominatorAfter = denominatorAfter*i
  }
  denominatorAfter= denominatorAfter*denominatorAfter
    console.log(denominatorAfter)

  const answer =  numeratorAfter/denominatorAfter
  return answer;
}

latticePaths(3);
