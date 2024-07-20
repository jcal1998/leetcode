function reverseWords(s: string): string {
  const arr = s.trim().split(" ");
  let result = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i].trim() !== "") {
      console.log(arr[i]);
      result = result + " " + arr[i];
    }
  }

  return result.trim();
}
