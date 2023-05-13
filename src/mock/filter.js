import { filter } from '../utils/filter';

const generateFilters = (points) => Object.entries(filter).map(([filterType, filterPoints]) => ({
  type: filterType,
  hasPoint: filterPoints(points).length > 0,
}));


export {generateFilters};
