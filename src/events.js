import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/fontawesome';
import 'modern-normalize/modern-normalize.css';
import { format } from 'date-fns';
// import { uk } from 'date-fns/locale';
import upcomingEvents from './upcoming-events.json';
import eventsTemplate from './templates/events.hbs';
import './sass/modules/events/index.scss';

const eventBoard = document.querySelector('.js-event-board');

eventBoard.innerHTML = eventsTemplate({
  events: upcomingEvents.map(event => ({
    ...event,
    start: format(Date.parse(event.start), 'd MMMM yyyy, HH:mm', {
      // locale: uk,
    }),
  })),
});
