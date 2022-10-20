//Check if all characters in a string are unique using an object as a hashtable
function findUnique(str) {
  var hashtable = {};
  for (var i = 0; i < str.length; i++) {
    var value = str[i];
    if (value in hashtable) return false;
    hashtable[value] = false;
  }
  return true;
}
console.log(findUnique("Gee1i"));
