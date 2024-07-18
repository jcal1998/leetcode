function maxSubarraySumCircular(nums: number[]): number {
  let current = nums[0];
  let max = nums[0];
  let total = nums[0];
  const inverted = [-nums[0]];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], nums[i] + current);
    if (current > max) {
      max = current;
    }
    total += nums[i];
    inverted.push(-nums[i]);
  }

  current = inverted[0];
  let min = inverted[0];
  for (let i = 1; i < inverted.length; i++) {
    current = Math.max(inverted[i], inverted[i] + current);
    if (current > min) {
      min = current;
    }
  }

  const circularMax = min + total;
  if (circularMax === 0) return max;

  return Math.max(max, circularMax);
}
