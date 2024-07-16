function searchInsert(nums: number[], target: number): number {
  let right = nums.length - 1;
  let left = 0;
  let mid = Math.floor((right + left) / 2);

  while (left <= right) {
    mid = Math.floor((right + left) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
