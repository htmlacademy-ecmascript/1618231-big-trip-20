import TripEventsPresenter from './presenter/trip-events-presenter';
import PageHeaderPresenter from './presenter/page-header-presenter';

const pageMain = document.querySelector('.page-main');
const tripEventsSection = pageMain.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const pageHeaderPresenter = new PageHeaderPresenter({container: tripMain});
const tripEventsPresenter = new TripEventsPresenter({container: tripEventsSection});

pageHeaderPresenter.init();
tripEventsPresenter.init();
