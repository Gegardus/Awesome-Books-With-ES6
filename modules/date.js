import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default class Time {
  show = () => {
    setInterval(() => {
      const dt = luxon.DateTime.now();
      const time = document.querySelector('.time');
      time.innerHTML = `${dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS)}`;
    }, 1);
  };
}
