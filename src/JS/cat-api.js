import { showLoader } from '../index';

function fetchBreeds() {
  const urlBreeds = 'https://api.thecatapi.com/v1/breeds';
  showLoader();
  return fetch(urlBreeds).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const urlSearchByBreeds = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
  const options = {
    headers: {
      'x-api-key':
        'live_EEbvOb60XL9UgLJJ7bv9kNbMuHwRbvWrsXT5YGAW7rBTMnO7j1Xmegr3LLfBWJjJ',
    },
  };
  showLoader();
  return fetch(urlSearchByBreeds, options).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}

export { fetchBreeds, fetchCatByBreed };
