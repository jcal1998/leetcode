function majorityElement(nums: number[]): number {
  const result = {};
  const param = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    result[nums[i]] = result[nums[i]] ? result[nums[i]] + 1 : 1;
    if (result[nums[i]] > param) return nums[i];
  }
}
