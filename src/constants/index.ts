type SupportedGroup = {
  [x: string]: Array<string>;
};
export const SUPPORTED_FIELDS: SupportedGroup = {
  name: [
    "name",
    "surname",
    "given", //given name
    "full",
    "fname",
    "first",
    "lname",
    "last",
  ],
  birthDate: ["date", "birth", "dob", "008"],
  gender: ["gender", "sex"],
};
