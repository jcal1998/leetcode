function canBeValid(s: string, locked: string): boolean {
  if (s.length % 2 !== 0) return false;

  let openNeeded = 0;
  let slots = 0;

  for (let i = 0; i < s.length; i++) {
    if (locked[i] === "0" || s[i] === "(") {
      slots++;
    } else {
      openNeeded++;
    }
    if (openNeeded > slots) {
      return false;
    }
  }

  let closeNeeded = 0;
  slots = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (locked[i] === "0" || s[i] === ")") {
      slots++;
    } else {
      closeNeeded++;
    }
    if (closeNeeded > slots) {
      return false;
    }
  }

  return true;
}
