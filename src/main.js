import TripEventsPresenter from './presenter/trip-events-presenter';
import PageHeaderPresenter from './presenter/page-header-presenter';
import PointsModel from './model/points-model';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const pageMain = document.querySelector('.page-main');
const tripEventsSection = pageMain.querySelector('.trip-events');
const tripMain = document.querySelector('.trip-main');
const pointsModel = new PointsModel();
const pageHeaderPresenter = new PageHeaderPresenter({container: tripMain});
const tripEventsPresenter = new TripEventsPresenter({container: tripEventsSection, pointsModel});

pageHeaderPresenter.init();
tripEventsPresenter.init();

dayjs.extend(duration);

// const aaa = 3600000 * 28.44;

// console.log(dayjs.duration(aaa));
