// @flow
import leapYear from 'leap-year';
import { numberOfDaysInMonth, monthsList } from '../../lib/dateCheatSheet';
import type { ErrorMessage } from '../../definitions/validations';

const httpRegex: RegExp = new RegExp('http://');
const httpsRegex: RegExp = new RegExp('https://');

// export const dateOfMonthValidation = (
//   date: number,
//   month: number,
//   year: number,
// ): ErrorMessage => {
//   const isLeapYear = leapYear(year);
//   const daysInMonth = numberOfDaysInMonth(month, isLeapYear);
//   const dateDoesNotExist = date > daysInMonth;
//   if (dateDoesNotExist) return `There are only ${daysInMonth} days in ${monthsList[month]}`;
//   return null;
// };

export const dateValidation = (date: number, daysInMonth: error): ?string  => {
  if (date > daysInMonth) return 'Invalid date';
  return null;
}

export const notEmptyValidation = (
  value: any,
): ErrorMessage => value ? null : 'This field cannot be left blank';

const includesHttpValidation = (url: string): ErrorMessage => {
  if (httpRegex.test(url) || httpsRegex.test(url)) return null;
  return 'URLs must start with \'http://\' or \'https://\'';
};

export const urlValidation = (url: string): ErrorMessage => notEmptyValidation(url) || includesHttpValidation(url);
