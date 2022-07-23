//   Number of Leap Years
// Given a range of years as a string, return the **number of leap years**
//there are within the range (inclusive).
function numLeapYears(str){
 let countingYears = 0
  const strtoArr = str.split('-')
for(let i = +strtoArr[0]; i <= +strtoArr[1]; i++ ){
  if (new Date(i, 1, 29).getMonth() ===1){
    countingYears++
  }
}
 return countingYears  
}

console.log(numLeapYears("1980-1984"))
console.log(numLeapYears("2000-2020"))
console.log(numLeapYears("1600-2000"))
