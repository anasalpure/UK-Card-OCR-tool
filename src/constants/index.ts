type SupportedGroup = {
  [x: string]: Array<string>;
};
export const SUPPORTED_FIELDS: SupportedGroup = {
  name: [
    "name",
    "surname",
    "given name",
    "given names",
    "full name",
    "fname",
    "first name",
    "lname",
    "last name",
  ],
  birthDate: ["date of birth", "dob", "008"],
  gender: ["gender", "sex"],
};
