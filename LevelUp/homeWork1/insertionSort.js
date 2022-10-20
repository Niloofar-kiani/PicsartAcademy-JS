// Implement the Insertion sort algorithm
function insertionSort(arr) {
  let i = 1,
    key,
    j;
  for (; i < arr.length; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
  console.log(arr);
  return arr;
}

insertionSort([10, 8, 4, 11, 15]);
