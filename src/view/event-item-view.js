import { createElement } from '../render';

const createEventsListTemplate = () => '<li class="trip-events__item"></li>';

export default class EventsItemView {
  getTemplate() {
    return createEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
