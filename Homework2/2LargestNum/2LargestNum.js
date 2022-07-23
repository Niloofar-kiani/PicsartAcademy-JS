const secondLargest = arr =>{
  arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr[arr.length-2]);
  return arr[arr.length-2];
}
secondLargest([10, 40, 30, 20, 50]);
secondLargest([25, 143, 89, 13, 105]);
secondLargest([54, 23, 11, 17, 10]);


