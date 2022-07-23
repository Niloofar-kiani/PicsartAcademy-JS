function matchLastItem (arr){
  let items = arr.slice(0,-1).join('');
  console.log(items);


console.log(items === arr[(arr.length)-1] ?  true : false);

}

matchLastItem(["rsq", "6hi", "g", "rsq6hig"]);
matchLastItem([1, 1, 1, "11"]);
matchLastItem([8, "thunder", true, "8thundertrue"]);