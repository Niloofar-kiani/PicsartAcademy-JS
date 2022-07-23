function value(integer){
  return integer < 0 ? -integer : integer
}
console.log(value(-2))




function num(floating){
 let newarr = floating.toString().split('.');
 return +newarr[0] +1
}
 
console.log(num(2.3));