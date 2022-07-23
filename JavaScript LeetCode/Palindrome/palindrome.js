 //Palindrome using methods
 function solution(inputString) { 
  const arrayValues = inputString.split('').reverse().join('')
 
   if(inputString == arrayValues) {
       return true;
   }
   else {
       return false;
   }
 }
 
 console.log(solution("aabaa"));



 //Palindrome without methods
 function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
// const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome("abba");

console.log(value);
