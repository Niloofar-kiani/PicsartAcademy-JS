function findNaN (arr){
  console.log(arr.findIndex(Number.isNaN));
}

findNaN([1, 2, NaN]);
findNaN([NaN, 1, 2, 3, 4]);
findNaN([0, 1, 2, 3, 4]);