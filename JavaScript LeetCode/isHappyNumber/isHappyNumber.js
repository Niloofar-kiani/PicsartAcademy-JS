/*A happy number is a number which yields a `1` by repeatedly summing up the square of its digits. If such a process results in 
an endless cycle of numbers containing `4`, the number is said to be an **unhappy number**.
.*/ 

const isHappy = function(n){
  let splitedNum = String(n).split('')
  let sum = splitedNum.reduce((acc,el) => acc + (el*el), 0)
 if(sum === 1){
   return true;
 
 }else if(sum < 10){
   return false;
 }else{
   return isHappy(sum);
 }
 }
 
 console.log(isHappy(67));
 console.log(isHappy(89));
 console.log(isHappy(139));
 