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

export function filterUnConfidentWords(
  words: Array<IWord>,
  supportedFields: Array<string>
): Array<IWord> {
  words = words.filter((word) => {
    //remove white chars
    word.text = word.text.replace(/\s/g, "").toLowerCase();
    word.isLabel = false;
    if (supportedFields.includes(word.text)) {
      word.isLabel = true;
      for (const label in SUPPORTED_FIELDS) {
        if (SUPPORTED_FIELDS[label].includes(word.text)) {
          word.label = label;
          break;
        }
      }
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

  let confidentLines: Array<Array<IWord>> = [];
  const supportedFields = getFlattedSupportedFields();
  console.log({ supportedFields });
  for (const index in lines) {
    let words: Array<IWord> = lines[index]["words"];
    if (words) {
      confidentLines.push(filterUnConfidentWords(words, supportedFields));
    }
  }

  let groups = groupLinesByLabel(confidentLines);
  for (const label in groups) {
    output[label] = ValueParser.parse(label, groups[label]);
  }
  console.log(output);
  return output;
}
