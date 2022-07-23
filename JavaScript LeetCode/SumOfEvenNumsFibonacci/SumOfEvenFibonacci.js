// Sum of even fibonacci numbers up to 4 million
//0,1,1,2,3,5,8,13,21,34,...
//fib[i] = fib[i - 1] + fib[i - 2] 
function sumFibs(num) {
  let previous = 0,
  current = 1,
  sum = 0,
  next;

  for(current; current <= num;){
    next = current + previous;
   previous = current;

    if(current % 2 === 0) {
      sum += current;
    }

    current = next;
  }

  return sum;
}

console.log(sumFibs(4000000));//4613732

