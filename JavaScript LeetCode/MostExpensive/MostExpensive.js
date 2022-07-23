function mostExpensive(obj){
let objKey = Object.keys(obj)
let objValue = Object.values(obj) 
let indexMax= objValue.indexOf(Math.max(...objValue))
let result=objKey[indexMax];
console.log(`The most expensive one is the ${result}`);

}


mostExpensive ({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650
})

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500
})



// function isHappy (n){
//   let result = {};

//   while (n !== 1){
//     let current = n;
//     let sum = 0;
//     while (current !==0){
//       sum += (current% 10)** 2
//       current = Math.floor(current /10);
//     }
//     if(result[sum]){
//       return false;
//     }
//     result[sum] = true;
//     n = sum;
//   }
//   return true;

// };

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
