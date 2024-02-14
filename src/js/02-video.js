import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

// Zmienna, dzięki której tworzony jest nowy obiekt odtwarzacza video Vimeo
const player = new Vimeo(iframe);

// Funkcja zapisuje aktualny czas odtwarzania wideo do localStorage
const currentTime = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

// .on pozwala nasłuchiwać wystapienia w odtwarzaczu Vimeo określonego zdarzenia.
// Jak odtwarzacz zauważy zdarzenie timeupdate(aktualizacja czasu odtwarzania wideo), to wywołuje funkcję currentTime.
player.on('timeupdate', currentTime);

// Pobiera z localStorage poprzednio zarejestrowany czas odtwarzania wideo.
// Funkcja getItem('videoplayer-current-time') pobiera wartość klucza 'videoplayer-current-time' i zapisuje ją w zmiennej storedTime.
const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  player.setCurrentTime(parseFloat(storedTime));
}
