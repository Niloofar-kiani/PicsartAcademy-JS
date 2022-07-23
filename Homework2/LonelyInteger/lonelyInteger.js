function lonelyInteger (arr){
  let result = "";
  for (let i = 0; i < arr.length; i++){
    if (arr.includes(-arr[i])) continue;  
    else result=arr[i];
  }
  console.log(result);
}

lonelyInteger([1, -1, 2, -2, 3]);
lonelyInteger([-3, 1, 2, 3, -1, -4, -2]);
lonelyInteger([-9, -105, -9, -9, -9, -9, 105]);