function canConstruct(ransomNote: string, magazine: string): boolean {
  const letMapper = {};

  for (let i = 0; i < magazine.length; i++) {
    letMapper[magazine[i]] = (letMapper[magazine[i]] || 0) + 1;
  }

  for (let j = 0; j < ransomNote.length; j++) {
    letMapper[ransomNote[j]] = (letMapper[ransomNote[j]] || 0) - 1;
    if (letMapper[ransomNote[j]] < 0) return false;
  }

  return true;
}
