function isIsomorphic(s: string, t: string): boolean {
  const sToT = {};
  const tToS = {};

  for (let i = 0; i < s.length; i++) {
    if (!sToT[s[i]]) {
      sToT[s[i]] = t[i];
    } else if (sToT[s[i]] !== t[i]) {
      return false;
    }

    if (!tToS[t[i]]) {
      tToS[t[i]] = s[i];
    } else if (tToS[t[i]] !== s[i]) {
      return false;
    }
  }

  return true;
}
