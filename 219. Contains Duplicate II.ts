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

// chat gpt sliding window
function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const window = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (window.has(nums[i])) {
      return true;
    }

    window.add(nums[i]);

    if (window.size > k) {
      window.delete(nums[i - k]);
    }
  }

  return false;
}
