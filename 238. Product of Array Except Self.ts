function productExceptSelf(nums: number[]): number[] {
  const result = [];

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    result.push(prefix);
    prefix = prefix * nums[i];
  }

  let sufix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] = result[i] * sufix;
    sufix = sufix * nums[i];
  }

  return result;
}
