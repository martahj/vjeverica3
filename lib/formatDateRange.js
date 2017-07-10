// @flow
import {
  monthsList,
  daysOfWeekList,
} from './dateCheatSheet';

type DateObject = {
  year: number,
  day: string,
  date: number,
  month: string,
  minutes: number,
  hours: number,
};

const getDateObj = (date: Date): DateObject => ({
  year: date.getFullYear(),
  day: daysOfWeekList[date.getDay()],
  date: date.getDate(),
  month: monthsList[date.getMonth()],
  minutes: date.getMinutes(), // 0-60
  hours: date.getHours(), // 0-23
});

const formatTime = (
  { hours, minutes }: {hours: number, minutes: number},
): Array<string> => {
  const pm = hours > 11;
  const adjustedHours = pm ? (hours === 12 ? hours : hours - 12) : (hours === 0 ? 12 : hours);
  const minutesAsString = `${minutes}`;
  const adjustedMinutes = minutesAsString.length === 1 ? `0${minutesAsString}` : minutesAsString;
  return [`${adjustedHours}:${adjustedMinutes}`, pm ? 'pm' : 'am'];
};

const formatDate = (
  { day, month, date }: { day: string, month: string, date: number},
): string => `${day} ${month} ${date}`;

const formatDateRange = (start: ?Date, end: ?Date): (string | null) => {
  if (!start || !end) return null;
  const startInfo = getDateObj(start);
  const endInfo = getDateObj(end);
  const startTime = formatTime(startInfo);
  const endTime = formatTime(endInfo);
  const startDate = formatDate(startInfo);
  const endDate = formatDate(endInfo);
  const sameYear = startInfo.year === endInfo.year;
  const sameMonth = sameYear && (startInfo.month === endInfo.month);
  const sameDate = sameMonth && (startInfo.date === endInfo.date);
  const sameMorningOrAfternoon = sameDate && (startTime[1] === endTime[1]);
  if (sameMorningOrAfternoon) {
    return `${startTime[0]} - ${endTime.join('')} ${startDate}, ${startInfo.year}`;
  }
  if (sameDate) {
    return `${startTime.join('')} - ${endTime.join('')} ${startDate}, ${startInfo.year}`;
  }
  if (sameMonth) {
    return `${startTime.join('')} ${startDate} - ${endTime.join('')} ${endDate}, ${startInfo.year}`;
  }
  if (sameYear) {
    return `${startTime.join('')} ${startDate} - ${endTime.join('')} ${endDate}, ${startInfo.year}`;
  }
  return `${startTime.join('')} ${startDate}, ${startInfo.year} - ${endTime.join('')} ${endDate}, ${endInfo.year}`;
};

export default formatDateRange;
