// @flow

export const monthsList: Array<string> = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec',
];

export const monthsToNumber = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sept: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

export const daysOfWeekList: Array<string> = [
  'Sun',
  'Mon',
  'Tues',
  'Wed',
  'Thurs',
  'Fri',
  'Sat',
];

export const daysOfWeekToNumber = {
  Sun: 0,
  Mon: 1,
  Tues: 2,
  Wed: 3,
  Thurs: 4,
  Fri: 5,
  Sat: 6,
};

export const numberOfDaysInMonth = (month: number, isLeapYear: boolean): number => {
  if (month === 1) return isLeapYear ? 29 : 28;
  if (month === 3 || month === 5 || month === 8 || month === 10) return 30;
  return 31;
};

export const parseDate = (date: Date) => ({
  year: date.getFullYear(),
  day: date.getDay(),
  date: date.getDate(),
  month: date.getMonth(),
  minutes: date.getMinutes(), // 0-60
  hours: date.getHours(), // 0-23
});
