function threeSumClosest(nums: number[], target: number): number {
  if (nums.length === 3) return nums[0] + nums[1] + nums[2];
  nums.sort((a, b) => a - b);
  let closestSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      } else if (sum < target) {
        while (left < right && nums[left] === nums[left + 1]) left++;
        left++;
      } else {
        while (left < right && nums[right] === nums[right - 1]) right--;
        right--;
      }
    }
  }

  return closestSum;
}
