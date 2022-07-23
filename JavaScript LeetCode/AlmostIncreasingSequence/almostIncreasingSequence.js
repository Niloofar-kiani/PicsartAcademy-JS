/*Given a sequence of integers as an array, determine whether
 it is possible to obtain a strictly increasing sequence by removing
  no more than one element from the array.
  EXP: For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false
*/
function solution(sequence){
  let counter = 0;
  for(let i = 1; i < sequence.length; i++){
   if(sequence[i]<= sequence[i-1]){
    counter++;
    if(counter > 1)
    return false;
    if(sequence[i]<= sequence[i-2] && sequence[i+1]<=sequence[i-1])
    return false;
   }
  }
  return true;
  
  
}

console.log(solution([1, 2, 1, 2]));

// sequence = [1, 3, 2, 1]
// // solution(sequence) = false
