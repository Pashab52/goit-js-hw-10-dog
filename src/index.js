import { fetchBreeds, fetchCatByBreed } from './JS/cat-api';

import Notiflix from 'notiflix';

import SlimSelect from 'slim-select';

Notiflix.Notify.init({
  width: '420px',
  position: 'center-top', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'

  rtl: false,
  timeout: 5000,
});

const refs = {
  selectBreed: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader-inv'),
  error: document.querySelector('.error'),
};

fetchBreeds()
  .then(data => {
    createMarkup(data);
  })
  .catch(error => {
    // showError();
    Notiflix.Notify.failure(
      `Oops! Something went wrong! Try reloading the page!`
    );
    console.log('error');
  })
  .finally(() => {
    hideLoader();
    showSelect();
  });

function createMarkup(data) {
  const breedsArray = data
    .map(({ name, id }) => {
      return `<option value="${id}">${name}</option>`;
    })
    .join('');
  refs.selectBreed.insertAdjacentHTML('beforeend', breedsArray);
  new SlimSelect({
    select: '#selectElement',
    settings: {
      placeholderText: 'Select the breed of the dog',
    },
  });
  // refs.selectBreed.innerHTML = breedsArray.join('');
}

refs.selectBreed.addEventListener('change', handleChangeSelect);

function handleChangeSelect(event) {
  if (event.target.value !== '') {
    fetchCatByBreed(event.target.value)
      .then(data => {
        createCatInfoMarkup(data);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          `Oops! Something went wrong! Try reloading the page!`
        );
      })
      .finally(() => {
        hideLoader();
      });
  }
}

function createCatInfoMarkup(data) {
  const catInfoMarkup = `<img src="${data[0].url}" alt="dog photo" height="540" width="540"/>
  <div class="descr-wrap">
  <h1 class="cat-header">${data[0].breeds[0].name}</h1>
  <p class="cat-description"><b>Breed for: </b>${data[0].breeds[0].bred_for}</p>
  <p class="cat-description"><b>Height: </b>${data[0].breeds[0].height.metric} cm</p>
  <p class="cat-description"><b>Weight: </b>${data[0].breeds[0].weight.metric} kg</p>
  <p class="cat-description"><b>Life span: </b>${data[0].breeds[0].life_span}</p>
  <p class="cat-temperament"><b>Temperament: </b>${data[0].breeds[0].temperament}</p></div>`;

  refs.catInfo.innerHTML = catInfoMarkup;
}

function showLoader() {
  refs.loader.classList.add('loader');
  refs.catInfo.classList.add('hidden');

  // hideError();
}

function hideLoader() {
  refs.loader.classList.remove('loader');
  refs.catInfo.classList.remove('hidden');
}

// function showError() {
//   refs.error.classList.remove('error');
// }

// function hideError() {
//   refs.error.classList.add('error');
// }

function showSelect() {
  refs.selectBreed.classList.remove('hidden');
}

export { showLoader };
