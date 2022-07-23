//Fibonacci Sequence 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,...

function fibonacci(n){
  let fib = [0, 1]
  for(let i = 2; i <= n ; i++){
   fib[i] = fib[i - 1] + fib[i - 2] 
   console.log(fib[i])
   
  }
  return fib
}
console.log(fibonacci(5))



//Fibonacci Recursive

function fibonacciRecursive(num){
if (num <= 1) return num;
return fibonacciRecursive(num - 1) + fibonacciRecursive(num - 2)
}
console.log(fibonacciRecursive(5))



const Fibonacci = function (num){
  if(isNaN(num)) throw "error";
  if(num <= 1) return num;
  return Fibonacci(num - 1) + Fibonacci(num - 2);
};
console.log(Fibonacci(4));
