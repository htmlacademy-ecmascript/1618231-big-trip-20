import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const DAY = 'D';
const HOUR = 'H';
const MINUTE = 'M';
const DAY_FORMAT = 'DD';
const HOUR_FORMAT = 'HH';
const MINUTE_FORMAT = 'mm';

dayjs.extend(duration);

const getRandomElement = (items) => items[Math.floor(Math.random() * items.length)];

const getEventDuration = (start, end) => {
  const eventDuration = dayjs.duration(Math.floor(end.diff(start)));
  const durationDays = eventDuration.days();
  const durationHours = eventDuration.hours();
  if (durationDays === 0 && durationHours === 0) {
    return `${eventDuration.format(MINUTE_FORMAT)}${MINUTE}`;
  }
  if (durationDays === 0 && durationHours !== 0) {
    return `${eventDuration.format(HOUR_FORMAT)}${HOUR} ${eventDuration.format(MINUTE_FORMAT)}${MINUTE}`;
  }
  return `${eventDuration.format(DAY_FORMAT)}${DAY} ${eventDuration.format(HOUR_FORMAT)}${HOUR} ${eventDuration.format(MINUTE_FORMAT)}${MINUTE}`;
};


const getDateOptions = (start, end) => {
  const startEvent = dayjs(start);
  const endEvent = dayjs(end);
  const FORMAT_DATA = 'MMM DD';
  const FORMAT_HOUR = 'HH:mm';
  return {
    day: startEvent.format(FORMAT_DATA),
    startHour: startEvent.format(FORMAT_HOUR),
    endHour: endEvent.format(FORMAT_HOUR),
    duration: getEventDuration(startEvent, endEvent),
  };
};

const getFullDataOptions = (start, end) => {
  const startEvent = dayjs(start);
  const endEvent = dayjs(end);
  const DATE_FORMAT = 'DD/MM/YY HH:mm';
  return {
    start: startEvent.format(DATE_FORMAT),
    end: endEvent.format(DATE_FORMAT),
  };
};

export {getRandomElement, getDateOptions, getFullDataOptions};
