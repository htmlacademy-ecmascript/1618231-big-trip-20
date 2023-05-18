import { getRandomElement } from '../utils/utils';
import { distinations } from './distinations';
import { getOptionElement } from './options';


const mockPoints = [
  {
    basePrice: 110,
    dateFrom: '2023-07-10T20:55:56.845Z',
    dateTo: '2023-07-11T21:21:13.375Z',
    destination: getRandomElement(distinations),
    isFavorite: true,
    type: 'Taxi',
    offers: getOptionElement('Taxi'),
  },

  {
    basePrice: 1200,
    dateFrom: '2019-03-12T00:55:56.845Z',
    dateTo: '2019-03-12T01:15:56.845Z',
    destination: getRandomElement(distinations),
    isFavorite: true,
    offers: getOptionElement('Bus'),
    type: 'Bus'
  },

  {
    basePrice: 3300,
    dateFrom: '2019-07-15T10:55:56.845Z',
    dateTo: '2019-07-16T11:22:13.375Z',
    destination: getRandomElement(distinations),
    isFavorite: false,
    offers: getOptionElement('Check-in'),
    type: 'Check-in'
  },

  {
    basePrice: 5100,
    dateFrom: '2019-09-22T18:55:56.845Z',
    dateTo: '2019-09-22T20:40:13.375Z',
    destination: getRandomElement(distinations),
    isFavorite: false,
    offers: getOptionElement('Ship'),
    type: 'Ship'
  },

  {
    basePrice: 5500,
    dateFrom: '2019-08-10T15:55:56.845Z',
    dateTo: '2019-08-11T17:22:13.375Z',
    destination: getRandomElement(distinations),
    isFavorite: false,
    offers: getOptionElement('Flight'),
    type: 'Flight'
  },
];

const getRandomPoint = () => getRandomElement(mockPoints);

export {getRandomPoint};
