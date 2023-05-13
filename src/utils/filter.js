import { FilterType } from './consts';
import { isFuture, isPast, isPresent } from './utils';

const filter = {
  [FilterType.EVERYTHING]: (points) => points,
  [FilterType.FUTURE]: (points) => points.filter((point) => isFuture(point)),
  [FilterType.PRESENT]: (points) => points.filter((point) => isPresent(point)),
  [FilterType.PAST]: (points) => points.filter((point) => isPast(point)),
};

export {filter};
