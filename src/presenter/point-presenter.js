import { render, replace, remove } from '../framework/render';
import EventsItemView from '../view/event-item-view';
import PointContentView from '../view/point-content-view';
import EventEditFormView from '../view/event-edit-form-view';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class PointPresenter {
  #point = null;
  #listContainer = null;
  #pointContent = null;
  #pointEditForm = null;
  #handleDataChange = null;
  #eventItem = new EventsItemView();
  #handleModeChange = null;
  #mode = Mode.DEFAULT;

  constructor({listContainer, onDataChange, onModeChange}) {
    this.#listContainer = listContainer;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;
    const prevPointContent = this.#pointContent;
    const prevPointEditForm = this.#pointEditForm;

    this.#pointContent = new PointContentView({
      point: this.#point,
      onEditClick: this.#showEditForm,
      onFavoriteClick: this.#changeFavoriteButton,
    });

    this.#pointEditForm = new EventEditFormView({
      point: this.#point,
      onSubmitButton: this.#submitForm,
      onCloseFormButton: this.#closeEditForm,
    });

    if (prevPointContent === null || prevPointEditForm === null) {
      render (this.#eventItem, this.#listContainer);
      render(this.#pointContent, this.#eventItem.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointContent, prevPointContent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#pointEditForm, prevPointEditForm);
    }

    remove(prevPointContent);
    remove(prevPointEditForm);
  }

  destroy() {
    remove(this.#pointContent);
    remove(this.#pointEditForm);
  }

  #onEscKeyDown = (evt) => {
    evt.preventDefault();
    replace(this.#pointContent, this.#pointEditForm);
  };


  #showEditForm = () => {
    this.#replaceCardToForm();
  };

  #submitForm = () => {
    this.#replaceFormToCard();
  };

  #closeEditForm = () => {
    this.#replaceFormToCard();
  };

  #changeFavoriteButton = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormToCard();
    }
  };

  #replaceCardToForm() {
    replace(this.#pointEditForm, this.#pointContent);
    document.addEventListener('keydown', this.#onEscKeyDown);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormToCard() {
    replace(this.#pointContent, this.#pointEditForm);
    document.removeEventListener('keydown', this.#onEscKeyDown);
    this.#mode = Mode.DEFAULT;
  }
}
