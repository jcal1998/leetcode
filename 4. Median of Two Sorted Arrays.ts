// Bruteforce solution

const getInsertIndex = (value: number, arr: number[]) => {
  let left = 0;
  let right = arr.length - 1;
  let center = 0;

  while (left <= right) {
    center = Math.floor((left + right) / 2);
    if (value === arr[center]) {
      return center;
    }

    if (value > arr[center]) {
      left = center + 1;
    } else if (value < arr[center]) {
      right = center - 1;
    }
  }

  return right + 1;
};

function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) [nums1, nums2] = [nums2, nums1];
  while (nums2.length) {
    const value = nums2.shift() as number;
    console.log(getInsertIndex(value, nums1));
    nums1.splice(getInsertIndex(value, nums1), 0, value);
    console.log(nums1);
  }

  const half = Math.floor(nums1.length / 2);
  const remaining = nums1.length % 2 === 1;

  console.log(half, remaining);

  if (remaining) {
    return nums1[half];
  }

  return (nums1[half] + nums1[half - 1]) / 2;
}

// Time complexity: O(n^2)
// Space complexity: O(1)

// Refactored solution
function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
  const totalLen = nums1.length + nums2.length;
  const half = Math.floor(totalLen / 2);

  let counter = 0;
  let nums1Cur = 0,
    nums2Cur = 0;
  let last,
    current = 0;

  while (counter <= half) {
    last = current;
    if (
      nums1Cur < nums1.length &&
      (nums2Cur >= nums2.length || nums1[nums1Cur] < nums2[nums2Cur])
    ) {
      current = nums1[nums1Cur];
      nums1Cur++;
    } else {
      current = nums2[nums2Cur];
      nums2Cur++;
    }
    counter++;
  }

  if (totalLen % 2 === 1) {
    return current;
  }

  return (last + current) / 2;
}
