/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  const leftOver = k % nums.length;
  const final = nums.splice(nums.length - leftOver);
  nums.unshift(...final);
}
