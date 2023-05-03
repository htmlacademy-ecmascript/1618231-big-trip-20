import { getRandomPoint } from '../mock/points';
import { AMOUNT_ELEMENTS } from '../consts';

export default class PointsModel {
  points = Array.from({length: AMOUNT_ELEMENTS}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}

