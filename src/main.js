import { getImage } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import { hideLoader } from './js/render-functions';
import { card } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
export const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const preloader = document.querySelector('.loader');
const form = document.querySelector('.search-form');

function showLoader() {
  preloader.classList.remove('is-hidden');
}

form.addEventListener('submit', sendForm);

async function sendForm(event) {
  event.preventDefault();
  showLoader();
  card.innerHTML = '';
  const inputValue = event.target.elements.search.value.trim();

  try {
    if (inputValue !== '') {
      const resolve = await getImage(inputValue);
      renderImages(resolve.hits);
      form.reset();
    } else {
      throw new Error('Please complete the field!');
    }
  } catch (error) {
    console.log(error);
    iziToast.error({
      message: 'Sorry, an error occurred while loading. Please try again!',
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: '#EF4040',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}
