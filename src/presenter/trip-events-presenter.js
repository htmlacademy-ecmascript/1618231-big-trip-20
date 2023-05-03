import { render } from '../render';
import TripSortView from '../view/trip-sort-view';
import EventsListView from '../view/events-list-view';
import EventsItemView from '../view/event-item-view';
import EventFormView from '../view/event-form-view';
import PointContentView from '../view/point-content-view';


export default class TripEventsPresenter {
  tripPoints = [];
  eventsList = new EventsListView();
  eventsItem = new EventsItemView();

  constructor({container, pointsModel}) {
    this.container = container;
    this.pointsModel = pointsModel;
  }

  init() {
    this.pointsList = [...this.pointsModel.getPoints()];

    render(new TripSortView(), this.container);
    render(this.eventsList, this.container);
    render(this.eventsItem, this.eventsList.getElement());
    render(new EventFormView({card: this.pointsList[1]}), this.eventsItem.getElement());

    for (let i = 0; i < this.pointsList.length; i++) {
      this.tripPoints[i] = new EventsItemView();
      render(this.tripPoints[i], this.eventsList.getElement());
      render(new PointContentView({point: this.pointsList[i]}), this.tripPoints[i].getElement());
    }
  }
}

