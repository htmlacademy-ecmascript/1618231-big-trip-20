import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filters-view';
import EventAddBtnView from '../view/event-add-btn-view';
import { render, RenderPosition } from '../framework/render';


export default class PageHeaderPresenter {
  #filterContainer = document.querySelector('.trip-controls__filters');
  #container = null;
  constructor({container}) {
    this.#container = container;
  }

  init() {
    render(new TripInfoView, this.#container, RenderPosition.AFTERBEGIN);
    render(new TripFilterView, this.#filterContainer);
    render(new EventAddBtnView, this.#container);
  }
}
