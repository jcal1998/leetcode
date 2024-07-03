function addDigits(num: number): number {
  const strNum = num.toString();
  let sum = 0;

  for (let i = 0; i < strNum.length; i++) {
    sum += Number(strNum[i]);
  }

  if (sum < 10) return sum;
  return addDigits(sum);
}
