export type FieldsType = {
  [x: string]: string;
};

export interface IWord {
  confidence: number;
  is_numeric: boolean;
  language: string;
  text: string;
  isLabel?: boolean;
  label?: string;
}
