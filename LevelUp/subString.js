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
  for (let i = 0; i < strLng - 1; i++) {
    if (str[i] !== sub[0]) continue;
    for (let j = 1; j < subLng; j++) {
      if (str[i + j] === sub[j]) continue;
    }
    return i;
  }
  return false;
}
console.log(subString("hello", "ll"));
