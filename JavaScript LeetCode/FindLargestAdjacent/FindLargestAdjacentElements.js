/*Given an array of integers, find the pair of adjacent 
elements that has the largest product and return that product.*/


function solution(inputArray) {
  const multiple = []
  for(let i = 0; i < inputArray.length -1; i++){
   multiple.push(inputArray[i] * inputArray [i+1])
  }
  const result = Math.max(...multiple)
  return result
  }

 console.log(solution([3, 6, -2, -5, 7, 3]))
 console.log(solution([2, -4, 0, 5, -22]))
 console.log(solution([3, 6, -2, -5, 7, 3]))