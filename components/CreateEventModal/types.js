// @flow

export type NumberField = {
  value: number,
  // error: ?string,
};

export type NumberFieldWithValidation = {
  value: number,
  error: ErrorMessage,
};
