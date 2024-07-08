function simplifyPath(path: string): string {
  const directories = path.split("/");
  const stack = [];

  for (let i = 0; i < directories.length; i++) {
    if (directories[i] === "" || directories[i] === ".") {
      continue;
    } else if (directories[i] === "..") {
      if (stack.length > 0) stack.pop();
    } else {
      stack.push(directories[i]);
    }
  }

  return "/" + stack.join("/");
}
