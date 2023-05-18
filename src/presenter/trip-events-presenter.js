import {nanoid} from 'nanoid';
import { render } from '../framework/render';
import TripSortView from '../view/trip-sort-view';
import EventsListView from '../view/events-list-view';
import EventsItemView from '../view/event-item-view';
import PointPresenter from './point-presenter';
import { updatePoint } from '../utils/utils';


export default class TripEventsPresenter {
  #tripPoints = [];
  #pointsList = [];
  #container = null;
  #pointsModel = null;
  #eventsList = new EventsListView();
  #eventsItem = new EventsItemView();
  #pointPresenters = new Map();

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointsList = [...this.#pointsModel.points];
    render(new TripSortView(), this.#container);
    render(this.#eventsList, this.#container);
    // render(this.#eventsItem, this.#eventsList.element);
    // render(new EventAddFormView({card: this.#pointsList[1]}), this.#eventsItem.element);

    for (let i = 0; i < this.#pointsList.length; i++) {
      this.#renderPoint(this.#pointsList[i]);
    }
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({listContainer: this.#eventsList.element,
      onDataChange: this.#changePointContent,
      onModeChange: this.#handleModeChange,});
    pointPresenter.init(point);
    this.#pointPresenters.set(point.id = nanoid(), pointPresenter);
  }

  #clearPointsList() {
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();
  }

  #changePointContent = (changedPoint) => {
    this.#pointsList = updatePoint(this.#pointsList, changedPoint);
    this.#pointPresenters.get(changedPoint.id).init(changedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };
}

