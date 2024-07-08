function evalRPN(tokens: string[]): number {
  let result;
  const operands = ["+", "-", "*", "/"];
  const auxOperand = [];

  while (tokens.length) {
    const curToken = tokens.shift();
    if (operands.includes(curToken)) {
      const num2 = auxOperand.pop();
      const num1 = auxOperand.pop();
      const tempResult = calculator(num1, curToken, num2);
      auxOperand.push(tempResult);
    } else {
      auxOperand.push(Number(curToken));
    }
  }

  return auxOperand[0];
}

const calculator = (num1: number, oper: string, num2: number) => {
  switch (oper) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.trunc(num1 / num2);
  }
};

const isNumber = (letter: string) => !Number.isNaN(Number(letter));
