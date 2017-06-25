// @flow
import leapYear from 'leap-year';
import { numberOfDaysInMonth, monthsList } from 'util/dateCheatSheet';
import type { ErrorMessage } from 'definitions/validations';

export const dateOfMonthValidation = (
  date: number,
  month: number,
  year: number
): ErrorMessage => {
  const isLeapYear = leapYear(year);
  const daysInMonth = numberOfDaysInMonth(month, isLeapYear);
  const dateDoesNotExist = date > daysInMonth;
  if (dateDoesNotExist) return `There are only ${daysInMonth} days in ${monthsList[month]}`;
  return null;
};

export const notEmptyValidation = (
  value: any,
): ErrorMessage => Boolean(value) ? null : 'This field cannot be left blank';

const includesHttpValidation = (url: string): ErrorMessage => {
  if (!url.test(new RegExp('http://')) && !url.test(new RegExp('https://'))) {
    return `URLs must start with 'http://' or 'https://'`;
  }
  return null;
};

export const urlValidation = (url: string): ErrorMessage => {
  return notEmptyValidation(url) || includesHttpValidation(url);
}
