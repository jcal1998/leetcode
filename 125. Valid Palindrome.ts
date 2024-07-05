function isPalindrome(s: string): boolean {
    let left = 0
    let right = s.length - 1
    
    const isLetter = (letter: string) => /^[a-zA-Z0-9]+$/.test(letter)

    while (left < right) {
        if (isLetter(s[left]) && isLetter(s[right])) {
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false
            }

            left++
            right--
        } else if (!isLetter(s[left])) {
            left++
        } else {
            right--
        }
    }
    
    return true
};