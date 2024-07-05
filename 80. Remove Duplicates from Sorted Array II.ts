function removeDuplicates(nums: number[]): number {
  let slow = 2;
  for (let i = 2; i < nums.length; i++) {
    console.log(nums[i], nums[i - 2]);
    if (nums[i] !== nums[slow - 2]) {
      console.log(nums[i], nums[i - 2], nums[slow], nums[i]);
      nums[slow] = nums[i];
      slow++;
    }
  }

  return slow;
}
