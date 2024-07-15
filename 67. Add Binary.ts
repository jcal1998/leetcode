function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;
  let aIndex = a.length - 1;
  let bIndex = b.length - 1;

  while (aIndex >= 0 || bIndex >= 0 || carry !== 0) {
    let sum = carry;
    if (aIndex >= 0) {
      sum += a[aIndex] === "1" ? 1 : 0;
      aIndex--;
    }
    if (bIndex >= 0) {
      sum += b[bIndex] === "1" ? 1 : 0;
      bIndex--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}
