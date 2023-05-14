import { render, replace } from '../framework/render';
import TripSortView from '../view/trip-sort-view';
import EventsListView from '../view/events-list-view';
import EventsItemView from '../view/event-item-view';
import PointContentView from '../view/point-content-view';
import EventEditFormView from '../view/event-edit-form-view';


export default class TripEventsPresenter {
  #tripPoints = [];
  #pointsList = [];
  #container = null;
  #pointsModel = null;
  eventsList = new EventsListView();
  eventsItem = new EventsItemView();

  constructor({container, pointsModel}) {
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#pointsList = [...this.#pointsModel.points];

    render(new TripSortView(), this.#container);
    render(this.eventsList, this.#container);
    // render(this.eventsItem, this.eventsList.element);
    // render(new EventAddFormView({card: this.#pointsList[1]}), this.eventsItem.element);

    for (let i = 0; i < this.#pointsList.length; i++) {
      this.#renderPoint(this.#pointsList[i]);
    }
  }

  #renderPoint(point) {
    const tripPoint = new EventsItemView();
    const onEscKeyDown = (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      }
    };

    const pointContent = new PointContentView({
      point,
      showEditForm: () => {
        replacePointToForm();
        document.addEventListener('keydown', onEscKeyDown);
      },
    });

    const pointEditContent = new EventEditFormView({
      point,
      onFormSubmit: () => {
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
      },
      closeEditForm: () => {
        replaceFormToPoint();
      }
    });

    function replacePointToForm() {
      replace(pointEditContent, pointContent);
    }

    function replaceFormToPoint() {
      replace(pointContent, pointEditContent);
    }

    render(tripPoint, this.eventsList.element);
    render(pointContent, tripPoint.element);
  }
}

