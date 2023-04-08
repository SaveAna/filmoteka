import { refs } from './refs';
import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '90c7ff0c6a89140d8ec65b5296dfcca2';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export async function onGalleryItemClick(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  }
  const id = e.target.dataset.id;
  const response = await axios(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`);
  console.log(response);
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = response.data;
  const posterUrl = poster_path
    ? `${IMG_URL}${poster_path}`
    : DEFAULT_POSTER_URL;
  const movieMarkup = `<div class="modal__card-thumb">
    <img class="modal__image" src="${posterUrl}" alt="film-image" />
  </div>
  <div class="modal__info">
    <h2 class="modal__title">${title}</h2>
      <ul class="modal__list">
        <li>${vote_average} / ${vote_count}</li>
        <li>${popularity}</li>
        <li>${original_title}</li>
        <li>${genres.map(genre => genre.name).join(', ')}</li>
      </ul>
    </div>
  
    <div>
      <h3 class="modal__subtitle">About</h3>
      <p class="modal__text">${overview}</p>
    </div>
    <div class="modal__buttons">
      <button class="modal__btn" type="button">add to Watched</button>
      <button class="modal__btn" type="button">add to queue</button>
    </div>
  </div>`;
  refs.movieModal.innerHTML = movieMarkup;
}
