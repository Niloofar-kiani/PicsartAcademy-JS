//unique element in sorted array

var singleNonDuplicate = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  let mid = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (start == end) {
      return nums[start];
    }
    if (mid % 2 === 1) {
      if (nums[mid - 1] == nums[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (nums[mid] == nums[mid + 1]) {
        start = mid + 2;
      } else {
        end = mid;
      }
    }
  }
  return nums[mid];
};

console.log(singleNonDuplicate([1, 1, 2, 2, 3, 4, 4]));
