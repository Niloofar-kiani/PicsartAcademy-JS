/* Implement a function to find sum of
two large numbers.*/

function sumBigInt(str1, str2) {
  let l1 = str1.length,
    l2 = str2.length;
  if (l1 > l2) {
    let t = str1;
    str1 = str2;
    str2 = t;
  }

  //for storing result
  let res = "";

  str1 = str1.split("").reverse().join("");
  str2 = str2.split("").reverse().join("");

  let carry = 0;
  for (let i = 0; i < l1; i++) {
    let sum = str1[i].charCodeAt(0) - 48 + (str2[i].charCodeAt(0) - 48) + carry;
    res += String.fromCharCode((sum % 10) + 48);

    carry = Math.floor(sum / 10);
  }

  //for larger number...
  for (let i = l1; i < l2; i++) {
    let sum = str2[i].charCodeAt(0) - 48 + carry;
    res += String.fromCharCode((sum % 10) + 48);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) res += String.fromCharCode(carry + 48);

  res = res.split("").reverse().join("");

  return res;
}

console.log(sumBigInt("13456", "19010401020406"));
