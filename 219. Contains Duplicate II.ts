function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const letMap = {};

  for (let i = 0; i < nums.length; i++) {
    if (letMap.hasOwnProperty(nums[i])) {
      if (i - letMap[nums[i]] <= k) return true;
    }

    letMap[nums[i]] = i;
  }

  return false;
}
