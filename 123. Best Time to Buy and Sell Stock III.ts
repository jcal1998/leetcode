function maxProfit(prices: number[]): number {
  const left = new Array(prices.length).fill(0);
  const right = new Array(prices.length).fill(0);

  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    left[i] = Math.max(left[i - 1], prices[i] - min);
  }

  let max = prices[prices.length - 1];
  for (let j = prices.length - 2; j >= 0; j--) {
    max = Math.max(max, prices[j]);
    right[j] = Math.max(right[j + 1], max - prices[j]);
  }

  let maxProfit = -Infinity;
  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(left[i] + right[i], maxProfit);
  }

  return maxProfit;
}
