function isIsomorphic(s: string, t: string): boolean {
  const letMapper = {};

  for (let i = 0; i < s.length; i++) {
    if (!letMapper[s[i]]) {
      letMapper[s[i]] = t[i];
    }

    if (t[i] !== letMapper[s[i]]) return false;
  }

  return true;
}
