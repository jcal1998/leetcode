function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  nums.sort((a, b) => a - b);
  let biggest = 1;
  let temp = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    } else if (nums[i] === nums[i - 1] + 1) {
      temp++;
    } else {
      biggest = Math.max(biggest, temp);
      temp = 1;
    }
  }

  return Math.max(biggest, temp);
}
