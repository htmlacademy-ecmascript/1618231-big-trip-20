import AbstractView from '../framework/view/abstract-view';

const createEventsListTemplate = () => '<li class="trip-events__item"></li>';

export default class EventsItemView extends AbstractView {
  get template() {
    return createEventsListTemplate();
  }
}

