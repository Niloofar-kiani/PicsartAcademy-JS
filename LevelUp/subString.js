/*Find substring without using built-in functions, 
e.g. substr("hello", "el"); returns 1 as the "el" substring starts at the index 1
*/

function length(string) {
  var count = 0;
  while (string[count] != undefined) count++;
  return count;
}

function subString(str, sub) {
  let strLng = length(str);
  let subLng = length(sub);
  if (subLng > strLng) return false;
  for (let i = 0; i < strLng; i++) {
    if (str[i] !== sub[0]) continue;
    let key = true;
    for (let j = 1; j < subLng && key; j++) {
      if (str[i + j] === sub[j]) continue;
      key = false;
    }
    if (key) return i;
  }
  return false;
}
console.log(subString("hello", "elli"));
