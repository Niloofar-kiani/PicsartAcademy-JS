/*Longest Consecutive Run
A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing.
 Create a function that takes an array of numbers and returns the length of the longest **consecutive-run**.
 */

function longestConsecutiveRun(arr){

  arr.sort((a,b)=> a-b)
  let max = 0
  let count = 0
  for(let i = 1; i < arr.length; i++){
    if(arr[i] === arr[i - 1] + 1)
    count++;
    else count =1
    max = Math.max(max, count);
  }
  return max;  
}

console.log(longestConsecutiveRun([1, 2, 3, 5, 6, 7, 8, 9]));//5
console.log(longestConsecutiveRun([5, 4, 2, 1]));//2
console.log(longestConsecutiveRun([3, 5, 7, 10, 15]));//1




const numbers = [1, 2, 3, 7, 8, 9, 55, 56, 57, 10, 58, 59];

numbers.sort((a, b) => a - b);
let chunks = [];
let prev = 1;
numbers.forEach((current) => {
  if (current - prev != 1) chunks.push([]);
  chunks[chunks.length - 1].push(current);
  prev = current;
});


console.log("Longest consecutive set:", chunks[0]);
console.log("Size of longest consecutive set:", chunks[0].length);