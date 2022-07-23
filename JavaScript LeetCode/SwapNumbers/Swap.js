//Swap
let a = 5
let b = 34
console.log("before swap:" ,a, b)

function Swap1(a, b){
let temp = a
a = b
b = temp
console.log(a, b)
}
Swap1(3, 5)

function SWAP2(a, b){
  a = a + b
  b = a - b
  a = a - b
  console.log(a, b)
}



function SWAP3(a, b){
  a = a ^ b
  b = a ^ b
  a = a ^ b
  console.log(a, b)
}
SWAP3(6, 5)