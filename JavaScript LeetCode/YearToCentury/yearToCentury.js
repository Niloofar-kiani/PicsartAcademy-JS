//give year pass century
function solution(year) {
  if( year % 100 === 0) {
    return year/100;
  }
  let mathCeil = (year /100).toString().split('.')
  return +mathCeil[0] +1
  //return Math.ceil(year/100) 
  }
 console.log(solution(1950))
 console.log(solution(1905))
 console.log(solution(2022))


