function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  const backtrack = (index: number) => {
    if (index === nums.length) {
      result.push([...nums]);
      return;
    }

    for (let i = index; i < nums.length; i++) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      backtrack(index + 1);
      [nums[i], nums[index]] = [nums[index], nums[i]];
    }
  };

  backtrack(0);

  return result;
}
