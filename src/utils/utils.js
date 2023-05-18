import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isBetween from 'dayjs/plugin/isBetween';
import { DateFormat } from './consts';
dayjs.extend(duration);
dayjs.extend(isBetween);

const DAY = 'D';
const HOUR = 'H';
const MINUTE = 'M';

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];

const getEventDuration = (start, end) => {
  const eventDuration = dayjs.duration(Math.floor(end.diff(start)));
  const durationDays = eventDuration.days();
  const durationHours = eventDuration.hours();
  if (durationDays === 0 && durationHours === 0) {
    return `${eventDuration.format(DateFormat.MINUTE)}${MINUTE}`;
  }
  if (durationDays === 0 && durationHours !== 0) {
    return `${eventDuration.format(DateFormat.HOUR)}${HOUR} ${eventDuration.format(DateFormat.MINUTE)}${MINUTE}`;
  }
  return `${eventDuration.format(DateFormat.DAY)}${DAY} ${eventDuration.format(DateFormat.HOUR)}${HOUR} ${eventDuration.format(DateFormat.MINUTE)}${MINUTE}`;
};

const getDateOptions = (start, end) => {
  const startEvent = dayjs(start);
  const endEvent = dayjs(end);
  return {
    day: startEvent.format(DateFormat.MONTH_DAY),
    startHour: startEvent.format(DateFormat.HOUR_MINUTE),
    endHour: endEvent.format(DateFormat.HOUR_MINUTE),
    startDate: startEvent.format(DateFormat.FULL_DATE),
    endDate: endEvent.format(DateFormat.FULL_DATE),
    duration: getEventDuration(startEvent, endEvent),
  };
};

const updatePoint = (points, update) => points.map((point) => point.id === update.id ? update : point);

const isFuture = (point) => dayjs().isBefore(dayjs(point.dateFrom));

const isPresent = (point) => dayjs().isBetween(point.dateFrom, dayjs(point.dateTo));

const isPast = (point) => dayjs().isAfter(dayjs(point.dateTo));

export {getRandomElement, getDateOptions, isFuture, isPresent, isPast, updatePoint};
