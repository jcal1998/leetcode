function singleNumber(nums: number[]): number {
  let ones = 0,
    twos = 0,
    threes = 0;

  for (const num of nums) {
    twos |= ones & num;
    ones ^= num;
    threes = ones & twos;
    ones &= ~threes;
    twos &= ~threes;
  }

  return ones;
}
