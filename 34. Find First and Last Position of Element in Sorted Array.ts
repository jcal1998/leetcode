function searchRange(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  const getIndexes = (index: number) => {
    let lPointer = index;
    let rPointer = index;
    while (lPointer - 1 >= 0 && nums[lPointer - 1] === target) {
      lPointer--;
    }
    while (rPointer + 1 < nums.length && nums[rPointer + 1] === target) {
      rPointer++;
    }

    return [lPointer, rPointer];
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return getIndexes(mid);
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return [-1, -1];
}

// chatgpt
function searchRange(nums: number[], target: number): number[] {
  const findFirst = (): number => {
    let left = 0;
    let right = nums.length - 1;
    let firstIndex = -1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target <= nums[mid]) {
        if (target === nums[mid]) {
          firstIndex = mid;
        }
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return firstIndex;
  };

  const lastFirst = (): number => {
    let left = 0;
    let right = nums.length - 1;
    let lastIndex = nums.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target >= nums[mid]) {
        if (target === nums[mid]) {
          lastIndex = mid;
        }
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return lastIndex;
  };

  const first = findFirst();
  if (first === -1) {
    return [-1, -1];
  }

  const second = lastFirst();

  return [first, second];
}
