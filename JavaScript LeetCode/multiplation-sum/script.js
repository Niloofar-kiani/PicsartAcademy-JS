//(1*2*3) - (1+2+3)
function result(number){
  let mult = [...(number+ "")].reduce((aggr, val) => {
    return +aggr * +val; 
  }); 
  let add = [...(number+ "")].reduce((aggr, val) => {
    return +aggr + +val;  
  });
    return mult - add;
};

console.log(result(123));
