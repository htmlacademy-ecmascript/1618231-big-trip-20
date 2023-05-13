import TripInfoView from '../view/trip-info-view';
import TripFilterView from '../view/trip-filters-view';
import EventAddBtnView from '../view/event-add-btn-view';
import { render, RenderPosition } from '../framework/render';


export default class PageHeaderPresenter {
  #container = null;
  #filterContainer = null;
  #pointsModel = null;
  #pointsList = null;
  constructor({container, filterContainer, pointsModel}) {
    this.#container = container;
    this.#filterContainer = filterContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointsList = [...this.#pointsModel.points];

    render(new TripInfoView, this.#container, RenderPosition.AFTERBEGIN);
    render(new TripFilterView(this.#pointsList), this.#filterContainer);
    render(new EventAddBtnView, this.#container);
  }
}
