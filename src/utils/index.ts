import { SUPPORTED_FIELDS } from "@/constants";
import { FieldsType, IWord } from "@/types";
import { ValueParser } from "./ValueParser";

export function getFlattedSupportedFields() {
  let flatted: Array<string> = [];
  for (const key in SUPPORTED_FIELDS) {
    flatted = flatted.concat(SUPPORTED_FIELDS[key]);
  }
  return flatted;
}

export function getLabelOf(keyword: string) {
  const labelKeyword = keyword.replace(/[^\w]|\(|\)/g, "");
  if (!labelKeyword) return false;
  return labelKeyword;
}
export function searchForLabel(keyword: string): [boolean, string] {
  if (!keyword) return [false, ""];
  for (const supportedLabel in SUPPORTED_FIELDS) {
    for (const key in SUPPORTED_FIELDS[supportedLabel]) {
      const label = SUPPORTED_FIELDS[supportedLabel][key];
      console.log({ keyword, label });
      if (keyword.includes(label)) {
        return [true, supportedLabel];
        break;
      }
    }
  }
  return [false, ""];
}

export function filterUnConfidentWords(words: Array<IWord>): Array<IWord> {
  words = words.filter((word) => {
    //remove white chars
    word.text = word.text.replace(/\s/g, "").toLowerCase();
    word.isLabel = false;
    let label = getLabelOf(word.text);
    const [isLabel, labelKey] = searchForLabel(label || "");
    if (isLabel) {
      word.isLabel = true;
      word.label = labelKey;
      return true;
    }
    // word it's confidence more than 40%
    return word.confidence > 40;
  });

  return words;
}

export function groupLinesByLabel(lines: Array<Array<IWord>>) {
  let groups: Record<string, Array<IWord>> = {};
  let lastLabel = "";
  for (const index in lines) {
    let lineWords = lines[index];
    if (lineWords) {
      for (let j = 0; j < lineWords.length; j++) {
        const word = lineWords[j];
        if (word.isLabel) {
          lastLabel = word.label || word.text;
          groups[lastLabel] = [];
        } else if (lastLabel) {
          groups[lastLabel].push(word);
        }
      }
    }
  }

  return groups;
}

export function getFieldsFromText(lines: any): FieldsType {
  let output: FieldsType = {};
  console.log({ lines });

  let confidentLines: Array<Array<IWord>> = [];

  for (const index in lines) {
    let words: Array<IWord> = lines[index]["words"];
    if (words) {
      confidentLines.push(filterUnConfidentWords(words));
    }
  }
  let groups = groupLinesByLabel(confidentLines);
  for (const label in groups) {
    output[label] = ValueParser.parse(label, groups[label]);
  }
  return output;
}
