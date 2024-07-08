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

// chatgpt
function longestConsecutive(nums: number[]): number {
  const numsSet = new Set(nums);
  let result = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let cur = num;
      let curCount = 1;

      while (numsSet.has(cur + 1)) {
        curCount++;
        cur++;
      }

      result = Math.max(result, curCount);
    }
  }

  return result;
}
