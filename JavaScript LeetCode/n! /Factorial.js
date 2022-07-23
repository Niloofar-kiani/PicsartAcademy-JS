//n! very fast
function factorialIterative(n){
  if(n <= 1) return 1
  let result = 1;
  for(let i = 2; i <= n ; i++){
    result *= i
  }
  return result;
}
console.log(factorialIterative(5))



//Factorial recursive >>> Speed of this function is'nt as fast as iterative
function recursiveFactorial(num){  
  if (num <= 1) return 1
  return num * recursiveFactorial(num - 1)
}
console.log(recursiveFactorial(3))



//add factorial in an array cache
let cache = []

const factorialCaching = function (num){
  if (num <= 1) return 1
  if (cache[num]){
    return cache[num]
  }
  cache[num] = num * factorialCaching (num -1)
  return cache[num]
}
console.log(factorialCaching(3))