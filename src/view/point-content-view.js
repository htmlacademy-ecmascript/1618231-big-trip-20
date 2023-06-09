import AbstractView from '../framework/view/abstract-view';
import { getDateOptions} from '../utils/utils';
import { icons } from '../utils/consts';


const createPointOfferList = (options)=> options.offers.map((item) => `<li class="event__offer">
  <span class="event__offer-title">${item.title}</span>
  &plus;&euro;&nbsp;
  <span class="event__offer-price">${item.price}</span>
</li>`).join('');

const createFavoriteButton = (favorite) =>{
  if (favorite) {
    return 'event__favorite-btn--active';
  } else {
    return '';
  }
};

const createPointContentTemplate = (point) => {
  const {type, destination, dateFrom, dateTo, basePrice, offers, isFavorite, src} = point;
  const {name} = destination;
  const date = getDateOptions(dateFrom, dateTo);
  const optionsList = createPointOfferList(offers);
  const favoriteButton = createFavoriteButton(isFavorite);
  const pathIcon = src ? src.path : '';

  return `<div class="event">
<time class="event__date" datetime="2019-03-18">${date.day}</time>
<div class="event__type">
  <img class="event__type-icon" width="42" height="42" src="${pathIcon}" alt="Event type icon">
</div>
<h3 class="event__title">${type} ${name}</h3>
<div class="event__schedule">
  <p class="event__time">
    <time class="event__start-time">${date.startHour}</time>
    &mdash;
    <time class="event__end-time">${date.endHour}</time>
  </p>
  <p class="event__duration">${date.duration}</p>
</div>
<p class="event__price">
  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
</p>
<h4 class="visually-hidden">Offers:</h4>
<ul class="event__selected-offers">
${optionsList}
</ul>
<button class="event__favorite-btn ${favoriteButton}" type="button">
<span class="visually-hidden">Add to favorite</span>
<svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
  <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
</svg>
</button>
<button class="event__rollup-btn" type="button">
<span class="visually-hidden">Open event</span>
</button>
</div>`;
};

export default class PointContentView extends AbstractView {
  #showEditForm = null;
  #editButton = null;
  #favoriteButton = null;
  #point = null;
  #changeFavoriteButton = null;
  #icons = icons;
  constructor({point, onEditClick, onFavoriteClick}) {
    super();
    this.#point = point;
    this.#icons = icons;
    this.#showEditForm = onEditClick;
    this.#changeFavoriteButton = onFavoriteClick;
    this.#editButton = this.element.querySelector('.event__rollup-btn');
    this.#editButton.addEventListener('click', this.#onEditButtonClick);
    this.#favoriteButton = this.element.querySelector('.event__favorite-btn');
    this.#favoriteButton.addEventListener('click', this.#onFavoriteButtonClick);
  }

  get template() {
    return createPointContentTemplate(this.#point);
  }

  #onEditButtonClick = () => {
    this.#showEditForm();
  };

  #onFavoriteButtonClick = (evt) => {
    evt.preventDefault();
    this.#changeFavoriteButton();
  };
}
