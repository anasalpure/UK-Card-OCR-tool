import { IWord } from "@/types";

export class ValueParser {
  private static parsers: {
    [x: string]: (words: Array<IWord>) => string;
  } = {
    name: ValueParser.nameParser,
    // birthDate: ValueParser.birthDateParser,
    // gender: ValueParser.genderParser,
  };

  static parse(label: string, words: Array<IWord>): string {
    if (label in ValueParser.parsers) {
      return ValueParser.parsers[label](words);
    }
    return ValueParser.nameParser(words);
  }

  static nameParser(words: Array<IWord>) {
    const MAX_LENGTH = 3;
    let length = 0;
    let result = "";

    words.forEach((word) => {
      if (length >= MAX_LENGTH) return;
      if (word.text.length > 1) {
        result += word.text + " ";
        length++;
      }
    });

    return result.trim();
  }
  static birthDateParser(words: Array<IWord>) {
    const MAX_LENGTH = 3;
    let length = 0;
    let result = "";

    words.forEach((word) => {
      if (length >= MAX_LENGTH) return;
      if (word.text.length > 1) {
        result += word.text + " ";
        length++;
      }
    });

    return result.trim();
  }
  static genderParser(words: Array<IWord>) {
    const MAX_LENGTH = 1;
    let length = 0;
    let result = "";

    words.forEach((word) => {
      if (length >= MAX_LENGTH) return;
      if (word.text.length > 1) {
        result += word.text + " ";
        length++;
      }
    });

    return result.trim();
  }
}
