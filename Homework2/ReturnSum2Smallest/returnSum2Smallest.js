function sumTwoSmallestNums(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0 ){
      newArr.push(arr[i]);
    }
  }
  newArr.sort(function(a, b) {
    return a - b;
  });
  let result = newArr[0] + newArr[1];
  console.log(result);
}


sumTwoSmallestNums([19, 5, 42, 2, 77]);

sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]);

sumTwoSmallestNums([2, 9, 6, -1]);

sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ;

sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]);