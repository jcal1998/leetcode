function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  if (x >= 0 && x < 10) return true;

  const numStr = x.toString();
  let i = 0,
    j = numStr.length - 1;

  while (i <= j) {
    if (numStr[i] !== numStr[j]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
}
