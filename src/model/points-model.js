import { getRandomPoint } from '../mock/points';
import { AMOUNT_ELEMENTS } from '../utils/consts';

export default class PointsModel {
  #points = Array.from({length: AMOUNT_ELEMENTS}, getRandomPoint);

  get points() {
    return this.#points;
  }
}

