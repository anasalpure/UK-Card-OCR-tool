type SupportedGroup = {
  [x: string]: Array<string>;
};
export const SUPPORTED_FIELDS: SupportedGroup = {
  name: ["name", "full name", "fname", "lname"],
  birthDate: ["date of birth", "dob", "008"],
  gender: ["gender", "sex"],
};
