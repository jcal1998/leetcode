function minSubArrayLen(target: number, nums: number[]): number {
  let length = Infinity;
  let sum = 0;
  let start = 0;
  for (let end = 0; end < nums.length; end++) {
    sum += nums[end];

    while (sum >= target) {
      if (end - start + 1 < length) {
        length = end - start + 1;
      }
      sum -= nums[start];
      start++;
    }
  }

  return length === Infinity ? 0 : length;
}
