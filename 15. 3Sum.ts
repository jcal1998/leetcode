function threeSum(nums: number[]): number[][] {
  const result = [];
  const mappedNums = {};
  nums.sort();
  nums.forEach((num) => {
    mappedNums[num] = mappedNums[num] ? mappedNums[num]++ : 1;
  });
  for (let i = 0; i < nums.length; i++) {
    const first = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const second = nums[j];
      const sum = first + second;
      const remain = -sum;
      if (mappedNums[remain]) {
        result.push([first, second, remain]);
      }
    }
    mappedNums[first] -= mappedNums[first] - 1 <= 0 ? 0 : mappedNums[first] - 1;
    console.log(mappedNums);
  }

  return result;
}
