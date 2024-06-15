function twoSum(nums: number[], target: number): number[] {
  const numMapper = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numMapper.hasOwnProperty(complement)) {
      return [i, numMapper[complement]];
    }
    numMapper[nums[i]] = i;
  }

  return [];
}
