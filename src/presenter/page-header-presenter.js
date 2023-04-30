import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filters-view';
import { render, RenderPosition } from '../render';


export default class PageHeaderPresenter {
  filterContainer = document.querySelector('.trip-controls__filters');
  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new TripInfoView, this.container, RenderPosition.AFTERBEGIN);
    render(new TripFilterView, this.filterContainer);
  }
}
