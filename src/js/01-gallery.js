// Add imports above this line
import { galleryItems } from './gallery-items';
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const gallery = document.querySelector('.gallery');

const listItems = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
            >
            </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', listItems);

// ----------------
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
