import TripEventsPresenter from './presenter/trip-events-presenter';
import PageHeaderPresenter from './presenter/page-header-presenter';
import PointsModel from './model/points-model';

const pageMain = document.querySelector('.page-main');
const tripEventsSection = pageMain.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const pageHeaderPresenter = new PageHeaderPresenter({container: tripMain});
const tripEventsPresenter = new TripEventsPresenter({container: tripEventsSection, pointsModel});

pageHeaderPresenter.init();
tripEventsPresenter.init();
