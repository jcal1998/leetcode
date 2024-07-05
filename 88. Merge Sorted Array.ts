/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let num1Index = m - 1;
  let num2Index = n - 1;
  let resIndex = m + n - 1;

  while (resIndex >= 0) {
    if (
      num1Index >= 0 &&
      (nums1[num1Index] > nums2[num2Index] || num2Index < 0)
    ) {
      nums1[resIndex] = nums1[num1Index];
      num1Index--;
    } else {
      nums1[resIndex] = nums2[num2Index];
      num2Index--;
    }
    resIndex--;
  }
}
