function myAtoi(s: string): number {
  const str = s.trim();
  if (!str.length || (!isNumber(str[0]) && str[0] !== "+" && str[0] !== "-"))
    return 0;
  let firstNumIndex;
  let numberStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " && isNumber(str[i])) {
      numberStr = numberStr + str[i];
      if (!firstNumIndex) {
        firstNumIndex = i;
      }
    } else {
      if (
        numberStr.length > 0 ||
        str[i] === "." ||
        str[i] === " " ||
        (i + 1 < str.length && isInvalidSignal(str[i], str[i + 1]))
      ) {
        break;
      }
    }
  }

  if (firstNumIndex && firstNumIndex - 1 >= 0) {
    if (str[firstNumIndex - 1] === "-" || str[firstNumIndex - 1] === "+") {
      numberStr = str[firstNumIndex - 1] + numberStr;
    }
  }

  const result = Number(numberStr);
  if (result < -Math.pow(2, 31)) return -Math.pow(2, 31);
  if (result > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;

  return result || 0;
}

function isNumber(s: string): boolean {
  return !Number.isNaN(Number(s));
}

function isInvalidSignal(current: string, next: string) {
  if ((current === "-" || current === "+") && !isNumber(next)) {
    return true;
  }

  return false;
}
