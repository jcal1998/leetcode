function intToRoman(num: number): string {
  const mappedRoman = {
    unit: {
      4: "IV",
      5: "V",
      9: "IX",
      10: "X",
    },
    ten: {
      4: "XL",
      5: "L",
      9: "XC",
    },
    hundred: {
      4: "CD",
      5: "D",
      9: "CM",
    },
  };

  let result = "";
  if (num >= 1000) {
    const thou = Math.floor(num / 1000);
    num = num % 1000;
    result += appendBy("M", thou);
  }

  if (num >= 100) {
    let hun = Math.floor(num / 100);
    num = num % 100;
    if (mappedRoman.hundred[hun]) {
      result += mappedRoman.hundred[hun];
    } else {
      if (hun > 5) {
        result += "D";
        hun -= 5;
      }
      result += appendBy("C", hun);
    }
  }

  if (num > 10) {
    let ten = Math.floor(num / 10);
    num = num % 10;
    if (mappedRoman.ten[ten]) {
      result += mappedRoman.ten[ten];
    } else {
      if (ten > 5) {
        result += "L";
        ten -= 5;
      }
      result += appendBy("X", ten);
    }
  }

  if (mappedRoman.unit[num]) {
    result += mappedRoman.unit[num];
  } else {
    if (num > 5) {
      result += "V";
      num -= 5;
    }
    result += appendBy("I", num);
  }

  return result;
}

const appendBy = (letter: string, repeat: number) => {
  let temp = "";
  for (let i = 0; i < repeat; i++) {
    temp += letter;
  }

  return temp;
};
