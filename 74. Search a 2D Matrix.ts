function searchMatrix(matrix: number[][], target: number): boolean {
  const findGroupIndex = (): number => {
    let left = 0;
    let right = matrix.length - 1;
    let mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      const curArr = matrix[mid];
      if (target >= curArr[0] && target <= curArr[curArr.length - 1]) {
        return mid;
      } else if (target < curArr[0]) {
        right = mid - 1;
      } else if (target > curArr[curArr.length - 1]) {
        left = mid + 1;
      }
    }
    return -1;
  };

  const groupIndex = findGroupIndex();
  if (groupIndex === -1) return false;
  const pGroup = matrix[groupIndex];

  let left = 0;
  let right = pGroup.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (target === pGroup[mid]) {
      return true;
    } else if (target < pGroup[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
}
