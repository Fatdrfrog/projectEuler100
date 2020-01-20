function specialPythagoreanTriplet(n) {
 let sumOfabc = n;

 let c = 0;
 let result = 0;
 for(let a=0;a<n;a++){
     for(let b=a;b<n;b++){
         c = n-b-a;
    
             if((a*a+b*b)===c*c){
                result = c*b*a
         }
     }
 }
 return result;
}

specialPythagoreanTriplet(1000);

