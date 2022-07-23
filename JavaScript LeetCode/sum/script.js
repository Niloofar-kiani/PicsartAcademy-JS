  //get a number sum the nums 
  const sumOfNumbers = function (number){
    return [...(number+ "")].reduce((aggr, val) => {
      return +aggr + +val;  
    })
  }
  console.log(sumOfNumbers(123));