import AbstractView from '../framework/view/abstract-view';

const getEventAddBtn = () => '<button class="trip-main__event-add-btn  btn  btn--big  btn--yellow" type="button">New event</button>';


export default class EventAddBtnView extends AbstractView {
  get template() {
    return getEventAddBtn();
  }
}
