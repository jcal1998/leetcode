function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;
  let cur = "";
  for (let i = 0; i < len; i++) {
    cur += s[i];
    if (len % cur.length !== 0 || cur.length === len) continue;
    console.log(cur, cur.repeat(len / cur.length));
    if (cur.repeat(len / cur.length) === s) return true;
  }

  return false;
}

function repeatedSubstringPattern(s: string): boolean {
  const len = s.length;

  for (let i = 1; i <= Math.floor(len / 2); i++) {
    if (len % i === 0) {
      const substring = s.substring(0, i);
      if (substring.repeat(len / i) === s) {
        return true;
      }
    }
  }

  return false;
}
