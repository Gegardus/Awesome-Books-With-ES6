import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default class Time {
    show = () => {
        const time = document.querySelector('.time');
        setInterval(() => { 
            time.innerHTML = `${DateTime.now().toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS)}`; 
        }, 1);
    };
  }
  


