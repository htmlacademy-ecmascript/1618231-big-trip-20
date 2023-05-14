import AbstractView from '../framework/view/abstract-view';


const getListEmptyView = (message) => `<p class="trip-events__msg">${message.EVERTHING}</p>`;


export default class ListEmptyView extends AbstractView {
  constructor(message) {
    super();
    this.message = message;
  }

  get template() {
    return getListEmptyView(this.message);
  }
}
