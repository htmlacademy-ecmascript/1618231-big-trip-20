import AbstractView from '../framework/view/abstract-view';
import { generateFilters } from '../mock/filter';

const createFilterItem = (filters) => {
  const fistElement = filters[0].type;
  return filters.map(({type, hasPoint}) => `<div class="trip-filters__filter">
<input id="filter-${type}"
 class="trip-filters__filter-input  visually-hidden"
  type="radio" name="trip-filter" value="${type}"
  ${!hasPoint ? 'disabled' : ''}
  ${type === fistElement ? 'checked' : ''}>
<label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
</div>`).join('');
};

const createFilterTemplate = (filters) => `<form class="trip-filters" action="#" method="get">
${createFilterItem(filters)}
<button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

export default class TripFilterView extends AbstractView {
  #points = null;
  constructor(points) {
    super();
    this.#points = points;
  }

  get template() {
    return createFilterTemplate(generateFilters(this.#points));
  }
}
