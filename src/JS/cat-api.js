import { showLoader } from '../index';

function fetchBreeds() {
  const urlBreeds = 'https://api.thedogapi.com/v1/breeds';
  showLoader();
  return fetch(urlBreeds).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const urlSearchByBreeds = `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`;
  const options = {
    headers: {
      'x-api-key':
        'live_MVpmEu81zWIDqlVeXZ4enIizkGlQpaNNotUQjFB5o2bmG070P0FbsZjFX5JlHJYS',
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
