//print odd numbers between 2 and 9 

function odd(start, end){
  let arr=[]
  for(let i = start; i<= end; i++ ){
    if(i% 2 !==0) arr.push(i);
  }
  return arr;
  }
  console.log(odd(2,9))