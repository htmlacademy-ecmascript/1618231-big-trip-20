const AMOUNT_ELEMENTS = 5;

const DateFormat = {
  DAY: 'DD',
  HOUR: 'HH',
  MINUTE: 'mm',
  HOUR_MINUTE: 'HH:mm',
  MONTH_DAY: 'MMM DD',
  FULL_DATE: 'DD/MM/YY HH:mm',
};

const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};

const icons = [
  {
    type: 'taxi',
    path: 'img/icons/taxi.png',
  },
  {
    type: 'bus',
    path: 'img/icons/bus.png',
  },
  {
    type: 'train',
    path: 'img/icons/train.png',
  },
  {
    type: 'ship',
    path: 'img/icons/ship.png',
  },
  {
    type: 'drive',
    path: 'img/icons/drive.png',
  },
  {
    type: 'flight',
    path: 'img/icons/flight.png',
  },
  {
    type: 'check-in',
    path: 'img/icons/check-in.png',
  },
  {
    type: 'sightseeing',
    path: 'img/icons/sightseeing.png',
  },
  {
    type: 'restaurant',
    path: 'img/icons/restaurant.png',
  },
];


export {AMOUNT_ELEMENTS, DateFormat, FilterType, icons};

