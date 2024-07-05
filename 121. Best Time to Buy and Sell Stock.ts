function maxProfit(prices: number[]): number {
  let profit = 0;
  let bigger = prices[prices.length - 1];
  for (let i = prices.length - 2; i >= 0; i--) {
    if (prices[i] < bigger) {
      const diff = bigger - prices[i];
      if (diff > profit) {
        profit = diff;
      }
    } else {
      bigger = prices[i];
    }
  }

  return profit;
}
