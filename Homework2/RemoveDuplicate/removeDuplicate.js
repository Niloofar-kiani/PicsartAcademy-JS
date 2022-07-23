function removeDups (arr){
  let newArr = [];
    arr.forEach((item) => {
      if (!newArr.includes(item)) {
          newArr.push(item);
      }
  });
  console.log(newArr);
  return newArr;
}

removeDups([1, 0, 1, 0]);
removeDups(["The", "big", "cat"]);
removeDups(["John", "Taylor", "John"]);
