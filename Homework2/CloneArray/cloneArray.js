const clone= arr => {
  arr = arr.concat(arr);
  console.log(arr);
  return arr;
}

clone([1, 1]);
clone([1, 2, 3]);
clone(["x", "y"]);
