/* 1..> implement a function that take a string and return a unique id*/

hashCode = (s) =>
  s.split("").reduce((a, b) => {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
console.log(hashCode("Niloofar"));
console.log(hashCode("321"));

/*2..>> Can we implement it vice versa?
hash is a one way function and we can convert for example 56000 bits
to 32 bits but it's impossible to convert the number returns from hash to specific string
*/

/*3..>>> How to find a missing 32bit integer among a unsorted/sorted array containing at most 4 million unique integers?
I think, in an unsorted array doing linear search through a very large piece of
memory (if numbers are between 0-100 it will be for example 100 times a second) but as the network grew we must calculate traffic of data
and we must do it with binary search uses about n/2 comparisons we can remove the bottleneck
*/
