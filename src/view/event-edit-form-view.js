import flatpickr from 'flatpickr';
import dayjs from 'dayjs';
import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { getDateOptions } from '../utils/utils';
import { icons } from '../utils/consts';

import 'flatpickr/dist/flatpickr.min.css';

const createPointOfferList = (options) => options.offers.map((item) => `<div class="event__offer-selector">
<input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked>
<label class="event__offer-label" for="event-offer-luggage-1">
  <span class="event__offer-title">${item.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${item.price}</span>
</label>
</div>`).join('');

const getNamesDestList = (points) => points.map((point) => `<option value="${point.destination.name}"></option>`).join('');

const getEventEditFormView = (point, pointsList) => {
  const {type, destination, dateFrom, dateTo, basePrice, offers, src} = point;
  const {name, description} = destination;
  const dateOptions = getDateOptions(dateFrom, dateTo);
  const optionsList = offers ? createPointOfferList(offers) : [];
  const nameDestList = getNamesDestList(pointsList);
  const pathIcon = src ? src.path : '';

  return `<form class="event event--edit" action="#" method="post">
<header class="event__header">
  <div class="event__type-wrapper">
    <label class="event__type  event__type-btn" for="event-type-toggle-1">
      <span class="visually-hidden">Choose event type</span>
      <img class="event__type-icon" width="17" height="17" src="${pathIcon}" alt="Event type icon">
    </label>
    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

    <div class="event__type-list">
      <fieldset class="event__type-group">
        <legend class="visually-hidden">Event type</legend>

        <div class="event__type-item">
          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>
          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
        </div>

        <div class="event__type-item">
          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
        </div>
      </fieldset>
    </div>
  </div>

  <div class="event__field-group  event__field-group--destination">
    <label class="event__label  event__type-output" for="event-destination-1">
      ${type}
    </label>
    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
    <datalist id="destination-list-1">
      ${nameDestList}
    </datalist>
  </div>

  <div class="event__field-group  event__field-group--time">
    <label class="visually-hidden" for="event-start-time-1">From</label>
    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dateOptions.startDate}">
    &mdash;
    <label class="visually-hidden" for="event-end-time-1">To</label>
    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dateOptions.endDate}">
  </div>

  <div class="event__field-group  event__field-group--price">
    <label class="event__label" for="event-price-1">
      <span class="visually-hidden">Price</span>
      &euro;
    </label>
    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
  </div>

  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
  <button class="event__reset-btn" type="reset">Delete</button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</header>
<section class="event__details">
  <section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

   <div class="event__available-offers">
   ${optionsList}
    </div>
  </section>

  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${description}</p>
  </section>
</section>
</form>`;
};


export default class EventEditFormView extends AbstractStatefulView {
  // #point = null;
  #submitForm = null;
  #editButton = null;
  #closeEditForm = null;
  #eventTypeList = null;
  #pointsList = null;
  #eventInputDestination = null;
  #flatpickrStart = null;
  #flatpickrEnd = null;
  #eventStartTime = null;
  #eventEndTime = null;
  #icons = null;
  // #datepicker = null;

  constructor({point, onSubmitButton, onCloseFormButton, pointsList}) {
    super();
    // this.#point = point;
    this.#pointsList = pointsList;
    this._setState(EventEditFormView.parsePointToState(point));
    this.#submitForm = onSubmitButton;
    this.#closeEditForm = onCloseFormButton;
    this._restoreHandlers();
    this.#icons = icons;
  }

  get template() {
    return getEventEditFormView(this._state, this.#pointsList);
  }


  reset(point) {
    this.updateElement(
      EventEditFormView.parsePointToState(point)
    );
  }

  _restoreHandlers() {
    this.element.addEventListener('submit', this.#onSubmitButtonClick);
    this.#editButton = this.element.querySelector('.event__rollup-btn');
    this.#editButton.addEventListener('click', this.#onEditButtonClick);
    this.#eventTypeList = this.element.querySelector('.event__type-list');
    this.#eventTypeList.addEventListener('click', this.#onEventTypeButtonClick);
    this.#eventInputDestination = this.element.querySelector('.event__input--destination');
    this.#eventInputDestination.addEventListener('input', this.#onInputDestinationChange);
    this.#eventStartTime = this.element.querySelector('[name = "event-start-time"]');
    this.#eventEndTime = this.element.querySelector('[name = "event-end-time"]');
    this.#flatpickrStart = flatpickr(this.#eventStartTime, {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      defaultDate: dayjs(),
      onChange: this.#onEventStartTimeHandler,
    });
    this.#flatpickrEnd = flatpickr(this.#eventEndTime, {
      dateFormat: 'd/m/y H:i',
      enableTime: true,
      defaultDate: dayjs(),
      onChange: this.#onEventEndTimeHandler,
    });

  }

  #onSubmitButtonClick = (evt) => {
    evt.preventDefault();
    this.#submitForm(EventEditFormView.parseStateToPoint(this._state));
  };

  #onEditButtonClick = (evt) => {
    evt.preventDefault();
    this.#closeEditForm();
  };

  #getOffersPoint = (type) => {
    const elemPoint = this.#pointsList.find((point) => point.offers.type === type);
    if (elemPoint) {
      return elemPoint.offers;
    }
  };

  #getIconPoint = (type) => this.#icons.find((elem) => elem.type === type);

  #onInputDestinationChange = (evt) => {
    evt.preventDefault();
    const nameDest = evt.target.value;
    const pointByName = this.#pointsList.find((point) => point.destination.name === nameDest);
    if (pointByName) {
      this.updateElement({
        destination: pointByName.destination,
      });
    }
  };

  #onEventTypeButtonClick = (evt) => {
    evt.preventDefault();
    const typePoint = evt.target.closest('.event__type-item')
      .querySelector('input').value;

    this.updateElement({
      type: typePoint,
    });
    this.updateElement({
      offers: this.#getOffersPoint(typePoint)
    });
    this.updateElement({
      src: this.#getIconPoint(typePoint),
    });
  };

  removeElement() {
    super.removeElement();
    this.#flatpickrStart.destroy();
    this.#flatpickrStart = null;
    this.#flatpickrEnd.destroy();
    this.#flatpickrEnd = null;
  }

  #onEventStartTimeHandler = ([userDate]) => {
    this.#flatpickrStart.close();
    this.updateElement({
      dateFrom: userDate,
    });
  };

  #onEventEndTimeHandler = ([userDate]) => {
    this.#flatpickrEnd.close();
    this.updateElement({
      dateTo: userDate,
    });
  };

  static parsePointToState(point) {
    return {...point,
    };
  }

  static parseStateToPoint(state) {
    return {...state};
  }
}
