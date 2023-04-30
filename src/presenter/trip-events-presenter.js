import { render } from '../render';
import TripSortView from '../view/trip-sort-view';
import EventsListView from '../view/events-list-view';
import EventsItemView from '../view/event-item-view';
import EventFormView from '../view/event-form-view';
import PointContentView from '../view/point-content-view';

const AMOUNT_ELEMENTS = 3;
export default class TripEventsPresenter {
  tripPoints = [];
  eventsList = new EventsListView();
  eventsItem = new EventsItemView();

  constructor({container}) {
    this.container = container;
  }

  init() {
    render(new TripSortView(), this.container);
    render(this.eventsList, this.container);
    render(this.eventsItem, this.eventsList.getElement());
    render(new EventFormView(), this.eventsItem.getElement());

    for (let i = 0; i < AMOUNT_ELEMENTS; i++) {
      this.tripPoints[i] = new EventsItemView();
      render(this.tripPoints[i], this.eventsList.getElement());
      render(new PointContentView(), this.tripPoints[i].getElement());
    }
  }
}

