function candy(ratings: number[]): number {
  const len = ratings.length;
  const arr = Array(len).fill(1);

  for (let i = 1; i < len; i++) {
    if (ratings[i] > ratings[i - 1]) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  for (let j = len - 2; j >= 0; j--) {
    if (ratings[j] > ratings[j + 1]) {
      arr[j] = Math.max(arr[j], arr[j + 1] + 1);
    }
  }

  return arr.reduce((acc, cur) => acc + cur, 0);
}
