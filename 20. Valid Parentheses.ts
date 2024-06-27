function isValid(s: string): boolean {
  const charMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else {
      const lastOpen = stack.pop();
      if (charMap[lastOpen!] !== s[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
