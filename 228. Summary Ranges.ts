function summaryRanges(nums: number[]): string[] {
  let last = nums[0];
  const result = [];

  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] - nums[i - 1] !== 1) {
      result.push(convert(last, nums[i - 1]));
      last = nums[i];
    }
  }

  return result;
}

const convert = (a: number, b: number) => {
  if (a === b) {
    return a.toString();
  } else {
    return a.toString() + "->" + b.toString();
  }
};
