function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  const srcMap = new Map<
    number,
    {
      tIndex: number;
      word: string;
    }
  >();

  for (let i = 0; i < indices.length; i++) {
    srcMap.set(indices[i], {
      tIndex: i,
      word: sources[i],
    });
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (srcMap.has(i)) {
      const { tIndex, word } = srcMap.get(i);
      console.log(s.slice(i, word.length + i), i, word.length, word);
      if (word === s.slice(i, word.length + i)) {
        console.log("entrou");
        result += targets[tIndex];
        i += word.length - 1;
      } else {
        result += s[i];
      }
    } else {
      result += s[i];
    }
  }

  return result;
}

function findReplaceString(
  s: string,
  indices: number[],
  sources: string[],
  targets: string[]
): string {
  const srcMap = new Map<
    number,
    {
      tIndex: number[];
      word: string[];
    }
  >();

  for (let i = 0; i < indices.length; i++) {
    if (!srcMap.has(indices[i])) {
      srcMap.set(indices[i], {
        tIndex: [],
        word: [],
      });
    }
    const { tIndex, word } = srcMap.get(indices[i]);
    tIndex.push(i);
    word.push(sources[i]);
  }

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (srcMap.has(i)) {
      const { tIndex, word } = srcMap.get(i);
      if (tIndex.length === 1 && word[0] === s.slice(i, word[0].length + i)) {
        console.log("entrou");
        result += targets[tIndex[0]];
        i += word[0].length - 1;
      } else if (tIndex.length > 1) {
        let candidate = {
          word: "",
          index: 0,
        };
        for (let j = 0; j < tIndex.length; j++) {
          if (word[j] === s.slice(i, word[j].length + i)) {
            if (word[j].length > candidate.word.length) {
              candidate = {
                word: word[j],
                index: j,
              };
            }
          }
        }
        result += targets[candidate.index];
        i += candidate.word.length;
      } else {
        result += s[i];
      }
    } else {
      result += s[i];
    }
  }

  return result;
}
