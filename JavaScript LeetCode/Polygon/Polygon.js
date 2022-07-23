function solution(n) {
  if(n === 1) return 1;
  let result = 1;
  for(let i = 1; i < n; i++){
     result = result + i * 4;
  }
  return result;
}
console.log(solution(4));